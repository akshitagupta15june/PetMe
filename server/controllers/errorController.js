const AppError = require('./../utils/appError');

const connectSrc = process.env.CSP_CONNECT_SRC;

const handleCastErrorDB = err => {
	const message = `Invalid ${err.path}: ${err.value}.`
	return new AppError(message, 400)
}

const handleDuplicateErrorDB = err => {
	const value = err.errmsg.match(/"([^"]*)"/)[0];
	//console.log(value);
	const message = `Duplicate key value: ${value}, Please use another value`;
	return new AppError(message, 400);
}

const handleValidationError = err => {

	const errors = Object.values(err.errors).map(el => el.message);
	const message = `Invalid Input data. ${errors.join(', ')}`;
	return new AppError(message, 400);
}

const sendErrorDev = (err, req, res) => {
	console.log(err);

	if (req.originalUrl.startsWith('/api')) {
		res.status(err.statusCode).json({
			status: err.status,
			message: err.message,
			error: err,
			stack: err.stack
		});
	}
	else {
		res.status(err.statusCode).render('error', {
			title: '!! Something went wrong !!'
		})
	}
	
}

const sendErrorProd = (err, req, res) => {

	/*
		NOTE ->>
		> OPERATIONAL ERROR: Known/trusted error, can be send to client.
		> NOT OPERATIONAL ERROR: Unknown error, can't leak the details to the user.
	*/
	console.error('ERROR - ', err);

	if (req.originalUrl.startsWith('/api')) {

		// API + Operational ->
		if (err.isOperational){		
			
			return res.status(err.statusCode).json({		
				status: err.status,					
				message: err.message
			});
		} 
		
		// API + Not Operational ->
		return res.status(500).json({
			status: 'EEROR',
			message: 'Something went very wrong'
		});	
	}

	// Website + Operational ->
	//const connectSrc = 'ws://127.0.0.1:59466/';		// <- CSP Protocol

	if (err.isOperational) {
		//console.error(err.message);
		return res
			.status(err.statusCode)
			.set(
				'Content-Security-Policy',
				`connect-src ${connectSrc}`
			)
			.render('error', {
				title: 'Something went very wrong',					
				message: err.message
			});
	}

	// Website + Not Operational ->
	return res
		.status(err.statusCode)
		.set(
			'Content-Security-Policy',
			`connect-src ${connectSrc}`
		)
		.render('error', {
			title: 'SOmething went very wrong',
			message: 'Please try again later'
		});
		
	
	
}

const handleJWTError = () =>
	new AppError('Invalid Token, Please login Again', 401);

const handleJWTExpiredError = () =>
	new AppError('Your token has expired. Please login again', 401);


module.exports = (err, req, res, next) => {  // <- Global Error Handling Middleware

	err.statusCode = err.statusCode || 500;
	err.status = err.status || 'Error';

	if (process.env.NODE_ENV === 'development') {
		sendErrorDev(err, req, res);
	} else if (process.env.NODE_ENV === 'production') {
		// eslint-disable-next-line node/no-unsupported-features/es-syntax
		let error = Object.create(err);
		error.message = err.message;
		// NOTE ->
		// To mark any error as operational, we need to pass it through AppError class
		
		if (error.name === 'CastError') error = handleCastErrorDB(error);
		if (error.code === 11000) error = handleDuplicateErrorDB(error);
		if (error.name === 'ValidationError') error = handleValidationError(error);
		if (error.name === 'JsonWebTokenError') error = handleJWTError(error);
		if (error.name === 'TokenExpiredError') error = handleJWTExpiredError(error);
		//console.error(error);

		sendErrorProd(error, req, res);
	}
	  
}