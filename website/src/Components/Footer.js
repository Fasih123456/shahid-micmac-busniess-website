import React from "react";

import Logo from "../assets/Logo2.png";
import img from "../assets/footerimg.jpeg";

function Footer() {
  return (
    <React.Fragment>
      <div>
        <footer id="footer" class="footer">
          <div class="footer-content position-relative">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="footer-info">
                    <a href="/" class="logo d-flex align-items-center">
                      <img src={Logo} style={{ maxHeight: "70px" }} class="logo" alt="" />
                    </a>
                    <p style={{ paddingTop: "20px" }}>
                      To develop, provide and sustain economically feasible key solution for the
                      market in UAE and the region by investing in talent and industry leaders..{" "}
                      <br />
                    </p>
                    <div class="social-links d-flex mt-3">
                      <img src={img} class="logo" />
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/Aboutus">About Us</a>
                    </li>
                    <li>
                      <a href="/divisions">Divisions</a>
                    </li>
                    <li>
                      <a href="/Sectors">Sectors</a>
                    </li>
                    <li>
                      <a href="/Partners">Our Partners</a>
                    </li>
                    <li>
                      <a href="/Downloads">Downloads</a>
                    </li>
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-3 footer-links">
                  <h4>Contact</h4>
                  <p>+971 (0)2 667 1717</p>
                  <p>
                    Delma Street , Sultan Manea Al Muhairi Building , Mez. Floor . P.O Box: 111303
                  </p>
                  <p>info@midmac.ae</p>
                  <p>Sun to Thr 8:00 am to 6:00pm</p>
                </div>
              </div>
            </div>

            <div class="footer-legal text-center position-relative">
              <div class="container">
                <div class="copyright">
                  &copy; Copyright{" "}
                  <strong>
                    <span>Sysmologic</span>
                  </strong>
                  . All Rights Reserved
                </div>
                <div class="credits">
                  Designed by <a href="https://sysmologic.com/">Sysmologic</a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <a href="#" class="scroll-top d-flex align-items-center justify-content-center">
          <i class="bi bi-arrow-up-short"></i>
        </a>
      </div>
    </React.Fragment>
  );
}

export default Footer;
