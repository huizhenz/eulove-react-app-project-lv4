import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { getDetailPost, deletePost, updatePost } from "../../axios/api";
import useInput from "../../hooks/useInput";
import Category from "../category/Category";
import Button from "../button/Button";
import { styled } from "styled-components";

const Post = () => {
  const { id } = useParams();

  const { isLoading, isError, data } = useQuery("post", () =>
    getDetailPost(id)
  );

  const queryClient = useQueryClient();
  // useMutation 훅을 사용한다면 요청 관련 상태의 관리와 요청 처리 전/후로 실행할 작업을 쉽게 설정
  const deleteMutation = useMutation(deletePost, {
    // onSuccess는 useMutation의 option 중 하나
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      console.log("삭제 성공");
    },
  });

  const updateMutation = useMutation(updatePost, {
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

  const clickDeletePost = (id) => {
    if (window.confirm("정말 삭제하시겠습니까 ?")) {
      alert("삭제되었습니다.");
      deleteMutation.mutate(id);
    } else {
      alert("삭제가 취소되었습니다.");
    }
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

    updateMutation.mutate(editedPost);

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
    <PostContainer>
      <PostWrapper>
        <PostCategory>
          {isEditMode ? (
            <>
              Category : &nbsp; <Category onChangeCategory={onChangeCategory} />
            </>
          ) : (
            <span>{data.category}</span>
          )}
        </PostCategory>
        <PostTitle>
          {isEditMode ? (
            <>
              Title : &nbsp;
              <textarea
                value={title}
                onChange={(e) => onChangeTitle(e.target.value)}
              />
            </>
          ) : (
            <span>{data.title}</span>
          )}
        </PostTitle>

        <PostContents>
          {isEditMode ? (
            <>
              Contents : &nbsp;
              <textarea
                value={contents}
                onChange={(e) => onChangeContents(e.target.value)}
              />
            </>
          ) : (
            <span>{data.contents} </span>
          )}
        </PostContents>
        <PostWriter>
          by.&nbsp;
          <span>{data.writer}</span>
        </PostWriter>
        {isEditMode ? (
          <Button onClickEvent={clickUpdatePost}>저장</Button>
        ) : (
          <PostBtnBox>
            <Button onClickEvent={clickEditMode}>수정</Button>
            <Button onClickEvent={() => clickDeletePost(data.id)}>삭제</Button>
          </PostBtnBox>
        )}
      </PostWrapper>
    </PostContainer>
  );
};

export default Post;

const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 400px;
  color: #000000;
  background-color: #e4e4e4;
  border-radius: 10px;
  margin: 50px 0;
  padding: 30px;
`;

const PostCategory = styled.div`
  font-size: 20px;
  padding-left: 5px;
`;

const PostTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  border-bottom: 1px solid #000000;
  padding: 10px 0;
  margin: 10px 0;
`;

const PostContents = styled.div`
  font-size: 22px;
  margin-top: 30px;
`;

const PostWriter = styled.div`
  position: absolute;
  bottom: 5%;
  left: 4%;
  font-size: 18px;
  margin: 10px 0;
`;

const PostBtnBox = styled.div`
  position: absolute;
  bottom: 5%;
  right: 3%;
`;
