import { Auto } from '../Consigna1/claseAuto';

class AutoPatentado extends Auto {
    public patente: string;
    constructor(motorEncendido: boolean, color: string, tipoDeImpulsor: string, marca: string, patente: string) {
        super(motorEncendido, color, tipoDeImpulsor, marca)
        this.motorEncendido = motorEncendido;
        this.color = color;
        this.tipoDeImpulsor = tipoDeImpulsor;
        this.marca = marca;
        this.patente = patente;
    }
}

class RegistroAutomotor {

    private autosRegistrados: AutoPatentado[] = [];

    agregarAuto(auto: AutoPatentado): void {
        this.autosRegistrados.push(auto);
        console.log(`Auto con patente ${auto.patente} agregado al registro.`);
    }

    verAutos(){
        console.log(this.autosRegistrados)
    }

    buscarAuto(patente: string): Auto | undefined {
        const auto = this.autosRegistrados.find(autos => {
           return autos.patente === patente;
        });
        if (auto) {
            console.log(`Auto encontrado: ${auto.marca} ${auto.color}`);
        } else {
            console.log(`Auto con patente ${patente} no encontrado.`);
        }
        return auto;
    }

    eliminarAuto(patente: string): void {
        const cantidadAutosRegistro = this.autosRegistrados.length;
        this.autosRegistrados = this.autosRegistrados.filter(autos=> {
             return autos.patente !== patente;
        });
        if (this.autosRegistrados.length < cantidadAutosRegistro) {
            console.log(`Auto con patente ${patente} eliminado.`);
            console.log(`No se encontró el auto con patente ${patente} para eliminar.`);
        }
    }

    actualizarAuto(patente: string, nuevosDatos: Partial<Auto>): void {//Partial convierte todos los campos de la clase en opcionales 
        const auto = this.buscarAuto(patente);
        if (auto) {
            Object.assign(auto, nuevosDatos);//Object.assign copia todas las propiedades enumerables de uno o más objetos fuente a un objeto destino (lo llamo con {} en la funcion)
            console.log(`Auto con patente ${patente} actualizado.`);
        }
    }
}

const registro = new RegistroAutomotor();

const autoRegistrado = new AutoPatentado(true, "verde", "electrico", "Tesla", "ABC243");
const auto1 = new AutoPatentado(true, 'Rojo', 'Nafta', 'Toyota', 'ABC123');
const auto2 = new AutoPatentado(false, 'Azul', 'Eléctrico', 'Tesla', 'XYZ789');

registro.verAutos();
registro.agregarAuto(auto1);
// registro.agregarAuto(auto2);
// registro.agregarAuto(autoRegistrado);
registro.verAutos();
registro.buscarAuto('ABC123');
registro.actualizarAuto('ABC123', { color: 'Negro' });
registro.verAutos();


// registro.eliminarAuto('XYZ789');

