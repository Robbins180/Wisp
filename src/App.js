import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import Products from './components/pages/Products/Products';
import Services from './components/pages/Services/Services';
import Footer from './components/pages/Footer.js/Footer';
import SignUp from './components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/services' element={<Services/>} />
        <Route exact path='/products' element={<Products/>} />
        <Route exact path='/sign-up' element={<SignUp/>} />
      
      </Routes>
      <Footer />
    </Router>
  

    
  );
}

export default App;
