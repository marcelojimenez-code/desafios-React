import React from 'react'
import Product from './Product'

const Products = () => {
  return (
        <div className="container">
            <div className="section">
                <div className="row">
                    <Product
                    img="https://res.cloudinary.com/dszgqyw4c/image/upload/f_auto,q_auto/_1973643b_xicrtm"
                    title="The legend of Zelda: Breath of the Wild"
                    price={59990}
                    stock={10}
                    category= "switch"   
                    description= "The Legend of Zelda: Breath of the Wild es un videojuego exclusivo de Nintendo."                 
                    />

                    <Product
                    img="https://res.cloudinary.com/dszgqyw4c/image/upload/f_auto,q_auto/residentevilvillage_3365763b_ziqoqt"
                    title="Resident Evil: Village"
                    price={29990}
                    stock={6}
                    category= "xbox"   
                    description= "Resident Evil 8: Village es la octava entrega de Resident Evil, la saga de survival horror de Capcom."                  
                    />

                    <Product
                    img="https://res.cloudinary.com/dszgqyw4c/image/upload/v1691128801/ratchet-clank-una-dimension-aparte-202121117104110_1_isdore.jpg"
                    title="Ratched and Clank: Rift Apart"
                    price={19990}
                    stock={2}
                    category= "PS5"            
                    description= "Ratchet & Clank: Una dimensión aparte ​​​ es un videojuego de plataformas desarrollado por Insomniac Games y distribuido por Sony Interactive Entertainment."         
                    />
                    
                </div> 
            </div>    
        </div>        
  )
}

export default Products;
