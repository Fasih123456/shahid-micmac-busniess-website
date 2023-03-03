import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import DownloadLink from "../Components/DownloadLink";

import Accordion from "react-bootstrap/Accordion";

function Downloads() {
  return (
    <React.Fragment>
      <Header display={true} Route={"Downloads"} />
      <main id="main">
        <section class="sample-page">
          <div class="container">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>PROCESS OF PREQUALIFICATION</Accordion.Header>

                <DownloadLink
                  text={"Agency-Agreement"}
                  link={
                    "https://fine.pk/sites/midmac.ae/pdf/0%20-%20PROCESS%20OF%20PREQULAIFICATION/Agency-Agreement-.pdf"
                  }
                />

                <DownloadLink
                  text={"Qualification Process of Prequalification"}
                  link={
                    "https://fine.pk/sites/midmac.ae/pdf/0%20-%20PROCESS%20OF%20PREQULAIFICATION/Qualification%20Process%20of%20Prequalification.pdf"
                  }
                />

                <DownloadLink
                  text={"Qualification Submittal Requirements"}
                  link={
                    "https://fine.pk/sites/midmac.ae/pdf/0%20-%20PROCESS%20OF%20PREQULAIFICATION/Qualification%20submittal%20requirments.pdf"
                  }
                />
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>MIDMAC PRESENTATION</Accordion.Header>
                <DownloadLink
                  text={"MIDMAC presentation"}
                  link={
                    "https://fine.pk/sites/midmac.ae/pdf/MIDMAC%20PRESENTATION/MIDMAC%20Presentation.pdf"
                  }
                />
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>REFERENCES</Accordion.Header>
                <DownloadLink
                  text="REFERNCE LIST"
                  link={
                    "https://fine.pk/sites/midmac.ae/pdf/1%20-%20REFERENCES/REFRENCE%20LIST.pdf"
                  }
                />
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>QHSE SAFTEY QUALITY</Accordion.Header>
                <DownloadLink
                  text="ISO 14001"
                  link="https://fine.pk/sites/midmac.ae/pdf/2%20-%20QHSE%20SAFETY%20QUALITY/ISO%2014001.pdf"
                />
                <DownloadLink
                  text="ISO 18001"
                  link="https://fine.pk/sites/midmac.ae/pdf/2%20-%20QHSE%20SAFETY%20QUALITY/ISO%2018001.pdf"
                />
                <DownloadLink
                  text="ISO 9001"
                  link="https://fine.pk/sites/midmac.ae/pdf/2%20-%20QHSE%20SAFETY%20QUALITY/ISO%209001.pdf"
                />
                <DownloadLink
                  text="QHSE POLICY"
                  link="https://fine.pk/sites/midmac.ae/pdf/2%20-%20QHSE%20SAFETY%20QUALITY/QHSE%20POLICY.pdf"
                />
                <DownloadLink
                  text="QUALITY POLICY"
                  link="https://fine.pk/sites/midmac.ae/pdf/2%20-%20QHSE%20SAFETY%20QUALITY/QUALITY%20POLICY.pdf"
                />
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>PHOTOS OF INSTALLTION</Accordion.Header>
                <DownloadLink
                  text="MECHNICAL KEY INTERLOCKS INSTALLATION"
                  link="https://fine.pk/sites/midmac.ae/pdf/3%20-%20PHOTOS%20OF%20INSTALLTION/MECHANICAL%20KEY%20INTERLOCKS%20INSTALLATION.pdf"
                />
                <DownloadLink
                  text="Handling Bag in place during Test"
                  link="https://fine.pk/sites/midmac.ae/pdf/img/Handling%20Bag%20in%20place%20during%20Test.jpg"
                />
                <DownloadLink
                  text="KNIFE GATE VALVE Punematic Cylinder"
                  link="https://fine.pk/sites/midmac.ae/pdf/img/KNIFE%20GATE%20VALVE%20With%20Punematic%20Cylinder.jpg"
                />
                <DownloadLink
                  text="KNIFE GATE VALVE"
                  link="https://fine.pk/sites/midmac.ae/pdf/img/KNIFE%20GATE%20VALVE.jpg"
                />
                <DownloadLink
                  text="Knife Gate Valves Move Clip"
                  link="https://fine.pk/sites/midmac.ae/pdf/img/Knife%20Gate%20Valves%20Movie%20clip.mp4"
                />
              </Accordion.Item>

              <Accordion.Item eventKey="6">
                <Accordion.Header>API STANDARDS</Accordion.Header>
                <DownloadLink
                  text="API 527"
                  link="https://fine.pk/sites/midmac.ae/pdf/4%20-%20API%20STANDARDS/API%20527.pdf"
                />
                <DownloadLink
                  text="API 598"
                  link="https://fine.pk/sites/midmac.ae/pdf/4%20-%20API%20STANDARDS/API%20598%20.pdf"
                />
                <DownloadLink
                  text="API SPEC 6A 19th Ed (Specifications for Wellhead & Christmas Tree Equipment"
                  link="https://fine.pk/sites/midmac.ae/pdf/4%20-%20API%20STANDARDS/API%20SPEC%206A%2019th%20Ed%20(Specification%20for%20Wellhead%20&%20Chiristmas%20Tree%20Equipment).pdf"
                />
                <DownloadLink
                  text="API SPEC 6D - 2002 (Pipeline Valve)"
                  link="https://fine.pk/sites/midmac.ae/pdf/4%20-%20API%20STANDARDS/API%20SPEC%206D%20-%202002%20(Pipeline%20Valve).pdf"
                />
                <DownloadLink
                  text="API STANDARD OF VALVE"
                  link="https://fine.pk/sites/midmac.ae/pdf/4%20-%20API%20STANDARDS/API%20STANDARD%20OF%20VALVE.pdf"
                />
                <DownloadLink
                  text="API6D Valve Insp & Testing 3.2"
                  link="https://fine.pk/sites/midmac.ae/pdf/4%20-%20API%20STANDARDS/API6D%20Valve%20Insp%20&%20Testing%203.2%20.pdf"
                />
                <DownloadLink
                  text="ASME B31.3 Codes"
                  link="https://fine.pk/sites/midmac.ae/pdf/4%20-%20API%20STANDARDS/ASME%20B31.3%20Codes.pdf"
                />
                <DownloadLink
                  text="VALVE MANUAL BOOK"
                  link="https://fine.pk/sites/midmac.ae/pdf/4%20-%20API%20STANDARDS/VALVE%20MANUAL%20BOOK.pdf"
                />
              </Accordion.Item>

              <Accordion.Item eventKey="7">
                <Accordion.Header>STANDARD DIMENSION</Accordion.Header>
                <DownloadLink
                  text="ANSI,ASTM and API Designations for Piping"
                  link="https://fine.pk/sites/midmac.ae/pdf/5%20-%20STANDARD%20DIMENSION/ANSI,%20ASTM%20and%20API%20Designations%20for%20Piping.pdf"
                />
                <DownloadLink
                  text="API Trim Chat"
                  link="https://fine.pk/sites/midmac.ae/pdf/5%20-%20STANDARD%20DIMENSION/API%20Trim%20Chart.pdf"
                />
                <DownloadLink
                  text="ASTM PIPE STANDARDS"
                  link="https://fine.pk/sites/midmac.ae/pdf/5%20-%20STANDARD%20DIMENSION/ASTM%20PIPE%20STANDARDS.pdf"
                />
                <DownloadLink
                  text="An overview of the American Petroleum Institue, API, valves Standards"
                  link="https://fine.pk/sites/midmac.ae/pdf/5%20-%20STANDARD%20DIMENSION/An%20overview%20of%20the%20American%20Petroleum%20Institute,%20API,%20valves%20standards.pdf"
                />
                <DownloadLink
                  text="Fitting Standard Specifications"
                  link="https://fine.pk/sites/midmac.ae/pdf/5%20-%20STANDARD%20DIMENSION/Fitting%20Standard%20Specifications.pdf"
                />
                <DownloadLink
                  text="Flanges Standard"
                  link="https://fine.pk/sites/midmac.ae/pdf/5%20-%20STANDARD%20DIMENSION/Flanges%20Standard.pdf"
                />
                <DownloadLink
                  text="Piping Schdule"
                  link="https://fine.pk/sites/midmac.ae/pdf/5%20-%20STANDARD%20DIMENSION/Piping%20Schdule.pdf"
                />
              </Accordion.Item>

              <Accordion.Item eventKey="8">
                <Accordion.Header>Orginization Structure</Accordion.Header>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Downloads;
