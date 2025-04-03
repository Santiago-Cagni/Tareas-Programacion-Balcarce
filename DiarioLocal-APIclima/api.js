const key = "f3411e9d46d0ee744770045311a91e47";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?";
const balcarceId = 3436176;
const lang = "es";

export const api = {
    async getClimaBalcarce() {
        try {
            const url = `${apiUrl}id=${balcarceId}&lang=${lang}&appid=${key}&units=metric`;
            const res = await fetch(url);
            // console.log("Respuesta de Balcarce:", res);

            if (!res.ok) {
                throw new Error(`HTTP Error. Status: ${res.status}`);
            }

            const data = await res.json();
            // console.log(`El clima de balcarce es ${data}`);
            console.log(data);
            return data;
            
        } catch (err) {
            console.error("Error al cargar el clima:", err);
            return {
                error: true,
                status: err.status,
                message: err.message,
                details: err,
            };
        }
    },
};

