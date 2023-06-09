import '../../pages/HousingPage/HousingPage.css';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import { useState } from 'react';

function Carroussel({id, title, pictures}) {

    let arrowPrevious = "previous-picture";
	let arrowNext = "next-picture";
    let counter= "picture-count";
    
    // si il n'y a qu'une image masquer les flèches
    if (pictures.length === 1) {
            arrowPrevious += " hidden";
            arrowNext += " hidden";
            counter += "hidden"

    }

	let [pictureId, setId] = useState(0);

	function next() {
		pictureId === pictures.length - 1 ? setId(0) : setId(pictureId + 1);
	}
	function previous() {
		pictureId === 0 ? setId(pictures.length - 1) : setId(pictureId - 1);
	}


    return (
        <div key={id} className="housing-page-banner-carroussel">
            <img src={arrowLeft} className={arrowPrevious} onClick={previous} alt="précédente" />
            <img className='housing-page-banner-cover' src={pictures[pictureId]} alt={`${title} cover`} />
            <p className={counter}>
                {pictureId + 1}/{pictures.length}
            </p>
            <img src={arrowRight} className={arrowNext} onClick={next} alt="suivante" />
        </div>
    )
  }
  
  export default Carroussel