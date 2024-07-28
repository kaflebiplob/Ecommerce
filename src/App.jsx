import { useState } from 'react'
import React from 'react'
import './App.css'
import Login from './pages/loginpage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/contact'
import Shop from './components/product'
import Footer from './components/footer'
import Register from './pages/registerpage'
import { Tyreproducts, twoWTyreProduct, lubricantsProduct, BatteryProduct, BASProduct } from './components/data'


function App() {

const [searchQuery, setSearchQuery] = useState("");

const allProducts = [...Tyreproducts, ...BatteryProduct, ...twoWTyreProduct, ...lubricantsProduct, ...BASProduct];

const filteredProducts = allProducts
  .filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .sort((a, b) => {
    const aIncludes = a.name.toLowerCase().includes(searchQuery.toLowerCase());
    const bIncludes = b.name.toLowerCase().includes(searchQuery.toLowerCase());
    return aIncludes === bIncludes ? 0 : aIncludes ? -1 : 1;
  });


  return (
 <>
 {/* <Login/> */}
 <Router> 
 <Header setSearchQuery={setSearchQuery}/>
  <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/aboutus' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/shop' element={<Shop products={filteredProducts}/>}/>
    <Route path='/register' element={<Register/>}/>
  </Routes>
 </Router>
 
 {/* <About/> */}
 </>
  )
}

export default App
