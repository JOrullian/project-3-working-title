import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

function SkillCard({ name, description, onClick, image }) {
  return (
    <Card onClick={onClick} style={{ cursor: "pointer" }}>
        <Card.Img variant="top" src={`/images/${image}`} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
    </Card>
  );
}

SkillCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    onClick: PropTypes.elementType,
}

export default SkillCard;
