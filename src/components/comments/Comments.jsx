import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addComment,
  deleteComment,
  getComments,
  updateComment,
} from "../../axios/api";
import useInput from "../../hooks/useInput";
import shortid from "shortid";
import { useParams } from "react-router-dom";
import Button from "../button/Button";
import LoadingImg from "../../assets/loading.gif";
import * as S from "./StyledComments";

const Comments = () => {
  const params = useParams();
  const { isLoading, isError, data } = useQuery("comments", getComments);

  const queryClient = useQueryClient();
  const addMutation = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });
  const deleteMutation = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });
  const updateMutation = useMutation(updateComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  const [writer, onChangeWriter, resetWriter] = useInput();
  const [comment, onChangeComment, resetComment] = useInput();
  const [editedId, setEditedId] = useState(null);
  const [editedWriter, onChangeEditedWriter, resetEditedWriter] = useInput();
  const [editedContents, onChangeEditedContents, resetEditedContents] =
    useInput();
  // const [isEditMode, setIsEditMode] = useState(false);

  // 댓글 추가
  const submitAddComment = (e) => {
    e.preventDefault();

    const newComment = {
      id: shortid.generate(),
      postId: params.id,
      writer,
      contents: comment,
    };

    addMutation.mutate(newComment);

    resetWriter("");
    resetComment("");

    alert("댓글이 등록되었습니다.");
  };

  // 댓글 삭제
  const clickDeleteComment = (id) => {
    if (window.confirm("정말 삭제하시겠습니까 ?")) {
      alert("삭제되었습니다.");
      deleteMutation.mutate(id);
    } else {
      alert("삭제가 취소되었습니다.");
    }
  };

  // 댓글 수정
  const clickEditComment = (comment) => {
    setEditedId(comment.id);
    onChangeEditedWriter(comment.writer);
    onChangeEditedContents(comment.contents);
  };

  const clickUpdateComment = (comment) => {
    if (!editedWriter || !editedContents) {
      return alert("내용을 입력해 주세요.");
    }

    const editedCommnet = {
      ...comment,
      writer: editedWriter,
      contents: editedContents,
    };
    updateMutation.mutate(editedCommnet);

    resetEditedWriter("");
    resetEditedContents("");
    setEditedId(null);
  };

  if (isLoading) {
    return <></>;
  }

  if (isError) {
    return <h1>오류가 발생하였습니다 ...</h1>;
  }

  return (
    <S.CommentsContainer>
      <S.CommentsTitle>Comments</S.CommentsTitle>
      <S.CommentsWrapper>
        {data
          .filter((comment) => comment.postId === params.id)
          .map((comment) => {
            const isEditMode = editedId === comment.id;
            return (
              <S.CommentsBox key={comment.id}>
                <div>
                  <span> by. {comment.writer}</span>
                </div>
                <S.CommentsContents>
                  {isEditMode ? (
                    <S.EditTextareaContents
                      value={editedContents}
                      onChange={(e) => onChangeEditedContents(e.target.value)}
                    />
                  ) : (
                    <span>{comment.contents}</span>
                  )}
                </S.CommentsContents>
                <S.CommentsBtnBox>
                  {isEditMode ? (
                    <Button onClickEvent={() => clickUpdateComment(comment)}>
                      저장
                    </Button>
                  ) : (
                    <Button onClickEvent={() => clickEditComment(comment)}>
                      수정
                    </Button>
                  )}
                  <Button onClickEvent={() => clickDeleteComment(comment.id)}>
                    삭제
                  </Button>
                </S.CommentsBtnBox>
              </S.CommentsBox>
            );
          })}
        <S.AddCommentsForm onSubmit={submitAddComment}>
          <div>
            <S.TextareaWriter
              value={writer}
              onChange={(e) => onChangeWriter(e.target.value)}
              placeholder="작성자"
              required
            />
          </div>
          <div>
            <S.TextareaContents
              value={comment}
              onChange={(e) => onChangeComment(e.target.value)}
              placeholder="댓글을 입력해 주세요"
              required
            />
          </div>
          <S.CommentsEditBtnBox>
            <Button type="submit">등록</Button>
          </S.CommentsEditBtnBox>
        </S.AddCommentsForm>
      </S.CommentsWrapper>
    </S.CommentsContainer>
  );
};

export default Comments;
