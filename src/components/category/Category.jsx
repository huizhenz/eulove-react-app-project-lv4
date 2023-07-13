import React from "react";

const Category = ({ onChangeCategory }) => {
  const categories = ["교통", "숙소", "맛집", "쇼핑", "관광"];

  return (
    <select onChange={(e) => onChangeCategory(e.target.value)}>
      <option>전체</option>
      {categories.map((option) => {
        return <option key={option}>{option}</option>;
      })}
    </select>
  );
};

export default Category;
