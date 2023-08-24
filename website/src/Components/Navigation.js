import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState, useEffect } from "react";

function Navigation() {
  return (
    <React.Fragment>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Aboutus">About Us</Nav.Link>
      <Nav.Link href="/divisions">Divisions</Nav.Link>
      <li class="dropdown" style={{ margin: "0px" }}>
        <a href="/Products">
          <span style={{ margin: "0px" }}>Products</span>{" "}
          <i class="bi bi-chevron-down dropdown-indicator"></i>
        </a>
        <ul>
          <li style={{ margin: "0px" }}>
            <a href="/Products">Scope Of Products</a>
          </li>
          <li style={{ margin: "0px" }}>
            <a href="/ProductsAll">All Products</a>
          </li>
        </ul>
      </li>
      <Nav.Link href="/Sectors">Sectors</Nav.Link>
      <Nav.Link href="/downloads">Downloads</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </React.Fragment>
  );
}

export default Navigation;
