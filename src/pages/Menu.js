import React from 'react';

const Menu = () => {
  return (
    <main className="l-main">
      <section className="menu section bd-container" id="menu">
        <span className="section-subtitle">Menü</span>

        <div className="menu__container bd-grid">
          <div className="menu__content">
            <img src="./assets/images/plate1.png" alt="Barbekü Salatası" className="menu__img" />
            <h3 className="menu__name">Barbekü Salatası</h3>
            <span className="menu__detail">Salata</span>
            <span className="menu__preci">130 ₺</span>
            <a href="" className="button menu__button">
              <i className="bx bx-cart-alt"></i>
            </a>
          </div>

          <div className="menu__content">
            <img src="./assets/images/plate2.png" alt="Balık Salatası" className="menu__img" />
            <h3 className="menu__name">Balık Salatası</h3>
            <span className="menu__detail">Salata</span>
            <span className="menu__preci">115 ₺</span>
            <a href="" className="button menu__button">
              <i className="bx bx-cart-alt"></i>
            </a>
          </div>

          <div className="menu__content">
            <img src="./assets/images/plate3.png" alt="Ispanak Salatası" className="menu__img" />
            <h3 className="menu__name">Ispanak Salatası</h3>
            <span className="menu__detail">Salata</span>
            <span className="menu__preci">110 ₺</span>
            <a href="" className="button menu__button">
              <i className="bx bx-cart-alt"></i>
            </a>
          </div>

          <div className="menu__content">
            <img src="./assets/images/plate4.png" alt="Sezar Salatası" className="menu__img" />
            <h3 className="menu__name">Sezar Salatası</h3>
            <span className="menu__detail">Salata</span>
            <span className="menu__preci">120 ₺</span>
            <a href="" className="button menu__button">
              <i className="bx bx-cart-alt"></i>
            </a>
          </div>

          <div className="menu__content">
            <img src="./assets/images/plate5.png" alt="Avokado Salatası" className="menu__img" />
            <h3 className="menu__name">Avokado Salatası</h3>
            <span className="menu__detail">Salata</span>
            <span className="menu__preci">130 ₺</span>
            <a href="" className="button menu__button">
              <i className="bx bx-cart-alt"></i>
            </a>
          </div>

          <div className="menu__content">
            <img src="./assets/images/plate6.png" alt="Mantı" className="menu__img" />
            <h3 className="menu__name">Mantı</h3>
            <span className="menu__detail">Ev Yemeği</span>
            <span className="menu__preci">180 ₺</span>
            <a href="" className="button menu__button">
              <i className="bx bx-cart-alt"></i>
            </a>
          </div>

          <div className="menu__content">
            <img src="./assets/images/plate7.png" alt="Makarna" className="menu__img" />
            <h3 className="menu__name">Makarna</h3>
            <span className="menu__detail">Ev Yemeği</span>
            <span className="menu__preci">180 ₺</span>
            <a href="" className="button menu__button">
              <i className="bx bx-cart-alt"></i>
            </a>
          </div>

          <div className="menu__content">
            <img src="./assets/images/plate8.png" alt="Somonlu Pizza" className="menu__img" />
            <h3 className="menu__name">Somonlu Pizza</h3>
            <span className="menu__detail">Fast Food</span>
            <span className="menu__preci">240 ₺</span>
            <a href="" className="button menu__button">
              <i className="bx bx-cart-alt"></i>
            </a>
          </div>

          <div className="menu__content">
            <img src="./assets/images/plate9.png" alt="Şikago Pizza" className="menu__img" />
            <h3 className="menu__name">Şikago Pizza</h3>
            <span className="menu__detail">Fast Food</span>
            <span className="menu__preci">260 ₺</span>
            <a href="" className="button menu__button">
              <i className="bx bx-cart-alt"></i>
            </a>
          </div>

          <div className="menu__content">
            <img src="./assets/images/plate10.png" alt="Karışık Pizza" className="menu__img" />
            <h3 className="menu__name">Karışık Pizza</h3>
            <span className="menu__detail">Fast Food</span>
            <span className="menu__preci">260 ₺</span>
            <a href="" className="button menu__button">
              <i className="bx bx-cart-alt"></i>
            </a>
          </div>

          <div className="menu__content">
            <img src="./assets/images/plate11.png" alt="Hamburger" className="menu__img" />
            <h3 className="menu__name">Hamburger</h3>
            <span className="menu__detail">Fast Food</span>
            <span className="menu__preci">200 ₺</span>
            <a href="" className="button menu__button">
              <i className="bx bx-cart-alt"></i>
            </a>
          </div>

          <div className="menu__content">
            <img src="./assets/images/plate12.png" alt="Tavukburger" className="menu__img" />
            <h3 className="menu__name">Tavukburger</h3>
            <span className="menu__detail">Fast Food</span>
            <span className="menu__preci">200 ₺</span>
            <a href="" className="button menu__button">
              <i className="bx bx-cart-alt"></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;