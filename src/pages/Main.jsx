import React from "react";
import List from "../components/list/List";
import { styled } from "styled-components";
import mapImg from "../img/europeMap.png";

const Main = () => {
  return (
    <>
      <MapImg src={mapImg} />
      <List />
    </>
  );
};

export default Main;

const MapImg = styled.img``;
