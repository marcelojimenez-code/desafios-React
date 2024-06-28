import React from 'react'
import Product from './Product'

const Products = () => {
  return (
        <div className="container">
            <div className="section">
                <div className="row">
                    <Product
                    imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWj4_QrinB4Msvk2sRg60VWSdEySiGPmlylg&s"
                    nombre="Calle"
                    precio={300000}
                    />

                    <Product
                    imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWj4_QrinB4Msvk2sRg60VWSdEySiGPmlylg&s"
                    nombre="Calle"
                    precio={300000}
                    />
                    
                </div> 
            </div>    
        </div>        
  )
}

export default Products;
