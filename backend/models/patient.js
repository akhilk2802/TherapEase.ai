const Joi = require('joi');
const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
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
        maxlength: 255,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 5,
        max: 120
    },
    gender: {
        type: String,
        required: true,
        min: 4,
        max: 6
    },
    maritalStatus: {
        type: String,
        required: true,
        min: 5,
        max: 255
    },
    profession: {
        type: String,
        required: true,
        min: 5,
        max: 255
    },
    weight: {
        type: Number,
        required: true,
        min: 5,
        max: 500
    },
    height: {
        type: Number,
        required: true,
        min: 5,
        max: 100
    },
    summary: {
        type: String,
        required: false,
        minlength: 5,
        maxlength: 5000
    },
});

const Patient = mongoose.model('patient', patientSchema);

function validatePatient(patient){
    const schema = Joi.object({
        name: Joi.string().min(2).max(50).required(),
        email: Joi.string().min(5).max(255).email(),
        phoneNumber: Joi.number().required(),
        age: Joi.number().min(5).max(120).required(),
        gender: Joi.string().min(4).max(6).valid('Male', 'Female', 'Other').required(),
        maritalStatus: Joi.string().min(5).max(255).required(),
        profession: Joi.string().min(5).max(255).required(),
        weight: Joi.number().min(5).max(500).required(),
        height: Joi.number().min(5).max(100).required(),
        summary: Joi.string().min(5).max(5000),
    });

    return schema.validate(patient);
}

exports.patientSchema = patientSchema;
exports.Patient = Patient;
exports.validate = validatePatient;