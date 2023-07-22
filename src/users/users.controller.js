const express = require('express')
const users = express.Router();
const { findOne, find } = require('./users.service');

users.use(function timeLog(req, res, next){

    next();
})

users
     .get('/', find)
     .get('/:id', findOne)




module.exports = {
    users
};
