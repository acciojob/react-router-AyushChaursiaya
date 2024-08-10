import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import LayOut from "./layOut";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<LayOut />} >
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
