import Direccion from "./Direccion.js";

export default class Cliente {
    /**
     * 
     * @param {String} nombre 
     * @param {Direccion} direccion 
     * @param {Number} telefono 
     */
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    getPerfil = _ => `${this._nombre}\n${this._direccion.getFormatoCorto()}\n${this._telefono}`;
}