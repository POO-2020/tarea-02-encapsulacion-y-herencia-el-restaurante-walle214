export default class Precio {
    /**
     * 
     * @param {Number} valor 
     */
    constructor(valor) {
        this.valor = valor;
    }
    getPrecio = _ => {
        const valorString = this.valor.toString();
        const enteros = valorString.split('.')[0].split('');
        const enterosFormateados = enteros.length <= 3 ? enteros.join('') : enteros.reverse().map((e, i) => (i + 1) % 3 == 0 && i != enteros.length - 1 ? `,${e}` : e).reverse().join('');
        const intermedio = (valorString.split('.')[1] || '').split('');
        const decimales = `${intermedio[0] || 0}${intermedio[1] || 0}`;
        return `$${enterosFormateados}.${decimales}`;
    }
}