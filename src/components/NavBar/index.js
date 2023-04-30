import { Link } from "react-router-dom";
import logoPoke from "../../assets/images/pokeball.png";
import NavLink from "../NavLink";
import Badge from '@mui/material/Badge';
import { useFavoriteContext } from "../../contexts/Favorites";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  const {favorite} = useFavoriteContext()
  const quantityFav = favorite.length;

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Link to="./" className={styles.logoContainer}>
            <img src={logoPoke} width="30" height="30" alt="Pokedex" />
            <h2 className={styles.titleLogo}>Pokedex</h2>
        </Link>
        <nav className={styles.navContainer}>
          <NavLink url="./">Home</NavLink>
          <Badge badgeContent={quantityFav} color='secondary'>
            <NavLink url="./favorites">Favorites</NavLink>
          </Badge>
        </nav>
      </div>
    </header>
  );
}
