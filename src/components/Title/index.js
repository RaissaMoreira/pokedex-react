import styles from './Title.module.scss';

export default function Title({ children }){
  return(
    <div className={styles.title}>
      { children }
    </div>
  )
}