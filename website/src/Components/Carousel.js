import { useState, useEffect } from "react";
import "../Personalassets/Carousal.css";

function Carousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      id="hero-carousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="false"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      ))}

      <a
        className="carousel-control-prev"
        href="#hero-carousel"
        role="button"
        data-bs-slide="prev"
        onClick={() =>
          setActiveIndex((activeIndex) => (activeIndex + images.length - 1) % images.length)
        }
      >
        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
      </a>

      <a
        className="carousel-control-next"
        href="#hero-carousel"
        role="button"
        data-bs-slide="next"
        onClick={() => setActiveIndex((activeIndex) => (activeIndex + 1) % images.length)}
      >
        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
      </a>
    </div>
  );
}

export default Carousel;
