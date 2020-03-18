import Precio from "./Precio.js";

export default class Producto {
    /**
     * 
     * @param {String} nombre 
     * @param {Precio} precio 
     */
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    getDescripcion = _ => `${this.nombre} ${this.precio.getPrecio()}`;
}