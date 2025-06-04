const Usuario = require('../models/usuario.js')

class Cliente extends Usuario {
    constructor(id, nombre, edad, usuarios = []){
        super(id, nombre, edad);
        this.usuarios = usuarios;
    }

    agregarCliente(usuario){
        const existe = this.usuarios.find(U => U.id === usuario.id);
        if(!existe){
            this.usuarios.push(usuario);
            console.log(`El cliente ${usuario.nombre} ha sido agregado`);
            return true;
        } else {
            console.log(`El cliente ${usuario.nombre} ya existe`);
            return false;
        }
    }

    obtenerCliente(id_usuario){
        const existe = this.usuarios.find(U => U.id === id_usuario);
        if(existe){
            console.log(`Datos del cliente: ${existe.nombre}, Edad: ${existe.edad}`);
            return true;
        } else {
            console.log(`El usuario con ID ${id_usuario} no existe`);
            return null;
        }
    }

    obtenerClientes(){

        if(this.usuarios.length > 0){
            this.usuarios.forEach(usuario => {
                console.log(`Nombre: ${usuario.nombre}, Edad: ${usuario.edad}`)
            })
            return
        }
        console.log('No hay clientes registrados');
        return null;
    }

    eliminarCliente(id_usuario){
        const index = this.usuarios.findIndex(U => U.id === id_usuario);
        if(index !== -1){
            const usuarioEliminado = this.usuarios.splice(index, 1);
            console.log(`El cliente ${usuarioEliminado[0].nombre} ha sido eliminado`);
            return true;
        }

        console.log('El cliente no existe');
        return false;
    }
}

module.exports = Cliente;