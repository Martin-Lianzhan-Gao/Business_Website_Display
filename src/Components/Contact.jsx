import map from "../assets/map.png"
import email from "../assets/email.png"
import phone from "../assets/phone.png"
import React from "react";

const Contact = React.forwardRef((props, ref) => {
    return (
        <div className="contact-section" ref={ref}>
            <div className="contact-content">
                <h1>Contact us</h1>
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
        </div>
    );
});

export default Contact;