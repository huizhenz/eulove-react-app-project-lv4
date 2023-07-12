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
    <div>
      <form onSubmit={submitAddComment}>
        댓글 작성자 :
        <input
          value={writer}
          onChange={(e) => onChangeWriter(e.target.value)}
          required
        />
        댓글 내용 :
        <input
          value={comment}
          onChange={(e) => onChangeComment(e.target.value)}
          required
        />
        <button type="submit">추가</button>
      </form>
      <div
        style={{ border: "1px solid black", padding: "10px", margin: "10px" }}
      >
        {data
          .filter((comment) => comment.postId === params.id)
          .map((comment) => {
            const isEditMode = editedId === comment.id;
            return (
              <div
                key={comment.id}
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <div>
                  작성자 수정 :
                  {isEditMode ? (
                    <textarea
                      value={editedWriter}
                      onChange={(e) => onChangeEditedWriter(e.target.value)}
                    />
                  ) : (
                    <span>{comment.writer}</span>
                  )}
                </div>
                <div>
                  댓글 수정 :
                  {isEditMode ? (
                    <textarea
                      value={editedContents}
                      onChange={(e) => onChangeEditedContents(e.target.value)}
                    />
                  ) : (
                    <span>{comment.contents}</span>
                  )}
                </div>
                {isEditMode ? (
                  <button onClick={() => clickUpdateComment(comment)}>
                    저장
                  </button>
                ) : (
                  <button onClick={() => clickEditComment(comment)}>
                    수정
                  </button>
                )}
                <button onClick={() => clickDeleteComment(comment.id)}>
                  삭제
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Comments;
