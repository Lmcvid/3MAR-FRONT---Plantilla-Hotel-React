import React from 'react'
import Menu from '../components/menu'
import Banner from '../components/banner'
import Habitaciones from '../components/habitaciones'
import About from '../components/about'
import Ours from '../components/ours'
import Contacto from '../components/contacto'
import Footer from '../components/footer'

export default function Home() {
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
