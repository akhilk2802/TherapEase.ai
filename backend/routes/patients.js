const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { Patient, validate } = require('../models/patient');
const { User } = require('../models/user');
const session = require('../middleware/session');

router.get('/', session, async (req, res) => {
    const patients = await Patient.find().sort('title');
    
    if (patients.length === 0) 
        return res.status(404).send('No patients found!!');
    res.send(patients);
});

router.get('/:id', session, async (req, res) => {
    const patient = await Patient.findById(req.params.id);

    if (!patient) return res.status(404).send('The patient with given id not found.');
    res.send(patient);
});

router.post('/', async (req, res) => {

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let patient = await Patient.findOne({ phoneNumber: req.body.phoneNumber });
    if (patient) return res.status(400).send('Patient already registered.');

    patient = new Patient({...req.body});
    
    patient = await patient.save();
    res.send(_.pick(patient, ['_id', 'name']));
});

router.put('/:id', session, async (req, res) => {
    const { error } = validatePatient(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const patient = await Patient
        .findByIdAndUpdate(req.params.id, req.body, {new: true});
    
    if (!patient) return res.status(404).send('The patient with given id not found.');
    res.send(patient);
});

router.delete('/:id', session, async (req, res) => {
    const patient = await Patient.
        findByIdAndRemove(req.params.id);
    
    if (!patient) return res.status(404).send('The patient with given id not found.');
    res.send(patient);
});

module.exports = router;

