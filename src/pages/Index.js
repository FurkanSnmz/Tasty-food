import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';  

import Header from './Header';
import Footer from './Footer';
import App from './App';

const Home = () => {
  return (
    <main className="l-main">
      <section className="home" id="home">
        <div className="home__container bd-container bd-grid">
          <div className="home__data">
            <h1 className="home__title">Tasty food</h1>
            <h2 className="home__subtitle">
              Haftanın en iyi <br /> yemeğini deneyin.
            </h2>
            <a href="/Menu" className="button">
              Menüyü incele
            </a>
          </div>
          <img src="./assets/images/home.png" alt="Tasty Food" className="home__img" />
        </div>
      </section>
    </main>
  );
};

const About = () => {
  return (
    <section className="about section bd-container" id="about">
      <div className="about__container bd-grid">
        <div className="about__data">
          <span className="section-subtitle about__initial">Hakkımızda</span>
          <h2 className="section-title about__initial">En lezzetli yemekleri <br /> biz pişiriyoruz.</h2>
          <p className="about__description">
            Şehirdeki en lezzetli yemekleri, mükemmel müşteri hizmetleriyle ve en uygun fiyatlarla sunuyoruz. Bizi ziyaret edin!
          </p>
          <a href="/About" className="button">Daha fazla</a>
        </div>
        <img src="./assets/images/about.jpg" alt="About Us" className="about__img" />
      </div>
    </section>
  );
};

const Menu = () => {
  return (
    <section className="menu section bd-container" id="menu">
      <h2 className="section-title">Haftanın Menüsü</h2>
      <div className="menu__container bd-grid">
        <div className="menu__content">
          <img src="img/plate1.png" alt="Barbekü Salatası" className="menu__img" />
          <h3 className="menu__name">Barbekü Salatası</h3>
          <span className="menu__detail">Salata</span>
          <span className="menu__preci">130 ₺</span>
        </div>
        <div className="menu__content">
          <img src="img/plate2.png" alt="Balık Salatası" className="menu__img" />
          <h3 className="menu__name">Balık Salatası</h3>
          <span className="menu__detail">Salata</span>
          <span className="menu__preci">115 ₺</span>
        </div>
        <div className="menu__content">
          <img src="img/plate3.png" alt="Ispanak Salatası" className="menu__img" />
          <h3 className="menu__name">Ispanak Salatası</h3>
          <span className="menu__detail">Salata</span>
          <span className="menu__preci">110 ₺</span>
        </div>
      </div>
    </section>
  );
};

const index = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<index />);