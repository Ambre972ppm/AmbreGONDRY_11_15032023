
import './Banner.css';

function Banner(props) {
  return (
    <div className="banner-img">
        <img src={props.src} alt={props.alt} />
        <h2 className='banner-img-quote'>{props.title}</h2>
    </div>
  );
}

export default Banner;
