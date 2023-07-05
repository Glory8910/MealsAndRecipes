import { useState,useEffect } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route,Router } from "react-router-dom";
import Details from './Components/Details/Details';
import CheckOut from './Components/CheckOut/CheckOut';
import Purchase from './Components/Purchase/Purchase';

function App() {
 

  return (
    
    <Routes>
        <Route path="/" element={<Home />}/>
         
          <Route path="/det/:id" element={<Details/>} />
          <Route path="/checkout" element={<CheckOut/>}/>
          
          <Route path="/purchase" element={<Purchase/>}/>
          
       
      </Routes>
      
    
  );
}

export default App;
