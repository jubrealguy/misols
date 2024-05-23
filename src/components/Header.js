import logo from "../assets/logo.png"
import React from "react"

const Header = () => {
    const date = new Date()
    const time = date.getHours()
    const greeting = time < 12 ? 'morning' : (time < 18 ? 'afternoon' : 'evening');

    return (
        <React.Fragment>
            <p className ="greeting">Good {greeting} !!!</p>
            <header className="header">
                <div className="header__logo-box">
                    <img src={logo} alt="logo" className="header__logo" />
                </div>
                <div className="header__text-box">
                    <h1 className="heading__primary">
                        <span className="heading__primary--main">misols interior</span>
                        <span className="heading__primary--sub">furnishing to taste and comfort</span>
                    </h1>
                    <a href="##" className="btn btn--white btn--animated">check our projects</a>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header