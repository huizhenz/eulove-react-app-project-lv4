import React from "react";
import { styled } from "styled-components";

const Category = ({ onChangeCategory }) => {
  const categories = [
    { category: "교통", id: 1 },
    { category: "숙소", id: 2 },
    { category: "맛집", id: 3 },
    { category: "쇼핑", id: 4 },
    { category: "관광", id: 5 },
  ];
  return (
    <SelectBox onChange={(e) => onChangeCategory(e.target.value)}>
      <option>전체</option>
      {categories.map((option) => {
        return <option key={option.id}>{option.category}</option>;
      })}
    </SelectBox>
  );
};

export default Category;

const SelectBox = styled.select`
  width: 80px;
  height: 24px;
  font-size: 16px;
`;
