import React from "react";
import { useLocation } from "react-router-dom";

function NavigationSectors() {
  const location = useLocation();

  // Define an array of sector links and their corresponding paths
  const sectorLinks = [
    { name: "Refining", path: "/Sectors/Refining" },
    { name: "Marine", path: "/Sectors/Marine" },
    { name: "OilGas", path: "/Sectors/OilGas" },
    { name: "Power", path: "/Sectors/Power" },
    { name: "Industries", path: "/Sectors/Industries" },
    { name: "Infrastructure", path: "/Sectors/Infrastructure" },
    { name: "Petrochemical", path: "/Sectors/Petrochemical" },
  ];

  return (
    <React.Fragment>
      <div class="col-lg-4">
        <h4>Discover Our Other Sectors - Something for Everyone!</h4>
        <p>
          At our company, we offer a diverse range of products and services across multiple sectors,
          catering to a wide range of customers with varying needs. Whether you are a business
          owner, entrepreneur, or consumer, we have something for everyone.
        </p>
        <div className="services-list">
          {sectorLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={location.pathname === link.path ? "active" : null}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default NavigationSectors;
