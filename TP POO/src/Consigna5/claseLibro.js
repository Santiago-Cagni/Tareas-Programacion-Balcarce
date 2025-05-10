"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
class Libro {
    constructor(ISBN, titulo, autor, numeroPag) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPag = numeroPag;
    }
    info() {
        const detalles = `
                ISBN: ${this.ISBN}
                Titulo: ${this.titulo}
                Autor: ${this.autor}
                Numero de Página: ${this.numeroPag}
                `;
        console.log(detalles);
        return detalles;
    }
}
exports.Libro = Libro;
// let nuevoLibro = new Libro(3219374323432, "La vuelta al mundo en 80 dias", "Julio Verne", 304);
// nuevoLibro.info()
