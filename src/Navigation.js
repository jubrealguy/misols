const Navigation = () => {
    return (
        <div class="navigation">
            <input type="checkbox" className="navigation__checkbox" />

            <label for="navi-toggle" className="navigation__button" id="navi-toggle">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background"></div>

            <div className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#about" className="navigation__link"><span>01</span>about us</a></li>
                    <li className="navigation__item"><a href="#about" className="navigation__link"><span>02</span>why us</a></li>
                    <li className="navigation__item"><a href="#about" className="navigation__link"><span>03</span>projects</a></li>
                    <li className="navigation__item"><a href="#about" className="navigation__link"><span>04</span>stories</a></li>
                    <li className="navigation__item"><a href="#about" className="navigation__link"><span>05</span>booking</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation