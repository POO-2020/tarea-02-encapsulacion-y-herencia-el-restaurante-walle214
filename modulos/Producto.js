import Precio from "./Precio.js";

export default class Producto {
    /**
     * 
     * @param {String} nombre 
     * @param {Precio} precio 
     */
    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
    }
    getValor = _ => this._precio.getValor();
    getDescripcion = _ => `${this._nombre} ${this._precio.getPrecio()}`;
    esIgual = producto => this.getDescripcion() == producto.getDescripcion();
}