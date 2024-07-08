import React, { useState } from 'react'

const Counter = ({ initial, min, max, onAdd, productTitle, productPrice }) => {

    const [count, setCount] = useState(0); 
    const [addProduct, setAddProduct] = useState(initial); 

    const increment = () => {
        // Incrementar la cantidad
        if (count < max) {
            setCount(prevCount => prevCount + 1);
        }
        else{
            M.toast({ html: `No hay más ${productTitle} en stock`, classes: 'red lighten-1' });
        }
    };

    const decrement = () => {
        // Decrementar la cantidad, asegurándose de que no sea menor que 1
        if (count >= min && setCount(count -1)) {
            setCount(prevCount => prevCount - 1);
        }
    };  

    const handleAddToCart = () => {
        onAdd(count); // Llama a la función onAdd pasando count como argumento
    };


  return (
        <>
            <div className="card-action">
                <div className='center-align'>
                    <a className="btn-floating #ffb74d orange lighten-2 left" onClick={ decrement }><i className="material-icons">remove</i></a>
                    <span className="card-title">{count}</span>
                    <a className="btn-floating #ffb74d orange lighten-2 right" onClick={ increment }><i className="material-icons">add</i></a>
                </div>
                <br />
                <div className='center-align'>
                    <a className="waves-effect waves-light btn-small #039be5 light-blue darken-1" onClick={ handleAddToCart }>Agregar al Carro </a>
                </div>
            </div>
        </>
  )
}

export default Counter
