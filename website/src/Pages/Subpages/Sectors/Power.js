import React from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

import NavigationSectors from "../../../Components/NavigationSectors";

import image from "../../../assets/sectorsimg/power2.jpg";

function Power() {
  return (
    <React.Fragment>
      <Header display={true} Route={"Power"} />

      <section id="service-details" class="service-details">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4">
            <NavigationSectors />

            <div class="col-lg-8">
              <img src={image} alt="" class="img-fluid services-img" />
              <h3>Innovating Construction for a Sustainable Future</h3>
              <p>
                MidMac is a pioneering construction company that is committed to building a
                sustainable future for communities. We offer a comprehensive range of construction
                services that cater to various industries, including power, infrastructure, and
                commercial buildings. Our team of highly skilled engineers and technicians leverage
                the latest technologies to deliver innovative solutions that meet our clients'
                unique needs.
              </p>

              <p>
                At MidMac, we take pride in our ability to deliver exceptional results while
                minimizing our environmental impact. We use eco-friendly materials and construction
                practices to reduce waste and ensure sustainability. We believe that sustainable
                construction practices not only benefit the environment but also contribute to the
                economic growth and development of communities.
              </p>
              <p>
                Our commitment to innovation and sustainability has earned us a reputation as a
                trusted partner in the construction industry. We continue to strive for excellence
                in all our projects and look forward to building a brighter, more sustainable future
                for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default Power;
