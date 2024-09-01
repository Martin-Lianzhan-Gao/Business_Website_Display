import logo from "../assets/logo.png";
import phone from "../assets/phone.png"


function Header() { 
    return (
        <div className="header">
            <div className="header-content">
                <img src={ logo } alt="Logo" className="logo" />
                <nav className="header-nav">
                    <ul className={ "header-nav-list" }>
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#services">PROJECTS</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                </nav>
                <div id="header-contact">
                    <img src={phone} alt="Phone Logo" className="phone" />
                    <p className="phone-number">0463 666  777</p>
                    <button id="quote-btn">Get A Free Quote</button>
                </div>
                
            </div>
        </div>
    );
}

export default Header;