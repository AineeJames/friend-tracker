import { WelcomeMessage } from '../components/WelcomeMessage.js';
import { PeopleList } from '../components/PeopleList.js';
import { myProfileData } from '../data.js';
import styles from './FriendsPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext.js';
import { FriendsContext } from '../contexts/FriendsContext.js';

const FriendsPage = () => {

  const {favoriteIds, toggleFave} = useContext(FavoritesContext); // equal to providers value prop 
  const { friends } = useContext(FriendsContext); 
    
  const favorites = favoriteIds.map(id => friends.find(friend => friend.id === id))
  const nonFavorites = friends.filter(friend => !favoriteIds.find(id => friend.id === id)) 

  const navigate = useNavigate();
  const goToPersonDetail = (personId) => {
    navigate(`/friends/${personId}`);
  };

  return (
    <>
    <WelcomeMessage name={myProfileData.name} />
    <h2 className={styles.contentHeading}>Favorites ({favoriteIds.length})</h2>
    <PeopleList
      peopleList={favorites}
      onClickPerson={goToPersonDetail}
      onPersonAction={toggleFave}
      actionName="Remove from Favorites" 
    /> 
    <h2 className={styles.contentHeading}>All Friends</h2>
    <PeopleList 
      peopleList={nonFavorites} 
      onClickPerson={goToPersonDetail}
      onPersonAction={toggleFave}
      actionName="Add to Favorites"
      allowAdditions
    /> 
    </>
  );
  
}

export { FriendsPage };
