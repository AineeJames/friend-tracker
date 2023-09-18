import { ProfileInfo } from '../components/ProfileInfo.js';
import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext.js';
import { FriendsContext } from '../contexts/FriendsContext.js';

const FriendDetailPage = () => {

  const { favoriteIds, toggleFave } = useContext(FavoritesContext);
  const { friends } = useContext(FriendsContext);

  // console.log(useParams()) -> object that contains key from routes path
  const { friendId } = useParams();
  const selFriend = friends.find(friend => friend.id === friendId) 

  const isFave = favoriteIds.includes(friendId);

  return selFriend ? (
    <ProfileInfo 
      person={selFriend} 
      actionName={`${isFave ? "Remove from" : "Add to"} Favorites`} 
      onAction={() => toggleFave(friendId)}
    />
  ) : (
    <>
    <p>Oops! Friend with id {friendId} doens not exist...</p>
    <Link to="/">
      <button>Go home</button>
    </Link>
    </>
  );
};

export { FriendDetailPage };
