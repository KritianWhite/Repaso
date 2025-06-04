const usuarios = [];

let nextId = 1;

async function getUsuarios(){
    return usuarios;
}

async function agregarUsuario(datos){
    const usuario = {
        id: nextId++,
        nombre: datos.nombre || 'Sin nombre', 
        email: datos.email || 'defecto@correo.com',
    }

    usuarios.push(usuario);
    return usuario;
}

async function buscarUsuario(id_usuario){
    return usuarios.find(U => U.id === parseInt(id_usuario));
}

module.exports = {
    getUsuarios,
    agregarUsuario,
    buscarUsuario,
}