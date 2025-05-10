"use strict";
class Calculadora {
    constructor(numero1, numero2) {
        this.num1 = numero1;
        this.num2 = numero2;
    }
    sumar() {
        const resultadoSuma = this.num1 + this.num2;
        console.log(resultadoSuma);
        return resultadoSuma;
    }
    restar() {
        const resultadoResta = this.num1 - this.num2;
        console.log(resultadoResta);
        return resultadoResta;
    }
    multiplicar() {
        if (this.num1 && this.num2 >= 0) {
            const resultado = this.num1 * this.num2;
            console.log(`El producto de ${this.num1} y ${this.num2} es ${resultado}`);
            return resultado;
        }
        else {
            console.log(`Introduzca numeros mayores a 0`);
            return 0;
        }
    }
    dividir() {
        if (this.num1 >= 0 && this.num2 >= 0) {
            const resultado = this.num1 / this.num2;
            console.log(`El cociente de de ${this.num1} y ${this.num2} es ${resultado.toFixed(2)}`);
            return resultado;
        }
        else {
            console.log(`Introduzca numeros mayores a 0`);
            return 0;
        }
    }
}
let calculadora1 = new Calculadora(4, 6);
calculadora1.sumar();
calculadora1.restar();
calculadora1.dividir();
calculadora1.multiplicar();
