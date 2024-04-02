import React from "react";
import "../../styles/hero.css";

import heroDarkImg from "../../images/hero-img.png";
import lightImg from "../../images/light-hero-bg.jpg";

const Hero = ({ theme }) => {
  return (
    <section className="hero__section" id="home">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2>EnidWeb, votre partenaire digital pour créer</h2>
              <h2 className="highlight">des expériences en ligne exceptionnelles.</h2>
            </div>
            <p className="description">   
            De la conception innovante au développement précis, nous façonnons votre présence numérique avec expertise et passion.
            </p>

            <div className="hero__btns" >
            <a href="#contact" className="secondary__btn2">
                  Demandez votre Devis
              </a>
            </div>
          </div>

          <div className="hero__img">
            <img
              src={theme === "light-theme" ? lightImg : heroDarkImg}
              alt="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
