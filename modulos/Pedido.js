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
    constructor(fecha, hora, cliente) {
        this.fecha = fecha;
        this.hora = hora;
        this.cliente = cliente;
        this.elementosPedidos = [];
    }
    getNumeroElementos = _ => this.elementosPedidos.length;

    getProductos = _ => {
        let nProductos = 0;
        this.elementosPedidos.forEach(elemento => {
            nProductos+=elemento.cantidad;
        });
        return nProductos;
    }

    getCostoTotal = _ => {
        let costo = 0;
        this.elementosPedidos.forEach(elemento => {
            costo += elemento.cantidad * elemento.producto.precio.valor;
        });
        return new Precio(costo).getPrecio();
    }

    getResumen = _ =>
        `${this.fecha.getFecha()}  ${this.hora.getFormato12()}\n-${this.getNumeroElementos()} elementos con ${this.getProductos()} productos-\ntotal: ${this.getCostoTotal()}`;
    /**
     * @param {ElementoPedido} elementos
     */
    agregarElemento = elemento => this.elementosPedidos.push(elemento);

    listarElementos = _ => this.elementosPedidos.forEach(elemento => console.log(elemento.getDescripcion(), '\n'));
}