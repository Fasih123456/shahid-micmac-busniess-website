import Footer from "../Components/Footer";
import Header from "../Components/Header";
import AllProductCard from "../Components/AllProductsCard";

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

const images = [
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
];

const titles = [
  "Product Title 1",
  "Product Title 2",
  "Product Title 3",
  "Product Title 4",
  "Product Title 5",
  "Product Title 6",
  "Product Title 7",
  "Product Title 8",
  "Product Title 9",
  "Product Title 10",
  "Product Title 11",
  "Product Title 12",
  "Product Title 13",
  "Product Title 14",
  "Product Title 15",
  "Product Title 16",
];

const descriptions = [
  "Product Description 1",
  "Product Description 2",
  "Product Description 3",
  "Product Description 4",
  "Product Description 5",
  "Product Description 6",
  "Product Description 7",
  "Product Description 8",
  "Product Description 9",
  "Product Description 10",
  "Product Description 11",
  "Product Description 12",
  "Product Description 13",
  "Product Description 14",
  "Product Description 15",
  "Product Description 16",
];

function AllProducts() {
  return (
    <>
      <Header display={false} />
      <main id="main">
        <section id="portfolio" className="portfolio">
          <div className="container">
            <h1 className="text-center" style={{ fontSize: "50px" }}>
              Our Products
            </h1>
            <div className="row portfolio-container">
              {images.map((src, index) => (
                <AllProductCard
                  key={index}
                  src={src}
                  title={titles[index]}
                  description={descriptions[index]}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AllProducts;
