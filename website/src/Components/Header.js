import React from "react";

import Logo from "../assets/Logo2.png";

function Header({ display, Route }) {
  return (
    <React.Fragment>
      <body>
        <header id="header" class="header d-flex align-items-center" style={{ height: "150px" }}>
          <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a href="index.html" class="logo d-flex align-items-center">
              <img src={Logo} alt="" />
            </a>

            <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <a
                    href="/"
                    className={Route === "Home" ? "active" : ""}
                    style={{ color: "black" }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/Aboutus"
                    className={Route === "About Us" ? "active" : ""}
                    style={{ color: "black" }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/divisions"
                    className={Route === "Divisions" ? "active" : ""}
                    style={{ color: "black" }}
                  >
                    Divisions
                  </a>
                </li>
                <li>
                  <a
                    href="/Sectors"
                    className={Route === "Sectors" ? "active" : ""}
                    style={{ color: "black" }}
                  >
                    Sectors
                  </a>
                </li>
                <li>
                  <a
                    href="/Partners"
                    className={Route === "Our Partners" ? "active" : ""}
                    style={{ color: "black" }}
                  >
                    Our Partners
                  </a>
                </li>
                <li>
                  <a
                    href="/Downloads"
                    className={Route === "Downloads" ? "active" : ""}
                    style={{ color: "black" }}
                  >
                    Downloads
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className={Route === "Contact" ? "active" : ""}
                    style={{ color: "black" }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </body>
      {display && (
        <div
          class="breadcrumbs d-flex align-items-center"
          style={{ backgroundImage: "url(../assets/img/breadcrumbs-bg.jpg)", marginTop: "150px" }}
        >
          <div class="container position-relative d-flex flex-column align-items-center">
            <h2>{Route}</h2>
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>{Route}</li>
            </ol>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Header;
