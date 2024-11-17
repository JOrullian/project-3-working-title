export default function RecentSkillList() {
  const recentSkills = JSON.parse(localStorage.getItem("recentSkills")) || [];

  return (
    <div className="recent-skill-list">
      {recentSkills.length === 0 ? (
        <p>No recent skills viewed.</p>
      ) : (
        recentSkills.map((skill) => (
          <div key={skill.id} className="recent-skill-card">
            <h4>{skill.name}</h4>
            <p>{skill.category}</p>
          </div>
        ))
      )}
    </div>
  );
}
