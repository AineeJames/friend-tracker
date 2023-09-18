import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Link to="/">
        <h1 className={styles.siteLogo}>Friend Tracker</h1>
      </Link>
      <Link to="/user-profile">
        <button className={styles.profileButton}>My Profile</button>
      </Link>
    </nav>
  );
};

export { NavBar };
