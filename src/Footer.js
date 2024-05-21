import logo from './assets/logo.png'

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer__logo-box">
                <img src={logo} alt="logo" class="footer__logo" />
            </div>

            <div class="row">
                <div class="col-1-of-2">
                    <div class="footer__navigation">
                        <ul class="footer__list">
                            <li class="footer__item"><a href="##" class="footer__link">Company</a></li>
                            <li class="footer__item"><a href="##" class="footer__link">Contact Us</a></li>
                            <li class="footer__item"><a href="##" class="footer__link">Careers</a></li>
                            <li class="footer__item"><a href="##" class="footer__link">Privacy</a></li>
                            <li class="footer__item"><a href="##" class="footer__link">Terms</a></li>
                        </ul>
                    </div>
                
                </div>
                <div class="col-1-of-2">
                    <p class="footer__copyright">
                    Built by JUBREEL ADEBAYO, a seasoned web developer and CEO of Breeltech Designs with the aid of an online course on ADVANCED CSS WITH SASS. Copyright © by <a href="##" class="footer__link">Jonas Schmedtmann</a>. The site was made for MISOLS INTERIORS for commercial use, Breeltech's very own customer
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer