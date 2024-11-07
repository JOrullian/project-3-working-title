import CategoryCard from "../components/CategoryCard";

function CategoryList() {
  // Need to add imgSrc to each of these
  const categories = [
    {
      id: 1,
      title: "Art",
      imgSrc: "",
    },
    {
      id: 2,
      title: "Technology",
      imgSrc: "",
    },
    {
      id: 3,
      title: "Music",
      imgSrc: "",
    },
    {
      id: 4,
      title: "Education",
      imgSrc: "",
    },
    {
      id: 5,
      title: "Handicraft",
      imgSrc: "",
    },
    {
      id: 6,
      title: "Cooking",
      imgSrc: "",
    },
    {
      id: 7,
      title: "Photography",
      imgSrc: "",
    },
    {
      id: 8,
      title: "Writing",
      imgSrc: "",
    },
    {
      id: 9,
      title: "Fitness",
      imgSrc: "",
    },
    {
      id: 10,
      title: "Language",
      imgSrc: "",
    },
    {
      id: 11,
      title: "Fashion",
      imgSrc: "",
    },
    {
      id: 12,
      title: "Other",
      imgSrc: "",
    },
  ];

  return (
    <div className="category-list">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          title={category.title}
          imgSrc={category.imgSrc}
          onClick={() => console.log(`Clicked on ${category.title}`)}
        />
      ))}
    </div>
  );
}

export default CategoryList;