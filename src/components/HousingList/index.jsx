import { housingList } from '../../data/logements';
import Card from '../Card';
import React from "react";
import '../../utils/styles/HousingList.css'

function HousingList() {

  return (

      <React.Fragment>
        <div className="kasa-housing-list">
          {housingList.map((housing) => (
            <Card key={housing.id} id={housing.id} title={housing.title} cover={housing.cover} />
          ))}
        </div>
      </React.Fragment>
    );

  }

  
  export default HousingList;
  