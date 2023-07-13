import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deletePost, getCountryPosts, getPosts } from "../../axios/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import Input from "../input/Input";
import useInput from "../../hooks/useInput";
import { styled } from "styled-components";
import { PiListMagnifyingGlassBold } from "react-icons/pi";
import { BiBus } from "react-icons/bi";
import { PiHouseLineBold } from "react-icons/pi";
import { PiForkKnifeDuotone } from "react-icons/pi";
import { TbShoppingBag } from "react-icons/tb";
import { LiaLandmarkSolid } from "react-icons/lia";

const List = ({ country, img }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery("posts", getPosts);

  const queryClient = useQueryClient();
  // useMutation 훅을 사용한다면 요청 관련 상태의 관리와 요청 처리 전/후로 실행할 작업을 쉽게 설정
  const mutation = useMutation(deletePost, {
    // onSuccess는 useMutation의 option 중 하나
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      console.log("삭제 성공");
    },
  });

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

  const clickDeletePost = (id) => {
    if (window.confirm("정말 삭제하시겠습니까 ?")) {
      alert("삭제되었습니다.");
      mutation.mutate(id);
    } else {
      alert("삭제가 취소되었습니다.");
    }
  };

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
      <ListWrapper>
        <button onClick={clickOpenModal}>글쓰기</button>
        <ListCategory>
          {isOpenModal && (
            <Input country={country} clickOpenModal={clickOpenModal} />
          )}
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {categories.map((option) => {
              return (
                <div
                  style={{ padding: "30px" }}
                  key={option}
                  onClick={() => onChangeSelectedCategory(option.category)}
                >
                  {option.icon}
                </div>
              );
            })}
          </div>
        </ListCategory>
        {filteredList.map((post) => {
          return (
            <ListBox key={post.id}>
              <p>{post.category}</p>
              <p>{post.writer}</p>
              <p>{post.title}</p>
              <p>{post.contents}</p>
              <button onClick={() => clickDeletePost(post.id)}>삭제</button>
              <button onClick={() => clickToDetail(post.id)}>상세</button>
            </ListBox>
          );
        })}
      </ListWrapper>
    </ListContainer>
  );
};

export default List;

const ListContainer = styled.div`
  width: 100%;
  display: inline-block;
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
  /* margin: 40px; */
`;

const ListCategoryButton = styled.button`
  margin: 30px;
  cursor: pointer;
`;

const ListWrapper = styled.div`
  text-align: center;
`;

const ListBox = styled.div`
  height: 120px;
  /* width: 1000px; */

  display: flex;
  align-items: center;
  justify-content: center;

  color: #000000;
  background-color: #e7e7e7;
  /* border-radius: 5px; */
  margin-top: 40px;
`;
