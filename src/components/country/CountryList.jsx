import React, { useState } from "react";
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
import * as S from "./StyledCountryList";

const Country = () => {
  const navigate = useNavigate();

  const [hoveredCountry, setHoveredCountry] = useState("");
  const categories = [
    {
      id: shortid.generate(),
      category: "Austria",
      component: S.CountryAustria,
      img: austria,
    },
    {
      id: shortid.generate(),
      category: "Belarus",
      component: S.CountryBelarus,
      img: belarus,
    },
    {
      id: shortid.generate(),
      category: "Bulgaria",
      component: S.CountryBulgaria,
      img: bulgaria,
    },
    {
      id: shortid.generate(),
      category: "Czech Rep",
      component: S.CountryCzech,
      img: czech,
    },
    {
      id: shortid.generate(),
      category: "France",
      component: S.CountryFrance,
      img: france,
    },
    {
      id: shortid.generate(),
      category: "Germany",
      component: S.CountryGermany,
      img: germany,
    },
    {
      id: shortid.generate(),
      category: "Greece",
      component: S.CountryGreece,
      img: greece,
    },
    {
      id: shortid.generate(),
      category: "Hungary",
      component: S.CountryHungary,
      img: hungary,
    },
    {
      id: shortid.generate(),
      category: "Italy",
      component: S.CountryItaly,
      img: italy,
    },
    {
      id: shortid.generate(),
      category: "Poland",
      component: S.CountryPoland,
      img: poland,
    },
    {
      id: shortid.generate(),
      category: "Porto",
      component: S.CountryPorto,
      img: porto,
    },
    {
      id: shortid.generate(),
      category: "Romania",
      component: S.CountryRomania,
      img: romania,
    },
    {
      id: shortid.generate(),
      category: "Spain",
      component: S.CountrySpain,
      img: spain,
    },
    {
      id: shortid.generate(),
      category: "Switzerland",
      component: S.CountrySwitz,
      img: switz,
    },
    {
      id: shortid.generate(),
      category: "U.K",
      component: S.CountryUK,
      img: uk,
    },
    {
      id: shortid.generate(),
      category: "Ukraine",
      component: S.CountryUkraine,
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
