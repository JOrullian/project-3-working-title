import { useQuery } from "react";
import SkillCard from "../components/SkillCard";

import { GET_SKILLS } from "../utils/queries";

function SkillList() {
    const { loading, error, data } = useQuery(GET_SKILLS);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="skill-list">
      {data.skills.map((skill) => (
        <SkillCard
          key={skill.id}
          title={skill.title}
          text={skill.text}
          imgSrc={skill.imgSrc}
          onClick={() => console.log(`Clicked on ${skill.title}`)}
        />
      ))}
    </div>
  );
}

export default SkillList;