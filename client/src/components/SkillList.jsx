import SkillCard from "../components/SkillCard";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function SkillList({ skills }) {
  const navigate = useNavigate();

  if (!skills || skills.length === 0) {
    return <p>No skills found.</p>;
  }

  return (
    <div className="skill-list">
      {skills.map((userSkill) => (
        <SkillCard
          key={userSkill._id}
          name={userSkill.name}
          description={userSkill.description}
          onClick={() => navigate(`/skill/${userSkill._id}`)}
          image={userSkill.category.image}
        />
      ))}
    </div>
  );
}

SkillList.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
};

export default SkillList;
