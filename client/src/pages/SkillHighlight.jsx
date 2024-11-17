import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import BackArrow from "../assets/back-arrow.svg";
import Settings from "../assets/settings.svg";
import AppNavbar from "../components/Navbar";
import { GET_SKILL_BY_ID } from "../utils/queries";

export default function SkillHighlightPage() {
  const { skillId } = useParams();
  const navigate = useNavigate();

  // Fetch the skill data using the skillId
  const { loading, error, data } = useQuery(GET_SKILL_BY_ID, {
    variables: { id: skillId },
  });

  // Save skill to local storage
  const saveToRecentSkills = (skill) => {
    if (!skill) return;

    // Retrieve recent skills from local storage
    const recentSkills = JSON.parse(localStorage.getItem("recentSkills")) || [];

    // Remove the skill if it already exists in the list to avoid duplicates
    const updatedSkills = recentSkills.filter(
      (item) => item.description !== skill.description
    );

    // Add the new skill to the front of the list
    updatedSkills.unshift({
      id: skill._id,
      name: skill.name,
      description: skill.description,
      category: skill.category,
      user: skill.user,
    });

    // Limit the array to the four most recent skills
    const limitedSkills = updatedSkills.slice(0, 4);

    // Save back to local storage
    localStorage.setItem("recentSkills", JSON.stringify(limitedSkills));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading skill data: {error.message}</p>;

  // Extract skill data
  const skill = data?.getSkillById;
  console.log(skill);

  if (skill) saveToRecentSkills(skill);

  if (!skill) {
    return <p>Skill not found. Please try again later.</p>;
  }

  return (
    <>
      <div className="page-main-container">
        <header className="skill-header">
          <div className="back-arrow-container">
            <img
              className="profile-backarrow"
              src={BackArrow}
              alt="Back"
              onClick={() => navigate(-1)}
            />
          </div>
          <div className="profile-title-container">
            <h1>{skill.name}</h1>
          </div>
          <div className="settings-icon-container">
            <img className="settings-icon" src={Settings} alt="Settings" />
          </div>
        </header>
        <div className="skill-highlight-img-container">
          <img
            className="skill-highlight-img"
            src={`/images/${skill.category.image}`}
            alt={skill.name}
          />
        </div>
        <div className="skill-highlight-description-container">
          <header className="skill-description-header">
            <div className="skill-title-container">
              <h1 className="skill-type-title">{skill.category.name}</h1>
              <h2 className="skill-profile-name">{skill.user.firstName}</h2>
              <h3 className="skill-location">{skill.timeAvailable}</h3>
            </div>
          </header>
          <div className="skill-description-body">
            <p>{skill.description}</p>
          </div>
        </div>
        <footer className="skill-highlight-footer">
          <button className="skill-book-btn">Send message</button>
        </footer>
      </div>
      <div className="navbar">
        <AppNavbar />
      </div>
    </>
  );
}
