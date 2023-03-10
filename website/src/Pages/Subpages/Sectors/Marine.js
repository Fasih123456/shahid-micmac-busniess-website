import React from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

import NavigationSectors from "../../../Components/NavigationSectors";

import image from "../../../assets/sectorsimg/marine.jpg";

function Marine() {
  return (
    <React.Fragment>
      <Header display={true} Route={"Marine"} />

      <section id="service-details" class="service-details">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4">
            <NavigationSectors />

            <div class="col-lg-8">
              <img src={image} alt="" class="img-fluid services-img" />
              <h3>Marine Services</h3>
              <p>
                MidMac provides a range of marine services to meet the needs of our clients in the
                maritime industry. Our expertise in this sector includes the design, engineering,
                and construction of vessels, offshore platforms, and other marine infrastructure. We
                also offer maintenance, repair, and upgrade services to ensure that your marine
                assets are operating safely and efficiently.
              </p>

              <p>
                Our team of experienced professionals uses the latest technology and industry best
                practices to deliver high-quality marine services. We understand the unique
                challenges and complexities of the maritime industry and are committed to delivering
                innovative solutions that meet the highest standards of safety, efficiency, and
                sustainability.
              </p>
              <p>
                Whether you're looking to build a new vessel or offshore platform or maintain and
                upgrade your existing marine assets, MidMac has the expertise and experience to help
                you achieve your goals. Contact us today to learn more about our marine services and
                how we can help you succeed in this dynamic and challenging industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default Marine;
