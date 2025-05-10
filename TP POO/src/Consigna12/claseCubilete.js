"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const claseDado_1 = require("../Consigna7/claseDado");
class Cubilete {
    constructor() {
        this.dados = [];
        for (let i = 0; i < 5; i++) {
            this.dados.push(new claseDado_1.Dado());
        }
    }
    ;
    tirarCubilete() {
        this.dados.forEach(dado => {
            dado.tirarDado();
        });
    }
    mostrarValores() {
        this.dados.forEach(dado => {
            dado.valorDadoActual();
        });
    }
}
const cubilete = new Cubilete();
cubilete.mostrarValores();
cubilete.tirarCubilete();
cubilete.mostrarValores();
