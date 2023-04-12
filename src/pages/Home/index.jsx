import Banner from '../../components/Banner';
import HousingList from '../../components/HousingList';
import '../../utils/styles/pages/Home.css';

function Home() {
  return (
    <div className="Home">
      <Banner />
      <HousingList />
    </div>
  );
}

export default Home;
