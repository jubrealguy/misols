import { useState } from "react";

const Navigation = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);


    const handleClick = (e, sectionId) => {
        e.preventDefault();
        setIsVisible(isVisible);
        setIsCheckboxChecked(false);
        const section = document.getElementById(sectionId);
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        }
      };

    

    return (<>
        <nav className="navigation">
            <input type="checkbox" className="navigation__checkbox" checked={isCheckboxChecked} onChange={(e) => setIsCheckboxChecked(e.target.checked)} />

            <label for="navi-toggle" className="navigation__button" id="navi-toggle" >
                <span className="navigation__icon">&nbsp;</span>
            </label>

            { isVisible && <div className="navigation__background"></div> }
            {
                isVisible && (
                <div className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item">
                            <a href="www.facebook.com" onClick={(e) => handleClick(e, 'about')} className="navigation__link"><span>01</span>about us</a>
                        </li>
                        <li className="navigation__item">
                            <a href="#features" onClick={(e) => handleClick(e, 'features')} className="navigation__link"><span>02</span>why us</a>
                        </li>
                        <li className="navigation__item">
                            <a href="#projects" onClick={(e) => handleClick(e, 'projects')} className="navigation__link"><span>03</span>projects</a>
                        </li>
                        <li className="navigation__item">
                            <a href="#stories" onClick={(e) => handleClick(e, 'stories')} className="navigation__link"><span>04</span>stories</a>
                        </li>
                        <li className="navigation__item">
                            <a href="#book" onClick={(e) => handleClick(e, 'book')} className="navigation__link"><span>05</span>booking</a>
                        </li>
                    </ul>
                </div>
                )
            }
        </nav>
        </>
    )
}

export default Navigation