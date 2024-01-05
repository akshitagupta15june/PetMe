const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    latitude: String,
    longitude: String
})

const animalSchema = new mongoose.Schema({
    animal: {
        type: String,
        required: [true, 'must select animal'],
    }, image: {
        type: String,
        default: 'example.jpg'
    }, location: {
        type: locationSchema
    },
    address:{
        type:String
    }
    , landmark: {
        type: String
    },
    pincode: {
        type: String
    },
    animalConditionDiscription:{
        type:String
    }
    ,
    reportedDate: {
        type: Date,
        default: Date.now()
    },
    rescueStatus:{
        type:String,
        default:'reported'
    }
}
    ,
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
)

const animalReport = mongoose.model('animalReport',animalSchema)

module.exports = animalReport;