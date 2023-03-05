import styles from "./DetailsCharacteristics.module.scss";

export default function DetailsCharacteristics({ pokeDetails }) {
  return (
    <>
      <div className={styles.statsContainer}>
        <h4 className={styles.subTitle}>Base Stats</h4>
        {pokeDetails &&
          pokeDetails?.stats?.map((item, index) => (
            <div key={index} className={styles.descriptionStats}>
              <p className={`${styles["stat_" + item.stat?.name]}`}>
                {item.stat?.name}:
              </p>
              <p>{item.base_stat}</p>
            </div>
          ))}
      </div>
      <div className={styles.abilitiesContainer}>
        <h4 className={styles.subTitle}>Abilities</h4>
        <div className={styles.descriptionAbility}>
          {pokeDetails &&
            pokeDetails?.abilities?.map((item, index) => (
              <span key={index}>{item.ability?.name}</span>
            ))}
        </div>
      </div>
      <div className={styles.positionsContainer}>
        <h4 className={styles.subTitle}>Positions</h4>
        <img
          src={
            pokeDetails &&
            pokeDetails.sprites &&
            pokeDetails.sprites.front_default
          }
          alt={pokeDetails && pokeDetails.name}
        />
        <img
          src={
            pokeDetails &&
            pokeDetails.sprites &&
            pokeDetails.sprites.back_default
          }
          alt={pokeDetails && pokeDetails.name}
        />
        <img
          src={
            pokeDetails && pokeDetails.sprites && pokeDetails.sprites.back_shiny
          }
          alt={pokeDetails && pokeDetails.name}
        />
        <img
          src={
            pokeDetails &&
            pokeDetails.sprites &&
            pokeDetails.sprites.front_shiny
          }
          alt={pokeDetails && pokeDetails.name}
        />
        <img
          src={
            pokeDetails &&
            pokeDetails.sprites &&
            pokeDetails.sprites.front_default
          }
          alt={pokeDetails && pokeDetails.name}
        />
      </div>
    </>
  );
}
