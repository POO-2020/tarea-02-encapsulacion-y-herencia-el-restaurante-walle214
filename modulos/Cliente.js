import Direccion from "./Direccion.js";

export default class Cliente {
    /**
     * 
     * @param {String} nombre 
     * @param {Direccion} direccion 
     * @param {Number} telefono 
     */
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    getPerfil = _ => `${this.nombre}\n${this.direccion.getFormatoCorto()}\n${this.telefono}`;
}