import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductCarousel from "../Components/ProductsCarousel";

import "../App.css";

function Products() {
  return (
    <React.Fragment>
      <Header display={false} Route={"Our Products"} />
      <main id="main">
        <ProductCarousel />
        <section style={{ marginLeft: "5%" }}>
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
            <li>Double block and bleed valve</li>
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
            <li> Telecom & F&G (CCTV)</li>
            <li> HVAC System</li>
          </ul>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Products;
