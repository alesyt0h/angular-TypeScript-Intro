/*
    ===== Código de TypeScript =====
*/

// class Heroe {
//     alterEgo: String;
//     edad: number;
//     nombreReal: number;

//     imprimirNombre() {
//         return this.alterEgo + ' ' + this.nombreReal;
//     }
// }

// interface Personaje2 {    -- diferencia entre clase e interface, las interfaces solo sirven para declarar los tipos de valores que contienen o que van a devolver 
//                           -- La clase puede almacenar funciones y hacer muchas mas cosas
//     alterEgo?: String;
//     edad?: number;
//     nombreReal?: number;

//     imprimirNombre: () => string;
// }

// const ironman = new Heroe();
// const spiderman: Personaje2 = {}


// console.log(ironman);

// class TediousClassHeroe {  //Not the way of defining class because of tedious and bored task to define and declare each properties
//     edad: number;
//     alterEgo: String;
//     nombreReal: number;

//     constructor( alterEgo: string, edad: number) {
//         this.alterEgo = alterEgo;
//         this.edad = edad;
//     }
// }
//
//
// class Heroe {       //This is the Good way of doing it
//     constructor( 
//         public alterEgo: string,
//         public edad: number,
//         public nombreReal: string
//     ) {}
// }

/*
    Extend class
*/

class PersonaNormal {
    
    constructor ( 
        public nombre: string, 
        public direccion: string
    ) {}
        
}


class Heroe extends PersonaNormal {

    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super( nombreReal, 'New York, USA');
    }

}

const ironman = new Heroe('Ironman',45, 'Tony');

console.log(ironman);