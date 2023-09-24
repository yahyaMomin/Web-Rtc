import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Registor from './pages/Registor/Registor'
import Login from './pages/Login/Login'
import Navigation from './components/shared/navigation/Navigation'
import Otp from './pages/OPT/Opt'

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
