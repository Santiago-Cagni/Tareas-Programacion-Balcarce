"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y te saludo`);
    }
    moverse() {
        console.log(`${this.nombre} se está moviendo`);
    }
}
exports.Persona = Persona;
// let persona1 = new Persona("Santiago", 28, "masculino");
// persona1.saludar();
// persona1.moverse();
// console.log(persona1.nombre);
