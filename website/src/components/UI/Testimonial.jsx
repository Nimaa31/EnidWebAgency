import React from "react";
import "../../styles/testimonial.css";

import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <section>
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Témoignages</h6>
          <h2>
          La confiance de nos {" "}
            <span className="highlight">Collaborateurs</span>
          </h2>
        </div>

        <div className="slider__wrapper">
          <Slider {...settings}>
            <div className="slider__item">
              <p className="description">
              EnidWeb a surpassé toutes mes attentes. Leur équipe dédiée, leur approche méticuleuse du travail, et leur support 24/7 ont fait de mon projet une véritable réussite. 
              Je recommande vivement EnidWeb pour toute solution numérique de qualité!
              </p>

              <div className="customer__details">
                {/* <div className="customer__img">
                  <img src={ava01} alt="" />
                </div> */}

                <div>
                  <h5 className="customer__name">Manon Lefevre</h5>
                  <p className="description">Chef de Projet IT</p>
                </div>
              </div>
            </div>

            <div className="slider__item">
              <p className="description">
              Collaborer avec EnidWeb a été une expérience remarquable. 
              Leur équipe démontre un niveau de professionnalisme exceptionnel, associé à une créativité qui a véritablement donné vie à notre vision. 
              Nous sommes ravis des résultats et attendons avec impatience de futurs projets ensemble."
              </p>

              <div className="customer__details">
                {/* <div className="customer__img">
                  <img src={ava02} alt="" />
                </div> */}

                <div>
                  <h5 className="customer__name">Nicolas Reynaud</h5>
                  <p className="description"> Secteur de l'Hôtellerie</p>
                </div>
              </div>
            </div>

            <div className="slider__item">
              <p className="description">
              Le support 24/7 d'EnidWeb est un game-changer. Peu importe l'heure, leur équipe est prête à répondre à nos besoins, fournissant un service impeccable. 
              C'est rassurant de savoir que nous avons un partenaire fiable pour tous nos besoins en ligne. Merci, EnidWeb!
              </p>

              <div className="customer__details">
                {/* <div className="customer__img">
                  <img src={ava03} alt="" />
                </div> */}

                <div>
                  <h5 className="customer__name">Camille Martin</h5>
                  <p className="description">Commerçante dans le Secteur de la Mode</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
