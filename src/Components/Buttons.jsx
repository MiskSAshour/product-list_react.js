import React from "react";

const Buttons = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    "All",
    "Men's Clothing",
    "Women's Clothing",
    "Jewelery",
    "Electronics",
  ];

  return (
    <div className="category-buttons">
      {categories.map((category, index) => (
        <button
          key={index}
          type="button"
          className={`btn ${
            selectedCategory === category
              ? "btn-primary"
              : "btn-outline-primary"
          } mx-2 my-2`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
