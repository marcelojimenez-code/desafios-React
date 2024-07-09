import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Category = ({ products }) => {
  const [categoryFilter, setCategoryFilter] = useState('');

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const filteredProducts = categoryFilter
    ? products.filter(product => product.category === categoryFilter)
    : products;

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

  // Dividir los productos filtrados en filas de 4 columnas
  const productsRows = chunkArray(filteredProducts, 4);  

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <select className="browser-default" value={categoryFilter} onChange={handleCategoryChange}>
            <option value="">Mostrar todos</option>
            <option value="switch">Switch</option>
            <option value="xbox">Xbox</option>
            <option value="PS5">PS5</option>
          </select>
          <label>Filtrar por categoría</label>
        </div>
      </div>

      {productsRows.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {/* Iterar sobre las tarjetas en cada fila */}
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

                    <p><strong>$ {product.price}</strong></p>
                    <p>Categoría: {product.category}</p>
                    <p>Stock: {product.stock}</p>
                  </div>

                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{product.title}<i className="material-icons right">close</i></span>
                    <p>{product.description}</p>
                    <p><strong>$ {product.price}</strong></p>
                    <p>Categoría: {product.category}</p>
                    <p>Stock: {product.stock}</p>
                  </div>

                  <div className="card-action">
                    <div className='center-align'>
                      <Link className="waves-effect waves-light btn-small #039be5 light-blue darken-1" to={`/products/${product.id}`}>Detalle del Producto</Link>
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Category;
