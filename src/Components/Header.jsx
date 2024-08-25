import logo from "../assets/logo.png";
import phone from "../assets/phone.png"


function Header() { 
    return (
        <div className="header">
            
            <img src={ logo } alt="Logo" className="logo" />
            
            <nav className="header-nav">
                <ul className={ "header-nav-list" }>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div id="header-contact">
                <img src={phone} alt="Phone Logo" className="phone" />
                <p className="phone-number">0463 666  777</p>
            </div>
            
            
            <button id="quote-btn">Get A Free Quote</button>
        </div>
    );
}

export default Header;