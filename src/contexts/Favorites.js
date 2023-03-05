import { createContext, useState, useContext } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favorites";

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}


export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoritesContext);

  function addFavorite(newFavorite) {
    setFavorite([...favorite, newFavorite])
  }

  function removeFavorite(removeFav) {
    setFavorite(favorite.filter((poke) => poke.name !== removeFav.name))
  }
  return {
    favorite,
    addFavorite,
    removeFavorite,
  };
}
