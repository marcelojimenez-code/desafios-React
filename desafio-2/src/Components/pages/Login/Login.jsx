import React, { useState } from 'react'
import {Link} from "react-router-dom";

const Login = () => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Aquí puedes agregar la lógica de validación
      if (username === 'usuario' && password === 'contraseña') {
        alert('Inicio de sesión exitoso');
        // Aquí puedes redirigir o hacer lo que necesites después del inicio de sesión
      } else {
        setError('Usuario o contraseña incorrectos');
      }
    };

  return (
    <>
      <br />
      <div className='center-align'>
          <Link className='waves-effect waves-light btn-large' to="/">Home</Link>
      </div> 
  
      <div className="container">
        <div className="section">
            <div className="col s12 m4">
                <div className="card hoverable">
                    <div className="card-panel teal white-text">
                        Login
                    </div>

                    <div className="card-content">
                
                      <div className="row">
                        <form className="col s12" onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="input-field col s12">
                              <input
                                id="username"
                                type="text"
                                className="validate"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                              />
                              <label htmlFor="username">Nombre de usuario</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <input
                                id="password"
                                type="password"
                                className="validate"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <label htmlFor="password">Contraseña</label>
                            </div>
                          </div>
                          <div className="row">
                            <button className="btn waves-effect waves-light" type="submit">
                              Iniciar sesión
                            </button>
                          </div>
                          {error && <div className="row"><p className="red-text">{error}</p></div>}
                        </form>
                      </div>
                    </div>
                </div>
            </div>  
        </div>
      </div>    
    </>
  )
}

export default Login
