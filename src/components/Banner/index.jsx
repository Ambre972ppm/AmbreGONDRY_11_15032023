
// import banner from '../../assets/imgs/home.png'
import './Banner.css';

function Banner({src, alt, title}) {
  return (
    <div className="banner-img">
        <img src={src} alt={alt} />
        <h2 className='banner-img-quote'>{title}</h2>
    </div>
  );
}

export default Banner;
