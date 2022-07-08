// React
import { useState } from "react";



export const GifExpertApp = () => {


    /*===== Estados =====*/

    // - Categories
    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball Z', 'Pokemon' ]);

    

    // Agregar una categoria
    const onAddCategory = () => {

        // De esta forma se agregan elementos a un arreglo en react
        // NO hay que usar el 'push'
        setCategories([ ...categories, 'Digimon' ]);

        // También se puede hacer de esta otra forma
        // setCategories( cat => [ ...cat, 'Digimon' ]);

    }



    return (
    
        <>

            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            {/* Listado de Gifs */}
            <button onClick={ onAddCategory }>Agregar</button>
            <ol>
                {
                    categories.map( ( category ) => {
                        return <li key={ category }>{ category }</li>
                    })
                }
            </ol>

        </>

    )

}
