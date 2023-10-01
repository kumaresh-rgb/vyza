import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home  from './pages/Home'
import MoreServices from './pages/MoreServices'
import  About  from './pages/About'
import  Contact   from './pages/Contact'
import Blog from './pages/Blog';
import Header from './pages/Header'
import Footer from './pages/Footer'

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/MoreServices" element={<MoreServices/>}/>
        <Route exact path="/Contact" element={<Contact/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/About" element={<Blog/>}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    
    </div>
  )
}

export default App