import Header from "../Components/Header";
import Footer from "../Components/Footer";
import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import GoogleMapReact from "google-map-react";

import "../Personalassets/Form.css";

import "../Personalassets/Contact.css";

import heading from "../assets/contactimg/heading.jpg";

function Contact() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <React.Fragment>
      <Header display={true} Route={"Contact"} image={heading} />

      <section id="contact" class="contact">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-6">
              <div class="info-item d-flex flex-column justify-content-center align-items-center">
                <i class="bi bi-map"></i>
                <h3>Our Address</h3>
                <p>
                  Delma Street , Sultan Manea Al Muhairi Building , Mez. Floor . P.O Box: 111303
                </p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="info-item d-flex flex-column justify-content-center align-items-center">
                <i class="bi bi-envelope"></i>
                <h3>Email Us</h3>
                <p>info@midmac.ae</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="info-item d-flex flex-column justify-content-center align-items-center">
                <i class="bi bi-telephone"></i>
                <h3>Call Us</h3>
                <p>+971 (0)2 667 1717</p>
                <p>+971 56 302 1903</p>
              </div>
            </div>
          </div>

          <div class="row gy-4 mt-1">
            <div class="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.599509595937!2d54.378323314978836!3d24.464676467030824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67c467b84e65%3A0xbb66aefd9b782e8d!2sMidMac%20General%20Trading%20LLC!5e0!3m2!1sen!2sca!4v1678304650161!5m2!1sen!2sca"
                frameborder="0"
                style={{ border: "0", width: "100%", height: "384px" }}
                allowfullscreen
              ></iframe>
            </div>

            <div class="col-lg-6">
              <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                <div class="row gy-4">
                  <div class="col-lg-6 form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="col-lg-6 form-group">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default Contact;
