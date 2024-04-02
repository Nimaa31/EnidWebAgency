import React from "react";
import "../../styles/about.css";

import aboutImg from "../../images/about-us.jpg";

const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "Premier Processus Opérationnel",
    desc: " Explorez notre méthode de travail méticuleusement élaborée, garantissant l'excellence de la conception à la réalisation.",
  },

  {
    icon: "ri-team-line",
    title: " Équipe Dédiée",
    desc: " Le succès d'EnidWeb repose sur une équipe passionnée et compétente, déterminée à concrétiser vos projets numériques.",
  },
  {
    icon: "ri-customer-service-2-line",
    title: " Support 24/7",
    desc: " Notre équipe est à votre disposition jour et nuit pour une assistance continue, assurant une expérience client fluide.",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <h6 className="subtitle">A propos de nous</h6>
            <h2>Notre physionomie :</h2>
            <h2 className="highlight"> Découvrez  Nos Engagement.</h2>
            <p className="description about__content-desc">
            EnidWeb, une agence web passionnée, se distingue par son engagement envers l'excellence digitale.
             Forte d'une équipe créative et experte, nous nous consacrons à redéfinir votre présence en ligne. 
             Chaque projet que nous entreprenons est guidé par l'innovation, la précision et un désir profond de créer des solutions web uniques.
            </p>

            <div className="choose__item-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose__us-item" key={index}>
                  <span className="choose__us-icon">
                    <i class={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose__us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about__img">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
