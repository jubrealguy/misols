import logo from "../assets/logo.png"

const Header = () => {
    return (
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
    )
}

export default Header