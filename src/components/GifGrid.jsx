import { GifItem } from "./GifItem";
import { useFecthGifs } from "../hooks/useFecthGifs";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFecthGifs(category);

console.log(isLoading)
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2> ) //&& en este caso es un and logico  
            }
            <div className="card-grid" >
                {images.map((image) => {
                    return (
                        <>
                            <GifItem key={image.id}
                                {...image}//esto se hace para pasar todos los valores al component
                            />
                        </>
                    )
                })}
            </div>
        </>
    )
}
