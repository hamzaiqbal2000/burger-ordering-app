import React from 'react'
import Login from './components/Login'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Orders from './components/Orders'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import Checkout from './components/Checkout'

function App () {
  return (
    <div>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
