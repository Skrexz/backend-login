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

module.exports = {
    find,
    findOne
};
