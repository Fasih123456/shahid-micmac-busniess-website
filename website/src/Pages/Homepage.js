import Header from "../Components/Header";
import Footer from "../Components/Footer";
import image1 from "../assets/img/hero-carousel/hero-carousel-2.jpg";
import image2 from "../assets/img/hero-carousel/hero-carousel-3.jpg";
import Carousel from "../Components/Carousel";

function Homepage() {
  return (
    <div>
      <Header display={false} />

      <section id="hero" class="hero">
        <div class="info d-flex align-items-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6 text-center">
                <h2 data-aos="fade-down">
                  Welcome to <span>MIDMAC</span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <Carousel images={[image1, image2]} />
      </section>

      <main id="main">
        <section id="get-started" class="get-started section-bg">
          <div class="container">
            <div class="row justify-content-between gy-4">
              <div class="content">
                <h3>MIDMAC General Trading</h3>
                <p>
                  MIDMAC has been at the forefront of supporting the energy sector by utilizing
                  cutting-edge technologies from the world's leading solution providers. They have
                  successfully integrated divergent divisions that align with the technical and
                  engineering organization while being well-versed in the procurement and
                  contracting practices of their major customers in the UAE and the region.
                </p>

                <p>
                  Established in 2014, MIDMAC serves the Oil & Gas, Power, Utility Sector, and
                  infrastructure in the UAE. Their mission is to provide their valuable clients with
                  the best possible technical solutions that meet their requirements in the most
                  cost-effective manner without compromising on quality for sales and services.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Homepage;
