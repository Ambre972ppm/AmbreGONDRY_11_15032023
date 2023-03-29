import '../../utils/styles/HousingPage.css';
import { Redirect, useParams } from "react-router-dom";
import { housingList } from "../../data/logements";
import emptyStar from "../../assets/icons/emptyStar.svg";
import filledStar from "../../assets/icons/filledStar.svg";
import arrowIcon from '../../assets/icons/arrow-action.png';
import { useState } from 'react';


function HousingPage() {

  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [equipementOpen, setEquipementOpen] = useState(false);

  function openInfo(setOpen) {
      if(setOpen === setDescriptionOpen) {
        setDescriptionOpen(!descriptionOpen);
      } else if(setOpen === setEquipementOpen) {
        setEquipementOpen(!equipementOpen);
      } 
  }

  const { id } = useParams()
  const housingSelected = housingList.find((housing) => housing.id === id );
  const housingRate = [];
	for (let i = 0; i < 5; i++) {
		housingRate.push(i < housingSelected.rating ? filledStar : emptyStar);
	}

		if (housingSelected === undefined) {
			return <Redirect to={`/*`} />;
		} 

    return (
      <div key={housingSelected.id} className="Housing-page">
          <div className="housing-page-banner">
            <img className='housing-page-banner-cover' src={housingSelected.cover} alt={`${housingSelected.title} cover`} />
          </div>

          <div className="housing-page-header">
            <div className="housing-page-titles">
              <h1>{housingSelected.title}</h1>
              <h2>{housingSelected.location}</h2>
            </div>
            <div className="housing-page-location-owner">
              <h3>{housingSelected.host.name}</h3>
              <img src={housingSelected.host.picture} alt={housingSelected.host.name} title={housingSelected.host.name} />
            </div>
          </div>
          

          <div className="housing-page-indications">
            <div className="housing-tags">
              {housingSelected.tags.map((tag, index) => (
                <span key={index} className="housing-tag">{tag}</span>
              ))}
            </div>
            <div className="housing-rate">
              {housingRate.map((elt, index) => (
                <img key={index} src={elt} alt="rating star" />
              ))}
				    </div>
          </div>

          <div className="housing-page-content">
            <aside className="housing-page-info">
              <div className={`housing-page-info-header ${
                  descriptionOpen ? '' : 'close'
                }`} 
                  onClick={() => openInfo(setDescriptionOpen)}>
                <h2 className="housing-page-info-title">Description</h2>
                <img
                  src={arrowIcon}
                  alt="ouvrir description"
                  onClick={() => openInfo(setDescriptionOpen)}

                />
              </div>
              <p
                className={`housing-page-info-description ${
                  descriptionOpen ? '' : 'hidden'
                }`}
              >
                {housingSelected.description}
              </p>
            </aside>
            <aside className="housing-page-info">
              <div className={`housing-page-info-header ${
                  equipementOpen ? '' : 'close'
                }`} 
                  onClick={() => openInfo(setEquipementOpen)}>
                <h2 className="housing-page-info-title">Equipement</h2>
                <img
                  src={arrowIcon}
                  alt="ouvrir equipement"
                  onClick={() => openInfo(setEquipementOpen)}

                />
              </div>
              <ul
                className={`housing-page-info-description ${
                  equipementOpen ? '' : 'hidden'
                }`}
              >
                {housingSelected.equipments.map((equipment, index) => (
                <li key={index} className="housing-equipment">{equipment}</li>
              ))}
              </ul>
            </aside>
        </div>
      </div>
    );
  }
  
  export default HousingPage;
  