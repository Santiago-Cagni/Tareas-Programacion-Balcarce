"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clasePersona_1 = require("../Consigna2/clasePersona");
class Alumno extends clasePersona_1.Persona {
    constructor(nombre, edad, sexo, nota) {
        super(nombre, edad, sexo);
        this.nota = nota;
    }
    aprobado() {
        if (this.nota >= 7) {
            console.log(`Felicidades ${this.nombre} estas aprobado`);
            return true;
        }
        else {
            console.log(`Aún no estas aprobado, esfuerzate mas!`);
            return false;
        }
    }
    notaNumero() {
        return this.nota;
    }
    nombreAlumno() {
        return this.nombre;
    }
}
class Profesor extends clasePersona_1.Persona {
    constructor() {
        super(...arguments);
        this.curso = [];
    }
    agregarAlumno(alumno) {
        this.curso.push(alumno);
    }
    listDeAlumnos() {
        return this.curso;
    }
    nombreProfesor() {
        return this.nombre;
    }
}
class SistEducativo {
    constructor() {
        this.alumnos = [];
        this.profesores = [];
    }
    inscribirAlumno(alumno) {
        this.alumnos.push(alumno);
    }
    contratarProfesor(profesor) {
        this.profesores.push(profesor);
    }
    expulsarAlumno(nombre) {
        this.alumnos = this.alumnos.filter(alumnos => {
            return alumnos.nombreAlumno() !== nombre;
        });
    }
    ;
    despedirProfesor(nombre) {
        this.profesores = this.profesores.filter(profesor => {
            return profesor.nombreProfesor() !== nombre;
        });
    }
    ListaAlumnos() {
        return this.alumnos;
    }
    ListaProfesores() {
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
