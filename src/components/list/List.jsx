import React, { useState } from "react";
import { useQuery } from "react-query";
import { getPosts } from "../../axios/api";
import { useNavigate } from "react-router-dom";
import Input from "../input/Input";
import useInput from "../../hooks/useInput";
import { PiListMagnifyingGlassBold } from "react-icons/pi";
import { BiBus } from "react-icons/bi";
import { PiHouseLineBold } from "react-icons/pi";
import { PiForkKnifeDuotone } from "react-icons/pi";
import { TbShoppingBag } from "react-icons/tb";
import { LiaLandmarkSolid } from "react-icons/lia";
import LoadingImg from "../../assets/loading.gif";
import Button from "../button/Button";
import * as S from "./StyledList";

const List = ({ country, img }) => {
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
    return (
      <S.LoadingBox>
        <h2>잠시만 기다려주세요</h2>
        <img src={LoadingImg} />
      </S.LoadingBox>
    );
  }

  if (isError) {
    return <h1>오류가 발생하였습니다 ...</h1>;
  }

  return (
    <S.ListContainer>
      <S.ListTitle img={img}>{country}</S.ListTitle>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          width="medium"
          backgroundcolor="white"
          borderladius="round"
          hoverback="dark"
          onClickEvent={clickOpenModal}
        >
          글쓰기
        </Button>
      </div>

      {isOpenModal && (
        <Input country={country} clickOpenModal={clickOpenModal} />
      )}
      <S.ListCategory>
        {categories.map((option) => {
          return (
            <S.CategoryIcon
              key={option}
              onClick={() => onChangeSelectedCategory(option.category)}
            >
              {option.icon}
            </S.CategoryIcon>
          );
        })}
      </S.ListCategory>
      <S.ListWrapper>
        {filteredList.map((post) => {
          return (
            <S.ListBox key={post.id}>
              <S.PostBox>
                <S.PostCategory>{post.category}</S.PostCategory>
                <S.PostTitle>{post.title}</S.PostTitle>
                <S.PostContents>{post.contents}</S.PostContents>
                <S.PostContents>by. {post.writer}</S.PostContents>
              </S.PostBox>
              <S.PostBtn>
                <Button onClickEvent={() => clickToDetail(post.id)}>
                  상세
                </Button>
              </S.PostBtn>
            </S.ListBox>
          );
        })}
      </S.ListWrapper>
    </S.ListContainer>
  );
};

export default List;
