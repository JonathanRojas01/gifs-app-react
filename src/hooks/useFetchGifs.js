// React
import { useEffect, useState } from 'react';

// Helpers
import { getGifs } from '../helpers/getGifs';



// Un 'HOOK' no es más que una función que regresa algo
// Un trozo de código personalizado
// Es casi como lo que hago con los 'templates-parts' en Wordpress


// en que tomo un pedazo de código y lo separo del resto para una mejor legibilidad
export const useFetchGifs = ( category ) => {
    

    // ESTADO: imagenes

	// ##### Cada instancia 'componente de categoria' tendrá su propio estado global de imagenes (gifs) #####

	// Se esta iniciando como un aarreglo vacio (puede servir para poder mientras un 'loading')
	// Arreglo de imagenes (gifs)
	const [ images, setImages ] = useState([]);

    const [ isLoading, setIsLoading ] = useState( true );


	// Obtener las imagenes (gifs)
	const getImages = async() => {
		
		// Esperar hasta que 'getGifs' reciba una categoria
		const newImages = await getGifs( category );

		// Actualizar el arreglo de imagenes (gifs)
		setImages( newImages );

        setIsLoading( false );

	}


	// No es una muy buena practica colocar la ejecución de la función
	// dentro de un componente, ya que se ejecutará cada vez que el componente
	// sufra un cambio o se renderice.
	
	// Así que para evitar que se ejecute a cada rato se esta usando ahora
	// el useEffect -> Con [] vacios para que se ejecute solo una vez
	useEffect( () => {
		getImages();
	}, [])

	// 'getImages' solo se llamará una vez por cada instancia del componente gif

	// No se debe usar el 'async' directamente en los 'useEffect'


    // Este hook retorna un objeto
    // con un arreglo de imagenes y un isLoading
    return {    
        images: images,
        isLoading: isLoading
    }


}

