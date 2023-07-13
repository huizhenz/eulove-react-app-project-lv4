import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import shortid from "shortid";
import uk from "../../assets/uk.jpg";
import spain from "../../assets/spain.jpg";
import greece from "../../assets/greece.jpg";
import germany from "../../assets/germany.jpg";
import hungary from "../../assets/hungary.jpg";
import romania from "../../assets/romania.jpg";
import belarus from "../../assets/belarus.jpg";
import bulgaria from "../../assets/bulgaria.jpg";
import switz from "../../assets/switz.jpg";
import austria from "../../assets/austria.jpg";
import ukraine from "../../assets/ukraine.jpg";
import czech from "../../assets/czech.jpg";
import poland from "../../assets/poland.jpg";
import italy from "../../assets/italy.jpg";
import france from "../../assets/france.jpg";
import porto from "../../assets/porto.jpg";

const Country = () => {
  const navigate = useNavigate();

  const [hoveredCountry, setHoveredCountry] = useState("");
  const categories = [
    {
      id: shortid.generate(),
      category: "Austria",
      component: CountryAustria,
      img: austria,
    },
    {
      id: shortid.generate(),
      category: "Belarus",
      component: CountryBelarus,
      img: belarus,
    },
    {
      id: shortid.generate(),
      category: "Bulgaria",
      component: CountryBulgaria,
      img: bulgaria,
    },
    {
      id: shortid.generate(),
      category: "Czech Rep",
      component: CountryCzech,
      img: czech,
    },
    {
      id: shortid.generate(),
      category: "France",
      component: CountryFrance,
      img: france,
    },
    {
      id: shortid.generate(),
      category: "Germany",
      component: CountryGermany,
      img: germany,
    },
    {
      id: shortid.generate(),
      category: "Greece",
      component: CountryGreece,
      img: greece,
    },
    {
      id: shortid.generate(),
      category: "Hungary",
      component: CountryHungary,
      img: hungary,
    },
    {
      id: shortid.generate(),
      category: "Italy",
      component: CountryItaly,
      img: italy,
    },
    {
      id: shortid.generate(),
      category: "Poland",
      component: CountryPoland,
      img: poland,
    },
    {
      id: shortid.generate(),
      category: "Porto",
      component: CountryPorto,
      img: porto,
    },
    {
      id: shortid.generate(),
      category: "Romania",
      component: CountryRomania,
      img: romania,
    },
    {
      id: shortid.generate(),
      category: "Spain",
      component: CountrySpain,
      img: spain,
    },
    {
      id: shortid.generate(),
      category: "Switzerland",
      component: CountrySwitz,
      img: switz,
    },
    {
      id: shortid.generate(),
      category: "U.K",
      component: CountryUK,
      img: uk,
    },
    {
      id: shortid.generate(),
      category: "Ukraine",
      component: CountryUkraine,
      img: ukraine,
    },
  ];

  const clickToCountry = (country) => {
    navigate(`country/${country.id}`, {
      state: {
        country: country.category,
        img: country.img,
      },
    });
  };

  const mouseEnterHandler = (country) => {
    setHoveredCountry(country);
  };

  const mouseLeaveHandler = () => {
    setHoveredCountry(null);
  };

  return (
    <div>
      {categories.map((country) => {
        return (
          <div key={country.id}>
            <country.component
              onClick={() => clickToCountry(country)}
              onMouseEnter={() => mouseEnterHandler(country.category)}
              onMouseLeave={mouseLeaveHandler}
              isHovered={hoveredCountry === country.category}
            >
              {country.category}
            </country.component>
          </div>
        );
      })}
    </div>
  );
};

export default Country;

const CountryAustria = styled.div`
  position: absolute;
  bottom: 42%;
  left: 43%;
  font-size: 34px;
  font-weight: 600;
  text-shadow: 2px 2px 7px #5c5c5c;
  opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
  cursor: pointer;
  padding: 5px;

  &:hover {
    text-shadow: 2px 2px 7px #5c5c5c;
    transition: all ease 0.75s 0s;
    transform: scale(1.1);
  }
`;

const CountryBelarus = styled.div`
  position: absolute;
  top: 21%;
  right: 22%;
  font-size: 36px;
  font-weight: 600;
  text-shadow: 2px 2px 7px #5c5c5c;
  opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
  cursor: pointer;
  padding: 40px 20px;

  &:hover {
    text-shadow: 2px 2px 7px #5c5c5c;
    transition: all ease 0.75s 0s;
    transform: scale(1.1);
  }
`;

const CountryBulgaria = styled.div`
  position: absolute;
  bottom: 24%;
  right: 27%;
  font-size: 34px;
  font-weight: 600;
  text-shadow: 2px 2px 7px #5c5c5c;
  opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
  cursor: pointer;
  padding: 5px;

  &:hover {
    text-shadow: 2px 2px 7px #5c5c5c;
    transition: all ease 0.75s 0s;
    transform: scale(1.1);
  }
`;

const CountryCzech = styled.div`
  position: absolute;
  top: 42%;
  left: 44%;
  font-size: 32px;
  font-weight: 600;
  text-shadow: 2px 2px 7px #5c5c5c;
  opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
  cursor: pointer;
  padding: 5px;

  &:hover {
    text-shadow: 2px 2px 7px #5c5c5c;
    transition: all ease 0.75s 0s;
    transform: scale(1.1);
  }
`;

