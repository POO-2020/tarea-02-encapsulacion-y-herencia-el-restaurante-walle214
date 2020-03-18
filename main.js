import Precio from "./modulos/Precio.js"
import Tiempo from "./modulos/Tiempo.js"
import Fecha from './modulos/Fecha.js'
import Cliente from './modulos/Cliente.js'
import ClienteFrecuente from './modulos/ClienteFrecuente.js'
import Direccion from './modulos/Direccion.js'
import Producto from './modulos/Producto.js'
import ElementoPedido from './modulos/ElementoPedido.js'
import Pedido from './modulos/Pedido.js'
import Restaurante from './modulos/Restaurante.js'

const precio1 = new Precio(51.15);
const precio2 = new Precio(54.84);
const precio3 = new Precio(546868.54);

const tiempo1 = new Tiempo(8, 16, 'AM');
const tiempo2 = new Tiempo(5, 51, 'pm');
const tiempo3 = new Tiempo(4, 16, 'pm');

const fecha1 = new Fecha(24, 2, 2020);
const fecha2 = new Fecha(29, 1, 2020);
const fecha3 = new Fecha(4, 3, 2020);

const direccion = new Direccion('Belisario Dominguez', '30', '', 'Obrera', 28510, 'Queseria', 'Cuahutemoc');

const cliente1 = new Cliente('Ulises Ramirez', direccion, 3123398831);
const cliente2 = new ClienteFrecuente({
    nombre: 'Ulises Ramirez',
    direccion,
    telefono: 3123398831,
    fechaRegistro: fecha1
});

const producto1 = new Producto('Chilaquiles', precio1);
const producto2 = new Producto('Chilaquiles verdes', precio2);
const producto3 = new Producto('Quesadillas', precio3);

const elementoPedido1 = new ElementoPedido(producto1, 5);
const elementoPedido2 = new ElementoPedido(producto2, 5);
const elementoPedido3 = new ElementoPedido(producto3, 5);


const pedido1 = new Pedido({ fecha: fecha1, hora: tiempo1, cliente: cliente1 });
const pedido2 = new Pedido({ fecha: fecha2, hora: tiempo2, cliente: cliente1 });
const pedido3 = new Pedido({ fecha: fecha3, hora: tiempo3, cliente: cliente2 });

const restaurante = new Restaurante({
    nombre: 'Huevos en frio',
    telefono: 3123398831,
    direccion
});


const probarPrecio = _ => console.log(precio1.getPrecio(), precio3.getPrecio());
// probarPrecio();
const probarTiempo = _ => console.log(tiempo2.getFormato12(), tiempo2.getFormato24());
// probarTiempo();
