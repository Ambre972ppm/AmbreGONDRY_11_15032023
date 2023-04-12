import banner from '../../assets/imgs/about.png';
import Dropdown from '../../components/Dropdown';
import '../../utils/styles/pages/About.css';

function About() {

  const reliabilityContent = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
  const respectContent = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  const serviceContent = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
  const securityContent = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";


  return (
    <div className="About-page">
      <div className="banner-img">
        <img src={banner} alt="kasa banner nature" />
      </div>
      <div className="about-page-content">
        <Dropdown id='reliability' title="Fiabilité" content={reliabilityContent} />
        <Dropdown id='respect' title="Respect" content={respectContent} />
        <Dropdown id='service' title="Service" content={serviceContent} />
        <Dropdown id='security' title="Sécurité" content={securityContent} />
      </div>
    </div>
  );
}
  
  export default About;
  