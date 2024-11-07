import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

function SkillCard({ title, text, imgSrc, onClick }) {
  return (
    <Card onClick={onClick} style={{ cursor: "pointer" }}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
    </Card>
  );
}

SkillCard.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    imgSrc: PropTypes.string,
    onClick: PropTypes.string,
}

export default SkillCard;
