import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

function CategoryCard({ title, imgSrc, onClick }) {
  return (
    <Card onClick={onClick} style={{ cursor: "pointer" }}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
    </Card>
  );
}

CategoryCard.propTypes = {
    title: PropTypes.string,
    imgSrc: PropTypes.string,
    onClick: PropTypes.string,
}

export default CategoryCard;
