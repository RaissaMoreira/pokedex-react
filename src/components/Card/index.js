import styles from "./Cards.module.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavoriteContext } from "../../contexts/Favorites";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

function Card({pokemon}) {
  const { favorite, addFavorite, removeFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((poke) => poke.name === pokemon.name);

  return (
    <div className={styles.container}>
      <div type={pokemon?.types[0]?.type?.name} className={styles.containerImg}>
        <img
          src={pokemon?.sprites?.front_default}
          width="120"
          height="120"
          alt={pokemon?.name}
        />
      </div>
      <div className={styles.description}>
        <div className={styles.title}>
          <span>#{pokemon?.id}</span>
          <h3>{pokemon?.name}</h3>
          <h4>{pokemon?.types?.type}</h4>
        </div>
        <div className={styles.buttons}>
          <div
            onClick={() => {
              isFavorite ? removeFavorite(pokemon) : addFavorite(pokemon)
            }}
            className={styles.containerBtnFav}
          >
            {!isFavorite ? (
              <FavoriteBorderIcon className={styles.favorite} />
            ) : (
              <FavoriteIcon className={styles.favorite} />
            )}
          </div>
          <Link to={`/${pokemon?.id}`} className={styles.btnDetails}>Details</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
