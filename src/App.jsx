import React, { useState } from 'react'
import Section from './component/Section'
import Navebar from './component/Navebar'
import Footer from './component/Footer'
function App() {
let [cart,setCart]= useState(0)
  return <>
    <Navebar cart={cart}/>
    <Section cart={cart} setCart={setCart}/>
    <Footer/>
  </>
}

export default App
