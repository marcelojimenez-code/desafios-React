import Category from "./Category/Category"
import productsData from '../../data/productos.json';

export const Index = () => {


  return (
    <>
        <div className="section no-pad-bot" id="index-banner">
            <div className="container">
                <br /><br />
                <h1 className="header center orange-text">Bienvenidos a la tienda virtual en React</h1>
                <div className="row center">
                    <h5 className="header col s12 light">Alumno <strong>Marcelo Jimenez</strong> </h5>
                </div>
                <br /><br />
            </div>

            <Category products={productsData} />
        </div>

        </>
  )
}


