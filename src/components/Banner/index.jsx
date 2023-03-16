
import banner from '../../assets/imgs/IMG.png'
import '../../styles/Banner.css';

function Banner() {
  return (
    <div className="banner-img">
        <img src={banner} alt="Kaza banner nature" />
        <h2 className='banner-img-quote'>Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export default Banner;
