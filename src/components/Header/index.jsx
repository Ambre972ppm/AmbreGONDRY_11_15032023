import logo from '../../assets/logos/logo.png'
import '../../styles/Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (<div className="kaza-header">
                <Link className="kaza-header-logo" to="/">
                    <img src={logo} alt='Kaza' className='kaza-header'/>
                </Link>
                <div className="kaza-header-links">
                    <Link to="/">Accueil</Link>
                    <Link to="/about">A propos</Link>
                </div>
            </div>)
}

export default Header