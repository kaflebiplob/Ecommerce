import { useState } from 'react'

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

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 {/* <Login/> */}
 <Router> 
 
  <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/aboutus' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/register' element={<Register/>}/>
  </Routes>
 </Router>
 
 {/* <About/> */}
 </>
  )
}

export default App
