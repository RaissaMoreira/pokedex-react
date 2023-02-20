import { Link } from "react-router-dom";
import logoPoke from "../../images/pokeball.png";
import NavLink from "../NavLink";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Link to="./" className={styles.logoContainer}>
            <img src={logoPoke} width="30" height="30" alt="Pokedex" />
            <h2 className={styles.titleLogo}>Pokedex</h2>
        </Link>
        <nav className={styles.navContainer}>
          <NavLink url="./">Home</NavLink>
          <NavLink url="./favorites">Favorites</NavLink>
        </nav>
      </div>
    </header>
  );
}
