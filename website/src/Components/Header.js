import React from "react";

function Header({ display }) {
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
            <nav id="navbar" class="navbar">
              <ul>
                <li>
                  <a href="/" class="active">
                    Home
                  </a>
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
                <li class="dropdown">
                  <a href="#">
                    <span>Dropdown</span> <i class="bi bi-chevron-down dropdown-indicator"></i>
                  </a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
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
              <h2>About</h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>About</li>
              </ol>
            </div>
          </div>
        )}
      </body>
    </React.Fragment>
  );
}

export default Header;
