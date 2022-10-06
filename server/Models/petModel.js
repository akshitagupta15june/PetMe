const mongoose = require('mongoose');

const petSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Pet must have a name. Please provide a name'],
            trim: true,
        },
        breed: {
            type: String,
            default: 'unknown',
            trim: true,
        },
        image: {
            type: String,
            default: 'default.jpg',
        },
        joinedAt: {
            type: Date,
            default: Date.now(),
        },
        species: {
            type: String,
            required: [
                true,
                'Pet must be of a known species. Please provide a species',
            ],
            trim: true,
        },
        gender: {
            type: String,
            required: [
                true,
                'Pet must be of a known gender. Please provide a gender',
            ],
            trim: true,
        },
        color: {
            type: String,
            required: [
                true,
                'Pet must be of a known color. Please provide a color',
            ],
            trim: true,
        },
        location: {
            type: String,
            required: [
                true,
                'Pet must be from a known location. Please provide a location',
            ],
            trim: true,
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
