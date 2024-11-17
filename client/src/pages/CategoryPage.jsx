import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import AppNavbar from "../components/Navbar";
import BackArrow from "../assets/back-arrow.svg";
import SkillList from "../components/SkillList";
import { GET_SKILLS_BY_CATEGORY } from "../utils/queries";
import Auth from "../utils/auth";

export default function CategoryPage() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  // Checks that user is logged in with non-expired token and redirects them if not
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  if (!token) {
    localStorage.removeItem('id_token');
    navigate('/login')
  }

  // GraphQL query to fetch skills by category
  const { loading, error, data } = useQuery(GET_SKILLS_BY_CATEGORY, {
    variables: { categoryName },
    skip: !categoryName, // Skip query if no category name
  });

  // Helper function to format the category name
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Handle back navigation
  const handleBackArrowClick = () => {
    navigate(`/`);
  };

  // Display loading or error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading skills: {error.message}</p>;

  // Extract skills from query result
  const skills = data?.getSkillsByCategory || [];

  console.log(skills);

  return (
    <>
      <div className="page-main-container">
        <header className="category-header">
          <div className="back-arrow-container">
            <img
              className="profile-backarrow"
              src={BackArrow}
              onClick={handleBackArrowClick}
              alt="Back Arrow"
            />
          </div>
          <div className="category-title-container">
            <h1>
              {categoryName
                ? capitalizeFirstLetter(categoryName.replace("-", " "))
                : "Category"}
            </h1>
          </div>
        </header>
        <div className="category-page-body">
          {skills.length > 0 ? (
            <SkillList skills={skills} />
          ) : (
            <p>No skills found in this category.</p>
          )}
        </div>
      </div>
      <AppNavbar />
    </>
  );
}
