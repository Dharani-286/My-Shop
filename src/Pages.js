import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Login.js'
import Home from './Home.js'
const Pages = () => {
    return(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
    );
};

export default Pages