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
        this.calle = calle;
        this.numeroExterior = numeroExterior;
        this.numeroInterior = numeroInterior;
        this.colonia = colonia;
        this.codigoPostal = codigoPostal;
        this.ciudad = ciudad;
        this.municipio = municipio;
    }
    getFormatoCorto = _ => `${this.calle} ${this.numeroExterior}`;
    getFormatoLargo = _ =>
        `${this.calle} ${this.numeroExterior}\nNumero interior: ${this.numeroInterior}\nColonia ${this.colonia}\n${this.ciudad},${this.municipio} ${this.codigoPostal}`;
}