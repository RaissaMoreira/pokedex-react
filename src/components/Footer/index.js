import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

export default function Footer(){
  return(
    <footer className={styles.footer}>
      <p>Code by 
        <Link to='https://github.com/RaissaMoreira' target="_blank" className={styles.name}> Raissa Moreira</Link>
      </p>
    </footer>
  )
}