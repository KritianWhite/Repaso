const Producto = require('../models/producto');

class Productos extends Producto {
    constructor(id, nombre, descripcion, precio, cantidad, productos = []){
        super(id, nombre, descripcion, precio, cantidad);
        this.productos = productos;
    }

    agregarProducto(producto){
        const existe = this.productos.find(P => P.id === producto.id);
        if(existe){
            console.log('El producto ya existe.')
            return false;
        }

        this.productos.push(producto);
        console.log(`El producto ${producto.nombre} ha sido agregado.`);
        return true;
    }

    obtenerProducto(id_producto){
        const existe = this.productos.find(P => P.id === id_producto);

        if (existe){
            console.log(`Nombre: ${existe.nombre}, Descripcion: ${existe.descripcion}, Precio: ${existe.precio}, Cantidad: ${existe.cantidad}`);
            return true;
        }

        console.log("El producto no existe");
        return null;
    }

    obtenerProductos(){
        if(this.productos.length > 0){
            this.productos.forEach(producto => {
                console.log(`Nombre: ${producto.nombre}, Descripción: ${producto.descripcion}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}`);
            })
            return;
        }
        console.log('No hay productos registrados');
        return null;
    }

    eliminarProducto(id_producto){
        const index = this.productos.findIndex(P => P.id === id_producto);
        if(index !== -1){
            const productoEliminado = this.productos.splice(index, 1);
            console.log(`El producto ${productoEliminado[0].nombre} ha sido eliminado.`);
            return true;
        }

        console.log("El producto no existe");
        return null;
    }

    restarCantidad(id_producto, cantidad){
        const producto = this.productos.find(P => P.id === id_producto);
        if(!producto){
            console.log("El producto no existe");
            return false;
        }

        if(producto.cantidad > cantidad){
            producto.cantidad -= cantidad;
            console.log(`Se ha restado ${cantidad} del producto ${producto.nombre}. Cantidad restante: ${producto.cantidad}`);
            return true;
        }

        console.log("No se puede restar más cantidad de la que existe en el inventario.");
        return null;
    }

    comprarProducto(id_producto, cantidad){
        const producto = this.productos.find(P => P.id === id_producto);
        if(!producto){
            console.log("El producto no existe");
            return false;
        }

        this.restarCantidad(id_producto, cantidad);

        const total = producto.precio * cantidad;
        console.log(`Total a pagar por ${cantidad} unidades de ${producto.nombre}: Q${total}`);
        return total;
    }

}

module.exports = Productos;