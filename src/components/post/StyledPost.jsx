import { styled } from "styled-components";

export const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`;

export const MoveBtnBox = styled.div`
  text-align: right;
`;

export const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 400px;
  color: #000000;
  background-color: #e4e4e4;
  border-radius: 10px;
  margin: 20px 0 50px 0;
  padding: 30px;
`;

export const PostCategory = styled.div`
  font-size: 20px;
  padding-left: 5px;
`;

export const PostTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  border-bottom: 1px solid #000000;
  padding: 10px 0;
  margin: 10px 0;
`;

export const PostContents = styled.div`
  font-size: 22px;
  margin-top: 30px;
`;

export const PostWriter = styled.div`
  position: absolute;
  bottom: 5%;
  left: 4%;
  font-size: 18px;
  margin: 10px 0;
`;

export const TextareaTitle = styled.textarea`
  width: 500px;
  height: 24px;
  font-size: 18px;
`;

export const TextareaContents = styled.textarea`
  width: 1020px;
  height: 130px;
  font-size: 18px;
`;

export const PostBtnBox = styled.div`
  position: absolute;
  bottom: 5%;
  right: 3%;
`;
