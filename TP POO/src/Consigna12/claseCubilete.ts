import { Dado } from '../Consigna7/claseDado'

class Cubilete {
    private dados: Dado[];
    public constructor() {
        this.dados = [];
        for (let i = 0; i < 5; i++) {
            this.dados.push(new Dado());
        }
    };

    public tirarCubilete(): void {
        this.dados.forEach(dado => {
            dado.tirarDado()
        });
    }

    public mostrarValores(): void {
        this.dados.forEach(dado => {
            dado.valorDadoActual()
        });
    }
}

const cubilete = new Cubilete();


cubilete.mostrarValores();
cubilete.tirarCubilete();
cubilete.mostrarValores();

