import Nav from "react-bootstrap/Nav";
import React, { useState, useEffect } from "react";

function Navigation() {
  return (
    <React.Fragment>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/divisions">Divisions</Nav.Link>
      <Nav.Link href="/Partners">Partners</Nav.Link>
      <Nav.Link href="/Sectors">Sectors</Nav.Link>
      <Nav.Link href="/Aboutus">About Us</Nav.Link>
      <Nav.Link href="/downloads">Downloads</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </React.Fragment>
  );
}

export default Navigation;
