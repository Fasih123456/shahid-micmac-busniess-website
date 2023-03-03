import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Divisons() {
  return (
    <React.Fragment>
      <Header display={true} />
      <section id="services" class="services section-bg">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-6 col-md-6">
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="fa-solid fa-mountain-city"></i>
                </div>
                <h3>Valve Automation</h3>
                <ul style={{ wordSpacing: "-0.1em" }}>
                  <li style={{ fontWeight: "600", fontSize: "15.5px" }}>
                    Supply of Gate, Globe, Check, Ball & Butterfly Valves in Oil and Gas, Utility &
                    other severe applications.
                  </li>
                  <li style={{ fontWeight: "600", fontSize: "15.5px" }}>ESD & MOV Packages</li>
                  <li style={{ fontWeight: "600", fontSize: "15.5px" }}>
                    Valve Actuation (Electrical, Pneumatic, Hydraulic & Electro-Hydraulic)
                  </li>
                  <li style={{ fontWeight: "600", fontSize: "15.5px" }}>Choke & Control Valves.</li>
                  <li style={{ fontWeight: "600", fontSize: "15.5px" }}>
                    PFP for ESD, MOV and others
                  </li>
                  <li style={{ fontWeight: "600", fontSize: "15.5px" }}>
                    Safety Valves & Mechanical Key Interlocks
                  </li>
                </ul>
                <a href="service-details.html" class="readmore stretched-link">
                  Learn more <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div class="col-lg-6 col-md-6">
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="fa-solid fa-arrow-up-from-ground-water"></i>
                </div>
                <h3>Environmental & Renewable Energy</h3>
                <ul>
                  <li>Water Distributions Network</li>
                  <li>Waste Water Applications</li>
                  <li>Water Treatment Applications</li>
                  <li>Pressure Vessels Application</li>
                  <li>Skid Applications</li>
                  <li>Water Hammer Protection System</li>
                  <li>Separation Technology</li>
                  <li>Heat Transfer Applications</li>
                </ul>
                <a href="service-details.html" class="readmore stretched-link">
                  Learn more <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div class="col-lg-6 col-md-6">
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="fa-solid fa-compass-drafting"></i>
                </div>
                <h3>Electrical, Instrumentation & Control</h3>
                <ul>
                  <li>
                    Pressure gauge, Transmitter, Switch, Logger & Converter, Regulation, Control and
                    Testing with Calibration
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
                <a href="service-details.html" class="readmore stretched-link">
                  Learn more <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div class="col-lg-6 col-md-6">
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="fa-solid fa-trowel-bricks"></i>
                </div>
                <h3>Rotating Equipment</h3>
                <ul>
                  <li>Centrifugal Pumps</li>
                  <li>Submersible Pumps</li>
                  <li>Submersible Motors</li>
                  <li>Gas Compressors and Turbine</li>
                  <li>Air Compressors</li>
                </ul>
                <a href="service-details.html" class="readmore stretched-link">
                  Learn more <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div class="col-lg-6 col-md-6">
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="fa-solid fa-helmet-safety"></i>
                </div>
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
                <a href="service-details.html" class="readmore stretched-link">
                  Learn more <i class="bi bi-arrow-right"></i>
                </a>
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
