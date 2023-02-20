import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "../components/Container";
import Favorites from "../pages/Favorites";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Page404 from "../pages/Page404";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites/>}></Route>
        <Route path="*" element={<Page404/>}></Route>
      </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}
