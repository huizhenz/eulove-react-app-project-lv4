import React, { useState } from "react";
import shortid from "shortid";
import { addPost } from "../../axios/api";
import { useMutation, useQueryClient } from "react-query";
import useInput from "../../hooks/useInput";
import Category from "../category/Category";
import Button from "../button/Button";
import * as S from "./StyledInput";

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
    <S.ModalContainer>
      <S.ModalWrapper onSubmit={onSubmitAddPostHandler}>
        <S.ModalCategory>
          <S.ModalLabel>Category&nbsp;</S.ModalLabel>
          <Category onChangeCategory={onChangeCategory} />
        </S.ModalCategory>
        <S.ModalLabel>Writer</S.ModalLabel>
        <S.ModalWriter
          value={writer}
          onChange={(e) => onChangeWriter(e.target.value)}
          placeholder="작성자"
          required
        />
        <S.ModalLabel>Title</S.ModalLabel>
        <S.ModalTitle
          value={title}
          onChange={(e) => onChangeTitle(e.target.value)}
          placeholder="제목을 입력해 주세요"
          required
        />
        <S.ModalLabel>Contents</S.ModalLabel>
        <S.ModalContents
          value={contents}
          onChange={(e) => onChangeContents(e.target.value)}
          placeholder="내용을 입력해 주세요"
          required
        />
        <S.ModalBtnBox>
          <Button type="submit">등록</Button>
          <Button onClickEvent={clickOpenModal}>닫기</Button>
        </S.ModalBtnBox>
      </S.ModalWrapper>
    </S.ModalContainer>
  );
};

export default Input;
