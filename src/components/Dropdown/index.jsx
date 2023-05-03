import arrowIcon from '../../assets/icons/arrow-action.png';
import { useState } from 'react';
import './Dropdown.css'


function Dropdown ({ id, title, content }) {

    const [isOpen, openDropdown] = useState(false);

    //  ouverture/fermeture du dropdown
    function openInfo() {
        openDropdown(!isOpen);
    }

	return (
            <aside key={id}>
                <div className={`dropdown-info-header ${
                isOpen ? '' : 'close'}`} 
                    onClick={() => openInfo(openDropdown)}>
                    <h2 className="housing-page-info-title">{title}</h2>
                    <img
                    src={arrowIcon}
                    alt="ouvrir equipement"
                    onClick={() => openInfo(openDropdown)}/>
                </div>
                <ul
                    className={`dropdown-info-description ${
                    isOpen ? '' : 'hidden'
                    }`}
                >
                    {content}
                </ul>
            </aside>
	)
}

export default Dropdown