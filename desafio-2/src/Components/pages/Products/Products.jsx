import React from 'react';
import listProducts from "../../../data/productos.json";
import { Link } from 'react-router-dom';

const Products = () => {

    // Función para dividir los productos en grupos de 4 por fila
    const chunkArray = (myArray, chunk_size) => {
        let index = 0;
        const arrayLength = myArray.length;
        const tempArray = [];

        for (index = 0; index < arrayLength; index += chunk_size) {
            const myChunk = myArray.slice(index, index + chunk_size);
            tempArray.push(myChunk);
        }

        return tempArray;
    };

    // Dividir los productos en filas de 4 columnas
    const productsRows = chunkArray(listProducts, 4);

    return (
        <div className="container">
            <div className="section">
                {productsRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((product) => (
                            <div key={product.id} className="col s12 m3">
                                <div className="card hoverable">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img className="activator image-card" src={product.img} alt={product.title} />
                                    </div>

                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">{product.title}
                                            <i className="material-icons right">more_vert</i>
                                        </span>

                                        <span>$ {product.price}</span>  <br />
                                        <span>Categoria {product.category}</span><br />
                                        <span>Stock {product.stock}</span>
                                    </div>

                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">{product.title}<i className="material-icons right">close</i></span>
                                        <p>{product.description}</p>

                                        <span>$ {product.price}</span>  <br />
                                        <span>Plataforma {product.category}</span><br />
                                        <span>Stock {product.stock}</span>
                                    </div>

                                    <div className="card-action">
                                        <br />
                                        <div className='center-align'>
                                            <Link className="waves-effect waves-light btn-small #039be5 light-blue darken-1" to={`/products/${product.id}`}>Detalle del Producto </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
