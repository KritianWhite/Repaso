const Cliente = require('./controllers/cliente.js');

const clienteTemp = new Cliente(2, "Ana", 25);

clienteTemp.agregarCliente(clienteTemp);
clienteTemp.agregarCliente(clienteTemp);

clienteTemp.obtenerCliente(2);
clienteTemp.obtenerClientes();

clienteTemp.eliminarCliente(2);

clienteTemp.obtenerCliente(2);