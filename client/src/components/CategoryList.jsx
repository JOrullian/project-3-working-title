import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import PropTypes from "prop-types";

function CategoryList({ categories }) {
  console.log(categories);
  const navigate = useNavigate();

  const handleCategoryClick = (name) => {
    if (!name) {
      console.error("Category name is undefined");
      return;
    }
    const categoryName = name.toLowerCase();
    navigate(`/${categoryName}`);
  };

  return (
    <div className="category-list">
      {categories.map((category) => (
        <div
          key={category.id}
          className="category-card-link"
          onClick={() => handleCategoryClick(category.name)}
        >
          <CategoryCard
            title={category.name}
            imgSrc={category.image}
            onClick={() => console.log(`Clicked on ${category.name}`)}
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
