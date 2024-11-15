import { useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import SkillCard from "../components/SkillCard";
import PropTypes from "prop-types";
import { GET_SKILLS_BY_CATEGORY, GET_SKILLS_BY_USER } from "../utils/queries";

function SkillList({ type }) {
  const { categoryName, userId } = useParams();

  console.log("categoryName:", categoryName);
  console.log("userId:", userId);

  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_SKILLS_BY_CATEGORY, {
    variables: { categoryName }
  })

  // const { loading, error, data } = useQuery(
  //   type === "category" ? GET_SKILLS_BY_CATEGORY : GET_SKILLS_BY_USER,
  //   {
  //     variables: type === "category" ? { categoryName } : { userId },
  //   }
  // );

  console.log("data:", data);
  console.log("loading:", loading);
  console.log("error:", error);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading skills: {error.message}</p>;

  return (
    <div className="skill-list">
      {data?.skills?.map((userSkill) => (
        <SkillCard
          key={userSkill._id}
          name={userSkill.name}
          // text={userSkill.text}
          // imgSrc={userSkill.imgSrc}
          // onClick={() => navigate(`/${userSkill._id}`)}
        />
      ))}
    </div>
  );
}

SkillList.propTypes = {
  type: PropTypes.string,
};

export default SkillList;
