import { Redirect, useParams } from "react-router-dom";
import { housingList } from "../../data/logements";
import '../../utils/styles/HousingPage.css'

function HousingPage() {

  const { id } = useParams()

  const housingSelected = housingList.find((housing) => housing.id === id );

		if (housingSelected === undefined) {
			return <Redirect to={`/*`} />;
		} 

    return (
      <div key={housingSelected.id} className="Housing-page">
          <div className="housing-page-banner">
            <img className='housing-page-banner-cover' src={housingSelected.cover} alt={`${housingSelected.title} cover`} />
          </div>

          <h1>{housingSelected.title}</h1>
          <h2>{housingSelected.location}</h2>
      </div>
    );
  }
  
  export default HousingPage;
  