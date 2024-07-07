import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

const Footer = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
        const elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});
      }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const links = [
      {
          id: 1,
          link: 'Inicio',
          url: '/'
      },
      {
          id: 2,
          link: 'Search',
          url: '/search'
      },
      {
          id: 3,
          link: 'Services',
          url: '/services'
      },
      {
          id: 4,
          link: 'Products',
          url: '/products'
      },
      {
          id: 5,
          link: 'Login',
          url: '/login'
      },

  ] 

  return (
    <footer className="page-footer orange">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">While Spa</h5>
          <p className="grey-text text-lighten-4">
                HORARIO DE ATENCIÓN TIENDA WEB<br />
                Lunes a Viernes:<br />
                De 08:00 AM a 17:30<br />
                Email: servicioalcliente@while.cl<br />
                CONTACTO<br />
                Contactenos a través de Redes sociales o al mail servicioalcliente@while.cl<br />
          </p>


        </div>
        <div className="col l3 s12">
          <h5 className="white-text">&nbsp;</h5>

        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Menu</h5>
            <ul>
                { links.map(x => 
                    <li key={x.id}><Link className="white-text" to={x.url}>{x.link}</Link>   </li>
                )} 
            </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
          
      </div>
    </div>
  </footer>
  )
}

export default Footer
