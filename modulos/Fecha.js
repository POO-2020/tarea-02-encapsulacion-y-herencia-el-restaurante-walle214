export default class Fecha {
    /**
     * 
     * @param {Number} dia Dia del mes
     * @param {Number} mes Mes del año, comienza en 0(Enero)
     * @param {Number} annio Año de la fecha
     */
    constructor(dia, mes, annio) {
        this._fecha = new Date(annio, mes, dia);
    }

    _parseMsec = msec => Math.trunc((Date.now() - this._fecha) / msec);

    getAnnios = _ => this._parseMsec(31557600000);

    getMeses = _ => this._parseMsec(2629800000);

    getSemanas = _ => this._parseMsec(604800000);

    getDias = _ => this._parseMsec(86400000);

    getFecha = _ => {
        const meses = ['En', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agto', 'Sept', 'Oct', 'Nov', 'Dic'];
        return `${this._fecha.getDate()}/${meses[this._fecha.getMonth()]}/${this._fecha.getFullYear()}`;
    }
    getDiaFecha = _ => {
        const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        return dias[this._fecha.getDay()];
    }
}