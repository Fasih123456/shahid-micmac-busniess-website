import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

//Sector images
import image1 from "../assets/sectorsimg/1.jpg";
import image2 from "../assets/sectorsimg/2.jpg";
import image3 from "../assets/sectorsimg/3.jpg";
import image4 from "../assets/sectorsimg/4.jpg";
import image5 from "../assets/sectorsimg/5.jpg";
import image6 from "../assets/sectorsimg/6.jpg";
import image7 from "../assets/sectorsimg/7.jpg";

import "../App.css";

function Sectors() {
  return (
    <React.Fragment>
      <Header display={true} Route={"Sectors"} />
      <section id="projects" class="projects">
        <div class="container">
          <div class="portfolio-isotope">
            <div class="row gy-4 portfolio-container">
              <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                <div class="portfolio-content h-100">
                  <img src={image1} class="img-fluid sectorimg" alt="" />
                  <div class="portfolio-info">
                    <p>Oil & Gas</p>
                    <a
                      href="assets/img/projects/remodeling-1.jpg"
                      title="Remodeling 1"
                      class="glightbox preview-link"
                    >
                      <i class="bi bi-zoom-in"></i>
                    </a>
                    <a href="project-details.html" title="More Details" class="details-link">
                      <i class="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-construction">
                <div class="portfolio-content h-100">
                  <img src={image2} class="img-fluid sectorimg" alt="" />
                  <div class="portfolio-info">
                    <p>Power</p>
                    <a
                      href="assets/img/projects/construction-1.jpg"
                      title="Construction 1"
                      class="glightbox preview-link"
                    >
                      <i class="bi bi-zoom-in"></i>
                    </a>
                    <a href="project-details.html" title="More Details" class="details-link">
                      <i class="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
                <div class="portfolio-content h-100">
                  <img src={image3} class="img-fluid sectorimg" alt="" />
                  <div class="portfolio-info">
                    <p>Refining</p>
                    <a
                      href="assets/img/projects/repairs-1.jpg"
                      title="Repairs 1"
                      class="glightbox preview-link"
                    >
                      <i class="bi bi-zoom-in"></i>
                    </a>
                    <a href="project-details.html" title="More Details" class="details-link">
                      <i class="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-design">
                <div class="portfolio-content h-100">
                  <img src={image4} class="img-fluid sectorimg" alt="" />
                  <div class="portfolio-info">
                    <p>Petrochemicals</p>
                    <a
                      href="assets/img/projects/design-1.jpg"
                      title="Repairs 1"
                      class="glightbox preview-link"
                    >
                      <i class="bi bi-zoom-in"></i>
                    </a>
                    <a href="project-details.html" title="More Details" class="details-link">
                      <i class="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                <div class="portfolio-content h-100">
                  <img src={image5} class="img-fluid sectorimg" alt="" />
                  <div class="portfolio-info">
                    <p>Marine</p>
                    <a
                      href="assets/img/projects/remodeling-2.jpg"
                      title="Remodeling 2"
                      class="glightbox preview-link"
                    >
                      <i class="bi bi-zoom-in"></i>
                    </a>
                    <a href="project-details.html" title="More Details" class="details-link">
                      <i class="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-construction">
                <div class="portfolio-content h-100">
                  <img src={image6} class="img-fluid sectorimg" alt="" />
                  <div class="portfolio-info">
                    <p>Major & Small Industries</p>
                    <a
                      href="assets/img/projects/construction-2.jpg"
                      title="Construction 2"
                      class="glightbox preview-link"
                    >
                      <i class="bi bi-zoom-in"></i>
                    </a>
                    <a href="project-details.html" title="More Details" class="details-link">
                      <i class="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
                <div class="portfolio-content h-100">
                  <img src={image7} class="img-fluid sectorimg" alt="" />
                  <div class="portfolio-info">
                    <p>Utility & Infrastructure</p>
                    <a
                      href="assets/img/projects/repairs-2.jpg"
                      title="Repairs 2"
                      class="glightbox preview-link"
                    >
                      <i class="bi bi-zoom-in"></i>
                    </a>
                    <a href="project-details.html" title="More Details" class="details-link">
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
