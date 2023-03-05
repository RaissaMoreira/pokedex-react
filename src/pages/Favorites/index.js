import { useFavoriteContext } from "../../contexts/Favorites";
import Card from "../../components/Card";
import Title from "../../components/Title";
import styles from "./Favorites.module.scss";

export default function Favorites() {
  const { favorite } = useFavoriteContext();

  return (
    <>
      <Title>
        <h1>My Favorites</h1>
      </Title>
      {favorite.length !== 0 ? (
        <section className={styles.pokeGrid}>
          {favorite?.map((pokemon, index) => (
            <Card key={index} pokemon={pokemon} />
          ))}
        </section>
      ) : (
        <p className={styles.warning}>You don't have favorites pokemons</p>
      )}
    </>
  );
}
