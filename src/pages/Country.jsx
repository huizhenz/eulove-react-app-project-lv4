import React from "react";
import List from "../components/list/List";
import { useLocation, useNavigate } from "react-router-dom";

const Country = () => {
  const location = useLocation();
  const { country, img } = location.state;

  return <List country={country} img={img} />;
};

export default Country;
