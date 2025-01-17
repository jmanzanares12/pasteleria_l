import React, { useState } from 'react';
import data from '../js/dataApp';
import '../styles/sliderApp.css';

const SliderApp = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollToImage = (direction) => {
        setCurrentIndex((prevIndex) => {
            if (direction === "prev") {
                return prevIndex === 0 ? data.length - 1 : prevIndex - 1;
            } else {
                return prevIndex === data.length - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="mainContainer">
            <div className="sliderContainer">
                <div className="leftArrow" onClick={() => scrollToImage("prev")}>&#10092;</div>
                <div className="imagesContainer">
                    <ul
                        className="sliderTrack"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                            transition: "transform 0.5s ease-in-out",
                        }}
                    >
                        {data.map((item) => (
                            <li key={item.id} className="sliderItem">
                                <img src={item.imgURL} width={600} height={300} alt={`Slide ${item.id}`} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="docsContainer">
                    {data.map((_, idx) => (
                        <div
                            key={idx}
                            className={`docsContainerItem ${idx === currentIndex ? "active" : ""}`}
                            onClick={() => goToSlide(idx)}
                        >
                            &#9865;
                        </div>
                    ))}
                </div>
                <div className="rightArrow" onClick={() => scrollToImage("next")}>&#10093;</div>
            </div>
        </div>
    );
};

export default SliderApp;
