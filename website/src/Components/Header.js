import React from "react";

function Header({ display, Route }) {
  return (
    <React.Fragment>
      <body>
        <header id="header" class="header d-flex align-items-center">
          <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a href="index.html" class="logo d-flex align-items-center">
              <img src="../assets/img/logo.png" alt="" />
              <h1>
                UpConstruction<span>.</span>
              </h1>
            </a>

            <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <a href="/" className={Route === "Home" ? "active" : ""}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/Aboutus" className={Route === "About Us" ? "active" : ""}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/divisions" className={Route === "Divisions" ? "active" : ""}>
                    Divisions
                  </a>
                </li>
                <li>
                  <a href="/Sectors" className={Route === "Sectors" ? "active" : ""}>
                    Sectors
                  </a>
                </li>
                <li>
                  <a href="/Partners" className={Route === "Our Partners" ? "active" : ""}>
                    Our Partners
                  </a>
                </li>
                <li>
                  <a href="/Downloads" className={Route === "Downloads" ? "active" : ""}>
                    Downloads
                  </a>
                </li>
                <li>
                  <a href="/contact" className={Route === "Contact" ? "active" : ""}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {display && (
          <div
            class="breadcrumbs d-flex align-items-center"
            style={{ backgroundImage: "url(../assets/img/breadcrumbs-bg.jpg)" }}
          >
            <div class="container position-relative d-flex flex-column align-items-center">
              <h2>{Route}</h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>{Route}</li>
              </ol>
            </div>
          </div>
        )}
      </body>
    </React.Fragment>
  );
}

export default Header;
