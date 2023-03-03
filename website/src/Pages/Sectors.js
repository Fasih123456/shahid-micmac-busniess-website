import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Sectors() {
  return (
    <React.Fragment>
      <Header display={true} />
      <section id="projects" class="projects">
        <div class="container">
          <div class="portfolio-isotope">
            <div class="row gy-4 portfolio-container">
              <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                efr3w
                <div class="portfolio-content h-100">
                  <img src="assets/img/projects/remodeling-1.jpg" class="img-fluid" alt="" />
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
                  <img src="assets/img/projects/construction-1.jpg" class="img-fluid" alt="" />
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
                  <img src="assets/img/projects/repairs-1.jpg" class="img-fluid" alt="" />
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
                  <img src="assets/img/projects/design-1.jpg" class="img-fluid" alt="" />
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
                  <img src="assets/img/projects/remodeling-2.jpg" class="img-fluid" alt="" />
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
                  <img src="assets/img/projects/construction-2.jpg" class="img-fluid" alt="" />
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
                  <img src="assets/img/projects/repairs-2.jpg" class="img-fluid" alt="" />
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
