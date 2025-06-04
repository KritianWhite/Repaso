const usuarioService = require('../services/usuario.service');

async function getUsuarios(req, res){

    try {
        const usuarios = await usuarioService.getUsuarios();
        return res.json(usuarios);
    }catch(e){
        console.log(e);
        return res.status(500).json({res : 'Error al obtener los usuarios'})
    }
}

async function agregarUsuario(req, res){
    const datos = req.body;

    try{
        const nuevoUsuario = await usuarioService.agregarUsuario(datos);
        return res.status(201).json(nuevoUsuario);
    }catch(e){
        console.log(e);
        return res.status(500).json({res : 'Error al agregar el usuario'})
    }
}

async function buscarUsuario(req, res){
    const id_usuario = parseInt(req.params.id_usuario);
    try{
        const usuario = await usuarioService.buscarUsuario(id_usuario);
        if(!usuario){
            return res.status(404).json({res: 'Usuario no encontrado'});
        }
        return res.json(usuario);
    }catch(e){
        console.log(e);
        return res.status(500).json({res: 'Error al buscar el usuario'})
    }

}

module.exports = {
    getUsuarios,
    agregarUsuario,
    buscarUsuario
}