import { api } from "./api.js";

const climaContainer = document.getElementById("clima-info");

// api.getClimaBalcarce().then((data) => {
//     if (data.error) {
//         climaContainer.innerHTML = `<p>Error: ${data.message}</p>`;
//     } else { 
//         const temperatura = data.main.temp;
//         const descripcion = data.weather[0].description;
//         const viento = data.wind.speed;
//         const vientoKm = (viento * 3.6).toFixed(1);
//         const humedad = data.main.humidity;
//         climaContainer.innerHTML = `
//             <p class="clima-parrafo">Temperatura: ${temperatura} °C</p>
//             <p class="clima-parrafo">Descripción: ${descripcion}</p>
//             <p class="clima-parrafo">Viento: ${vientoKm} km/h </p>
//             <p class="clima-parrafo">Humedad: ${humedad}%</p>
//         `;
//     } 
// });

async function infoDelClima() {
    try {
        const climaBalcarce = await api.getClimaBalcarce(); 

        if (climaBalcarce.error) { 
            climaContainer.innerHTML = `<p>Error: ${climaBalcarce.message}</p>`;
        } else {
            const temperatura = climaBalcarce.main.temp;
            const descripcion = climaBalcarce.weather[0].description;
            const viento = climaBalcarce.wind.speed;
            const vientoKm = (viento * 3.6).toFixed(1);
            const humedad = climaBalcarce.main.humidity;
            climaContainer.innerHTML = `
                <p class="clima-parrafo">Temperatura: ${temperatura} °C</p>
                <p class="clima-parrafo">Descripción: ${descripcion}</p>
                <p class="clima-parrafo">Viento: ${vientoKm} km/h</p>
                <p class="clima-parrafo">Humedad: ${humedad}%</p>
            `;
        }
    } catch (error) {
        console.error("Error al obtener datos del clima:", error);
        climaContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Llamar a la función infoDelClima
infoDelClima();