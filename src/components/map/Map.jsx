import React, { useEffect, useState } from "react";
import grayMapImg from "../../assets/grayMap.png";
import CountryList from "../../components/country/CountryList";
import * as S from "./StyledMap";

const Map = () => {
  const [isShow, setIsShow] = useState();
  useEffect(() => {
    setIsShow(true);

    const timeout = setTimeout(() => {
      setIsShow(false);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <S.ImgContainer>
      {isShow && <S.ShowNoti>"나라를 선택해주세요"</S.ShowNoti>}
      <S.ImgWrapper>
        <S.MapImg src={grayMapImg} />
        <CountryList />
      </S.ImgWrapper>
    </S.ImgContainer>
  );
};

export default Map;
