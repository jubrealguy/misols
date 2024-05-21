import logo from "./assets/logo.png"

const Header = () => {
    return (
        <header class="header">
            <div class="header__logo-box">
                <img src={logo} alt="logo" class="header__logo" />
            </div>
            <div class="header__text-box">
                <h1 class="heading__primary">
                    <span class="heading__primary--main">misols interior</span>
                    <span class="heading__primary--sub">furnishing to taste and comfort</span>
                </h1>
                <a href="##" class="btn btn--white btn--animated">check our projects</a>
            </div>
        </header>
    )
}

export default Header