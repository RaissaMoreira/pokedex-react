import Title from "../../components/Title";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import { getPokemons, getPokemonsData } from "../../api/api";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [])

  return (
    <>
      <Title>
        <h1>Pokedex</h1>
      </Title>
      <section className={styles.pokeGrid}>
      {/* <Spinner/> */}
        {loading ? <Spinner/> : 
          pokemons && pokemons.map((pokemon, index) => (
            <Card key={ index } pokemon={ pokemon }/>
          ))
        }
      </section>
    </>
  );
}
