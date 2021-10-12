function sumar(a: number, b: number): number{
    return a + b;
}

const sumarFlecha = (a: number,b: number): number => {
    return a + b
}

function multiplicar(numero: number, otroNumero?: number, base: number=2): number{
    return numero * base;
}


interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarPv: () => void;
}

function curar( personaje: PersonajeLOR, curarX: number ):void {

    personaje.pv += curarX;

}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'WOLVERINE',
    pv: 50,
    mostrarPv() {
        console.log( 'Puntos de vida:', this.pv);
    }
}

curar( nuevoPersonaje, 100);
nuevoPersonaje.mostrarPv();


//const resultado = multiplicar(40, 0, 10);
//console.log(resultado);