import React from 'react';
import { BrowserRouter, Route , Routes } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Search from "./Components/pages/Search/Search";
import Services from "./Components/pages/Services/Services";
import Products from "./Components/pages/Products/Products";
import Login from "./Components/pages/Login/Login";
import Product from "./Components/pages/Products/Product";
import { Index } from './Components/pages/Index';


function App() {
 
  const parametros = [
    {
        titulo: 'Bienvenidos a la tienda virtual en React',
        alumno: 'Marcelo Jiménez C'
    }
  ]

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>            
              <Route exact index path="/" element={<Index/>} />
              <Route exact path="/search" element={<Search/>}/>
              <Route exact path="/services"  element={<Services/>}/>
              <Route exact path="/products" element={<Products/>}/>
              <Route exact path="/products/:productId" element={<Product/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route path="*" element={<h1>404 no encontrado</h1>} />
              </Route>
          </Routes>    
      </BrowserRouter>
    </>
  )
}

export default App
