export class Persona{
    nombre: string;
    edad: number;
    sexo: string;
    constructor(nombre: string, edad: number, sexo: string){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    saludar(): void {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y te saludo`);
    }
    moverse(): void{
        console.log(`${this.nombre} se está moviendo`);
    }
}

// let persona1 = new Persona("Santiago", 28, "masculino");
// persona1.saludar();
// persona1.moverse();
// console.log(persona1.nombre);