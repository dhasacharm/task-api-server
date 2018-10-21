'use strict';
//importing the modules or packages//
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
app.use(cors());
const PORT = 3000;
const jwt = require('jsonwebtoken');

//importing local modules//
const loginRoutes = require('./routes/login');
const signupRoutes = require('./routes/signup');
const userRoutes = require('./routes/users')
const server = require('./database');

//parsing the data with middleware//
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//routes are assinging//
app.use(signupRoutes)
app.use(loginRoutes)
app.use('', userRoutes)

//server listening here//
app.listen(PORT, () => {
    console.log(`Server Started At port ${PORT}`)
})
