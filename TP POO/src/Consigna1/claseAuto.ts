export class Auto {
    motorEncendido: boolean;
    color: string;
    tipoDeImpulsor: string;
    marca: string;
    constructor(motorEncendido: boolean, color: string, tipoDeImpulsor: string, marca: string) {
        this.motorEncendido = motorEncendido;
        this.color = color;
        this.tipoDeImpulsor = tipoDeImpulsor;
        this.marca = marca;
    }
    acelerar(): void {
        if (this.motorEncendido) {
            console.log(`Este auto ${this.marca} está acelerando ¡va a 100 km/h!`);
        } else {
            console.log((`Este auto ${this.marca} no acelera ¡esta apagado!`))
        }
    }
}

class AutoCarrera extends Auto {
    acelerar(): void {
        if (this.motorEncendido) {
            console.log(`Este auto ${this.marca} está acelerando ¡va a 200 km/h!`);
        } else {
            console.log((`Este auto ${this.marca} no acelera ¡esta apagado!`))
        };
    }
}

class AutoCamioneta extends Auto {
    traccionIntegral: boolean
    constructor(motorEncendido: boolean, color: string, tipoDeImpulsor: string, marca: string, traccionIntegral: boolean){
        super(motorEncendido, color, tipoDeImpulsor, marca)
        this.traccionIntegral=traccionIntegral
    }
    acelerar(): void {
        console.log(`Este auto ${this.marca} está acelerando ¡va a 80 km/h!`);
    }
    info(): void{
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



