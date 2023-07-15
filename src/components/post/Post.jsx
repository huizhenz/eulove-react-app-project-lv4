import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailPost, deletePost, updatePost } from "../../axios/api";
import useInput from "../../hooks/useInput";
import Category from "../category/Category";
import Button from "../button/Button";
import LoadingImg from "../../assets/loading.gif";
import * as S from "./StyledPost";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery("post", () =>
    getDetailPost(id)
  );

  const queryClient = useQueryClient();
  // useMutation 훅을 사용한다면 요청 관련 상태의 관리와 요청 처리 전/후로 실행할 작업을 쉽게 설정
  const deleteMutation = useMutation(deletePost, {
    // onSuccess는 useMutation의 option 중 하나
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  const updateMutation = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
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
    onChangeCategory(data.category);
    onChangeTitle(data.title);
    onChangeContents(data.contents);
  };

  const clickDeletePost = (data) => {
    if (window.confirm("정말 삭제하시겠습니까 ?")) {
      alert("삭제되었습니다.");
      deleteMutation.mutate(data.id);
      navigate(-1);
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

  const clickToList = () => navigate(-1);

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
    <>
      <S.MoveBtnBox>
        <Button
          width="medium"
          backgroundcolor="white"
          hoverback="dark"
          onClickEvent={clickToList}
        >
          이전 페이지
        </Button>
      </S.MoveBtnBox>
      <S.PostContainer>
        <S.PostWrapper>
          <S.PostCategory>
            {isEditMode ? (
              <>
                Category : &nbsp;
                <Category onChangeCategory={onChangeCategory} />
              </>
            ) : (
              <span>{data.category}</span>
            )}
          </S.PostCategory>
          <S.PostTitle>
            {isEditMode ? (
              <>
                Title : &nbsp;
                <S.TextareaTitle
                  value={title}
                  onChange={(e) => onChangeTitle(e.target.value)}
                />
              </>
            ) : (
              <span>{data.title}</span>
            )}
          </S.PostTitle>

          <S.PostContents>
            {isEditMode ? (
              <>
                <p>Contents : </p>
                <S.TextareaContents
                  value={contents}
                  onChange={(e) => onChangeContents(e.target.value)}
                />
              </>
            ) : (
              <span>{data.contents} </span>
            )}
          </S.PostContents>
          <S.PostWriter>
            by.&nbsp;
            <span>{data.writer}</span>
          </S.PostWriter>
          <S.PostBtnBox>
            {isEditMode ? (
              <Button onClickEvent={clickUpdatePost}>저장</Button>
            ) : (
              <>
                <Button onClickEvent={clickEditMode}>수정</Button>
                <Button onClickEvent={() => clickDeletePost(data)}>삭제</Button>
              </>
            )}
          </S.PostBtnBox>
        </S.PostWrapper>
      </S.PostContainer>
    </>
  );
};

export default Post;
