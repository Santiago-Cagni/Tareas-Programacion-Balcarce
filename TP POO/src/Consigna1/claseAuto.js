"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
class Auto {
    constructor(motorEncendido, color, tipoDeImpulsor, marca) {
        this.motorEncendido = motorEncendido;
        this.color = color;
        this.tipoDeImpulsor = tipoDeImpulsor;
        this.marca = marca;
    }
    acelerar() {
        if (this.motorEncendido) {
            console.log(`Este auto ${this.marca} está acelerando ¡va a 100 km/h!`);
        }
        else {
            console.log((`Este auto ${this.marca} no acelera ¡esta apagado!`));
        }
    }
}
exports.Auto = Auto;
class AutoCarrera extends Auto {
    acelerar() {
        if (this.motorEncendido) {
            console.log(`Este auto ${this.marca} está acelerando ¡va a 200 km/h!`);
        }
        else {
            console.log((`Este auto ${this.marca} no acelera ¡esta apagado!`));
        }
        ;
    }
}
class AutoCamioneta extends Auto {
    constructor(motorEncendido, color, tipoDeImpulsor, marca, traccionIntegral) {
        super(motorEncendido, color, tipoDeImpulsor, marca);
        this.traccionIntegral = traccionIntegral;
    }
    acelerar() {
        console.log(`Este auto ${this.marca} está acelerando ¡va a 80 km/h!`);
    }
    info() {
        console.log(this.traccionIntegral);
    }
}
// let autoRapido = new AutoCarrera(true, "rojo", "nafta", "ferrari")
// let autoApagado = new AutoCarrera(false, "naranja", "nafta", "McLaren" )
// autoRapido.acelerar();
// autoApagado.acelerar();
// let camioneta = new AutoCamioneta(true, "verde militar", "gasoil", "Jeep", true)
// camioneta.info()
// let autoPrueba = new Auto (true, "rojo", "electrico", "tito")
// console.log(autoPrueba);
