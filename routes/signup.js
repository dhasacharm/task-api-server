'use strict'

const express = require('express');
const router = express.Router();
// importing module for password hashing//
const bcrypt = require('bcryptjs');

const User = require('../models/signup');

router.post('/signup', (req, res) => {
    let data = req.body;
    let email = data.email;
    const saltRound = 10;
    let bcyptPassword = data.password;

    User.findOne({ email })
        .then((doc) => {
            if (!doc) {
                return bcrypt.hash(bcyptPassword, saltRound);
            }
            throw new Error('same username');

        })
        .then((hash) => {
            data.password = hash;
            const user = new User(data);
            return user.save()
        })
        .then((userData) => {
            res.status(200).json(userData)
        })
        .catch(error => {

            res.status(400).json({ error: error.message })
        })

})

module.exports = router;