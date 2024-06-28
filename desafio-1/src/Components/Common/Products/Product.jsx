import React from 'react'

const Product = props => {

    const parametros = props.parametros;

  return (

                <div className="col s12 m3">
                    <div className="card hoverable">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src="https://d22fxaf9t8d39k.cloudfront.net/31177e5345ac3dfec93652de8031a5f5bdf755ec9f8224f8c61c4b7b7aeccee9104532.webp" />
                        </div>

                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Montaña
                                <i className="material-icons right">more_vert</i></span>
                        </div>

                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Montaña<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>

                        <div className="card-action">
                            <div className='center-align'>
                                <a className="btn-floating #ffb74d orange lighten-2 left"><i class="material-icons">remove</i></a>
                                <span>2</span>  
                                <a class="btn-floating #ffb74d orange lighten-2 right"><i class="material-icons">add</i></a>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
  )
}

export default Product;
