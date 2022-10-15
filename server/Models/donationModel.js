const mongoose = require('mongoose');
const validator = require('validator');

const donationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Pet must have a name. Please provide a name'],
            trim: true,
        },
        email: {
            type: String,
            required: true,
            validate: [validator.isEmail, 'Please enter a valid Email'],
            trim: true,
        },
        address: {
            type: String,
            required: true,
            trim: true,
        },
        city: {
            type: String,
            required: true,
            trim: true,
        },
        state: {
            type: String,
            required: true,
            trim: true,
        },
        country: {
            type: String,
            required: true,
            trim: true,
        },
        phone: {
            type: Number,
            required: true,
            trim: true,
        },
        date: {
            type: Date,
            default: Date.now(),
		},
		pet: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Pet',
			required: true
		}
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
