import Card from "react-bootstrap/Card";

function AllProductsCard({ src, title, description }) {
  return (
    <>
      <Card className="text-center mx-auto" style={{ marginTop: "20px" }}>
        <Card.Img variant="top" src={src} style={{ maxHeight: "1200px", maxWidth: "800px" }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default AllProductsCard;
