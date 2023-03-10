import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import "../App.css";

function SectorDetail() {
  const { sectorId } = useParams();

  // Use the sectorId to fetch data for the corresponding sector

  return (
    <React.Fragment>
      {/* Render the details for the sector */}
      <Header display={false} Route={"Sector"} />

      <section class="sample-page">
        <div class="container">
          <p>You can duplicate this sample page and create any number of inner pages you like!</p>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default SectorDetail;
