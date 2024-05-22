import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={logo} alt="logo" className="footer__logo" />
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="##" className="footer__link">Company</a></li>
                            <li className="footer__item"><a href="##" className="footer__link">Contact Us</a></li>
                            <li className="footer__item"><a href="##" className="footer__link">Careers</a></li>
                            <li className="footer__item"><a href="##" className="footer__link">Privacy</a></li>
                            <li className="footer__item"><a href="##" className="footer__link">Terms</a></li>
                        </ul>
                    </div>
                
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                    Built by JUBREEL ADEBAYO, a seasoned web developer and CEO of Breeltech Designs with the aid of an online course on ADVANCED CSS WITH SASS. Copyright © by <a href="##" className="footer__link">Jonas Schmedtmann</a>. The site was made for MISOLS INTERIORS for commercial use, Breeltech's very own customer
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer