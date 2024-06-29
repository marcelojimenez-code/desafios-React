import React, { useState } from 'react'
import './Product.css'

const Product = props => {

    const img = props.img;
    const title = props.title;
    const price = props.price;
    const stock = props.stock;
    const category = props.category;
    const description = props.description;

    const [count, setCount] = useState(0); 
    const [addProduct, setAddProduct] = useState(1); 
    const [totalPrice, setTotalPrice] = useState();

    const increment = () => {
        // Incrementar la cantidad
        if (count < stock) {
            setCount(prevCount => prevCount + 1);
        }
    };

    const decrement = () => {
        // Decrementar la cantidad, asegurándose de que no sea menor que 1
        if (count >= 1 && setCount(count -1)) {
            setCount(prevCount => prevCount - 1);
        }
    };  

    const onAdd = () => {
        // Graba la cantidad seleccionada de productos, asegurándose de que no sea menor que 1
        if (count >= 1) {
            setAddProduct(count);
        }
    };  

    const precioTotal = () => {
        // Graba el precio de los productos por el precio
        setTotalPrice(addProduct * price);
    };

  return (

                <div className="col s12 m3">
                    <div className="card hoverable">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator image-card" src={img} />
                        </div>

                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">{title}
                                <i className="material-icons right">more_vert</i></span>

                            <span>$ {price}</span>  <br/> 
                            <span>Categoria {category}</span><br/> 
                            <span>Stock {stock}</span> 
                        </div>

                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
                            <p>{description}</p>

                            <span>$ {price}</span>  <br/> 
                            <span>Plataforma {category}</span><br/> 
                            <span>Stock {stock}</span> 
                        </div>

                        <div className="card-action">
                            <div className='center-align'>
                                <a className="btn-floating #ffb74d orange lighten-2 left" onClick={ decrement }><i className="material-icons">remove</i></a>
                                <span className="card-title">{count}</span>
                                <a className="btn-floating #ffb74d orange lighten-2 right" onClick={ increment }><i className="material-icons">add</i></a>
                            </div>
                            <br />
                            <div className='center-align'>
                                <a className="waves-effect waves-light btn-small #039be5 light-blue darken-1" onClick={ onAdd }>Agregar al Carro </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
  )
}

export default Product;
