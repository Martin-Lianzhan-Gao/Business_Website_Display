import { useState } from "react";
import React from "react";


const Services = React.forwardRef((props, ref) => { 

    return (
        <div className="services" ref={ref}>
            <h1>Our Services</h1>
            <p id="intro">Customise, Supply and Installation of:</p>
            <div className="service-list">
                <ul>
                    <li>Sliding Windows & Doors</li>
                    <li>Bi-fold Windows & Doors</li>
                    <li>Double Glazed Windows</li>
                    <li>Awning Windows</li>
                    <li>Hinged Doors</li>
                    <li>Patio Enclosure / Sunrooms</li>
                    <li>Security CrimSafe Screens</li>
                    <li>Fly/Insect Screens</li>
                </ul>
            </div>
            <p id="announcement">We are committed to provide quality and affordable windows & door services.</p>

        </div>
    );
});

export default Services;