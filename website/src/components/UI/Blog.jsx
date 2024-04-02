import React from "react";
import "../../styles/blog.css";

import videoImg from "../../images/ecom.png";
import articleImg from "../../images/article.png";
import caseStudy from "../../images/societer.png";

const blogData = [
  {
    imgUrl: articleImg,
    title: "Pack Essentiel :",
    desc: [
      "Site Web Basique.",
      "5 Pages .",
      "Design Personnalisé.",
      "Intégration de Médias Sociaux.",
      "Responsive Design",
    ],
    linkUrl: "#",
  },
  {
    imgUrl: caseStudy ,
    title: "Pack Entreprise :",
    desc:  [
      "Site Web Avancé.",
      "10 Pages.",
      "Responsive Design.",
      "SEO de Base.",
    ],
    linkUrl: "#",
  },
  {
    imgUrl: videoImg,
    title:  "Pack E-Commerce :",
    desc:[
      "Boutique en Ligne.",
      "Panier d'Achat Sécurisé.",
      "Intégration de Paiement en Ligne.",
      "Gestion des Stocks.",
    ],
    linkUrl: "#",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="blog__top-content">
          <h6 className="subtitle">Optimisé</h6>
          <h2>
            Nos meilleurs 
            <span className="highlight"> Solutions</span>
          </h2>
        </div>

        <div className="blog__wrapper">
          {blogData.map((item, index) => (
            <div className="blog__item" key={index}>
              <h3>{item.title}</h3>
              <div className="blog__img">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="blog__desc" dangerouslySetInnerHTML={{ __html: `<ul>${item.desc.map(d => `<li>${d}</li>`).join('')}</ul>` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
