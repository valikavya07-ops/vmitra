const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    appUserId: {
        type: String,
        required: true,
        unique: true,
        default: () => `user_${Date.now()}`
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        age: Number,
        gender: { type: String, enum: ['Male', 'Female', 'Other'] },
        phoneNumber: String
    },
    voterId: {
        type: String,
        unique: true
    },
    languageSupport: {
        type: String,
        enum: ['Hindi', 'English', 'Bengali', 'Telugu', 'Marathi', 'Tamil', 'Urdu', 'Gujarati', 'Malayalam', 'Kannada'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;