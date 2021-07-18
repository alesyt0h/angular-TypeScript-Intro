/*
    ===== Código de TypeScript =====
*/

function sumar (a: number,b: number) {
    return (a + b).toString();
}

const sumarFlecha = (a: number,b: number): number => {
    return a + b;
}

function multiplicar( numero: number, base: number, otroNumero?: number ): number {
    return numero * base;
}
function multiplicar2( numero: number, otroNumero?: number, base: number = 2 ): number {
    return numero * base;
}


// const resultadoSuma = sumar(3,4);
// console.log(resultadoSuma)

// const resultadoMulti = multiplicar(10,20)
// console.log(resultadoMulti) //returns 200

// const resultadoMulti2 = multiplicar2(5,10)
// console.log(resultadoMulti2) //returns 10


interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR,curarX): void {
    personaje.pv += curarX;
    //console.log(personaje)
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log(this.pv)
    }
}

curar( nuevoPersonaje, 20 );

nuevoPersonaje.mostrarHp();