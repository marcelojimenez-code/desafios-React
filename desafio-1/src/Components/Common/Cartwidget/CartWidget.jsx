import React from 'react'

const CartWidget = () => {

  const links_carro = [
    {
        id: 5,
        link: 'Carrito',
        url: 'carrito'
    },
    {
        id: 6,
        link: 'Total',
        url: 'detalle'
    },
  ] 

  return (

    <>
      <li key={links_carro[0].id}><a href={links_carro[0].url}><i className="material-icons">shopping_cart</i></a></li>
      <li key={links_carro[1].id}><a href={links_carro[1].url}><span class="new badge blue">4 Productos</span></a></li>
    </>

  )
}

export default CartWidget
