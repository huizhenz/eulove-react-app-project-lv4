import React from "react";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <FooterBox>
      <FooterContent>creator : 장혜진 </FooterContent>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.div`
  border-top: 1px solid #cecece;
  margin-top: 100px;
`;

const FooterContent = styled.div`
  font-size: 18px;
  text-align: center;
  padding: 70px 0;
`;
