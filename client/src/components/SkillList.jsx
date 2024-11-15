import SkillCard from "../components/SkillCard";
import PropTypes from "prop-types";

function SkillList({ skills }) {
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
          onClick={() => navigate(`/${userSkill._id}`)}
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
