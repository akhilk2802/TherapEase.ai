const Joi = require('joi');
const mongoose = require('mongoose');

const therapistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    specialization: {
        type: String,
        required: true,
        min: 5,
        max: 255
    },
});

const Therapist = mongoose.model('therapist', therapistSchema);

function validateTherapist(therapist){
    const schema = Joi.object({
        name: Joi.string().min(2).max(50).required(),
        phoneNumber: Joi.number().required(),
        specialization: Joi.string().min(5).max(255).required(),
    });

    return schema.validate(therapist);
}

exports.therapistSchema = therapistSchema;
exports.Therapist = Therapist;
exports.validate = validateTherapist;