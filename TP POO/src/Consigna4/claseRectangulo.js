"use strict";
class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return this.base * this.altura;
    }
    calcularPerimetro() {
        return 2 * (this.base + this.altura);
    }
}
let rectanguloPrueba = new Rectangulo(2, 6);
rectanguloPrueba.calcularArea();
rectanguloPrueba.calcularPerimetro();
console.log(rectanguloPrueba);
