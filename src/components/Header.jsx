import headerLogo from '../images/Chef Claude Icon.png'

function Header() {
    return(
        <>
            <header>
                <img src={headerLogo} alt="Logo" />
                <span className="logo-name">Chef Hugging Face</span>
            </header>
        </>
    )
}

export default Header