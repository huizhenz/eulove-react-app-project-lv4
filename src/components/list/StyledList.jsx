import { styled } from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListTitle = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;
  /* border-radius: 5px; */
  font-size: 58px;
  font-weight: 600;
  font-style: italic;
  text-shadow: 3px 3px 3px #000000;
  margin: 40px 0px 60px 0px;
`;

export const ListCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #cecece;
  margin: 40px 0px;
`;

export const CategoryIcon = styled.div`
  padding: 40px 30px;
  cursor: pointer;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ListBox = styled.div`
  position: relative;
  width: 85%;
  color: black;
  background-color: #e7e7e7;
  border-radius: 5px;
  padding: 20px 25px;
  margin: 30px 0;
`;

export const PostCategory = styled.div`
  width: 60px;
  text-align: center;
  border: 3px solid #383838;
  border-radius: 10px;
  font-size: 20px;
  margin: 3px;
`;

export const PostTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin: 10px 5px;
`;

export const PostContents = styled.div`
  font-size: 18px;
  margin: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PostBtn = styled.div`
  position: absolute;
  bottom: 40%;
  right: 2%;
`;
