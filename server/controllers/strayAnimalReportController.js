const animalReport = require('../Models/strayAnimalReportModel')
const catchAsync = require('../utils/catchAsync')
var geoip = require('geoip-lite');

exports.addReportAnimal = catchAsync(async (req, res, next) => {

    let ip = req.socket.remoteAddress 
    var geo = geoip.lookup('27.54.172.64');
    var fetchedLongitude = geo.ll[0]
    var fetchedLatitude = geo.ll[1]
    const newAnimalReport = await animalReport.create({

        animal: req.body.animal,
        location: {longitude:fetchedLongitude,latitude:fetchedLatitude},
        address: req.body.address,
        landmark: req.body.landmark,
        pincode: req.body.pincode,
        animalConditionDiscription: req.body.animalConditionDiscription,
        reportedDate: req.body.reportedDate,
        rescueStatus: req.body.rescueStatus

    })
    res.status(201).send({
        message: "succccess",
        data: {
            newAnimalReport
        }
    })


})

exports.getAllReports = catchAsync(async (req, res, next) => {
    const AllAnimalReports = await animalReport.find();

    res.status(200).json({
        message: 'success',
        data: {
            AllAnimalReports,
        },
    });
});
exports.getAnimalReportById = catchAsync(async (req, res, next) => {

    const SingleAnimalReport = await animalReport.findById(req.params.id);

    res.status(200).json({
        message: 'success',
        data: {
            SingleAnimalReport,
        },
    });
});
exports.deleteAnimalReport = catchAsync(async (req, res, next) => {
    await AnimalReport.findByIdAndDelete(req.params.id);

    res.status(200).json({
        message: 'success',
    });
});