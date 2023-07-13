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
import { styled } from "styled-components";

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
      console.log("댓글 수정 성공");
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
    return <h1>로딩중입니다 ...</h1>;
  }

  if (isError) {
    return <h1>오류가 발생하였습니다 ...</h1>;
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <CommentsWrapper>
        {data
          .filter((comment) => comment.postId === params.id)
          .map((comment) => {
            const isEditMode = editedId === comment.id;
            return (
              <CommentsBox key={comment.id}>
                <div>
                  <span> by. {comment.writer}</span>
                </div>
                <CommentsContents>
                  {isEditMode ? (
                    <textarea
                      value={editedContents}
                      onChange={(e) => onChangeEditedContents(e.target.value)}
                    />
                  ) : (
                    <span>{comment.contents}</span>
                  )}
                </CommentsContents>
                <CommentsBtnBox>
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
                </CommentsBtnBox>
              </CommentsBox>
            );
          })}
        <CommentsEdit onSubmit={submitAddComment}>
          <div>
            작성자 :
            <textarea
              value={writer}
              onChange={(e) => onChangeWriter(e.target.value)}
              required
            />
          </div>
          <div>
            댓글 :
            <textarea
              value={comment}
              onChange={(e) => onChangeComment(e.target.value)}
              required
            />
          </div>
          <Button type="submit">추가</Button>
        </CommentsEdit>
      </CommentsWrapper>
    </CommentsContainer>
  );
};

export default Comments;

const CommentsContainer = styled.div`
  /* padding: 20px 0; */
`;

const CommentsTitle = styled.div`
  font-size: 20px;
  padding: 20px;
`;

const CommentsWrapper = styled.div`
  border-top: 1px solid #cecece;
`;

const CommentsBox = styled.div`
  /* width: 90%; */
  height: 80px;
  position: relative;
  color: black;
  background-color: #e4e4e4;
  border-radius: 10px;
  margin: 30px;
  padding: 20px;
`;

const CommentsContents = styled.div`
  font-size: 20px;
  margin: 10px 0;
`;

const CommentsBtnBox = styled.div`
  position: absolute;
  bottom: 35%;
  right: 2%;
`;

const CommentsEdit = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
