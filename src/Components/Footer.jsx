import Contact from "./Contact";
import Logo from "../assets/logo.png";
import map from "../assets/map.png"
import email from "../assets/email.png"
import phone from "../assets/phone.png"

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <img src={Logo} className="logo-mobile"></img>
                <div className="business-info">
                    <img src={map} className="contact-icon"></img>
                    <p>2/55 Railway Parade Rocklea QLD 4106</p>
                </div>
                <div className="business-info">
                    <img src={email} className="contact-icon"></img>
                    <p>evergreen.windowsdoor@gmail.com</p>
                </div>
                <div className="business-info">
                    <img src={phone} className="contact-icon"></img>
                    <p>0463 666  777</p>
                </div>
            </div>
            <p className="copyright">&copy; 2024 Evergreen Windows and Door Solutions Pty Ltd. All rights reserved.</p>
        </div>
    );
}

export default Footer;