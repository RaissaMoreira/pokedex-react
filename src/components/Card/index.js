import styles from "./Cards.module.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Card({ pokemon }) {
  // console.log(pokemon.types[0].type.name);
  // console.log(pokemon.types);

  return (
    <div className={styles.container}>
      {/* {pokemon.types.map((type) => (
        <div className={`${styles.containerImg} ${styles["type_" + type[0].type.name]}`}>
          <img
            src={pokemon.sprites.front_default}
            width="120"
            height="120"
            alt={pokemon.name}
          />
        </div>
      ))} */}
      <div className={styles.containerImg}>
        <img src={ pokemon.sprites.front_default } width="120" height="120" alt={ pokemon.name } />
      </div>
      <div className={styles.description}>
        <div className={styles.title}>
          <span>#{pokemon.id}</span>
          <h3>{pokemon.name}</h3>
        </div>
        <div className={styles.buttons}>
          <FavoriteIcon className={styles.favorite} />
          <button className={styles.btnDetails}>Details</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
