import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import services from "../assets/img/services.jpg";
import image1 from "../assets/img/hero-carousel/hero-carousel-2.jpg";
import company1 from "../assets/company1.png";

import "../App.css";

function Partners() {
  return (
    <React.Fragment>
      <Header display={true} Route={"Our Partners"} />
      <main id="main">
        <section style={{ marginLeft: "5%" }}>
          <Container fluid>
            <Row>
              <Col>
                <Card className="bg-dark text-white" style={{ width: "300px" }}>
                  <Card.Img src={company1} alt="Card image" />
                </Card>
              </Col>
              <Col>
                <Card className="bg-dark text-white" style={{ width: "300px" }}>
                  <Card.Img src={company1} alt="Card image" />
                </Card>
              </Col>
              <Col>
                <Card className="bg-dark text-white" style={{ width: "300px" }}>
                  <Card.Img src={company1} alt="Card image" />
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="bg-dark text-white" style={{ width: "300px" }}>
                  <Card.Img src={company1} alt="Card image" />
                </Card>
              </Col>
              <Col>
                <Card className="bg-dark text-white" style={{ width: "300px" }}>
                  <Card.Img src={company1} alt="Card image" />
                </Card>
              </Col>
              <Col>
                <Card className="bg-dark text-white" style={{ width: "300px" }}>
                  <Card.Img src={company1} alt="Card image" />
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Partners;
