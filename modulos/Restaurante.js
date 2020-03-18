import Direccion from "./Direccion.js";

export default class Restaurante {
    /**
     * 
     * @param {String} nombre 
     * @param {Number} telefono 
     * @param {Direccion} direccion 
     */
    constructor({ nombre, telefono, direccion }) {
        this._nombre = nombre;
        this._telefono = telefono;
        this._direccion = direccion;
        this._productos = [];
        this._pedidos = [];
    }
    buscarProducto = producto => this._productos.findIndex(p => producto.esIgual(p));

    registrarProducto = producto => {
        if (this.buscarProducto(producto) < 0) {
            this._productos.push(producto);
            return true;
        }
        return false
    }

    listarProductos = _ => this._productos.forEach(producto => console.log('Producto: ', producto.getDescripcion()));



    buscarPedido = pedido => this._pedidos.findIndex(p => p.esIgual(pedido));

    registrarPedido = pedido => {
        if (this.buscarPedido(pedido) < 0) {
            this._pedidos.push(pedido);
            return true;
        }
        return false;
    }
    eliminarPedido = pedido => {
        const index = this.buscarPedido(pedido);
        if (!(index < 0)) {
            this._pedidos.splice(index, 1);
            return true;
        }
        return false;
    }
    modificarPedido = (pedidoViejo, pedidoNuevo) => {
        const index = this.buscarPedido(pedidoViejo);
        if (!(index < 0)) {
            this._pedidos.splice(index, 1, pedidoNuevo);
            return true;
        }
        return false;
    }

    listarPedidos = _ => this._pedidos.forEach(pedido => console.log('Pedido: ', pedido.getResumen()));
}