'use strict';

const mysql = require('mysql');

//conexão com o banco de dados mySql

const dbConn = mysql.createConnection({
 host: 'localhost',

    user: 'root',

    password: '',

    database: 'teste' 

    
});

dbConn.connect(function(err) {
    if (err) throw err;

    console.log("Banco de dados conectado!!")
});

module.exports = dbConn;