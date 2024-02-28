const Joi = require('joi');
const mongoose = require('mongoose');

const { patientSchema } = require('./patient');

const questionSchema = new mongoose.Schema({
    patient: {
        type: patientSchema,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    responseTime: {
        type: Number
    }
});

const Question = mongoose.model('question', questionSchema);

function validateQuestion(question){
    const schema = Joi.object({
        patientId: Joi.objectId().required(),
        question: Joi.string().min(2).max(5000).required(),
        answer: Joi.string().min(2).max(5000).required(),
        responseTime: Joi.number()
    });

    return schema.validate(question);
}

exports.questionSchema = questionSchema;
exports.Question = Question;
exports.validate = validateQuestion;