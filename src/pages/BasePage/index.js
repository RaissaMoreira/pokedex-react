import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import FavoritesProvider from "../../contexts/Favorites";

export default function BasePage() {
  return (
    <main>
      <FavoritesProvider>
        <NavBar/>
        <Container>
          <Outlet/>
        </Container>
      </FavoritesProvider>
      <Footer/>
    </main>
  );
}
