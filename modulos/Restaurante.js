import Direccion from "./Direccion.js";

export default class Restaurante {
    /**
     * 
     * @param {String} nombre 
     * @param {Number} telefono 
     * @param {Direccion} direccion 
     */
    constructor(nombre, telefono, direccion) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.productos = [];
        this.pedidos = [];
    }
    registrarProducto = producto => this.productos.push(producto);

    listarProductos = _ => this.productos.forEach(producto => console.log('Producto: ',producto.getDescripcion()));

    registrarPedido = pedido => this.pedidos.push(pedido);

    listarPedidos = _ => this.pedidos.forEach(pedido => console.log('Pedido: ',pedido.getResumen()));
}