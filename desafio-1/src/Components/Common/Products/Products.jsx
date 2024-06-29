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
                    
                    <Product
                    img="https://res.cloudinary.com/dszgqyw4c/image/upload/v1691128801/D8zgeJeXsAMRwNK_oejflm.jpg"
                    title="Luigi's Mansion 3"
                    price={59990}
                    stock={5}
                    category= "switch"            
                    description= "Luigi's Mansion 3 es un videojuego de acción y aventura desarrollado por el estudio canadiense Next Level Games..."         
                    />
                </div> 

                <div className="row">
                    
                    <Product
                    img="https://res.cloudinary.com/dszgqyw4c/image/upload/v1691128800/gotham-knights-20225131732611_1_bnrrng.jpg"
                    title="Gotham Knights"
                    price={9990}
                    stock={20}
                    category= "PS5"            
                    description= "Gotham Knights es un RPG de mundo abierto, ambientado en la versión más dinámica de Ciudad Gótica hasta ahora."         
                    />

                    <Product
                    img="https://res.cloudinary.com/dszgqyw4c/image/upload/v1691128801/L9_3vmBK-1DJEoCH7gBMERTD7jryH35q_Te4ELL28-4_350x200_1x-0_nr4msa.jpg"
                    title="Jedi Survivor"
                    price={59990}
                    stock={4}
                    category= "xbox"            
                    description= "Star Wars Jedi: Survivor es un videojuego de acción y aventuras creado por Respawn Entertainment y lanza.."         
                    />

                    <Product
                    img="https://res.cloudinary.com/dszgqyw4c/image/upload/v1691128800/mario-kart-8-deluxe-portada-switch_ylp4x5.jpg"
                    title="Mario Kart 8:deluxe"
                    price={59990}
                    stock={7}
                    category= "switch"            
                    description= "Mario Kart 8 es un videojuego de carreras desarrollado y publicado por Nintendo para la consola Wii U."         
                    />

                    <Product
                    img="https://res.cloudinary.com/dszgqyw4c/image/upload/v1691128800/elden-ring-20216121316990_1_iqaccx.jpg"
                    title="Elden Ring"
                    price={59990}
                    stock={3}
                    category= "PS5"            
                    description= "Elden Ring es el nuevo videojuego de FromSoftware, creadores de Dark Souls, Sekiro o Bloodborne"         
                    />
                </div> 
            </div>    
        </div>        
  )
}

export default Products;
