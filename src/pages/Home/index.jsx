import Banner from '../../components/Banner';
import HousingList from '../../components/HousingList';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <Banner src={require("../../assets/imgs/home.png")} alt="kasa banner nature" title="Chez vous, partout et ailleurs" />
      <HousingList />
    </div>
  );
}

export default Home;
