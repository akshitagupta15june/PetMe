const Pet = require('../Models/petModel');
const AppError = require('./../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Donation = require('../Models/donationModel');

exports.addDonation = catchAsync(async (req, res, next) => {
	const pet = await Pet.create({
        name: req.body.petName,
        image: req.body.image || null,
        breed: req.body.breed,
        color: req.body.color,
        location: req.body.location,
        species: req.body.species,
        gender: req.body.gender,
	});
	
	const donation = await Donation.create({
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
		address: req.body.address,
		city: req.body.city,
		state: req.body.state,
		country: req.body.country,
		pet: pet.id
	});

	res.status(201).json({
        message: 'success',
        data: {
			pet,
			donation
        },
    });
})
exports.getAllDonations = catchAsync(async (req, res, next) => {
	const donations = await Donation.find().populate({
		path: 'pet'
	});

    res.status(200).json({
        message: 'success',
        data: {
            donations,
        },
    });
});
exports.getDonation = catchAsync(async (req, res, next) => {
    const donation = await Donation.findById(req.params.id).populate({
        path: 'pet',
    });

    res.status(200).json({
        message: 'success',
        data: {
            donation,
        },
    });
});
exports.deleteDonation = catchAsync(async (req, res, next) => {
    const donation = await Donation.findByIdAndDelete(req.params.id);

    res.status(200).json({
        message: 'success',
    });
});