import { api2 } from "./api.js";
const URL_Personajes = 'https://rickandmortyapi.com/api/character';

async function actualizarPersonajes(url) {
    const data = await api2.getDatosRickAndMorty(url); 
    if (data) {
        const contenedor = document.getElementById("contenedorPersonajes");
        
        function armarCarta(personaje) {
          return `
            <div class="card text-bg-dark" style="width: 18rem;">
              <img src="${personaje.image}" alt="${personaje.name}" class="card-img-top">
              <div class="card-body">
                <h4 class="card-title">${personaje.name}</h5>
                <p class="card-text"><strong>Estado:</strong> ${personaje.status}</p>
                <p class="card-text"><strong>Especie:</strong> ${personaje.species}</p>
                <p class="card-text"><strong>Origen:</strong> ${personaje.origin.name}</p>
                <button class="btn btn-outline-secondary" id="verMas-${personaje.id}">Ver más</button>
              </div>
            </div>
          `;
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
        
        urlSiguiente = data.info.next;
        urlAnterior = data.info.prev;
    
        botonSiguiente.disabled = !urlSiguiente;
        botonAnterior.disabled = !urlAnterior;

    }
}

      let urlSiguiente = null;
      let urlAnterior = null;

      const botonSiguiente = document.getElementById("btnSiguiente");
      const botonAnterior = document.getElementById("btnAnterior");

      botonSiguiente.addEventListener("click", () => {
        if (urlSiguiente) {
          actualizarPersonajes(urlSiguiente);
        }
      });

      botonAnterior.addEventListener("click", () => {
        if (urlAnterior) {
          actualizarPersonajes(urlAnterior);
        }
      });


actualizarPersonajes(URL_Personajes);

async function mostrarDetalles(id) {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const data = await api2.getDatosRickAndMorty(url);
  
    if (data) {
      const modalBody = document.getElementById("modalContenido");
      modalBody.innerHTML = `
        <img src="${data.image}" class="card-img-top">
        <h4 class="modal-title">${data.name}</h5>
        <p class="card-text"> <strong>Estado:</strong> ${data.status}</p>
        <p class="card-text"><strong>Especie:</strong> ${data.species}</p>
        <p class="card-text"><strong>Género:</strong> ${data.gender}</p>
        <p class="card-text"><strong>Origen:</strong> ${data.origin.name}</p>
      `;
  
      const modal = new bootstrap.Modal(document.getElementById('modalPersonaje'));
      modal.show();
    }
  }


  function filtrarPersonajes() {
   
    const statusFilter = document.getElementById('status');
    const speciesFilter = document.getElementById('species');
    const genderFilter = document.getElementById('gender');

    const queryParams = [];
  
    if (statusFilter.value) queryParams.push(`status=${statusFilter.value}`);
    if (speciesFilter.value) queryParams.push(`species=${speciesFilter.value}`);
    if (genderFilter.value) queryParams.push(`gender=${genderFilter.value}`);
  
    const queryString = queryParams.join('&');
    const fullUrl = `${URL_Personajes}?${queryString}`;
  
    actualizarPersonajes(fullUrl); 
  }
  const form = document.getElementById("filtradoForm");
  form.addEventListener("submit", (e) => {
      e.preventDefault();
      filtrarPersonajes();
    }
  );
