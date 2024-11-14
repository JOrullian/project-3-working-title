import { useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import SkillCard from "../components/SkillCard";
import { GET_SKILLS } from "../utils/queries";

function SkillList() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const { loading: skillsLoading, error: skillsError, data: skillsData } = useQuery(GET_SKILLS, {
    variables: { categoryName },
  });

  if (skillsLoading) return <p>Loading...</p>;
  if (skillsError) return <p>Error loading skills: {skillsError.message}</p>;

  return (
    <div className="skill-list">
      {skillsData?.skill?.map((userSkill) => (
        <SkillCard
          key={userSkill._id}
          title={userSkill.name}
          text={userSkill.text}
          imgSrc={userSkill.imgSrc}
          onClick={() => navigate(`/${userSkill._id}`)}
        />
      ))}
    </div>
  );
}

export default SkillList;
