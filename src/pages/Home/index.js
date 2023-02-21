import Title from "../../components/Title";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import { getPokemons, getPokemonsData, searchPokemon } from "../../api/api";
import SearchBar from "../../components/SearchBar";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [pokeNotFound, setPokeNotFound] = useState(false);
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

  const handleSearch = async (poke) => {
    if(!poke) {
      return fetchPokemons();
    }

    setLoading(true);
    setPokeNotFound(false);
    const result = await searchPokemon(poke);

    if(!result) {
      setPokeNotFound(true);
    } else {
      setPokemons([result])
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchPokemons();
  }, [])

  return (
    <>
      <Title>
        <h1>Pokedex</h1>
      </Title>
      <section className={styles.searchBar}>
        <SearchBar handleSearch={handleSearch}/>
      </section>
      <section className={styles.pokeGrid}>
        {
          pokeNotFound ? 
            <div>Pokemon not found... Try again!</div>
           : 
           loading ? 
            <Spinner/> : 
              pokemons && pokemons.map((pokemon, index) => (
                <Card key={ index } pokemon={ pokemon }/>
              ))
        }
      </section>
    </>
  );
}
