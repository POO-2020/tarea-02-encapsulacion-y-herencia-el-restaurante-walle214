export default class Tiempo {
    /**
     * 
     * @param {Number} hora 
     * @param {Number} minutos 
     * @param {String} periodo AM/PM
     */
    constructor(hora, minutos, periodo = 'AM') {
        this.hora = hora;
        this.minutos = minutos;
        this.periodo = periodo.toUpperCase();
    }
    getFormato12 = _ => `${this.hora}:${this.minutos} ${this.periodo}`;
    getFormato24 = _ => `${this.hora += this.periodo === 'AM' ? 0 : 12}:${this.minutos}`;
}