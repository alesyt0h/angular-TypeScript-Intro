/*
    ===== Código de TypeScript =====
*/


let habilidades: string[] = ['bash','Counter','Healing'];
habilidades.push('true')

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[]
    puebloNatal?: string;
}

const personaje: Personaje = { 
    nombre: 'Strider',
    hp: 100,
    habilidades: ['bash','Counter','Healing']
}

personaje.puebloNatal = 'Pueblo Paleta'

console.table(personaje)