import { useEffect, useState } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import styles from './BackToTop.module.scss';

export default function BackToTop() {
  const [showBtn, setShowBtn] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 900) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])

  return(
    <>
      {
        showBtn && 
        <button 
          onClick={handleClick} 
          className={styles.button}>
            <KeyboardDoubleArrowUpIcon/>
        </button>
      }
    </>
  )
}