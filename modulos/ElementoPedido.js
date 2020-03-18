import Producto from "./Producto.js";

export default class ElementoPedido {
    /**
     * 
     * @param {Producto} producto 
     * @param {Number} cantidad 
     */
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
    getDescripcion = _ => `${this.cantidad} x ${this.producto.getDescripcion()}`;
}