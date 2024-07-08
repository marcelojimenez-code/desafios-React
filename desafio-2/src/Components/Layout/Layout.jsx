import React from 'react';
import { Outlet } from "react-router-dom";
import  NavBar from './Navbar/Navbar'
import Footer from './Footer/Footer';


const Layout = () => {

  return (
    <div>
      <NavBar />
     
        <Outlet />

      <Footer />
    </div>
  )
}

export default Layout
