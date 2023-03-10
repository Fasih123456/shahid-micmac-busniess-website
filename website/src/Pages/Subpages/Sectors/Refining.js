import React from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

import NavigationSectors from "../../../Components/NavigationSectors";

import image from "../../../assets/sectorsimg/refining.jpg";

function Refining() {
  return (
    <React.Fragment>
      <Header display={true} Route={"Refining"} />

      <section id="service-details" class="service-details">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4">
            <NavigationSectors />

            <div class="col-lg-8">
              <img src={image} alt="" class="img-fluid services-img" />
              <h3>Refining Services</h3>
              <p>
                MidMac provides a wide range of refining services to meet the needs of our clients
                in the oil and gas industry. Our expertise in this sector includes the design,
                engineering, and construction of refineries, as well as the maintenance, upgrade,
                and expansion of existing facilities. We also offer operational support and
                consulting services to ensure that your refinery runs smoothly and efficiently.
              </p>

              <p>
                Our team of experienced professionals uses the latest technology and industry best
                practices to deliver high-quality refining services. We understand the unique
                challenges and complexities of the refining process and are committed to delivering
                innovative solutions that meet the highest standards of safety, efficiency, and
                sustainability.
              </p>
              <p>
                Whether you're looking to build a new refinery or optimize the performance of an
                existing one, MidMac has the expertise and experience to help you achieve your
                goals. Contact us today to learn more about our refining services and how we can
                help you succeed in this dynamic and challenging industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default Refining;
