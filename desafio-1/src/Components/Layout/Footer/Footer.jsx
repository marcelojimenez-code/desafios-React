import React, { useState, useEffect } from 'react';

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
            url: 'inicio'
        },
        {
            id: 2,
            link: 'Servicios',
            url: 'servicio'
        },
        {
            id: 3,
            link: 'Productos',
            url: 'productos'
        },
        {
            id: 4,
            link: 'Contacto',
            url: 'contacto'
        }

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
                    <li key={x.id}><a href={x.url} className="white-text">{x.link}</a></li>
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
