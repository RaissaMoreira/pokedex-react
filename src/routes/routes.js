import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "../components/Container";
import Favorites from "../pages/Favorites";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Page404 from "../pages/Page404";
import FavoritesProvider from "../contexts/Favorites";
import Details from "../pages/Details";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/:id" element={<Details/>}></Route>
            <Route path="*" element={<Page404 />}></Route>
          </Routes>
        </FavoritesProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}
