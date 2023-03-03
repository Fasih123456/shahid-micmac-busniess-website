import Accordion from "react-bootstrap/Accordion";

function DownloadLink({ text, link }) {
  return (
    <Accordion.Body>
      <a href={link} target="_blank" class="brochure-btn">
        <span class="icon fas fa-file-pdf"></span>
        {text}.pdf
      </a>
    </Accordion.Body>
  );
}

export default DownloadLink;
