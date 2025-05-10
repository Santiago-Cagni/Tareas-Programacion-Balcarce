"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dado = void 0;
class Dado {
    constructor() {
        this.valorDado = Math.floor(Math.random() * 6) + 1;
    }
    tirarDado() {
        this.valorDado = Math.floor(Math.random() * 6) + 1;
        return this.valorDado;
    }
    valorDadoActual() {
        console.log(this.valorDado);
    }
}
exports.Dado = Dado;
// let dadoPrueba = new Dado;
// dadoPrueba.valorDadoActual()
// dadoPrueba.tirarDado()
// dadoPrueba.valorDadoActual()
