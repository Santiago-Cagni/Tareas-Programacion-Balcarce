import { api2 } from "./api.js";
const URL_Personajes = 'https://rickandmortyapi.com/api/character';


async function actualizarPersonajes(url) {
    const data = await api2.getDatosRickAndMorty(url); // Pasamos la URL recibida
    if (data) {//si recibimos la data...
        const contenedor = document.getElementById("contenedorPersonajes");//traemos el contenedor
        // map() recorre cada elemento del array data.results, y a cada uno le pasa como argumento 
        // una función que recibe un parámetro. Ese parámetro representa el elemento actual del array.
        contenedor.innerHTML = data.results.map(personaje => ` 
            <div>
                <img src="${personaje.image}" alt="${personaje.name}" class="img-fluid">
                <h5>${personaje.name}</h5>
                <p> Estatus: ${personaje.status}</p> 
                <p> Especie: ${personaje.species}</p>
                <p> Origen: ${personaje.origin.name}</p>
                <a href="detalles.html?id=${personaje.id}" class="btn btn-outline-primary">Ver más</a>
            </div>
        `).join(''); //El join('') me quita las comas del array que devuelve el map() ya que innerHTML resive string.
        //(gracias chatGPT).

        //Traemos lo botones 
        const botonSiguiente = document.getElementById("btnSiguiente");
        const botonAnterior = document.getElementById("btnAnterior");
        
        //los deshabilitamos si no existe en data.info.next el link a pagina anterior o pagina siguiente
        botonSiguiente.disabled = !data.info.next;
        botonAnterior.disabled = !data.info.prev;

        //escuchamos el click en cada boton y le damos la url a la funcion 
        botonSiguiente.onclick = () => {
            if (data.info.next) {
                actualizarPersonajes(data.info.next); 
            }
        };
        botonAnterior.onclick = () => {
            if (data.info.prev) {
                actualizarPersonajes(data.info.prev); 
            }
        };
    }
}
actualizarPersonajes(URL_Personajes);

