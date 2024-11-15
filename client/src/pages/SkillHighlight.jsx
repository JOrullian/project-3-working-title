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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading skill data: {error.message}</p>;

  // Extract skill data
  const skill = data?.getSkillById;

  console.log(skill);

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
          {/* <img
            className="skill-highlight-img"
            src={skill.image || "default-image-path.jpg"}
            alt={skill.name}
          /> */}
        </div>
        <div className="skill-highlight-description-container">
          <header className="skill-description-header">
            <div className="skill-title-container">
              <h1 className="skill-type-title">{skill.category}</h1>
              {/* <h2 className="skill-profile-name">{skill.creator.name}</h2> */}
              <h3 className="skill-location">{skill.location}</h3>
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
