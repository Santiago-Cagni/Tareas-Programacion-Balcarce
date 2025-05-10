// Clase base Animal
class Animal {
    private tipoAnimal: string;
    private cerebro: boolean;
    private ojos: number;
    private pelos: boolean;
    private seMueve: boolean;

    constructor(tipo: string, seMueve: boolean, tieneOjos: number, tienePelo: boolean, tieneCerebro: boolean) {
        this.seMueve = seMueve;
        this.tipoAnimal = tipo;
        this.ojos = tieneOjos;
        this.pelos = tienePelo;
        this.cerebro = tieneCerebro;
    }

    protected latirCorazon(): void {
        console.log('Su corazón late');
    }

    public Cerebro(): void {
        if (this.seMueve || this.cerebro) {
            console.log('Tiene cerebro y funciona bien');
        } else {
            console.log('No tiene cerebro o no funciona bien');
        }
    }

    public Ojos(): void {
        if (this.ojos > 0) {
            console.log('Tiene ojos');
        }
    }
}

// Clase hija Perro
class Perro extends Animal {
    private nombre: string;
    private raza: string;

    constructor(
        tipo: string,
        seMueve: boolean,
        tieneOjos: number,
        tienePelo: boolean,
        tieneCerebro: boolean,
        nombre: string,
        raza: string
    ) {
        super(tipo, seMueve, tieneOjos, tienePelo, tieneCerebro);
        this.nombre = nombre;
        this.raza = raza;
    }

    public ladrar(): void {
        console.log('¡Guau guau!');
    }

    public override Ojos(): void {
        console.log('El perro tiene dos ojos');
    }

    public mostrarInfo(): void {
        console.log(`Perro llamado ${this.nombre}, de raza ${this.raza}`);
    }
}

// Clase hija Pez
class Pez extends Animal {
    private color: string;

    constructor(
        tipo: string,
        seMueve: boolean,
        tieneOjos: number,
        tienePelo: boolean,
        tieneCerebro: boolean,
        color: string
    ) {
        super(tipo, seMueve, tieneOjos, tienePelo, tieneCerebro);
        this.color = color;
    }

    public nadar(): void {
        console.log('El pez nada tranquilo...');
    }

    public override Ojos(): void {
        console.log('El pez tiene ojos adaptados al agua');
    }

    public mostrarInfo(): void {
        console.log(`Pez de color: ${this.color}`);
    }
}

// Pruebas
const perro = new Perro('Mamífero', true, 2, true, true, 'Peloton', 'Mestizo');
const pez = new Pez('Acuático', true, 2, false, true, 'Naranja');

console.log('\n--- INFO DEL PERRO ---');
perro.ladrar();
perro.Ojos();       // método redefinido
perro.Cerebro();    // método heredado
perro.mostrarInfo();

console.log('\n--- INFO DEL PEZ ---');
pez.nadar();
pez.Ojos();         // método redefinido
pez.Cerebro();      // método heredado
pez.mostrarInfo();
