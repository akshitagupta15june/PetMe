const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'User must have a First Name'],
        },
        lastName: {
            type: String,
            required: [true, 'User must have a last Name'],
        },
        email:{
            type: String,
            required: [true, 'Email required'],
        },
        phoneNumber:{
            type: String,
        },
        password: {
            type: mongoose.Schema.Types.Mixed,
          },
        profileImage: {
            type: String,
        },

    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("user", userSchema);
module.exports = User;