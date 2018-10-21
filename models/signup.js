'use strict'
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    // indexes//
    name: String,
    email: String,
    password: String,
    conformpassword: String

})

const User = mongoose.model('User', userSchema);
module.exports = User;