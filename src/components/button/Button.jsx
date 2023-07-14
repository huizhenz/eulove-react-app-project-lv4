import { styled } from "styled-components";

const Button = ({
  onClickEvent,
  children,
  width,
  backgroundcolor,
  borderladius,
  hoverback,
}) => {
  return (
    <StButton
      onClick={onClickEvent}
      width={width}
      backgroundcolor={backgroundcolor}
      borderladius={borderladius}
      hoverback={hoverback}
    >
      {children}
    </StButton>
  );
};

export default Button;

const StButton = styled.button`
  @font-face {
    font-family: "SpoqaHanSansNeo-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  font-family: "SpoqaHanSansNeo-Regular";
  width: ${(props) => (props.width === "medium" ? "200px" : "60px")};
  color: #000000;
  font-size: 16px;
  font-weight: 600;
  background-color: ${(props) =>
    props.backgroundcolor === "white" ? "#ffffff" : "#e4e398"};
  border: none;
  border-radius: ${(props) =>
    props.borderladius === "round" ? "20px" : "10px"};
  cursor: pointer;
  padding: 8px;
  margin-left: 15px;

  &:hover {
    color: #000000;
    background-color: ${(props) =>
      props.hoverback === "dark" ? "#818181" : "#b4b166"};
    border: none;
    transition: all ease 0.15s 0s;
  }
`;
