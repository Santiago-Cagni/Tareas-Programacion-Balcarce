export class Dado {
    private valorDado : number;
    public constructor(){
        this.valorDado = Math.floor(Math.random() * 6) + 1;
    }
    public tirarDado():number{
        this.valorDado =  Math.floor(Math.random() * 6) + 1;
        return this.valorDado;
    }
    public valorDadoActual(){
        console.log(this.valorDado)
    }
}

// let dadoPrueba = new Dado;
// dadoPrueba.valorDadoActual()
// dadoPrueba.tirarDado()
// dadoPrueba.valorDadoActual()

