import React from "react";
import { styled } from "styled-components";

const Button = ({ onClickEvent, children }) => {
  return <StButton onClick={onClickEvent}>{children}</StButton>;
};

export default Button;

const StButton = styled.button`
  @font-face {
    font-family: "SeoulNamsanM";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/SeoulNamsanM.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  font-family: "SeoulNamsanM";
  width: 50px;
  /* height: 25px; */
  color: #525252;
  font-size: 16px;
  font-weight: 600;
  background-color: #e8e7b1;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 5px;

  &:hover {
    color: #525252;
    background-color: #bfbd88;
    border: none;
    transition: all ease 0.15s 0s;
  }
`;
