import Card from '../../components/Card';
import Title from '../../components/Title';
import styles from './Favorites.module.scss';

export default function Favorites() {
  return (
    <>
      <Title>
        <h1>My Favorites</h1>
      </Title>
      <section className={styles.container}>
        {/* <Card/> */}
      </section>
    </>
  )
}