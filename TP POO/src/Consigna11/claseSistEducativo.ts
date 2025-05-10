import { Persona } from '../Consigna2/clasePersona';

class Alumno extends Persona {
    private nota: number;

    constructor(nombre: string, edad: number, sexo: string, nota: number) {
        super(nombre, edad, sexo);
        this.nota = nota;
    }

    public aprobado(): boolean {
        if(this.nota >= 7){
            console.log(`Felicidades ${this.nombre} estas aprobado`);
            return true;
        }else{
            console.log(`Aún no estas aprobado, esfuerzate mas!`);
            return false;
        }
    }

    public notaNumero(): number {
        return this.nota;
    }

    public nombreAlumno(): string{
        return this.nombre;
    }
}


class Profesor extends Persona{
        private curso: Alumno[] = [];

        public agregarAlumno(alumno: Alumno): void {
            this.curso.push(alumno);
        }

        public listDeAlumnos(): Alumno[] {
            return this.curso;
        }

        public nombreProfesor(): string{
            return this.nombre;
        }
    }

class SistEducativo{
        private alumnos: Alumno[] = [];
        private profesores: Profesor[] = [];

        public inscribirAlumno(alumno: Alumno): void {
            this.alumnos.push(alumno);
        }

        public contratarProfesor(profesor: Profesor): void {
            this.profesores.push(profesor);
        }

        public expulsarAlumno(nombre: string): void {
            this.alumnos = this.alumnos.filter(alumnos => {
                return alumnos.nombreAlumno() !== nombre
            })
            };

        public despedirProfesor(nombre: string): void {
            this.profesores = this.profesores.filter(profesor => {
               return profesor.nombreProfesor() !== nombre});
        }

        public ListaAlumnos(): Alumno[] {
            return this.alumnos;
        }

        public ListaProfesores(): Profesor[] {
            return this.profesores;
        }
    }

// const escuela = new SistEducativo();

// const profe = new Profesor("Lucía", 40, "mujer");
// const alumno1 = new Alumno("Carlos", 16, "hombre", 8);
// const alumno2 = new Alumno("Ana", 17,"mujer", 6);

// escuela.contratarProfesor(profe);
// escuela.inscribirAlumno(alumno1);
// escuela.inscribirAlumno(alumno2);

// console.log(alumno2.notaNumero());
// console.log(alumno2.aprobado())

// console.log(escuela.ListaAlumnos());
// console.log(escuela.ListaProfesores());

// profe.agregarAlumno(alumno1);
// profe.agregarAlumno(alumno2);
// console.log(profe.listDeAlumnos());

// console.log(`${alumno1.getNombre()} está aprobado?`, alumno1.estaAprobado());