import Carroussel from '../../components/Carroussel';
import emptyStar from "../../assets/icons/emptyStar.svg";
import filledStar from "../../assets/icons/filledStar.svg";
import { Redirect, useParams } from "react-router-dom";
import { housingList } from "../../data/logements";
import '../../utils/styles/pages/HousingPage.css';
import Dropdown from '../../components/Dropdown';


function HousingPage() {
  // récupération de l'Id du logement concerné.
  const { id } = useParams()
  const housingSelected = housingList.find((housing) => housing.id === id );
  let housingEquipements = housingSelected.equipments.map((equipment, index) => (
    <li key={index} className="housing-equipment">{equipment}</li>
  ));

  const housingRate = [];
	for (let i = 0; i < 5; i++) {
		housingRate.push(i < housingSelected.rating ? filledStar : emptyStar);
	}

  if (id === undefined) {
    return <Redirect to={`/*`} />;
  } 

  return (
    <div key={housingSelected.id} className="Housing-page">
      <Carroussel id={housingSelected.id} title={housingSelected.title} pictures={housingSelected.pictures} />

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
        <Dropdown id={housingSelected.id} title="Description" content={housingSelected.description} />
        <Dropdown id={housingSelected.id} title="Equipements" content={housingEquipements} />
      </div>
    </div>
  );
}
  
export default HousingPage;
  