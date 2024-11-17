import SkillCard from "../components/SkillCard";
import { useNavigate } from "react-router-dom";

export default function RecentSkillList() {
  const navigate = useNavigate();
  const recentSkills = JSON.parse(localStorage.getItem("recentSkills")) || [];

  if (recentSkills.length === 0) {
    return <p>No recent skills viewed.</p>;
  }

  return (
    <div className="recent-skill-list">
      {recentSkills.map((skill) => (
        <SkillCard
          key={skill.id}
          name={skill.name}
          description={skill.description}
          onClick={() => navigate(`/skill/${skill.id}`)}
          image={skill.category.image}
        />
      ))}
    </div>
  );
}
