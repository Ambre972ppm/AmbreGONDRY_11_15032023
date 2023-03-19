import { useState, useEffect } from 'react'
import HousingItem from '../HousingItem'

function HousingList() {
  const [housingListData, setHousingListData] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchHousingList() {
      try {
        const response = await fetch(`./data/logement.json`)
        const { housingListData } = await response.json()
        setHousingListData(housingListData)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {}
    }
    fetchHousingList()
  }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div className="background">
      <div className="location-card-info">
          {housingListData.map((location) => <HousingItem key={location.id} location={location}/>)}
      </div>
    </div>
  )

}
  
  export default HousingList;
  