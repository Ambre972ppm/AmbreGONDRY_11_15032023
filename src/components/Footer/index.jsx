import { Link } from 'react-router-dom'
import whitelogo from '../../assets/logos/whitelogo.svg'
import '../../styles/Footer.css'

function Footer() {
    return (<div className="kaza-footer">
                <Link className="kaza-footer-logo" to="/">
                    <img src={whitelogo} alt='Kaza' className='kaza-footer'/>
                </Link>
                <div className="kaza-footer-quotes">
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>)
}

export default Footer                                                                                                                                                                            