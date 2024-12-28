import React from 'react';

const Contact = () => {
  return (
    <main className="l-main">
      <section className="contact section bd-container" id="contact">
        <div className="contact__container bd-grid">
          <div className="contact__data">
            <span className="section-subtitle contact__initial">İletişim</span>
            <h2 className="section-title contact__initial">Bize Ulaşın</h2>
            <p className="contact__description">
              Restoranımızda bir masa rezerve etmek, yemekler hakkında bilgi almak ve paket servis hizmetimizden yararlanmak isterseniz, bizimle iletişime geçin ve 7/24 hizmet veren sohbet servisimizle hızlıca size yardımcı olalım.
            </p>
          </div>
          <div className="contact__button">
            <a href="" className="button">Şimdi Bize Ulaşın</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;