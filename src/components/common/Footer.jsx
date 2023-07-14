import React from "react";
import { styled } from "styled-components";
import git from "../../assets/git.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterBox>
      <FooterContent>
        © All Rights Reserved, 2023
        <Link to={`https://github.com/huizhenz/react-project-lv4-glitch`}>
          <GitImg src={git} alt="git" />
        </Link>
      </FooterContent>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.div`
  border-top: 1px solid #cecece;
  margin-top: 70px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  /* text-align: center; */
  padding: 70px 0;
`;

const GitImg = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 30px;
`;
