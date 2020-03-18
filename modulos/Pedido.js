import Fecha from "./Fecha.js";
import Tiempo from "./Tiempo.js";
import Cliente from "./Cliente.js";
import ElementoPedido from "./ElementoPedido.js";
import Precio from "./Precio.js";

export default class Pedido {
    /**
     * 
     * @param {Fecha} fecha 
     * @param {Tiempo} hora 
     * @param {Cliente} cliente 
     */
    constructor({ fecha, hora, cliente }) {
        this._fecha = fecha;
        this._hora = hora;
        this._cliente = cliente;
        this._elementosPedidos = [];
        this._numeroPedido = Date.now();
    }

    esIgual = pedido =>
        this.getResumen() == pedido.getResumen();

    getNumeroElementos = _ => this._elementosPedidos.length;

    getNumeroProductos = _ => {
        let nProductos = 0;
        this._elementosPedidos.forEach(elemento => {
            nProductos += elemento.getCantidad();
        });
        return nProductos;
    }

    getCostoTotal = _ => {
        let costo = 0;
        this._elementosPedidos.forEach(elemento => {
            costo += elemento.getCosto();
        });
        return new Precio(Number(costo)).getPrecio();
    }

    getResumen = _ =>
        `${
        this._fecha.getFecha()
        }  ${
        this._hora.getFormato12()
        }\n-${
        this.getNumeroElementos()
        } elementos con ${
        this.getNumeroProductos()
        } productos-\ntotal: ${
        this.getCostoTotal()
        }`;
    /**
     * @param {ElementoPedido} elementos
     */
    agregarElemento = elemento => this._elementosPedidos.push(elemento);

    listarElementos = _ => this._elementosPedidos.forEach(elemento => console.log(elemento.getDescripcion()));
}