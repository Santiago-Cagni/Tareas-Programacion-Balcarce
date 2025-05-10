export class Libro{
    public ISBN : number;
    public titulo: string;
    public autor: string;
    public numeroPag: number;
    public constructor(ISBN: number, titulo: string, autor: string, numeroPag: number){
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPag = numeroPag;
    }
        public info(): string{
                const detalles = `
                ISBN: ${this.ISBN}
                Titulo: ${this.titulo}
                Autor: ${this.autor}
                Numero de Página: ${this.numeroPag}
                `;
                console.log(detalles)
                return detalles;
            }
    }

    // let nuevoLibro = new Libro(3219374323432, "La vuelta al mundo en 80 dias", "Julio Verne", 304);
    // nuevoLibro.info()

