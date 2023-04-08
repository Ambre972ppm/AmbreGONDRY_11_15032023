// import React from "react";
// import Carroussel from '../../components/Carroussel';
import emptyStar from "../../assets/icons/emptyStar.svg";
import filledStar from "../../assets/icons/filledStar.svg";
import arrowIcon from '../../assets/icons/arrow-action.png';
import { Redirect, useParams } from "react-router-dom";
import { housingList } from "../../data/logements";
import { useState } from 'react';
import '../../utils/styles/HousingPage.css';

import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';



function HousingPage() {
  // récupération de l'Id du logement concerné.
  const { id } = useParams()
  const housingSelected = housingList.find((housing) => housing.id === id );

  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [equipementOpen, setEquipementOpen] = useState(false);

 //ouverture/fermeture des composants en cascade
  function openInfo(setOpen) {
      if(setOpen === setDescriptionOpen) {
        setDescriptionOpen(!descriptionOpen);
      } else if(setOpen === setEquipementOpen) {
        setEquipementOpen(!equipementOpen);
      } 
  }

  let arrowPrevious = "previous-picture";
  	let arrowNext = "next-picture";
      if (housingSelected.pictures.length === 1) {
              arrowPrevious += " hidden";
              arrowNext += " hidden";
          }
  	let [pictureId, setId] = useState(0);
  
  	function next() {
  		pictureId === housingSelected.pictures.length - 1 ? setId(0) : setId(pictureId + 1);
  	}
  	function previous() {
  		pictureId === 0 ? setId(housingSelected.pictures.length - 1) : setId(pictureId - 1);
  	}
  

  const housingRate = [];
	for (let i = 0; i < 5; i++) {
		housingRate.push(i < housingSelected.rating ? filledStar : emptyStar);
	}

  if (housingSelected === undefined) {
    return <Redirect to={`/*`} />;
  } 

  return (
    // <React.Fragment>
      <div key={housingSelected.id} className="Housing-page">
          {/* <Carroussel key={housingSelected.id} id={housingSelected.id} title={housingSelected.title} cover={housingSelected.pictures} /> */}
        <div key={id} className="housing-page-banner-carroussel">
         <img src={arrowLeft} className={arrowPrevious} onClick={previous} alt="précédente" />
         <img className='housing-page-banner-cover' src={housingSelected.pictures[pictureId]} alt={`${housingSelected.title} cover`} />
         <p className="picture-count">
            {pictureId + 1}/{housingSelected.pictures.length}
          </p>
         <img src={arrowRight} className={arrowNext} onClick={next} alt="suivante" />
      </div>

      <div className="housing-page-informations">
        <div className="housing-page-header">
            <div className="housing-page-titles">
              <h1>{housingSelected.title}</h1>
              <h2>{housingSelected.location}</h2>
            </div>
            <div className="housing-tags">
              {housingSelected.tags.map((tag, index) => (
                <span key={index} className="housing-tag">{tag}</span>
              ))}
            </div>
          </div>
          
          <div className="housing-page-indications">
            <div className="housing-page-location-owner">
              <h3>{housingSelected.host.name}</h3>
              <img src={housingSelected.host.picture} alt={housingSelected.host.name} title={housingSelected.host.name} />
            </div>
            <div className="housing-rate">
              {housingRate.map((elt, index) => (
                <img key={index} src={elt} alt="rating star" />
              ))}
            </div>
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
    // </React.Fragment>
  );
}
  
export default HousingPage;
  