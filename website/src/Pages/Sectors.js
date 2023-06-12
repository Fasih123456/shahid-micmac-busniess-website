import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

//Sector images
import image1 from "../assets/sectorsimg/OL.jpg";
import image2 from "../assets/sectorsimg/power1.jpg";
import image3 from "../assets/sectorsimg/refining.jpg";
import image4 from "../assets/sectorsimg/petrochemical.jpg";
import image5 from "../assets/sectorsimg/marine1.jpg";
import image6 from "../assets/sectorsimg/MSI.jpg";
import image7 from "../assets/sectorsimg/UI.jpg";

import oilGas from "../assets/oilgasout.jpg";

import heading from "../assets/sectorsimg/heading.jpg";

import "../App.css";

function Sectors() {
  return (
    <React.Fragment>
      <Header display={true} Route={"Sectors"} image={heading} />
      <section id="projects" class="projects">
        <div class="container">
          <div class="portfolio-isotope">
            <div class="row gy-4 portfolio-container">
              <div
                class="col-lg-4 col-md-6 portfolio-item filter-remodeling"
                style={{ maxHeight: "100%" }}
              >
                <div class="portfolio-content h-100">
                  <img src={image1} class="img-fluid sectorimg" alt="" style={{ height: "30vh" }} />
                  <div class="portfolio-info">
                    <h4>Test</h4>
                    <p>Oil & Gas</p>
                    <a
                      href={image1}
                      title="Remodeling 1"
                      class="glightbox preview-link"
                      style={{ height: "30vh" }}
                    >
                      <i class="bi bi-zoom-in"></i>
                    </a>
                    <a href={"/Sectors/OilGas"} title="More Details" class="details-link">
                      <i class="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-construction">
                <div class="portfolio-content h-100">
                  <img src={image2} class="img-fluid sectorimg" alt="" style={{ height: "30vh" }} />
                  <div class="portfolio-info">
                    <p>Power</p>
                    <a
                      href={image2}
                      title="Construction 1"
                      class="glightbox preview-link"
                      style={{ height: "30vh" }}
                    >
                      <i class="bi bi-zoom-in"></i>
                    </a>

                    <a href={"/Sectors/Power"} title="More Details" class="details-link">
                      <i class="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
                <div class="portfolio-content h-100">
                  <img src={image3} class="img-fluid sectorimg" alt="" style={{ height: "30vh" }} />
                  <div class="portfolio-info">
                    <p>Refining</p>
                    <a
                      href={image3}
                      title="Repairs 1"
                      class="glightbox preview-link"
                      style={{ height: "30vh" }}
                    >
                      <i class="bi bi-zoom-in"></i>
                    </a>

                    <a href={"/Sectors/Refining"} title="More Details" class="details-link">
                      <i class="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-design">
                <div class="portfolio-content h-100">
                  <img src={image4} class="img-fluid sectorimg" alt="" style={{ height: "30vh" }} />
                  <div class="portfolio-info">
                    <p>Petrochemicals</p>
                    <a
                      href={image4}
                      title="Repairs 1"
                      class="glightbox preview-link"
                      style={{ height: "30vh" }}
                    >
                      <i class="bi bi-zoom-in"></i>
                    </a>
                    <a href={"/Sectors/Petrochemical"} title="More Details" class="details-link">
                      <i class="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                <div class="portfolio-content h-100">
                  <img src={image5} class="img-fluid sectorimg" alt="" style={{ height: "30vh" }} />
                  <div class="portfolio-info">
                    <p>Marine</p>
                    <a
                      href={image5}
                      title="Remodeling 2"
                      class="glightbox preview-link"
                      style={{ height: "30vh" }}
                    >
                      <i class="bi bi-zoom-in"></i>
                    </a>
                    <a href={"/Sectors/Marine"} title="More Details" class="details-link">
                      <i class="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-construction">
                <div class="portfolio-content h-100">
                  <img src={image6} class="img-fluid sectorimg" alt="" style={{ height: "30vh" }} />
                  <div class="portfolio-info">
                    <p>Major & Small Industries</p>
                    <a
                      href={image6}
                      title="Construction 2"
                      class="glightbox preview-link"
                      style={{ height: "30vh" }}
                    >
                      <i class="bi bi-zoom-in"></i>
                    </a>
                    <a href={"/Sectors/Industries"} title="More Details" class="details-link">
                      <i class="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
                <div class="portfolio-content h-100">
                  <img src={image7} class="img-fluid sectorimg" alt="" style={{ height: "30vh" }} />
                  <div class="portfolio-info">
                    <p>Utility & Infrastructure</p>
                    <a
                      href={image7}
                      title="Repairs 2"
                      class="glightbox preview-link"
                      style={{ height: "30vh" }}
                    >
                      <i class="bi bi-zoom-in"></i>
                    </a>
                    <a href={"/Sectors/Infrastructure"} title="More Details" class="details-link">
                      <i class="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default Sectors;
