import React from 'react';

const Footer = () => {
  return (
    <footer className="footer section bd-container">
      <div className="footer__container bd-grid">
        <div className="footer__content">
          <a href="index.html" className="footer__logo">Tasty food</a>
          <span className="footer__description">Restorant</span>
          <div>
            <a href="https://www.facebook.com" className="footer__social"><i className='bx bxl-facebook'></i></a>
            <a href="https://www.instagram.com" className="footer__social"><i className='bx bxl-instagram'></i></a>
            <a href="https://x.com" className="footer__social"><i className='bx bxl-twitter'></i></a>
          </div>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Hizmetler</h3>
          <ul>
            <li><a href="/menu" className="footer__link">Menü</a></li>
            <li><a href="/contact" className="footer__link">Paket servis</a></li>
            <li><a href="/contact" className="footer__link">Rezervasyon</a></li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Bilgi</h3>
          <ul>
            <li><a href="/contact" className="footer__link">Bize Ulaşın</a></li>
            <li><a href="" className="footer__link">Uygulamamız</a></li>
            <li><a href="" className="footer__link">Hizmet Politikası</a></li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Adres</h3>
          <ul>
            <li>İstanbul - Türkiye</li>
            <li>+90 567 123 4567</li>
            <li>tasty@email.com</li>
          </ul>
        </div>
      </div>
      <p className="footer__copy">&#169; 2024 Tasty food. Tüm hakları saklıdır.</p>
    </footer>
  );
};

export default Footer;