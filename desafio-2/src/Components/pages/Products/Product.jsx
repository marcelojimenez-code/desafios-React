import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import listProducts from "../../../data/productos.json";
import Counter from '../../common/Counter/Counter';
import './Product.css';

const Product = () => {

    const [cart, setCart] = useState([]); // Estado para almacenar los productos en el carrito

    const {productId} = useParams();
    console.log(productId)

    const product = listProducts.find((product)=> product.id == productId)

    const {img, title, price, category, description, stock} = product;

    // Función para manejar la adición de productos al carrito
    const onAdd = (count, product) => {
        const itemInCart = cart.find(item => item.id === product.id);
    
        if (itemInCart) {
            const updatedCart = cart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + count } : item
            );
            setCart(updatedCart);
        } else {

            const newCartItem = { ...product, quantity: count };
            setCart([...cart, newCartItem]);
        }
    
       
        console.log(`Agregado al carrito: ${count} unidades de ${product.title}`);
    };

  return (
        <>
            <div className="container">
                <div className="section">
           
                    <div className="row">
            
                        <div className="col s12 m4">
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

                                <Counter
                                    initial={1} // Valor inicial del contador
                                    min={1} // Valor mínimo del contador
                                    max={stock} // Valor máximo del contador según el stock del producto
                                    onAdd={(count) => onAdd(count, product)}
                                    productTitle={title} // Título del producto
                                    productPrice={price} // Precio del producto
                                />
                            </div>
                        </div>
                    </div>
                </div>    
            </div>    
        </>         
  )
}

export default Product;
