import React from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

import NavigationSectors from "../../../Components/NavigationSectors";

import image from "../../../assets/sectorsimg/industries2.jpg";

function Industries() {
  return (
    <React.Fragment>
      <Header display={true} Route={"Industries"} />

      <section id="service-details" class="service-details">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4">
            <NavigationSectors />

            <div class="col-lg-8">
              <img src={image} alt="" class="img-fluid services-img" />
              <h3>Industries Services</h3>
              <p>
                MidMac offers a wide range of industries services to meet the needs of our clients
                in various industrial sectors. Our expertise in this field includes the design,
                engineering, and construction of industrial facilities, as well as maintenance,
                upgrade, and expansion services to ensure that your industrial assets are operating
                safely and efficiently.
              </p>

              <p>
                Our team of experienced professionals uses the latest technology and industry best
                practices to deliver high-quality industries services. We understand the unique
                challenges and complexities of the industrial sector and are committed to delivering
                innovative solutions that meet the highest standards of safety, efficiency, and
                sustainability.
              </p>
              <p>
                Whether you're looking to build a new industrial facility or maintain and upgrade
                your existing assets, MidMac has the expertise and experience to help you achieve
                your goals. Contact us today to learn more about our industries services and how we
                can help you succeed in this dynamic and challenging industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default Industries;
