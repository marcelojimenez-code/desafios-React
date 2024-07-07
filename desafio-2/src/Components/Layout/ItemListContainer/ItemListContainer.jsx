import React from 'react'

const ItemListContainer = props => {

    const parametros = props.parametros;

  return (
    
        <>
        <div className="section no-pad-bot" id="index-banner">
            <div className="container">
                <br /><br />
                <h1 className="header center orange-text">{parametros[0].titulo}</h1>
                <div className="row center">
                    <h5 className="header col s12 light">Alumno <strong>{parametros[0].alumno}</strong> </h5>
                </div>
                <br /><br />
            </div>
        </div>

        </>

  )
}

export default ItemListContainer
