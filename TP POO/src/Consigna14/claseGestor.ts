import { Libro } from '../Consigna5/claseLibro';

class GestorLibros {
    private libros: Libro[];

    public constructor(libros: Libro[]) {
        this.libros = libros;
    }

    public insertLibro(libro: Libro): void {
        const libroEsta = this.libros.find(lib => {
            return lib.ISBN === libro.ISBN
        });
        if (libroEsta) {
            console.log('El libro ya existe')
        } else {
            this.libros.push(libro);
            console.log(`El libro se agrego correctamente`)
        }
    }
    public consultaLibro(libro: Libro): void {
        const libroInfo = this.libros.find(lib => {
            return lib.ISBN === libro.ISBN
        });
        if (libroInfo) {
            libro.info();
        } else {
            console.log('El libro no se encuentra en el sistema')
        }
    }
    public modificarLibro(libro: Libro, nuevosDatos: Partial<Libro>): void {
        const libroModificado = this.libros.find(lib => lib.ISBN === libro.ISBN);
        if (libroModificado) {
            if (nuevosDatos.titulo) libroModificado.titulo = nuevosDatos.titulo;
            if (nuevosDatos.autor) libroModificado.autor = nuevosDatos.autor;
            if (nuevosDatos.numeroPag) libroModificado.numeroPag = nuevosDatos.numeroPag;
            console.log('Libro modificado con éxito \nNuevos datos:');
            this.consultaLibro(libro);
        } else {
            console.log('El libro no se encuentra en el sistema');
        }
    }

    public eliminarLibro(libro: Libro) {
        this.libros = this.libros.filter(lib => {
            return lib.ISBN !== libro.ISBN
        });
    }
}

// const libro1 = new Libro(123, '1984', 'George Orwell', 328);
// const libro2 = new Libro(456, 'Fahrenheit 451', 'Ray Bradbury', 256);
// const gestor = new GestorLibros([]);
// gestor.insertLibro(libro1); 
// gestor.insertLibro(libro2); 
// gestor.insertLibro(libro1); 
// gestor.consultaLibro(libro1); 
// gestor.consultaLibro(new Libro(999, '', '', 0)); 
// gestor.modificarLibro(libro1, { titulo: 'Mil novecientos ochenta y cuatro', numeroPag: 350 });
// gestor.eliminarLibro(libro1);
// gestor.consultaLibro(libro1); 
