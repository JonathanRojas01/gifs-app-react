// Estructura base de llamada a una 'API'
export const getGifs = async(category) => {

    // Url de busqueda
    const url = `https://api.giphy.com/v1/gifs/search?api_key=5kGWClCtjDHayaURdQVvGDflYKBBcM1t&q=${ category }&limit=10`;

    // Respuesta
    const resp = await fetch(url);

    // Destructurar la 'data' desde la respuesta
    const { data } = await resp.json();

    // Extraer solamente lo que necesito desde la 'data' y crear un objeto
    // por cada uno de los 'gifs' retornados
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    // console.log(gifs);

    return gifs;

}