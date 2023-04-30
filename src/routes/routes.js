import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import Page404 from "../pages/Page404";
import Details from "../pages/Details";
import BasePage from "../pages/BasePage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />}></Route>
          <Route path="favorites" element={<Favorites />}></Route>
          <Route path=":id" element={<Details />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
