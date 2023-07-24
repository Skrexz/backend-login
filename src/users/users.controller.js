const express = require('express')
const users = express.Router();
const { findOne, find, create, update, remove } = require('./users.service');

users.use(function timeLog(req, res, next){

    next();
})

users
     .get('/', find)
     .get('/:id', findOne)
     .post('/', create)
     .put('/:id', update)
     .delete('/:id', remove);




module.exports = {
    users
};
