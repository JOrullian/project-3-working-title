import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AppNavbar from "../components/Navbar";
import BackArrow from "../assets/back-arrow.svg";

export default function CategoryPage() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const handleBackArrowClick = () => {
    navigate(`/`);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <div className="page-main-container">
        <header className="category-header">
          <div className="back-arrow-container">
            <img
              className="profile-backarrow"
              src={BackArrow}
              onClick={() => handleBackArrowClick()}
            ></img>
          </div>
          <div className="category-title-container">
            <h1>
              {categoryName
                ? capitalizeFirstLetter(categoryName.replace("-", " "))
                : "Category"}
            </h1>
          </div>
        </header>
        <div className="category-page-body"></div>
      </div>
      <AppNavbar />
    </>
  );
}
