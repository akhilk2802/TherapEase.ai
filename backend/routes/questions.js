const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { Question, validate } = require('../models/question');
const { Patient } = require('../models/patient');
// const session = require('../middleware/session');

router.get('/', async (req, res) => {
    const questions = await Question.find();
    
    if (questions.length === 0) 
        return res.status(404).send('No questions found!!');
    res.send(questions);
});

router.get('/:id', async (req, res) => {

    const questions = await Question.find({ 'patient._id': req.params.id });

    if (questions.length === 0) return res.status(404).send('The question for given user not found.');
    res.send(_.map(questions, obj => _.pick(obj, ['question', 'answer', 'responseTime'])));
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const patient = await Patient.findById(req.body.patientId);
    if (!patient) return res.status(404).send('Invalid patient.');
    
    let question = new Question({
        patient,
        ...req.body
    });
    question = await question.save();

    res.send(question);
});

router.put('/:id', async (req, res) => {
    const { error } = validateQuestion(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const question = await Question
        .findByIdAndUpdate(req.params.id, req.body, {new: true});
    
    if (!question) return res.status(404).send('The question with given id not found.');
    res.send(question);
});

router.delete('/:id', async (req, res) => {
    const question = await Question.
        findByIdAndRemove(req.params.id);
    
    if (!question) return res.status(404).send('The question with given id not found.');
    res.send(question);
});

module.exports = router;

