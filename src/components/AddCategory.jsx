import { useState } from "react";


export const AddCategory = ({ onNewCategory }) => {// este elemento que recibe la funcion es el valor que viene dentro de las props o atributos del addCategory
    
    const [inputValue, setinputValue] = useState('');

    const onInputChange= ({target:{value}}) => {// en el target lo que hicimos fue desestructurar el evento
        // console.log(value); //obtenemos el valor del evento 
        setinputValue( value);
    }

    const onSubmit=(event) => {
        const newInputValue= inputValue.trim();
        event.preventDefault(); // esta llamada al evente previene que se recargue usando esta funcion JS
        if( newInputValue.length <= 1 ) return;// validacion de caractere en el input
        // categoryon(categories => [ inputValue, ...categories]);
        onNewCategory(newInputValue);
        setinputValue('');
    }

    return (
        // los formularios ya tienen un comportamiento por defecto y con el evento submit se debe prevenir el evento para que no se recargue
        <form onSubmit={ onSubmit }> 
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
        />
        </form>
    )
}
