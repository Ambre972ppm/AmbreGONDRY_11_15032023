
import banner from '../../assets/imgs/home.png'
import './Banner.css';

function Banner() {
  return (
    <div className="banner-img">
        <img src={banner} alt="kasa banner nature" />
        <h2 className='banner-img-quote'>Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export default Banner;
