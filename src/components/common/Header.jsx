import React from "react";
import { styled } from "styled-components";
import logoImg from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const clickToMain = () => {
    navigate(`/`);
    // window.location.replace("/");
  };

  return (
    <LogoBox>
      <LogoImg onClick={clickToMain} src={logoImg} alt="로고 이미지" />
    </LogoBox>
  );
};

export default Header;

const LogoBox = styled.div`
  border-bottom: 1px solid #cecece;
  margin: 10px 0;
`;

const LogoImg = styled.img`
  cursor: pointer;
`;
