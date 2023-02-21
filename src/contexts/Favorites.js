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

    const favRepeated = favorite.some(item => item.name === newFavorite.name)

    let newList = [...favorite];

    if(!favRepeated) {
      newList.push(newFavorite);
      // return setFavorite(newList);
    } else {
      // newList.slice(newList.indexOf(newFavorite), 1);
      newList.splice(newFavorite, 1);
    }

    setFavorite(newList)



   
    // const favRepeated = favorite.some(item => item.id === newFavorite.id)

    // let newList = [...favorite];

    // if(!favRepeated) {
    //   newList.push(newFavorite);
    //     return setFavorite(newList);
    // }

    // newList.slice(newList.indexOf(newFavorite), 1);
    // return setFavorite(favorite);



    // const newList = [...favorite];
    // const favoriteIndex = favorite.indexOf(newFavorite);


    // if (favoriteIndex >= 0) {
    //   newList.splice(favoriteIndex, 1);
    // } else {
    //   newList.push(newFavorite);
    // }
    // setFavorite(newList);

    
  }
  return {
    favorite,
    addFavorite,
  };
}
