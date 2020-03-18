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
    getDescripcion = _ => `${this._nombre} ${this._precio.getPrecio()}`;
}