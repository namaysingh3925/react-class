import React from "react"
import Navbar from "./comonents/navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./comonents/home"
import About from "./comonents/about"
import Contact from "./comonents/contact"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App