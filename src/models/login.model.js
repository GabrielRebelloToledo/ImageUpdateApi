'use strict';

var dbConn = require('./../../config/db.config');
const md5 = require('md5');

//Criando o objeto Employee

var Login = function(login) {
    this.id = login.id
    this.usuario = login.usuario;
    this.senha = login.senha;
    this.perfil = login.perfil;
};



Login.loginUser = function(newEmp, result) {

    var senhaCript = md5(newEmp.senha)

    //console.log(senhaCript)

    dbConn.query("SELECT * FROM usuarios WHERE usuario=? AND senha=?", [newEmp.usuario, senhaCript], function(err, res) {

        //console.log(res);

        if (res.length > 0) {
            if (err) {
                //console.log("error: ", err);
                result(err, null);
            } else {
                //console.log(newEmp);
                result(null, res);
            }
        }


    });




    /* dbConn.query("SELECT * FROM usuarios ", function(err, res) {
        var usuarios = res;
        var novaArrayUsers = []
        var novaArraySenha = []

        for (var i = 0; i < res.length; i++) {
            novaArrayUsers.push(usuarios[i]['usuario']);
            novaArraySenha.push(usuarios[i]['senha']);

            if (novaArrayUsers[i] === newEmp.usuario && novaArraySenha[i] === newEmp.senha) {
                console.log('True')
                result(null, res);
            } else {
                console.log('False')
            }

        }
        console.log(novaArrayUsers)
        console.log(novaArraySenha)
    }); */
};

Login.create = function(newEmp, result) {
    var senhaCript = md5(newEmp.senha)
    dbConn.query("SELECT * FROM usuarios where usuario=?", newEmp.usuario, function(err, res) {

        //console.log(res);

        if (res.length > 0) {
            //console.log('Usuário Existente')


        } else if (res.length <= 0) {

            /* console.log('Vazioooo') */

            dbConn.query("INSERT INTO usuarios SET usuario=?, senha=?, perfil=?", [newEmp.usuario, senhaCript, newEmp.perfil], function(err, res) {
                if (err) {
                    //console.log("error: ", err);
                    result(err, null);
                } else {
                    //console.log(newEmp);
                    result(null, res.insertId);
                }
            });
        }

    });


};

module.exports = Login;