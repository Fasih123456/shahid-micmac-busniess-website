import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Aboutus() {
  return (
    <React.Fragment>
      <Header display={true} Route={"About Us"} />
      <main id="main">
        <section id="alt-services" class="alt-services">
          <div class="container">
            <div class="row justify-content-around gy-4">
              <div
                class="col-lg-6 img-bg"
                style={{ backgroundImage: "url(../assets/img/alt-services.jpg)" }}
              ></div>

              <div class="col-lg-5 d-flex flex-column justify-content-center">
                <h3>MIDMAC General Trading</h3>
                <p>
                  MIDMAC was established in 2014 and is currently led by its CEO, Mr. Thani Jumaa Al
                  Rumaithi, a highly reputable name in the UAE. Our main objective is to provide
                  local companies in the region with the most cost-effective products and solutions
                  in a timely manner. We strive to utilize the most effective technologies and
                  practices to serve various sectors, including:
                </p>

                <ul class="sector-list">
                  <li class="sector-item" style={{ fontWeight: "bold" }}>
                    Oil & Gas
                  </li>
                  <li class="sector-item" style={{ fontWeight: "bold" }}>
                    Power
                  </li>
                  <li class="sector-item" style={{ fontWeight: "bold" }}>
                    Refining
                  </li>
                  <li class="sector-item" style={{ fontWeight: "bold" }}>
                    Petrochemicals
                  </li>
                  <li class="sector-item" style={{ fontWeight: "bold" }}>
                    Marine
                  </li>
                  <li class="sector-item" style={{ fontWeight: "bold" }}>
                    Major &amp; Small Industries
                  </li>
                  <li class="sector-item" style={{ fontWeight: "bold" }}>
                    Utility &amp; Infrastructure
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="alt-services-2" class="alt-services section-bg">
          <div class="container">
            <div class="row justify-content-around gy-4">
              <div class="col-lg-5 d-flex flex-column justify-content-center">
                <h2>Non quasi officia eum nobis et rerum epudiandae rem voluptatem</h2>
                <hr />
                <p>
                  Maxime quia dolorum alias perspiciatis. Earum voluptatem sint at non. Ducimus
                  maxime minima iste magni sit praesentium assumenda minus. Amet rerum saepe tempora
                  vero.
                </p>
              </div>

              <div
                class="col-lg-6 img-bg"
                style={{ backgroundImage: "url(../assets/img/alt-services-2.jpg)" }}
              ></div>
            </div>
          </div>
        </section>

        <section
          id="alt-services-2"
          class="alt-services section-bg"
          style={{ paddingTop: "0px", marginTop: "0px" }}
        >
          <div class="container">
            <div class="row justify-content-around gy-4">
              <div
                class="col-lg-6 img-bg"
                style={{ backgroundImage: "url(../assets/img/alt-services-2.jpg)" }}
              ></div>

              <div class="col-lg-5 d-flex flex-column justify-content-center">
                <h2>Non quasi officia eum nobis et rerum epudiandae rem voluptatem</h2>
                <hr />
                <p>
                  Maxime quia dolorum alias perspiciatis. Earum voluptatem sint at non. Ducimus
                  maxime minima iste magni sit praesentium assumenda minus. Amet rerum saepe tempora
                  vero.
                </p>
              </div>
            </div>
          </div>
        </section>
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
    </React.Fragment>
  );
}

export default Aboutus;
