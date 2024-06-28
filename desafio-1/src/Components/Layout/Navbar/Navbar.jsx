import React, { useState, useEffect } from 'react';
import Logo from "../../../assets/img/logo.png";
import './Navbar.css'
import CartWidget from '../../Common/Cartwidget/CartWidget';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    /*useEffect(() => {
        // Inicializar el plugin de sidenav al cargar el componente
        $('.sidenav').sidenav();
    }, []);*/
    
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
    <div>
        <nav className="#263238 blue-grey darken-4" role="navigation">
            <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo"><img src={Logo} className='image' alt="logo"/></a>

            <ul className="right hide-on-med-and-down">

                { links.map(x => 
                    <li key={x.id}><a href={x.url}>{x.link}</a></li>
                )}  
                <li><CartWidget /></li>
            </ul>

            <ul id="nav-mobile" className="sidenav">
                { links.map(x => 
                    <li key={x.id}><a href={x.url}>{x.link}</a></li>
                )}  
                <li><CartWidget /></li>
            </ul>
            <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>

                
            </div>
        </nav>
    </div>
  )
}

export default Navbar
