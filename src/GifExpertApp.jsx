import { useState } from 'react';
import { AddCategory,GifGrid} from './components';



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        // categories.push(newCategory) // en lo posible tratar de no mutar los estados
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories ]) //de este modo es mas recomendable ya que no se necesita mutar el valor original y se hace una copia del original
        // setCategories( cat => ['Valorant', ...categories] )
    }

    return (
        <>
            {/* titulo */}
            <h1>Gif Expert App</h1>
            {/* Input */}
            <AddCategory //categoryon={ setCategories }
                onNewCategory={onAddCategory}
            />
            {/* Listado de gif */}
            {
                categories.map((category) =>
                    <GifGrid
                        key={category}
                        category={category}
                    />)
            }
        </>
    )
}

/*yarn install o yarn instala las dependencias de desarrollo o los node modules 
yarn dev se usa para correr la aplicacion y yarn test para correr las pruebas */