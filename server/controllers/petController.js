const Pet = require('../Models/petModel');
const AppError = require('./../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.addPet = catchAsync(async (req, res, next) => {
	const pet = await Pet.create({
        name: req.body.name,
        image: req.body.image || null,
        breed: req.body.breed,
        color: req.body.color,
        location: req.body.location,
        species: req.body.species,
        gender: req.body.gender,
	});
	
	res.status(201).json({
		message: "success",
		data: {
			pet
		}
	})
});
exports.getAllPets = catchAsync(async (req, res, next) => {
	const pets = await Pet.find();

    res.status(200).json({
        message: 'success',
        data: {
            pets,
        },
    });
});
exports.getPet = catchAsync(async (req, res, next) => {
    
	const pet = await Pet.findById(req.params.id);

    res.status(200).json({
        message: 'success',
        data: {
            pet,
        },
    });
});
exports.deletePet = catchAsync(async (req, res, next) => {
    const pet = await Pet.findByIdAndDelete(req.params.id);

    res.status(200).json({
        message: 'success',
    });
});