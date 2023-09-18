import styles from './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FriendsPage } from './pages/FriendsPage.js';
import { FriendDetailPage } from './pages/FriendDetailPage.js';
import { UserProfilePage } from './pages/UserProfilePage.js';
import { NewFriendPage } from './pages/NewFriendPage.js';
import { NavBar } from './components/NavBar.js';
import { FavoritesProvider } from './components/FavoritesProvider.js';
import { FriendsProvider } from './components/FriendsProvider.js';

export const App = () => {

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <FavoritesProvider>
      <FriendsProvider>
        <div className={styles.contentContainer}>
          <Routes>
            <Route exact path="/" element={<FriendsPage />} />
            <Route exact path="/friends/:friendId" element={<FriendDetailPage />} />
            <Route exact path="/user-profile" element={<UserProfilePage />} />
            <Route exect path="/add-friend" element={<NewFriendPage />} />
          </Routes>
        </div>
      </FriendsProvider>
    </FavoritesProvider>
    </BrowserRouter>
    </>
  );

}
