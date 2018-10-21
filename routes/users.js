'use strict'

const express = require('express');
const router = express.Router();
const User = require('../models/signup');

router.post('/usermenu', (req, res) => {
    const data = req.body;
    const user = new User(data);
    user.save()
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((error) => {
            res.status(400).json(error)

        })
})

router.get('/usermenu', (req, res) => {
    User.find()
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(error => {
            res.status(400).json(error)
        })
})

router.get('/usermenu/:id', (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(error => {
            res.status(400).json(error)
        })
})

router.put('/usermenu/:id', (req, res) => {
    const id = req.params.id;
    User.findOneAndUpdate({ '_id': id }, { new: true })
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(400).json(error)
        })

})

router.delete('/usermenu/:id', (req, res) => {
    const id = req.params.id;
    console.log('hii')
    User.findOneAndRemove({ '_id': id })
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(400).json(error)
        })
})

module.exports = router