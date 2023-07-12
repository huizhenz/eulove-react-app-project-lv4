import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link, useParams } from "react-router-dom";
import { getDetailPost, updatePost } from "../../axios/api";
import useInput from "../../hooks/useInput";
import Category from "../category/Category";

const Post = () => {
  const { id } = useParams();

  const { isLoading, isError, data } = useQuery("post", () =>
    getDetailPost(id)
  );

  const queryClient = useQueryClient();
  const mutation = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
      console.log("수정 성공");
    },
  });

  const [category, onChangeCategory] = useInput();
  const [writer, onChangeWriter, resetWriter] = useInput();
  const [title, onChangeTitle, resetTitle] = useInput();
  const [contents, onChangeContents, resetContents] = useInput();
  const [isEditMode, setIsEditMode] = useState(false);

  const clickEditMode = () => {
    setIsEditMode((prev) => !prev);
    onChangeWriter(data.writer);
    // onChangeCategory(data.category);
    onChangeTitle(data.title);
    onChangeContents(data.contents);
  };

  const clickUpdatePost = () => {
    if (!writer || !title || !contents) {
      return alert("내용을 입력해 주세요.");
    } else if (!category) {
      return alert("카테고리를 선택해 주세요.");
    }

    const editedPost = {
      ...data,
      writer,
      category,
      title,
      contents,
    };

    mutation.mutate(editedPost);

    resetWriter("");
    resetTitle("");
    resetContents("");

    setIsEditMode((prev) => !prev);
  };

  if (isLoading) {
    return <h1>로딩중입니다 ...</h1>;
  }

  if (isError) {
    return <h1>오류가 발생하였습니다 ...</h1>;
  }

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <Link to="/">
        <button>되돌아가기</button>
      </Link>
      <br />
      {isEditMode ? (
        <button onClick={clickUpdatePost}>저장</button>
      ) : (
        <button onClick={clickEditMode}>수정</button>
      )}
      <div>
        작성자 :
        {isEditMode ? (
          <textarea
            value={writer}
            onChange={(e) => onChangeWriter(e.target.value)}
          />
        ) : (
          <span>{data.writer}</span>
        )}
      </div>
      <div>
        카테고리 :
        {isEditMode ? (
          <Category onChangeCategory={onChangeCategory} />
        ) : (
          <span>{data.category}</span>
        )}
      </div>

      <div>
        제목 :
        {isEditMode ? (
          <textarea
            value={title}
            onChange={(e) => onChangeTitle(e.target.value)}
          />
        ) : (
          <span>{data.title}</span>
        )}
      </div>
      <div>
        내용 :
        {isEditMode ? (
          <textarea
            value={contents}
            onChange={(e) => onChangeContents(e.target.value)}
          />
        ) : (
          <span>{data.contents} </span>
        )}
      </div>
    </div>
  );
};

export default Post;
