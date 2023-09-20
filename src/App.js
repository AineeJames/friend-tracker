import styles from './App.module.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { FriendsPage } from './pages/FriendsPage.js';
import { FriendDetailPage } from './pages/FriendDetailPage.js';
import { UserProfilePage } from './pages/UserProfilePage.js';
import { NewFriendPage } from './pages/NewFriendPage.js';
import { EditFriendPage } from './pages/EditFriendPage.js';
import { NavBar } from './components/NavBar.js';
import { FavoritesProvider } from './components/FavoritesProvider.js';
import { FriendsProvider } from './components/FriendsProvider.js';

export const App = () => {

  return (
    <>
    <HashRouter>
    <NavBar />
    <FavoritesProvider>
      <FriendsProvider>
        <div className={styles.contentContainer}>
          <Routes>
            <Route path="/" element={<FriendsPage />} />
            <Route path="/friends/:friendId" element={<FriendDetailPage />} />
            <Route path="/edit/:friendId" element={<EditFriendPage />} />
            <Route path="/user-profile" element={<UserProfilePage />} />
            <Route path="/add-friend" element={<NewFriendPage />} />
          </Routes>
        </div>
      </FriendsProvider>
    </FavoritesProvider>
    </HashRouter>
    </>
  );

}
