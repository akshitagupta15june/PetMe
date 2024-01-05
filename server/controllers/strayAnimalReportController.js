const animalReport = require('../Models/strayAnimalReportModel')
const catchAsync = require('../utils/catchAsync')
var geoip = require('geoip-lite');
const AppError = require('../utils/appError')

const multer = require('multer')


const multarStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/Images/RportedAnimals')
    },
    filename(req, file, cb) {
        const ext = file.mimetype.split('/')[1];

        const result = Math.random().toString(36).substring(2, 7);
        cb(null, `${result}.${ext}`)
    }
})

const multerFilter = (req, file, cb) => {
    if (file.mimetype.split('/')[0] === 'image') {
        cb(null, true)
    } else {
        cb(new AppError('not an image', 400), false)
    }
}

const upload = multer({ storage: multarStorage, fileFilter: multerFilter })
exports.imageUpload = upload.single('image')

exports.addReportAnimal = catchAsync(async (req, res, next) => {

    let ip = req.socket.remoteAddress
    var geo = geoip.lookup('27.54.172.64');
    var fetchedLongitude = geo.ll[0]
    var fetchedLatitude = geo.ll[1]
    const newAnimalReport = await animalReport.create({

        animal: req.body.animal,
        location: { longitude: fetchedLongitude, latitude: fetchedLatitude },
        image:req.file.filename,
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