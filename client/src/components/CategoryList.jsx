import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import PropTypes from "prop-types";

function CategoryList({ categories }) {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryTitle) => {
    const categoryName = categoryTitle.toLowerCase();
    navigate(`/${categoryName}`);
  };

  return (
    <div className="category-list">
      {categories.map((category) => (
        <div
          key={category.id}
          className="category-card-link"
          onClick={() => handleCategoryClick(category.title)}
        >
          <CategoryCard
            title={category.title}
            imgSrc={category.imgSrc}
            onClick={() => console.log(`Clicked on ${category.title}`)}
          />
        </div>
      ))}
    </div>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.array,
};

export default CategoryList;
