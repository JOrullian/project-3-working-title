import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

function CategoryCard({ title, imgSrc, onClick }) {
  return (
    <Card onClick={onClick} style={{ cursor: "pointer" }}>
      <Card.Img className="category-icon" variant="top" src={`/images/${imgSrc}`} />
      <Card.Body>
        <Card.Title className="category-title">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

CategoryCard.propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  onClick: PropTypes.elementType,
}

export default CategoryCard;
