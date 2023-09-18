import { useState } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext.js';

// children is a reference to the children elements if opening and closing tags exist
const FavoritesProvider = ({ children }) => {

  const existingState = JSON.parse(localStorage.getItem("favoriteIds"));
  const [favoriteIds, setFavoriteIds] = useState(existingState || []);

  const toggleFave = (personId) => {
    let newFavoriteIds = favoriteIds.includes(personId)
      ? favoriteIds.filter(id => id !== personId) : favoriteIds.concat(personId);
    setFavoriteIds(newFavoriteIds);
    localStorage.setItem("favoriteIds", JSON.stringify(newFavoriteIds));
  };

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFave }}>
      {children}
    </FavoritesContext.Provider>
  );

}

export { FavoritesProvider };
