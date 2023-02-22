import { useFavoriteContext } from "../../contexts/Favorites";
import Card from '../../components/Card';
import Title from '../../components/Title';
import styles from './Favorites.module.scss';

export default function Favorites() {
  const { favorite } = useFavoriteContext();
  console.log(favorite)

  // for (let item of favorite) {
  //   console.log(item.name)
  // }

  /*
  
  pokemon.name
  pokemon.sprites.front_default
  pokemon.id
  
  */

  return (
    <>
      <Title>
        <h1>My Favorites</h1>
      </Title>
      <section className={styles.container}>
        {favorite && favorite.map((fav, index) => (
          <Card fav={fav} key={index}/>

          // console.log("fav: ", fav)

          // <div key={item.id}>
          //   <img alt="oi" src={item.sprites?.front_default}/>
          // </div>
        ))}
      </section>
    </>
  )
}