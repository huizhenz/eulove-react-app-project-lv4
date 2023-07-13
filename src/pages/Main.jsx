import React from "react";
import { styled } from "styled-components";
import grayMapImg from "../assets/grayMap.png";
import CountryList from "../components/country/CountryList";

const Main = () => {
  return (
    <>
      <ImgContainer>
        <MapImg src={grayMapImg} />
        <CountryList />
      </ImgContainer>
    </>
  );
};

export default Main;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MapImg = styled.img`
  width: 1150px;
`;
