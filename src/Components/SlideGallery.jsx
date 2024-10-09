import { useState } from "react"
import React from "react"

import project2 from "../assets/projects/2.jpg"
import project3 from "../assets/projects/3.jpg"
import project4 from "../assets/projects/4.jpg"
import project5 from "../assets/projects/5.jpg"
import project6 from "../assets/projects/6.jpg"

const SlideGallery = React.forwardRef((props, ref) => {

    const images = [project2, project3, project4, project5, project6];

    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {

        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    }

    const prev = () => {
        if (currentIndex >= 1) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(images.length - 1);
        }
    }

    return (
        <div className="projects" ref={ref}>
            <div className="slide-gallery">
                <h1>Our Projects</h1>

                <img src={images[currentIndex]}></img>

                <div className="control-btns">
                    <button className="prev-btn" onClick={prev}>&lt;</button>
                    <button className="next-btn" onClick={next}>&gt;</button>
                </div>
            </div>
        </div>
    );
});

export default SlideGallery;