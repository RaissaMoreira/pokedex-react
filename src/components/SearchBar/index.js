import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import styles from "./SearchBar.module.scss";

export default function SearchBar(props) {
  const { handleSearch } = props;
  const [input, setInput] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);

    if(e.target.value.length === 0) {
      handleSearch(undefined);
    }
  }

  const handleClick = () => {
    handleSearch(input);
  }

  return (
    <div className={styles.container}>
      <input 
        type="text" 
        placeholder="Search for a pokemon..."
        onChange={handleChange}
        className={styles.input} />
      <SearchIcon onClick={handleClick} className={styles.icon} />
    </div>
  );
}
