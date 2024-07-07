import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import  NavBar from './Navbar/Navbar'
import Footer from './Footer/Footer';
import ItemListContainer from './ItemListContainer/ItemListContainer';


const Layout = () => {

  const [currentPage, setCurrentPage] = useState('products');

  const handleNavItemClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <NavBar onPageChange={handleNavItemClick} />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
