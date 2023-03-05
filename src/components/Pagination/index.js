import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styles from "./Pagination.module.scss";

export default function Pagination(props) {
  const {page, totalPages, onLeftClick, onRightClick} = props

  return (
      <div className={styles.container}>
          <button className={styles.btn} onClick={onLeftClick}>
            <ArrowBackIosNewIcon className={styles.icon}/>
          </button>
          <div className={styles.text}>{page} ... {totalPages}</div>
          <button className={styles.btn} onClick={onRightClick}>
            <ArrowForwardIosIcon className={styles.icon}/>
          </button>
      </div>
  )
}