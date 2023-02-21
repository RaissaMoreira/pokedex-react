import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "../../components/Title";
import { searchPokemon } from "../../api/api";
import styles from "./Details.module.scss";

export default function Details() {
  const param = useParams();
  const [pokeDetails, setPokeDetails] = useState([]);

  const fetchPokemons = async () => {
    const result = await searchPokemon(param.id);
    setPokeDetails(result);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.cardContainer}>
          <div className={`${styles.cardBackgorund}`}>
            <div className={styles.number}>
              <p>#{pokeDetails.id}</p>
              <h1 className={styles.subTitle}>{pokeDetails.name}</h1>
            </div>
            <img
              className={styles.img}
              src={pokeDetails.sprites ? pokeDetails.sprites.front_default : ""}
              width="200"
              height="200"
              alt={pokeDetails.name}
            />
            <div className={`${styles.typesContainer}`}>
              {pokeDetails &&
                pokeDetails?.types?.map((item, index) => (
                  <span
                    className={`${styles.type} ${
                      styles["type_" + item.type.name]
                    }`}
                    key={index}
                  >
                    {item.type?.name}
                  </span>
                ))}
            </div>

            <div className={`${styles.data_container}`}>
              <div className={styles.data_height}>
                <p>{pokeDetails?.height / 10} M</p>
                <h4 className={styles.text}>Height</h4>
              </div>
              <div className={styles.data_weight}>
                <p>{pokeDetails?.weight / 10} KG</p>
                <h4 className={styles.text}>Weight</h4>
              </div>
            </div>
          </div>

          <Link to="/" className={styles.btnBack}>
            back to home
          </Link>
        </div>
        <div className={styles.secondContainer}>
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
            <img src={pokeDetails && pokeDetails.sprites && pokeDetails.sprites.front_default} alt={pokeDetails && pokeDetails.name} />
            <img src={pokeDetails && pokeDetails.sprites && pokeDetails.sprites.back_default} alt={pokeDetails && pokeDetails.name} />
            <img src={pokeDetails && pokeDetails.sprites && pokeDetails.sprites.back_shiny} alt={pokeDetails && pokeDetails.name} />
            <img src={pokeDetails && pokeDetails.sprites && pokeDetails.sprites.front_shiny} alt={pokeDetails && pokeDetails.name} />
            <img src={pokeDetails && pokeDetails.sprites && pokeDetails.sprites.front_default} alt={pokeDetails && pokeDetails.name} />
          </div>
        </div>
      </section>
    </>
  );
}
