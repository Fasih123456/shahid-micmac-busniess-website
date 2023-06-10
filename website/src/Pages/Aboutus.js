import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import icon from "../assets/favicon.png";

import image1 from "../assets/aboutusimg/1.jpeg";
import image2 from "../assets/aboutusimg/2.jpeg";
import image3 from "../assets/aboutusimg/3.jpeg";

function Aboutus() {
  return (
    <React.Fragment>
      <Header display={true} Route={"About Us"} />
      <main id="main">
        <section id="alt-services" class="alt-services">
          <div class="container">
            <div class="row justify-content-around gy-4">
              <div class="col-lg-6 img-bg">
                <img src={image1} class="sectorimg" />
              </div>

              <div class="col-lg-5 d-flex flex-column justify-content-center">
                <h3>MIDMAC General Trading</h3>
                <p>
                  MIDMAC was established in 2014 and its CEO Mr. Thani Jumaa Al Rumaithi. One of the
                  well reputed name in UAE, our mission is to provide local companies and the region
                  with cost effective products and solutions in a timely manner using most effective
                  talent ?, technologies and practices for serving in various sectors as follow:
                </p>

                <ul class="sector-list">
                  <li class="sector-item" style={{ fontWeight: "bold" }}>
                    Oil & Gas.
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
                <h2>Our Vision</h2>
                <hr />
                <p>
                  To develop, provide and sustain economically feasible key solution for the market
                  in UAE and the region by investing in talent and industry leaders.
                </p>
              </div>

              <div class="col-lg-6 img-bg">
                <img src={image2} class="sectorimg" />
              </div>
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
              <div class="col-lg-6 img-bg">
                <img src={image3} class="sectorimg" />
              </div>

              <div class="col-lg-5 d-flex flex-column justify-content-center">
                <h2>Our Mission</h2>
                <hr />
                <p>
                  To turn prospective opportunities into profitable ventures and create value for
                  our internal and external customers by utilizing own resources or(instead &) by
                  integrating capabilities of our partners while meeting the highest professional
                  ethical and QHSE standards exceeding stake holder expectations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="get-started" class="get-started section-bg">
          <div class="container" style={{ marginLeft: "5%", marginRight: "5%" }}>
            <div class="row justify-content-between gy-4">
              <div class="content center">
                <img src={icon} />
                <h1>Management</h1>
                <p class="homepageP">
                  Mr. Thani Al Remeithi is the former Director at the Naturalization Department of
                  the Federal Naturalization & Residency Directorate, he is one of the well reputed
                  names in UAE.
                </p>

                <p class="homepageP">
                  His mission is to provide local companies and the region with cost effective
                  products and solutions in a timely manner using most effective talents,
                  technologies and practices for serving in various sectors
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
