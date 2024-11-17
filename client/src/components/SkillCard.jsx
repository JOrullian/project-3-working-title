import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

function SkillCard({ name, description, onClick }) {
  return (
    <Card className="skill-card-container" onClick={onClick} style={{ cursor: "pointer" }}>
        {/* <Card.Img variant="top" src={imgSrc} /> */}
        <Card.Body className="skill-card-body">
          <Card.Title className="skill-card-title">{name}</Card.Title>
          <Card.Text className="skill-card-desc">{description}</Card.Text>
        </Card.Body>
    </Card>
  );
}

SkillCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    // imgSrc: PropTypes.string,
    onClick: PropTypes.elementType,
}

export default SkillCard;
