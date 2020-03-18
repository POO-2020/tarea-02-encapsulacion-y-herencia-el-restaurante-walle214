import Producto from "./Producto.js";

export default class ElementoPedido {
    /**
     * 
     * @param {Producto} producto 
     * @param {Number} cantidad 
     */
    constructor(producto, cantidad) {
        this._producto = producto;
        this._cantidad = cantidad;
    }
    getDescripcion = _ => `${this._cantidad} x ${this._producto.getDescripcion()}`;
}