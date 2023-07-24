const { response } = require('express')
const { conecction } = require('../common/conecction');


const find = (req, res = response ) => {

    conecction.query("select * from users",
    [],
    function(error, results, fields){
        (error)
        ? res.json(error)
        : res.json(results)
    });  
};

const findOne = (req, res = response ) => {

    conecction.query("select * from users where id_user = ?",
    [req.params.id],
     function(error, results, fields){
        (error)
        ? res.json(error)
        : res.json(results)
     });
};

const create = (req, res = response ) => {

    conecction.query(`insert into users (user,
        password,
        email) values (?, ?, ?)`,
        [req.body.user, req.body.password, req.body.email],
        function(error, results, fields){
            (error)
            ? res.json(error)
            : res.json(results)
        });
};

const update = (req, res = response ) => {
    
    conecction.query("update users set user = ?, password = ?, email = ? where id_user = ?",
    [req.body.user, req.body.password, req.body.email, req.params.id],
    function(error, results, fields){
        (error)
        ? res.json(error)
        : res.json(results)
    });
};

const remove = (req, res = response ) => {
    
    conecction.query("delete from users where id_user = ?",
    [req.params.id],
    function(error, results, fields){
        (error)
        ? res.json(error)
        : res.json(results)
    });
};

module.exports = {
    find,
    findOne,
    create,
    update,
    remove
};
