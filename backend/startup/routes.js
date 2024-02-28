const express = require('express');
const { user } = require('../routes/users');
const patient = require('../routes/patients');

module.exports = function (app) {
    app.use(express.json());
    app.use(express.static('public'));

    app.use('/api/users', user);
    app.use('/api/patients', patient);
}