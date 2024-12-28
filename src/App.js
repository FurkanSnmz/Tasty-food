import React from 'react';
import './styles/style.css'; 
import './styles/style.scss'; 
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollTop />
      </div>
    </Router>
  );
}

export default App;