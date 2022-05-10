const express = require('express');

const router = express.Router();

const loginController = require('../controllers/login.controller');


//lê os dados
router.post('/', loginController.login);

//cria o usuario
router.post('/create', loginController.create);



module.exports = router;