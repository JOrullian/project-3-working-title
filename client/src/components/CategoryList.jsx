import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import PropTypes from "prop-types";

function CategoryList({ categories }) {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/${category.title.toLowerCase()}`}
          className="category-card-link"
        >
          <CategoryCard
            key={category.id}
            title={category.title}
            imgSrc={category.imgSrc}
            onClick={() => console.log(`Clicked on ${category.title}`)}
          />
        </Link>
      ))}
    </div>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.array,
};

export default CategoryList;
