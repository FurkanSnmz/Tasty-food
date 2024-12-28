// About.js
import React from 'react';

const About = () => {
  return (
    <main className="l-main">
      <section className="about section bd-container" id="about">
        <div className="about__container bd-grid">
          <div className="about__data">
            <span className="section-subtitle about__initial">Hakkımızda</span>
            <h2 className="section-title about__initial">
              En lezzetli yemekleri <br /> biz pişiriyoruz.
            </h2>
            <p className="about__description">
              Şehirdeki en lezzetli yemekleri, mükemmel müşteri hizmetleriyle ve en uygun fiyatlarla
              sunuyoruz. Bizi ziyaret edin; çünkü her bir tabağımızda taze ve kaliteli malzemeler,
              uzun yıllardır süregelen deneyimle hazırlanan özenli tarifler, ve sıcak, samimi bir atmosfer
              sizi bekliyor. Sevdiklerinizle birlikte, sadece yemek değil, aynı zamanda unutulmaz bir
              deneyim yaşamanız için her detay titizlikle düşünülerek hazırlanıyor. Sizlere hem göze hem
              damağa hitap eden eşsiz lezzetler sunarken, her zaman en taze ve doğal ürünleri kullanarak
              sağlıklı bir yemek deneyimi sunmayı hedefliyoruz. Sizi ağırlamak ve farkımızı göstermek için
              sabırsızlanıyoruz!
            </p>
            <a href="/about" className="button">←</a>
          </div>
          <img src="./assets/images/about.jpg" alt="About Us" className="about__img" />
        </div>
      </section>
    </main>
  );
};

export default About;