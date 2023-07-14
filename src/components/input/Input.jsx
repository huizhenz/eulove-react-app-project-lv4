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
      <ModalWrapper onSubmit={onSubmitAddPostHandler}>
        <ModalCategory>
          <ModalLabel>Category&nbsp;</ModalLabel>
          <Category onChangeCategory={onChangeCategory} />
        </ModalCategory>
        <ModalLabel>Writer</ModalLabel>
        <ModalWriter
          value={writer}
          onChange={(e) => onChangeWriter(e.target.value)}
          placeholder="작성자"
          required
        />
        <ModalLabel>Title</ModalLabel>
        <ModalTitle
          value={title}
          onChange={(e) => onChangeTitle(e.target.value)}
          placeholder="제목을 입력해 주세요"
          required
        />
        <ModalLabel>Contents</ModalLabel>
        <ModalContents
          value={contents}
          onChange={(e) => onChangeContents(e.target.value)}
          placeholder="내용을 입력해 주세요"
          required
        />
        <ModalBtnBox>
          <Button type="submit">등록</Button>
          <Button onClickEvent={clickOpenModal}>닫기</Button>
        </ModalBtnBox>
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

const ModalWrapper = styled.form`
  width: 600px;
  height: 400px;
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: column;
  color: #000000;
  font-size: 18px;
  background-color: #e7e7e7;
  border-radius: 10px;
  padding: 20px;
`;

const ModalCategory = styled.div`
  margin-top: 20px;
`;

const ModalLabel = styled.label`
  font-weight: 600;
  margin-top: 20px;
`;

const ModalWriter = styled.input`
  width: 300px;
  height: 14px;
  font-size: 16px;
  padding: 7px;
`;

const ModalTitle = styled.textarea`
  width: 580px;
  height: 23px;
  font-size: 16px;
  padding: 7px;
`;

const ModalContents = styled.textarea`
  width: 580px;
  height: 100px;
  font-size: 16px;
  padding: 7px;
`;

const ModalBtnBox = styled.div`
  text-align: center;
  margin: 20px 0;
`;
