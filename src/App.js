import "./App.css";

import { Link, Route, Router, Routes } from "react-router-dom";

import { useState } from "react";


import Navbar from "./components/views/NavBarBootstrap"
import HomePage from "./components/views/HomePage";
import ContactUs from "./components/views/ContactUs";
import NovelRenderer from "./components/views/Novels"
import Register from "./components/views/Register"
import Login from "./components/views/Login"
import Profile from "./components/views/Profile"
import NovelDetailPage from "./components/views/NovelDetailPage";

//import Footer from "./components/views/Footer"

import Footer from "./components/views/FooterBeta"
import FlashMesage from "./components/views/FlashMesage.tsx";
import SnackbarAlert from "./components/views/SnackbarAlert.tsx"

import NovelReadPage from "./components/views/NovelReadPage.jsx";



function App() {

  return (
    <>
  {Navbar()}
   
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<ContactUs />} />
        <Route path="/novels" element={<NovelRenderer />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/novels/detail" element={<NovelDetailPage/>} />
        <Route path="/novels/detail/read" element={<NovelReadPage/>} />

 


    </Routes>


    <div style={{marginTop:"10%"}}> {Footer()}</div>
  
   
    </>
    
  );
}

export default App;
