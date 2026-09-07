import React from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./pages/home"
import About from "./pages/about"
import Services from "./pages/services"
import Contact from "./pages/contact"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

      </Routes>

    </div >
  )
}
export default App