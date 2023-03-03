import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

//Division images
import image1 from "../assets/divisionsimg/1.png";
import image2 from "../assets/divisionsimg/2.png";
import image3 from "../assets/divisionsimg/3.png";
import image4 from "../assets/divisionsimg/4.png";
import image5 from "../assets/divisionsimg/5.png";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "../App.css";

function Divisons() {
  return (
    <React.Fragment>
      <Header display={true} Route={"Divisions"} />
      <section id="services" class="services section-bg">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-6 col-md-6">
              <div class="service-item position-relative">
                <Container>
                  <Row>
                    <Col xs={3}>
                      <img src={image1} class="divimg" />
                    </Col>
                    <Col>
                      <h3>Value Automation</h3>
                      <ul>
                        <li>
                          Supply of Gate, Globe, Check, Ball & Butterfly Valves in Oil and Gas,
                          Utility & other severe applications.
                        </li>
                        <li>ESD & MOV Packages</li>
                        <li>
                          Valve Actuation (Electrical, Pneumatic, Hydraulic & Electro-Hydraulic)
                        </li>
                        <li>Choke & Control Valves.</li>
                        <li>PFP for ESD, MOV and others</li>
                        <li>Safety Valves & Mechanical Key Interlocks</li>
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="service-item position-relative">
                <Container>
                  <Row>
                    <Col xs={3}>
                      <img src={image2} class="divimg" />
                    </Col>
                    <Col>
                      <h3>Enviromental & Renewable Energy</h3>
                      <ul>
                        <li>Water Distribution Network</li>
                        <li>Waste Water Applications</li>
                        <li>Water Treatment Applications</li>
                        <li>Pressure Vessels Application</li>
                        <li>Skid Applications</li>
                        <li>Water Hammer Protection System</li>
                        <li>Separation Technology</li>
                        <li>Heat Transfer Applications</li>
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="service-item position-relative">
                <Container>
                  <Row>
                    <Col xs={3}>
                      <img src={image3} class="divimg" />
                    </Col>
                    <Col>
                      <h3>Enviromental & Renewable Energy</h3>
                      <ul>
                        <li>
                          Pressure gauge, Transmitter, Switch, Logger & Converter, Regulation,
                          Control and Testing with Calibration
                        </li>
                        <li>Flow logger, Transmitter for Water Distribution</li>
                        <li>Temperature gauge, Transmitter & Switch</li>
                        <li>Level gauge, Transmitter & Switch</li>
                        <li>Analyzers of all related to water quality</li>
                        <li>Electric Ex. Panels, Lighting & Glands</li>
                        <li>Smart Positioner & Switches</li>
                        <li>Sight Glasses</li>
                        <li>I/P, P/I and IR Regulator</li>
                        <li>Instrument Fittings and Valves</li>
                        <li>Instrument Hoses & Tubes</li>
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="service-item position-relative">
                <Container>
                  <Row>
                    <Col xs={3}>
                      <img src={image4} class="divimg" />
                    </Col>
                    <Col>
                      <h3>Rotating Equipment</h3>
                      <ul>
                        <li>Centrifugal Pumps</li>
                        <li>Submersible Pumps</li>
                        <li>Submersible Motors</li>
                        <li>Gas Compressors and Turbine</li>
                        <li>Air Compressors</li>
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="service-item position-relative">
                <Container>
                  <Row>
                    <Col xs={3}>
                      <img src={image5} class="divimg" />
                    </Col>
                    <Col>
                      <h3>Service & Value-Added Division</h3>
                      <ul>
                        <li>Valve Actuation Retrofit</li>
                        <li>Sizing Assembling and Testing ESD</li>
                        <li>MOV Package</li>
                        <li>Valve Interlock Services</li>
                        <li>PFP Services</li>
                        <li>Turbine Services</li>
                        <li>Process Equipment’s Cleaning</li>
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default Divisons;
