import React from 'react'

const CartWidget = () => {

  const links_carro = [
    {
        id: 5,
        link: 'Carrito',
        url: 'detail'
    },
    {
        id: 6,
        link: 'Total',
        url: 'detail'
    },
  ] 

  return (

    <>
      <li key={links_carro[0].id}><a href={links_carro[0].url}><i className="material-icons">shopping_cart</i></a></li>
      <li key={links_carro[1].id}><a href={links_carro[1].url}><span className="new badge blue">55</span></a></li>
    </>

  )
}

export default CartWidget
