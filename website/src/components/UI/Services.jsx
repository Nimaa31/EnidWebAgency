import React from "react";
import "../../styles/services.css";

const serviceData = [
  {
    icon: "ri-code-s-slash-line",
    title: "Créations de site web",
    desc: "Transformez votre vision en réalité numérique avec notre expertise en création de sites web sur mesure.",
  },

  {
    icon: "ri-settings-3-line ",
    title: "Maintenance",
    desc: "Assurez la performance optimale de votre site grâce à notre service de maintenance rigoureuse .",
  },

  {
    icon: "ri-landscape-line",
    title: "Graphics Design",
    desc: "Réinventez votre identité visuelle avec notre équipe, prête à transcender votre marque.",
  },
  {
    icon: "ri-rocket-line",
    title: "Digital Marketing",
    desc: "Élaborez une stratégie gagnante et propulsez votre entreprise vers de nouveaux sommets .",
  },
];

const Services = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="services__top-content">
          <h6 className="subtitle">Nos services</h6>
          <h2>Chez EnidWeb, votre partenaire privilégié pour une présence en ligne exceptionnelle.</h2>
          <h2 className="highlight">Transformons vos rêves digitaux en réalité virtuelle!</h2>
        </div>

        <div className="service__item-wrapper">
          {serviceData.map((item, index) => (
            <div className="services__item" key={index}>
              <span className="service__icon">
                <i class={item.icon}></i>
              </span>
              <h3 className="service__title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
