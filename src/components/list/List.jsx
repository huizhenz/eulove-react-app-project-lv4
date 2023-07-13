import React, { useState } from "react";
import { useQuery } from "react-query";
import { getPosts } from "../../axios/api";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../input/Input";
import useInput from "../../hooks/useInput";
import { styled } from "styled-components";
import { PiListMagnifyingGlassBold } from "react-icons/pi";
import { BiBus } from "react-icons/bi";
import { PiHouseLineBold } from "react-icons/pi";
import { PiForkKnifeDuotone } from "react-icons/pi";
import { TbShoppingBag } from "react-icons/tb";
import { LiaLandmarkSolid } from "react-icons/lia";
import Button from "../button/Button";

const List = ({ country, img }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery("posts", getPosts);

  const [isOpenModal, setIsOpenModal] = useState(false);
  // const []
  const [selectedCategory, onChangeSelectedCategory] = useInput();
  const categories = [
    { category: "전체", icon: <PiListMagnifyingGlassBold size="50" /> },
    { category: "교통", icon: <BiBus size="50" /> },
    { category: "숙소", icon: <PiHouseLineBold size="50" /> },
    { category: "맛집", icon: <PiForkKnifeDuotone size="50" /> },
    { category: "쇼핑", icon: <TbShoppingBag size="50" /> },
    { category: "관광", icon: <LiaLandmarkSolid size="50" /> },
  ];

  const clickOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const filteredCountry = data
    ? data.filter((post) => post.country === country)
    : data || [];

  const filteredList =
    selectedCategory && filteredCountry
      ? selectedCategory !== "전체"
        ? filteredCountry.filter((post) => post.category === selectedCategory)
        : filteredCountry
      : filteredCountry || [];

  const clickToDetail = (id) => navigate(`/detail/${id}`);

  if (isLoading) {
    return <h1>로딩중입니다 ...</h1>;
  }

  if (isError) {
    return <h1>오류가 발생하였습니다 ...</h1>;
  }

  return (
    <ListContainer>
      <ListTitle img={img}>{country}</ListTitle>
      <button onClick={clickOpenModal}>글쓰기</button>
      {isOpenModal && (
        <Input country={country} clickOpenModal={clickOpenModal} />
      )}
      <ListCategory>
        {categories.map((option) => {
          return (
            <CategoryIcon
              key={option}
              onClick={() => onChangeSelectedCategory(option.category)}
            >
              {option.icon}
            </CategoryIcon>
          );
        })}
      </ListCategory>
      <ListWrapper>
        {filteredList.map((post) => {
          return (
            <ListBox key={post.id}>
              <PostCategory>{post.category}</PostCategory>
              <PostTitle>{post.title}</PostTitle>
              <PostContents>{post.contents}</PostContents>
              <PostContents>by. {post.writer}</PostContents>
              <PostBtn>
                <Button onClickEvent={() => clickToDetail(post.id)}>
                  상세
                </Button>
              </PostBtn>
            </ListBox>
          );
        })}
      </ListWrapper>
    </ListContainer>
  );
};

export default List;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListTitle = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;
  /* border-radius: 5px; */
  font-size: 58px;
  font-weight: 600;
  font-style: italic;
  text-shadow: 3px 3px 3px #000000;
  margin: 40px 0px 60px 0px;
`;

const ListCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #cecece;
  margin: 40px 0px;
`;

const CategoryIcon = styled.div`
  padding: 40px 30px;
  cursor: pointer;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ListBox = styled.div`
  position: relative;
  width: 85%;
  color: black;
  background-color: #e7e7e7;
  border-radius: 5px;
  padding: 20px 25px;
  margin: 30px 0;
`;

const PostCategory = styled.div`
  width: 60px;
  text-align: center;
  border: 3px solid #383838;
  border-radius: 10px;
  font-size: 20px;
  margin: 3px;
`;

const PostTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin: 10px 5px;
`;

const PostContents = styled.div`
  font-size: 18px;
  margin: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const PostBtn = styled.div`
  position: absolute;
  bottom: 40%;
  right: 2%;
`;
