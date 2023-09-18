import { ProfileInfo } from '../components/ProfileInfo.js';
import { myProfileData } from '../data.js';
import styles from './FriendsPage.module.css';

const UserProfilePage = () => {
  return (
    <>
    <h2 className={styles.contentHeading}>My Profile</h2>
    <ProfileInfo person={myProfileData} />
    </>
  );
};

export { UserProfilePage };
