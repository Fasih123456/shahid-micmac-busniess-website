import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useLocation } from "react-router-dom";

import Navigation from "./Navigation";

import Logo from "../assets/Logo2.png";

import "../Personalassets/Header.css";

function Header({ display, Route }) {
  const location = useLocation();
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  return (
    <React.Fragment>
      <div style={{ width: "100%" }}>
        <Container fluid>
          <header id="header" class="header d-flex align-items-center">
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
              <Container fluid>
                <Navbar.Brand href="#home" id="name-title">
                  <img src={Logo} class="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav navbar-toggler" />
                <Navbar.Collapse id="responsive-navbar-nav navbar-collapse justify-content-end">
                  <Nav className="me-auto" style={{ marginRight: "0px !important" }}></Nav>
                  <Nav>
                    <Navigation />
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </header>
        </Container>
      </div>
      {display && (
        <div
          class="breadcrumbs d-flex align-items-center"
          style={{ backgroundImage: "url(../assets/img/breadcrumbs-bg.jpg)" }}
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
