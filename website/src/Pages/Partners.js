import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import "../App.css";

function Partners() {
  return (
    <React.Fragment>
      <Header display={true} Route={"Our Partners"} />
      <main id="main">
        <section style={{ marginLeft: "5%" }}>
          {/* <Container fluid>
            <Row>
              <Col>
                <Card className="bg-dark text-white" style={{ width: "300px" }}>
                  <Card.Img src={image1} alt="Card image" />
                </Card>
              </Col>
              <Col>
                <Card className="bg-dark text-white" style={{ width: "300px" }}>
                  <Card.Img src={image2} alt="Card image" />
                </Card>
              </Col>
              <Col>
                <Card className="bg-dark text-white" style={{ width: "300px" }}>
                  <Card.Img src={image3} alt="Card image" />
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="bg-dark text-white" style={{ width: "300px" }}>
                  <Card.Img src={image4} alt="Card image" />
                </Card>
              </Col>
              <Col>
                <Card className="bg-dark text-white" style={{ width: "300px" }}>
                  <Card.Img src={image5} alt="Card image" />
                </Card>
              </Col>
              <Col></Col>
            </Row>
          </Container> */}
          <h1
            style={{
              color: "var(--color-primary)",
              fontSize: "2rem",
              fontFamily: "var(--font-secondary)",
            }}
          >
            Scope of supply & installation:
          </h1>
          <ul style={{ fontSize: "1.2rem", fontFamily: "var(--font-secondary)" }}>
            <li> Mechanical Key Interlocks</li>
            <li> Passive Fire Protection</li>
            <li> Actuators- Electric, Pneumatic & Electrohydraulic</li>
            <li> Telecom & F&G (CCTV,</li>
            <li> HVAC System</li>
          </ul>
          <h1
            style={{
              color: "var(--color-primary)",
              fontSize: "2rem",
              fontFamily: "var(--font-secondary)",
            }}
          >
            Scope of supply:
          </h1>
          <ul style={{ fontSize: "1.2rem", fontFamily: "var(--font-secondary)" }}>
            <li> Choke Valve</li>
            <li> Control Valves-All type</li>
            <li> MOVS,ESD</li>
            <li> Manual Valves (Gate, Globe Check & Butterfly Valve)</li>
            <li> Field Instruments (Gauges & Transmitters)</li>
            <li> Cables-Electrical & Instruments</li>
            <li> EXd Enclosures & Junction Box</li>
            <li> Explosion Proof Lights</li>
            <li> Sewage Treatment Packages</li>
            <li> HVAC & Industrial Valve</li>
          </ul>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Partners;
