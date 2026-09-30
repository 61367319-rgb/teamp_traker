const claveApi = '4fd57d7c0151448a9c7225211262309';
const idioma = 'es';
const ciudad = 'Huancayo';

const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

(async () => {
    const response = await fetch(apiClimaActual);
    let data = await response.json();
    console.log(data);
})();