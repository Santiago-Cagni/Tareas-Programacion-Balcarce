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


  
  function filtrarPersonajes() {
    const nameFilter = document.getElementById('name');
    const statusFilter = document.getElementById('status');
    const speciesFilter = document.getElementById('species');
    const typeFilter = document.getElementById('type');
    const genderFilter = document.getElementById('gender');

    const queryParams = [];
  
    if (nameFilter.value) queryParams.push(`name=${nameFilter.value}`);
    if (statusFilter.value) queryParams.push(`status=${statusFilter.value}`);
    if (speciesFilter.value) queryParams.push(`species=${speciesFilter.value}`);
    if (typeFilter.value) queryParams.push(`type=${typeFilter.value}`);
    if (genderFilter.value) queryParams.push(`gender=${genderFilter.value}`);
  
    const queryString = queryParams.join('&');
    const fullUrl = `${URL_Personajes}?${queryString}`;
  
    actualizarPersonajes(fullUrl); // Asegurate que esta función esté definida
  }
  const form = document.getElementById("filtradForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  filtrarPersonajes();
});

  
  

    // if (gender) queryParams.push(`gender=${gender}`);
  // if (species) queryParams.push(`species=${species}`);
  // if (type) queryParams.push(`type=${type}`);
  // if (name) queryParams.push(`name=${name}`);
  
  // 
  // ;