const Productos = require('./controllers/productos');

const inventario = new Productos();

const producto1 = new Productos(1, "Laptop Gaming", "Laptop para gaming de alta gama", 1200, 10);
const producto2 = new Productos(2, "Mouse Inalámbrico", "Mouse ergonómico inalámbrico", 25, 50);
const producto3 = new Productos(3, "Teclado Mecánico", "Teclado mecánico RGB", 85, 15);
const producto4 = new Productos(4, "Monitor 4K", "Monitor 27 pulgadas 4K", 350, 8);
const producto5 = new Productos(5, "Webcam HD", "Cámara web HD 1080p", 45, 3);

inventario.agregarProducto(producto1);
inventario.agregarProducto(producto2);
inventario.agregarProducto(producto3);
inventario.agregarProducto(producto4);
inventario.agregarProducto(producto5);

inventario.obtenerProductos();

inventario.obtenerProducto(3);

inventario.comprarProducto(1, 2);
inventario.comprarProducto(2, 10);
inventario.comprarProducto(5, 2);

inventario.comprarProducto(5, 5); 