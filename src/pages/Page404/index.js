import image from "../../assets/images/charizard.png";
import styles from './Page404.module.scss';
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>404 - Page Not Found</h1>
        <p>
        Sorry, there is nothing to see here!
        </p>
        <Link className={styles.btn} to='/'>back to home</Link>
        <img
          src={ image }
          width="300"
          height="300"
          alt="Charizard"
        />
      </div>
    </section>
  )
}