import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "../pages/Main";
import Country from "../pages/Country";
import Detail from "../pages/Detail";
import Layout from "../components/common/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="country/:id" element={<Country />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="*" element={<h1>없는 페이지 입니다.</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
