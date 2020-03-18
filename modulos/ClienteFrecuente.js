import Cliente from "./Cliente";

export default class ClienteFrecuente extends Cliente {
    constructor({ nombre, direccion, telefono, fechaRegistro }) {
        super(nombre, direccion, telefono);
        this._fechaRegistro = fechaRegistro;
        this._numeroCliente = Date.now();
    }
    getPerfil = _ => `${
        this._numeroCliente
        }, ${
        this._fechaRegistro.getFecha()
        }, ${
        this._nombre
        }, ${
        this._direccion.getFormatoCorto()
        }, ${
        this._telefono
        }`;
}