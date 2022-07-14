// React
import { useState } from "react";

// Components
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";



export const GifExpertApp = () => {


    /*===== Estados =====*/

    // - Categories
    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball Z', 'Pokemon' ]);

    

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

            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={ onAddCategory } />

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
