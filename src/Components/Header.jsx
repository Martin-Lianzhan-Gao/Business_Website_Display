import logo from "../assets/logo.png";
import phone from "../assets/phone.png"


function Header({ refs, onScroll }) {

    const handleClick = (e, ref) => {
        e.preventDefault();
        onScroll(ref);
    }

    return (
        <div className="header">
            <div className="header-content">
                <img src={ logo } alt="Logo" className="logo" />
                <nav className="header-nav">
                    <ul className={ "header-nav-list" }>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#"
                            onClick={(e) => { 
                                handleClick(e, refs.about)
                            }}
                        >ABOUT</a></li>
                        <li><a href="#"
                            onClick={(e) => {
                                handleClick(e, refs.projects)
                            }}
                        >PROJECTS</a></li>
                        <li><a href="#"
                            onClick={(e) => {
                                handleClick(e, refs.contact)
                            }}
                        >CONTACT</a></li>
                    </ul>
                </nav>
                <div id="header-contact">
                    <img src={phone} alt="Phone Logo" className="phone" />
                    <p className="phone-number">0463 666  777</p>
                    <button id="quote-btn"
                        onClick={(e) => {
                            handleClick(e, refs.quote)
                        }}
                    >Book Quote</button>
                </div>
            </div>
        </div>
    );
}

export default Header;