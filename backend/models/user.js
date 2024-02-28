const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    email: {
        type: String,
        required: false,
        minlength: 5,
        maxlength: 255
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    type: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    isAdmin: Boolean,
    sessionId: mongoose.Schema.Types.UUID
});

const User = mongoose.model('user', userSchema);

function validateUser(user){
    const schema = Joi.object({
        name: Joi.string().min(2).max(50).required(),
        email: Joi.string().min(5).max(255).email(),
        phoneNumber: Joi.number().required(),
        type: Joi.string().valid('Admin', 'Patient', 'Therapist', 'Group'),
        password: Joi.string().min(8).max(50).required()
    });

    return schema.validate(user);
}

exports.userSchema = userSchema;
exports.User = User;
exports.validate = validateUser;