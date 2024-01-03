import SliderItem from "./SliderItem";
import "./Slider.css";
import { useState } from "react";

export default function Slider() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>  {
    const slideNumber = (currentSlide + 1) % 3
    setCurrentSlide(slideNumber)
  }

  const prevSlide = () =>  {
    const slideNumber = (currentSlide - 1 + 3) % 3
    setCurrentSlide(slideNumber)
  }
  return (
    <div className="slider">
      <div className="slider-elements">
        {currentSlide === 0 && (
          <SliderItem imageSrc="/src/assets/img/slider/slider-1/1.jpg" />
        )}
        {currentSlide === 1 && (
          <SliderItem imageSrc="/src/assets/img/slider/slider-1/2.jpg" />
        )}
        {currentSlide === 2 && (
          <SliderItem imageSrc="/src/assets/img/slider/slider-1/3.jpg" />
        )}
        <div className="slider-buttons">
          <button className="prev" onClick={prevSlide}>
            <i className="zmdi zmdi-chevron-right"></i>
          </button>
          <button className="next" onClick={nextSlide}>
            <i className="zmdi zmdi-chevron-left"></i>
          </button>
        </div>
        <div className="slider-dots">
          <button
            onClick={() => setCurrentSlide(0)}
            className={`slider-dot ${currentSlide === 0 ? "active" : ""}`}
          >
            <span></span>
          </button>
          <button
            onClick={() => setCurrentSlide(1)}
            className={`slider-dot ${currentSlide === 1 ? "active" : ""}`}
          >
            <span></span>
          </button>
          <button
            onClick={() => setCurrentSlide(2)}
            className={`slider-dot ${currentSlide === 2 ? "active" : ""}`}
          >
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
}
