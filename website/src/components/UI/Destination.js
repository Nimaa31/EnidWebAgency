
import Moments from "../../images/prp1.jpg";
import Telo from "../../images/prp2.jpg";
import Yacth  from "../../images/prp22.jpg";
import Urus from "../../images/prp11.jpg";
import "../../styles/DestinationStyles.css";
import DestinationData from "./DestinationData";


const Destination = () => {
    return (
      <div  id='obectif' className="destination">
        <div className="container">
        <div className="blog__top-content">
          <h6 className="subtitle">Objectifs</h6>
          <h2>
          Nos engagements et objectifs chez 
            <span className="highlight"> EnideWeb.</span>
          </h2>
        </div>
  
        <DestinationData
          className="first-des"
          heading="Excellence Technique "
          text="
          Dans notre agence de développement web, notre premier objectif est de garantir une excellence technique sans compromis. 
          Nous nous efforçons constamment d'adopter les dernières technologies et les meilleures pratiques pour assurer des solutions web de qualité supérieure.
           De la conception à la mise en œuvre, notre équipe s'engage à créer des sites web performants, sécurisés et évolutifs, répondant ainsi aux normes les plus élevées de l'industrie..
           "
          img1={Moments}
          img2={Urus}
        />
  
        <DestinationData
          className="first-des-reverse"
          heading="Collaboration Personnalisée"
          text="Chez EnideWeb, nous croyons fermement en la puissance de la collaboration. 
          Notre deuxième objectif majeur est de tisser des liens étroits avec nos clients afin de comprendre pleinement leurs besoins et leurs objectifs. 
          En adoptant une approche personnalisée, nous nous engageons à créer des solutions web sur mesure qui reflètent l'identité unique de chaque entreprise.
           Notre équipe dévouée est là pour vous guider à chaque étape, assurant une expérience de développement web transparente et orientée vers la réussite de votre projet."
          img1={Yacth}
          img2={Telo}
        />
        </div>
      </div>
    );
  };
  
  export default Destination; 
