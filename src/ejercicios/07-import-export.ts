import { Producto, calculaISV } from "./06-destructuracion-funcion";


const carritoCompras: Producto[] = [
    {
        desc: 'TELEFONO 1',
        precio: 100
    },
    {
        desc: 'TELEFONO 2',
        precio: 150
    }    
];

const [total, isv] = calculaISV( carritoCompras );

console.log('TOTAL:', total);
console.log('ISV:', isv);
