export default class Tiempo {
    /**
     * 
     * @param {Number} hora 
     * @param {Number} minutos 
     * @param {String} periodo AM/PM
     */
    constructor(hora, minutos, periodo = 'AM') {
        this._hora = hora;
        this._minutos = minutos;
        this._periodo = periodo.toUpperCase();
    }
    getFormato12 = _ => `${this._hora}:${this._minutos} ${this._periodo}`;
    getFormato24 = _ => `${this._hora += this._periodo === 'AM' ? 0 : 12}:${this._minutos}`;
}