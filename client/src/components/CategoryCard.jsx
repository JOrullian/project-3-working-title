import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

function CategoryCard({ name, image, onClick }) {
  return (
    <Card onClick={onClick} style={{ cursor: "pointer" }}>
      <Card.Img className="category-icon" variant="top" src={`/images/${image}`} />
      <Card.Body>
        <Card.Title className="category-title">{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

CategoryCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.elementType,
}

export default CategoryCard;
