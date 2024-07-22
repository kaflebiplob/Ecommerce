import { useState } from 'react'

import './App.css'
import Login from './pages/loginpage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 {/* <Login/> */}
 <Header/>
 </>
  )
}

export default App
