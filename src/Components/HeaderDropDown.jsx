import logo from "../assets/logo.png";
import dropdown from "../assets/Dropdown.png"
// import phone from "../assets/phone.png"
import { useState } from "react";

function HeaderDropDown({refs, onScroll}) { 

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e, ref) => { 
        e.preventDefault();
        setIsOpen(!isOpen);
        onScroll(ref);
    }


    return (
        <div className="header-dropdown">
            <img src={logo} className="logo-mobile"></img>
            <div className="header-part">
                <img src={dropdown} className="icon" id="dropdown-icon" onClick={
                    () => {
                        setIsOpen(!isOpen);
                    }
                }></img>
                <div id="quote-part">
                    <button className="quote-btn-mobile"
                        onClick={() => {
                            onScroll(refs.quote)
                        }}
                    >Book Quote</button>
                </div>
            </div>
            <div className={ `dropdown ${(isOpen === true) ? "open" : ""}`}>
                <a href="#"
                    onClick={() => { 
                        setIsOpen(!isOpen);
                    }}
                >HOME</a>
                <a 
                    href="#"
                    onClick={(e) => {
                        handleClick(e, refs.about);
                    }}
                >ABOUT</a>
                <a
                    href="#"
                    onClick={(e) => {
                        handleClick(e, refs.projects);
                    }}
                >PROJECTS</a>
                <a
                    href="#"
                    onClick={(e) => {
                        handleClick(e, refs.contact);
                    }}
                >CONTACT</a>
            </div>
        </div>
    )
}

export default HeaderDropDown;