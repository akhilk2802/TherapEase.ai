const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { User, validate } = require('../models/user');
const uuidv4 = require('uuid').v4;

router.get('/me', async (req, res) => {
    const user = await User
        .findById(req.user._id);
    
    res.send(user);
});

router.post('/login', async (req, res) => {
    const user = await User.findOne({ 
        phoneNumber: req.body.phoneNumber,
        password: req.body.password
    });
    
    if (!user) return res.status(400).send('User Not registered.');

    const sid = uuidv4();
    user.sessionId = sid;
    await user.save();
    res.cookie('sid', sid);
    res.send(_.pick(user, ['_id']));
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ phoneNumber: req.body.phoneNumber });
    if (user) return res.status(400).send('User already registered.');

    user = new User(_.pick(req.body, ['name', 'email', 'phoneNumber', 'password', 'type']));  
    
    await user.save();

    res.send(_.pick(user, ['_id', 'name', 'mobileNumber']));
});

exports.user = router;