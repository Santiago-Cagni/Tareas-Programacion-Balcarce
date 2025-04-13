import { api2 } from "./api.js";
const URL_Personajes = 'https://rickandmortyapi.com/api/character';

async function actualizarPersonajes(url) {
    const data = await api2.getDatosRickAndMorty(url); 
    if (data) {
        const contenedor = document.getElementById("contenedorPersonajes");
        
        function armarCarta(personaje) {
            return `
            <div>
            <img src="${personaje.image}" alt="${personaje.name}" class="img-fluid">
            <h5>${personaje.name}</h5>
            <p> Estatus: ${personaje.status}</p> 
            <p> Especie: ${personaje.species}</p>
            <p> Origen: ${personaje.origin.name}</p>
            <a href="detalles.html?id=${personaje.id}" class="btn btn-outline-primary">Ver más</a>
            </div>
            `
        }

        contenedor.innerHTML = data.result.map(armarCarta).join('');

        const botonSiguiente = document.getElementById("btnSiguiente");
        const botonAnterior = document.getElementById("btnAnterior");
        
        botonSiguiente.disabled = !data.info.next;
        botonAnterior.disabled = !data.info.prev;

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


  // async function obtenerEspeciesUnicas() {
  //   const especies = new Set();
  //   let url = 'https://rickandmortyapi.com/api/character';
  
  //   while (url) {
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  
  //       data.results.forEach(personaje => {
  //         if (personaje.species) {
  //           especies.add(personaje.species);
  //         }
  //       });
  
  //       url = data.info.next;
  //     } catch (error) {
  //       console.error('Error al obtener especies:', error);
  //       break;
  //     }
  //   }
  
  //   console.log('Especies únicas:', [...especies]);
  // }
  
  // obtenerEspeciesUnicas();