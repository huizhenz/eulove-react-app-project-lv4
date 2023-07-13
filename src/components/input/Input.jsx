import React, { useState } from "react";
import shortid from "shortid";
import { addPost } from "../../axios/api";
import { useMutation, useQueryClient } from "react-query";
import useInput from "../../hooks/useInput";
import Category from "../category/Category";
import { styled } from "styled-components";
import Button from "../button/Button";

const Input = ({ country, clickOpenModal }) => {
  const [category, onChangeCategory] = useInput();
  const [writer, onChangeWriter, resetWriter] = useInput();
  const [title, onChangeTitle, resetTitle] = useInput();
  const [contents, onChangeContents, resetContents] = useInput();

  // 리액트 쿼리 관련 코드
  const queryClient = useQueryClient(); // 무효화 시키려고 필요한 아이 ?
  const mutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts"); // 무효화 시켜서 새로고침 하지 않아도 바로 추가됨
      console.log("추가 성공");
    },
  });

  const onSubmitAddPostHandler = (e) => {
    e.preventDefault();

    if (!category) {
      return alert("카테고리를 선택해 주세요.");
    } else {
    }
    const newPost = {
      id: shortid.generate(),
      country,
      category,
      writer,
      title,
      contents,
    };

    mutation.mutate(newPost);

    clickOpenModal();

    resetWriter("");
    resetTitle("");
    resetContents("");

    return alert("글이 등록되었습니다.");
  };

  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalBox onSubmit={onSubmitAddPostHandler}>
          <div>
            Category : <Category onChangeCategory={onChangeCategory} />
          </div>
          <div>
            Writer :
            <textarea
              value={writer}
              onChange={(e) => onChangeWriter(e.target.value)}
              placeholder="작성자 입력 ..."
              required
            />
          </div>
          <div>
            Title :
            <textarea
              value={title}
              onChange={(e) => onChangeTitle(e.target.value)}
              placeholder="제목 입력 ..."
              required
            />
          </div>
          <div>
            Contents :
            <textarea
              value={contents}
              onChange={(e) => onChangeContents(e.target.value)}
              placeholder="내용 입력 ..."
              required
            />
          </div>
          <ModalBtnBox>
            <Button type="submit">등록</Button>
            <Button onClickEvent={clickOpenModal}>닫기</Button>
          </ModalBtnBox>
        </ModalBox>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default Input;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #3434346e;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const ModalWrapper = styled.div`
  width: 600px;
  height: 400px;
  /* 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */

  /* text-align: left; */

  color: #000000;
  font-size: 18px;
  background-color: #e7e7e7;
  border-radius: 10px;
`;

const ModalBox = styled.form`
  /* width: 600px;
  height: 400px; */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* text-align: left; */

  /* color: #000000;
  font-size: 18px;
  background-color: #e7e7e7;
  border-radius: 10px; */
`;

const ModalBtnBox = styled.div`
  margin: 20px 0;
`;
