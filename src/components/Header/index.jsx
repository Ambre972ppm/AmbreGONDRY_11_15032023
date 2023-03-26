import logo from '../../assets/logos/logo.png'
import '../../utils/styles/Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (<div className="kasa-header">
                <Link className="kasa-header-logo" to="/">
                    <img src={logo} alt='kasa' className='kasa-header'/>
                </Link>
                <div className="kasa-header-links">
                    <Link to="/">Accueil</Link>
                    <Link to="/about">A propos</Link>
                </div>
            </div>)
}

export default Header