import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import PropTypes from "prop-types";
import { GET_CATEGORIES } from "../utils/queries";
import { useQuery } from "@apollo/client";

function CategoryList() {

  const { loading, data } = useQuery(GET_CATEGORIES);
  const categories = data?.categories || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="category-list">
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          name={category.name}
          image={category.image}
          onClick={() => console.log(`Clicked on ${category.name}`)}
        />
      ))}
    </div>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.array,
};

export default CategoryList;
