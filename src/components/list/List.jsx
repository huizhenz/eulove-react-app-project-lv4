import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deletePost, getPosts } from "../../axios/api";
import { Link } from "react-router-dom";
import Input from "../input/Input";
import useInput from "../../hooks/useInput";

const List = () => {
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
  const [selectedCategory, onChangeSelectedCategory] = useInput();
  const categories = ["전체", "교통", "숙소", "맛집", "쇼핑", "관광"];

  const clickOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const filteredList =
    selectedCategory && data
      ? selectedCategory !== "전체"
        ? data.filter((post) => post.category === selectedCategory)
        : data
      : data || [];

  const clickDeletePost = (id) => {
    if (window.confirm("정말 삭제하시겠습니까 ?")) {
      alert("삭제되었습니다.");
      mutation.mutate(id);
    } else {
      alert("삭제가 취소되었습니다.");
    }
  };

  if (isLoading) {
    return <h1>로딩중입니다 ...</h1>;
  }

  if (isError) {
    return <h1>오류가 발생하였습니다 ...</h1>;
  }

  return (
    <div>
      <button onClick={clickOpenModal}>글쓰기</button>
      {isOpenModal && <Input setIsOpenModal={setIsOpenModal} />}
      <br />
      {categories.map((option) => {
        return (
          <button key={option} onClick={() => onChangeSelectedCategory(option)}>
            {option}
          </button>
        );
      })}
      {filteredList.map((post) => {
        return (
          <div
            style={{ border: "1px solid black", margin: "5px" }}
            key={post.id}
          >
            <p>{post.category}</p>
            <p>{post.writer}</p>
            <Link to={`/detail/${post.id}`}>
              <p>{post.title}</p>
            </Link>
            <p>{post.contents}</p>
            <button onClick={() => clickDeletePost(post.id)}>삭제</button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
