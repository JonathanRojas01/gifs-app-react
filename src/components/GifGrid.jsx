// Components
import { GifItem } from './GifItem';

// Hooks
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({ category }) => {


	// HOOKS 'useFetchGifs'
	const { images, isLoading } = useFetchGifs( category );

  	
	return (
		
		<>
			
			<h3>{ category }</h3>
			
			{
				isLoading && <h2>Cargando...</h2>
			}

			<div className="card-grid">
				
				{
					images.map( ( image ) => (

						// Una forma de pasar las propiedades es esta (esta correcta)
						// <GifItem
						// 	key={ image.id }
						// 	title={ image.title }
						// 	url={ image.url } />

						// Pero hay una forma mucho más eficiente, y que sirve sobre todo
						// cuando el elemento trae muchas propiedades (quizás cientos)
						// Consiste en "esparcir las propiedades" mediante el operador 'spread'
						<GifItem
							key={ image.id }
							{ ...image } />
					))
				}

			</div>

		</>

  	)


}


