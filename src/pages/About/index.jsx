import banner from '../../assets/imgs/about.png';
import arrowIcon from '../../assets/icons/arrow-action.png';
import '../../utils/styles/About.css';
import { useState } from 'react';

function About() {
  const [reliabilityOpen, setReliabilityOpen] = useState(false);
  const [respectOpen, setRespectOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [securityOpen, setSecurityOpen] = useState(false);

  function openInfo(setOpen) {
    if(setOpen === setReliabilityOpen) {
      setReliabilityOpen(!reliabilityOpen);
    } else if(setOpen === setRespectOpen) {
      setRespectOpen(!respectOpen);
    } else if(setOpen === setServiceOpen) {
      setServiceOpen(!serviceOpen);
    } else if(setOpen === setSecurityOpen) {
      setSecurityOpen(!securityOpen);

    }
  }

  return (
    <div className="About-page">
      <div className="banner-img">
        <img src={banner} alt="kasa banner nature" />
      </div>
      <div className="about-page-content">
        <aside className="about-page-info reliability">
          <div className={`about-page-info-header ${
              reliabilityOpen ? '' : 'close'
            }`} 
              onClick={() => openInfo(setReliabilityOpen)}>
            <h2 className="about-page-info-title">Fiabilité</h2>
            <img
              src={arrowIcon}
              alt="ouvrir fiabilité"
              onClick={() => openInfo(setReliabilityOpen)}

            />
          </div>
          <p
            className={`about-page-info-description ${
              reliabilityOpen ? '' : 'hidden'
            }`}
          >
            Les annonces postées sur Kasa garantissent une fiabilité totale.
            Les photos sont conformes aux logements, et toutes les informations
            sont régulièrement vérifiées par nos équipes.
          </p>
        </aside>

        <aside className='about-page-info respect'>
          <div className={`about-page-info-header ${
              respectOpen ? '' : 'close'
            }`} 
              onClick={() => openInfo(setRespectOpen)}>
              <h2 className='about-page-info-title'>Respect</h2>
              <img
                src={arrowIcon}
                alt="ouvrir fiabilité"
                onClick={() => openInfo(setRespectOpen)}
              />
            </div>
            <p
              className={`about-page-info-description ${
                respectOpen ? '' : 'hidden'
              }`}
            >
              La bienveillance fait partie des valeurs fondatrices de Kasa. 
              Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
            </p>
          </aside>

          <aside className='about-page-info service'>
          <div className={`about-page-info-header ${
              serviceOpen ? 'open' : 'close'
            }`} 
            onClick={() => openInfo(setServiceOpen)}>
              <h2 className='about-page-info-title'>Service</h2>
              <img
                src={arrowIcon}
                alt="ouvrir fiabilité"
                onClick={() => openInfo(setServiceOpen)}

              />
          </div>
            <p
              className={`about-page-info-description ${
                serviceOpen ? 'open' : 'hidden'
              }`}
            >
              Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
              N'hésitez pas à nous contacter si vous avez la moindre question.
            </p>
          </aside>

          <aside className='about-page-info security'>
            <div className={`about-page-info-header ${
              securityOpen ? 'open' : 'close'
            }`}  
              onClick={() => openInfo(setSecurityOpen)}>
              <h2 className='about-page-info-title'>Sécurité</h2>
              <img
                src={arrowIcon}
                alt="ouvrir fiabilité"
                onClick={() => openInfo(setSecurityOpen)}

              />
            </div>
            <p
              className={`about-page-info-description ${
                securityOpen ? 'open' : 'hidden'
              }`}
            >
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
              chaque logement correspond aux critères de sécurité établis par nos services. 
              En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
              Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </aside>

      </div>
    </div>
  );
}
  
  export default About;
  