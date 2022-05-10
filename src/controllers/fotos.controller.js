'use strict';

const Foto = require('../models/fotos.model');
const fs = require ('fs');

exports.findAll = function(req, res) {
    Foto.findAll(function(err, employee) {
        /* console.log('controller aqui') */
        if (err)
            res.send(err);
        /* console.log('res', employee); */
        res.send(employee);
    });
};
exports.SumAllInd = function(req, res) {
    Foto.SumAllInd(function(err, employee) {
        //console.log('controller')
        if (err)
            res.send(err);
        //console.log('res', employee);
        res.send(employee);
    });
};
exports.findByIdAll = function(req, res) {
    Foto.findByIdAll(req.params.id, function(err, employee) {
        //console.log(req.params.id)
        if (err)
            res.send(err);
        res.json(employee);
    });
};

exports.SumAllInd = function(req, res) {
    Foto.SumAllInd(function(err, employee) {
        //console.log('controller')
        if (err)
            res.send(err);
        //console.log('res', employee);
        res.send(employee);
    });
};
exports.create = function(req, res) {
    const new_receita = new Foto(req.body);
    var date = new Date();
    var time_stamp = date.getTime();
    /* console.log(time_stamp) */
    var url_image = time_stamp +'_'+ req.files.arquivo.originalFilename;


    var path_origim = req.files.arquivo.path
    var path_destino = './src/uploads/' + url_image

    fs.rename(path_origim, path_destino, function(err){
        if(err){
            res.send(err);
        }
    })

    var dados = {
        url_imagem: url_image,
        titulo: req.body.titulo
    }

    /* console.log(path_origim)
 */
     //handles null error
    if (req.body.constructor === Object && Object.keys(dados).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Foto.create(dados, function(err, dados) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Receita added successfully!", data: dados });
        });
    } 
};



exports.findById = function(req, res) {
    Foto.findById(req.params.id, function(err, employee) {
        //console.log(req.params.id)
        if (err)
            res.send(err);
        res.json(employee);
    });
};
exports.update = function(req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Receita.update(req.params.id, new Receita(req.body), function(err, employee) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Employee successfully updated' });
        });
    }
};

exports.delete = function(req, res) {
    Receita.delete(req.params.id, function(err, employee) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Employee successfully deleted' });
    });
};