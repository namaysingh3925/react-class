import React from "react";
import Home from "./pages/home";
import Layout from "./components/layout";
import { Routes, Route } from 'react-router-dom';
import Contact from "./pages/contact";
import About from "./pages/about";

const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Layout />} >
          {/* <Route index element={<Home />} /> */}
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Route>


      </Routes>
    </div>
  );
};

export default App;