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
           <button class="btn btn-outline-secondary" id="verMas-${personaje.id}">Ver más</button>
            </div>
            `
        }

        contenedor.innerHTML = data.results.map(armarCarta).join('');

        for (const personaje of data.results) {
            const btnVerMas = document.getElementById(`verMas-${personaje.id}`);
            if (btnVerMas) {
              btnVerMas.addEventListener("click", () => {
                mostrarDetalles(personaje.id); 
              });
            }
          }

        const botonSiguiente = document.getElementById("btnSiguiente");
        const botonAnterior = document.getElementById("btnAnterior");
        
        botonSiguiente.disabled = !data.info.next;
        botonAnterior.disabled = !data.info.prev;

        botonSiguiente.addEventListener("click", () =>{
            if (data.info.next) {
                actualizarPersonajes(data.info.next); 
            }
        });
        botonAnterior.addEventListener("click", ()=>{
            if (data.info.prev) {
                actualizarPersonajes(data.info.prev); 
            }
        })
    }
}

actualizarPersonajes(URL_Personajes);

async function mostrarDetalles(id) {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const data = await api2.getDatosRickAndMorty(url);
  
    if (data) {
      const modalBody = document.getElementById("modalContenido");
      modalBody.innerHTML = `
        <img src="${data.image}" class="img-fluid mb-3">
        <h5>${data.name}</h5>
        <p><strong>Estado:</strong> ${data.status}</p>
        <p><strong>Especie:</strong> ${data.species}</p>
        <p><strong>Género:</strong> ${data.gender}</p>
        <p><strong>Origen:</strong> ${data.origin.name}</p>
      `;
  
      const modal = new bootstrap.Modal(document.getElementById('modalPersonaje'));
      modal.show();
    }
  }

