import React, { useState } from "react";
import shortid from "shortid";
import { addPost } from "../../axios/api";
import { useMutation, useQueryClient } from "react-query";
import useInput from "../../hooks/useInput";
import Category from "../category/Category";

const Input = () => {
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
    }

    const newPost = {
      id: shortid.generate(),
      category,
      writer,
      title,
      contents,
    };

    mutation.mutate(newPost);

    resetWriter("");
    resetTitle("");
    resetContents("");
  };

  return (
    <div>
      <form onSubmit={onSubmitAddPostHandler}>
        <Category onChangeCategory={onChangeCategory} />
        작성자 :
        <input
          value={writer}
          onChange={(e) => onChangeWriter(e.target.value)}
          placeholder="작성자 입력 ..."
          required
        />
        제목 :
        <input
          value={title}
          onChange={(e) => onChangeTitle(e.target.value)}
          placeholder="제목 입력 ..."
          required
        />
        내용 :
        <input
          value={contents}
          onChange={(e) => onChangeContents(e.target.value)}
          placeholder="내용 입력 ..."
          required
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default Input;
