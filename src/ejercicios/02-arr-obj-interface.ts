
let habilidades: (boolean | string | number)[] = ['Bash', 'Counter', 'Healing', 100];

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}


const personaje: Personaje = {
    nombre: 'STRIDER',
    hp:100,
    habilidades: ['Bash', 'Counter', 'Healing']
};

personaje.puebloNatal = 'El Callao';

console.table(personaje);