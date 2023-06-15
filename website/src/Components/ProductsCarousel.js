import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image2 from "../assets/productcarouselimg/2.jpg";
import image3 from "../assets/productcarouselimg/3.jpg";
import image4 from "../assets/productcarouselimg/4.png";
import image5 from "../assets/productcarouselimg/5.JPG";
import image6 from "../assets/productcarouselimg/6.JPG";
import image7 from "../assets/productcarouselimg/7.JPG";
import image8 from "../assets/productcarouselimg/8.jpg";
import image9 from "../assets/productcarouselimg/9.jpg";
import image10 from "../assets/productcarouselimg/10.jpg";
import image11 from "../assets/productcarouselimg/11.jpg";
import image12 from "../assets/productcarouselimg/12.jpg";
import image13 from "../assets/productcarouselimg/13.jpg";
import image14 from "../assets/productcarouselimg/14.jpg";
import image15 from "../assets/productcarouselimg/15.jpg";
import image16 from "../assets/productcarouselimg/16.jpg";
import image17 from "../assets/productcarouselimg/17.png";

function ProductCarousel() {
  return (
    <Carousel fade={true} interval={2000}>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image4} alt="Third slide" />

        <div className="carousel-caption top-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image5} alt="Third slide" />

        <div className="carousel-caption top-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image6} alt="Third slide" />

        <div className="carousel-caption top-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image7} alt="Third slide" />

        <div className="carousel-caption top-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image8} alt="Third slide" />

        <div className="carousel-caption top-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image9} alt="Third slide" />

        <div className="carousel-caption top-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image10} alt="Third slide" />

        <div className="carousel-caption top-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image11} alt="Third slide" />

        <div className="carousel-caption top-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image12} alt="Third slide" />

        <div className="carousel-caption top-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image13} alt="Third slide" />

        <div className="carousel-caption top-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image14} alt="Third slide" />

        <div className="carousel-caption top-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image15} alt="Third slide" />

        <div className="carousel-caption top-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image16} alt="Third slide" />

        <div className="carousel-caption top-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image17} alt="Third slide" />

        <div className="carousel-caption top-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarousel;
