const mysql = require('mysql')

const conecction = mysql.createConnection({

    host: 'localhost',
    user : 'root',
    password : '',
    database : 'identification'
});

conecction.connect();

module.exports = {
    conecction
}