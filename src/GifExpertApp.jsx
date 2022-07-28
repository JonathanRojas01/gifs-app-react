// React
import { useState } from "react";

// Components
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {


    /*===== Estados =====*/

    // - Categories
    const [categories, setCategories] = useState([ 'Dragon Ball Z' ]);

    

    // Agregar una categoria
    const onAddCategory = ( newCategory ) => {

        // Si la categoria insertada existe entonces no hace nada
        if ( categories.includes( newCategory ) ) {
            return;
        }
        
        // De esta forma se agregan elementos a un arreglo en react
        // NO hay que usar el 'push'
        console.log( newCategory );
        setCategories([ newCategory, ...categories ]);

        // También se puede hacer de esta otra forma
        // setCategories( cat => [ ...cat, 'Digimon' ]);

    }



    return (
    
        <>

            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                onNewCategory={ onAddCategory } />

            {/* Categoria - Contenedor de gifs según categoria */}
            {
                categories.map( ( category ) => {
                    return (
                        <GifGrid
                            key={ category }
                            category={ category } />
                    )
                })
            }

        </>

    )

}
