import { createContext, useState, useContext, useEffect } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favorites";

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState(() => {
    const storedFavorites = localStorage.getItem("favorite");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

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