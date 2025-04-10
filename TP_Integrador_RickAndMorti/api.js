
export const api2 = {
    async getDatosRickAndMorty(url = 'https://rickandmortyapi.com/api/character') {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(`HTTP Error. Status: ${res.status}`);
            }

            const data = await res.json();
            console.log(data);
            // console.log(data.info.next); 
            return data;
        } catch (err) {
            console.error("Error al cargar los personajes:", err);
            return {
                error: true,
                status: err.status,
                message: err.message,
                details: err,
            };
        }
    },
};

