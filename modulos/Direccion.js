export default class Direccion {
    /**
     * 
     * @param {String} calle 
     * @param {String} numeroExterior 
     * @param {String} numeroInterior 
     * @param {String} colonia 
     * @param {Number} codigoPostal 
     * @param {String} ciudad 
     * @param {String} municipio 
     */
    constructor(calle, numeroExterior, numeroInterior = "No existe", colonia, codigoPostal, ciudad, municipio) {
        this._calle = calle;
        this._numeroExterior = numeroExterior;
        this._numeroInterior = numeroInterior;
        this._colonia = colonia;
        this._codigoPostal = codigoPostal;
        this._ciudad = ciudad;
        this._municipio = municipio;
    }
    getFormatoCorto = _ => `${this._calle} ${this._numeroExterior}`;
    getFormatoLargo = _ =>
        `${
        this._calle
        } ${
        this._numeroExterior
        }\nNumero interior: ${
        this._numeroInterior
        }\nColonia ${
        this._colonia
        }\n${
        this._ciudad
        },${
        this._municipio
        } ${
        this._codigoPostal
        }`;
}