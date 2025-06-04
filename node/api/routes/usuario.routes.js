const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuario.controller');

router.get('/', usuarioController.getUsuarios);
router.post('/agregar', usuarioController.agregarUsuario);
router.get('/:id_usuario', usuarioController.buscarUsuario);

module.exports = router;