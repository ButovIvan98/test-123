import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './pages/footer'
import MainPage from './pages/main-page'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<h1>Invoice0999 </h1>} />
      </Routes>
      <Footer date={'20.10.2020'} />
    </BrowserRouter>
  )
}

export default App