const CountryFrance = styled.div`
  position: absolute;
  bottom: 34%;
  left: 22%;
  font-size: 38px;
  font-weight: 600;
  text-shadow: 2px 2px 7px #5c5c5c;
  opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
  cursor: pointer;
  padding: 45px 20px;

  &:hover {
    text-shadow: 2px 2px 7px #5c5c5c;
    transition: all ease 0.75s 0s;
    transform: scale(1.1);
  }
`;

const CountryGermany = styled.div`
  position: absolute;
  top: 32%;
  left: 35%;
  font-size: 32px;
  font-weight: 600;
  text-shadow: 2px 2px 7px #5c5c5c;
  opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
  cursor: pointer;
  padding: 40px 0;

  &:hover {
    text-shadow: 2px 2px 7px #5c5c5c;
    transition: all ease 0.75s 0s;
    transform: scale(1.1);
  }
`;

const CountryGreece = styled.div`
  position: absolute;
  bottom: 11%;
  right: 34%;
  font-size: 32px;
  font-weight: 600;
  text-shadow: 2px 2px 7px #5c5c5c;
  opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
  cursor: pointer;
  padding: 20px 0;

  &:hover {
    text-shadow: 2px 2px 7px #5c5c5c;
    transition: all ease 0.75s 0s;
    transform: scale(1.1);
  }
`;

const CountryHungary = styled.div`
  position: absolute;
  bottom: 41%;
  right: 38%;
  font-size: 32px;
  font-weight: 600;
  text-shadow: 2px 2px 7px #5c5c5c;
  opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
  cursor: pointer;
  padding: 5px;

  &:hover {
    text-shadow: 2px 2px 7px #5c5c5c;
    transition: all ease 0.75s 0s;
    transform: scale(1.1);
  }
`;

const CountryItaly = styled.div`
  position: absolute;
  bottom: 21%;
  left: 41%;
  font-size: 40px;
  font-weight: 600;
  text-shadow: 2px 2px 7px #5c5c5c;
  opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
  cursor: pointer;
  padding: 40px 10px;

  &:hover {
    text-shadow: 2px 2px 7px #5c5c5c;
    transition: all ease 0.75s 0s;
    transform: scale(1.1);
  }
`;

const CountryPoland = styled.div`
  position: absolute;
  top: 28%;
  right: 36%;
  font-size: 38px;
  font-weight: 600;
  text-shadow: 2px 2px 7px #5c5c5c;
  opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
  cursor: pointer;
  padding: 30px;

  &:hover {
    text-shadow: 2px 2px 7px #5c5c5c;
    transition: all ease 0.75s 0s;
    transform: scale(1.1);
  }
`;

const CountryPorto = styled.div`
  position: absolute;
  bottom: 11%;
  left: 6%;
  font-size: 32px;
  font-weight: 600;
  text-shadow: 2px 2px 7px #5c5c5c;
  opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
  cursor: pointer;
  padding: 30px 0;

  &:hover {
    text-shadow: 2px 2px 7px #5c5c5c;
    transition: all ease 0.75s 0s;
    transform: scale(1.1);
  }
`;

const CountryRomania = styled.div`
  position: absolute;
  bottom: 34%;
  right: 28%;
  font-size: 34px;
  font-weight: 600;
  text-shadow: 2px 2px 7px #5c5c5c;
  opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
  cursor: pointer;
  padding: 25px 5px;

  &:hover {
    text-shadow: 2px 2px 7px #5c5c5c;
    transition: all ease 0.75s 0s;
    transform: scale(1.1);
  }
`;

const CountrySpain = styled.div`
  position: absolute;
  bottom: 12%;
  left: 12%;
  font-size: 36px;
  font-weight: 600;
  text-shadow: 2px 2px 7px #5c5c5c;
  opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
  cursor: pointer;
  padding: 30px;

  &:hover {
    text-shadow: 2px 2px 7px #5c5c5c;
    transition: all ease 0.75s 0s;
    transform: scale(1.1);
  }
`;

const CountrySwitz = styled.div`
  position: absolute;
  bottom: 41%;
  left: 31%;
  font-size: 28px;
  font-weight: 600;
  text-shadow: 2px 2px 7px #5c5c5c;
  opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
  cursor: pointer;

  &:hover {
    text-shadow: 2px 2px 7px #5c5c5c;
    transition: all ease 0.75s 0s;
    transform: scale(1.1);
  }
`;

const CountryUK = styled.div`
  position: absolute;
  top: 21%;
  left: 17%;
  font-size: 38px;
  font-weight: 600;
  text-shadow: 2px 2px 7px #5c5c5c;
  opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
  cursor: pointer;
  padding: 40px 10px;

  &:hover {
    text-shadow: 2px 2px 7px #5c5c5c;
    transition: all ease 0.75s 0s;
    transform: scale(1.1);
  }
`;

const CountryUkraine = styled.div`
  position: absolute;
  top: 38%;
  right: 12%;
  font-size: 40px;
  font-weight: 600;
  text-shadow: 2px 2px 7px #5c5c5c;
  opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
  cursor: pointer;
  padding: 50px;

  &:hover {
    text-shadow: 2px 2px 7px #5c5c5c;
    transition: all ease 0.75s 0s;
    transform: scale(1.1);
  }
`;
