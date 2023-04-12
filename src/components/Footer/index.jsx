import { Link } from 'react-router-dom'
import whitelogo from '../../assets/logos/whitelogo.svg'
import '../../utils/styles/components/Footer.css'

function Footer() {
    return (<div className="kasa-footer">
                <Link className="kasa-footer-logo" to="/">
                    <img src={whitelogo} alt='kasa' className='kasa-footer'/>
                </Link>
                <div className="kasa-footer-quotes">
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>)
}

export default Footer                                                                                                                                                                            