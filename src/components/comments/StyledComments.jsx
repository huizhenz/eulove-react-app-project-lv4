import { styled } from "styled-components";

export const CommentsContainer = styled.div`
  /* padding: 20px 0; */
`;

export const CommentsTitle = styled.div`
  font-size: 20px;
  padding: 20px;
`;

export const CommentsWrapper = styled.div`
  border-top: 1px solid #cecece;
`;

export const CommentsBox = styled.div`
  /* width: 90%; */
  height: 80px;
  position: relative;
  color: black;
  background-color: #e4e4e4;
  border-radius: 10px;
  margin: 30px;
  padding: 20px;
`;

export const CommentsContents = styled.div`
  font-size: 20px;
  margin: 10px 0;
`;

export const CommentsBtnBox = styled.div`
  position: absolute;
  bottom: 35%;
  right: 2%;
`;

export const EditTextareaContents = styled.textarea`
  width: 85%;
  height: 40px;
  font-size: 17px;
  padding: 5px;
`;

export const AddCommentsForm = styled.form`
  position: relative;
  background-color: #67676757;
  border-radius: 20px;
  padding: 20px;
  margin-top: 80px;
`;

export const TextareaWriter = styled.input`
  width: 330px;
  height: 24px;
  font-size: 18px;
  border-radius: 10px;
  padding: 7px;
  margin-bottom: 10px;
`;

export const TextareaContents = styled.textarea`
  width: 98%;
  height: 90px;
  font-size: 18px;
  border-radius: 10px;
  padding: 7px;
`;

export const CommentsEditBtnBox = styled.div`
  position: absolute;
  top: 8%;
  right: 2%;
`;
