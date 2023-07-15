import { styled } from "styled-components";

export const ImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShowNoti = styled.div`
  position: absolute;
  top: 1%;
  right: 0%;
  color: #000000;
  font-size: 22px;
  font-weight: 600;
  font-style: italic;
  background-color: #c4c4c4d0;
  border: 3px solid #6d6d6d;
  border-radius: 5px;
  padding: 10px 40px;
  z-index: 1;
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MapImg = styled.img`
  width: 1150px;
`;
