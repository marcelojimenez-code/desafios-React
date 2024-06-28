import React from 'react';
import { Outlet } from "react-router-dom";
import  NavBar from "../Layout/Navbar/Navbar";


function Layout(props) {
    
    const parametros = props.parametros;

    console.log(parametros);

    return (

        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

            <NavBar />   

            <section className='hero is-primary'>
            <div className='hero-body'>
                


            <Outlet/>

            </div>
            </section>

            <footer className="footer">
            <div className="content has-text-centered">
                
                <p>
               footer
                </p>
            </div>
            </footer>

        </div>

        

    )

}

 

export default Layout;