/*
    ===== Código de TypeScript =====
*/


interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    año: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        año: 2015
    }
}


/*
    Desestructuración de objetos  -- with braces{} - llaves {}
*/

// 1ra forma de hacerlo, si busco extraer autor de reproductor.detalles primero desestructuro reproductor y luego detalles --- Mas limpio supuestamente.
const {volumen: vol, segundo, detalles} = reproductor;
const {autor} = detalles


// 2nda forma de hacerlo, todo en una linea pero al tener una variable on otro lugar interferiria con la variable extraida y tendria que renombrar a otra

// const autor = 'Fulano';
// const {volumen, segundo, detalles:{autor: autorDetalle}} = reproductor; //Desestructuración de objetos
//const {autor} = detalles //2nd forma de hacerlo

// console.log('El volumen actual es de: ' + vol); //Desestructurado
// console.log('El segundo actual es de: ' + segundo); //Desestructurado
// console.log('La canción actual es de: ' + reproductor.cancion); //NO Desestructurado
// console.log('El autor es: ' + autor); //Desestructurado autor de detalles desestructurado de reproductor


/*
    Desestructuración de arrays  -- with brackets[] - llaves cuadradas []
*/

const dbz: string[] = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = dbz;

console.log('Personaje 1:', dbz[0]);
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', p3);

