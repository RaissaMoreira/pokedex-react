import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { searchPokemon } from "../../api/api";
import styles from "./Details.module.scss";
import Spinner from "../../components/Spinner";
import Page404 from "../Page404";
import DetailsCharacteristics from "../../components/DetailsCharacteristics";

export default function Details() {
  const param = useParams();
  const [pokeDetails, setPokeDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPokemons = async () => {
    setLoading(true);
    const result = await searchPokemon(param.id);
    setPokeDetails(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  if(!pokeDetails) {
    return <Page404/>;
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className={styles.section}>
          <div className={styles.cardContainer}>
            <div className={`${styles.cardBackgorund}`}>
              <div className={styles.number}>
                <p>#{pokeDetails.id}</p>
                <h1 className={styles.subTitle}>{pokeDetails.name}</h1>
              </div>
              <img
                className={styles.img}
                src={
                  pokeDetails.sprites ? pokeDetails.sprites.front_default : ""
                }
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

            <div className={styles.buttons}>
              <Link to="/" className={styles.btnBack}>
                back to home
              </Link>
              <Link to="/favorites" className={styles.btnBackFav}>
                back to favorites
              </Link>
            </div>
          </div>
          <div className={styles.secondContainer}>
            <DetailsCharacteristics pokeDetails={pokeDetails}/>
          </div>
        </section>
      )}
    </>
  );
}
