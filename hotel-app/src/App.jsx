import About from "./components/about";
import Banner from "./components/banner";
import Contacto from "./components/contacto";
import Footer from "./components/footer";
import Habitaciones from "./components/habitaciones";
import Menu from "./components/menu";
import Ours from "./components/ours";

function App() {
  return (
    <>
     <Menu/>
     <Banner/>
     <div div className="w3-content" style={{"maxWidth":"1532px"}}>
      <Habitaciones/>
      <About/>
      <Ours/>
      <Contacto/>
     </div>
     <Footer/>
    </>
  )
}

export default App
