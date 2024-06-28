import ItemListContainer from "./Components/Layout/ItemListContainer/ItemListContainer"
import Footer from "./Components/Layout/Footer/Footer"
import Navbar from "./Components/Layout/Navbar/Navbar"

function App() {
 
  const parametros = [
    {
        titulo: 'Bienvenidos a la tienda virtual en React',
        alumno: 'Marcelo Jiménez C'
    }
  ]

  return (
    <>
      <Navbar />
      <ItemListContainer parametros={parametros} />
      <Footer />
    </>
  )
}

export default App
