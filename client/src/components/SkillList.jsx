import { useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import SkillCard from "../components/SkillCard";
import PropTypes from "prop-types";
import { GET_SKILLS_BY_CATEGORY, GET_SKILLS_BY_USER, GET_SKILLS_BY_NAME } from "../utils/queries";

function SkillList({ type }) {
  const { categoryName, userId, skillName } = useParams();

  console.log("categoryName:", categoryName);
  console.log("userId:", userId);
  console.log("skillName:", skillName);

  const navigate = useNavigate();

  const { loading, error, data } = useQuery(
    type === "category" 
      ? GET_SKILLS_BY_CATEGORY 
      : type === "user"
      ? GET_SKILLS_BY_USER 
      : GET_SKILLS_BY_NAME,
    {
      variables: type === "category" 
        ? { categoryName } 
        : type === "user" 
        ? { userId } 
        : { skillName },
    }
  );

  console.log("data:", data);
  console.log("loading:", loading);
  console.log("error:", error);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading skills: {error.message}</p>;

  const skills = data?.getSkillsByCategory || data?.getSkillsByUser || data?.getSkillsByName;


  return (
    <div className="skill-list">
      {skills?.map((userSkill) => (
        <SkillCard
          key={userSkill._id}
          name={userSkill.name}
          description={userSkill.description}
          // imgSrc={userSkill.imgSrc}
          onClick={() => navigate(`/${userSkill._id}`)}
        />
      ))}
    </div>
  );
}

SkillList.propTypes = {
  type: PropTypes.string,
};

export default SkillList;
