interface Motor {
    tipo: string;
}

interface Ruedas {
    cantidad: number;
}

interface Sidecar {
    tieneSidecar: boolean;
}

class Moto {
    protected marca: string;
    private motor: Motor;
    private ruedas: Ruedas;

    constructor(marca: string, motor: Motor, ruedas: Ruedas) {
        this.marca = marca;
        this.motor = motor;
        this.ruedas = ruedas;
    }

    public describir(): void {
        console.log(`Moto marca ${this.marca} con motor ${this.motor.tipo} y ${this.ruedas.cantidad} ruedas`);
    }
}

class MotoSimple extends Moto {
    constructor(marca: string, motor: Motor, ruedas: Ruedas) {
        super(marca, motor, ruedas);
        this.validarMoto(ruedas);
    }
    private validarMoto(ruedas: Ruedas): void {
        if (ruedas.cantidad > 2) {
            throw new Error('Una moto simple no puede tener más de 2 ruedas');
        }
    }
}

class MotoSidecar extends MotoSimple{
    private sidecar: Sidecar;
    constructor(marca: string, motor: Motor, ruedas: Ruedas, sidecar: Sidecar){
        super(marca, motor, ruedas);
        this.sidecar = sidecar;
    } 
    }

class Triciclo extends Moto {
    private canasto: boolean;

    constructor(marca: string, motor: Motor, ruedas: Ruedas, canasto: boolean) {
        super(marca, motor, ruedas);
        this.canasto = canasto;
    }
    describir(): void {
        super.describir();
        console.log('Tiene canasto')
    }
}


// const motorTriciclo: Motor = { tipo: '3 cilindros' };
// const ruedasTriciclo: Ruedas = { cantidad: 3 };

// const miTriciclo = new Triciclo('Yamaha', motorTriciclo, ruedasTriciclo, true);
// miTriciclo.describir();

// const motoChica = new MotoSimple('Honda', { tipo: 'monocilíndrico' }, { cantidad: 2 });
// motoChica.describir();

// const motoConSidecar = new MotoSidecar("Motomel", {tipo: "monoCilindro"}, {cantidad: 2}, {tieneSidecar: true});
// motoConSidecar.describir()

// const errorMoto = new MotoSimple('Rara', { tipo: '4T' }, { cantidad: 4 });
