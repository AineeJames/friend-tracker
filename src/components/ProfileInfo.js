import styles from './ProfileInfo.module.css';
import PropTypes from 'prop-types';
import { Tag } from "./Tag.js";

const ProfileInfo = ({
  person: { profilePicUrl, name, age, bio, birthdate, interests },
  actionName,
  onAction
}) => {
  
  return (
    <>
    <div className={styles.profilePicContainer}>
      <div className={styles.profilePicWrap}>
        <img
          className={styles.profilePic}
          src={profilePicUrl}
          alt={`${name}'s Profile Pic`}
        />
      </div>
    </div>
    <h3 className={styles.detailHeading}>Name</h3>
    <p>{name}</p>
    <h3 className={styles.detailHeading}>Age</h3>
    <p>{age}</p>
    <h3 className={styles.detailHeading}>Bio</h3>
    <p>{bio}</p>
    <h3 className={styles.detailHeading}>Birthdate</h3>
    <p>{birthdate}</p>
    <h3 className={styles.detailHeading}>Interests</h3>
    {interests.map(interest => <Tag key={interest} text={interest} />)}
    {actionName && onAction && <button className={styles.actionButton} onClick={onAction}>{actionName}</button>}
    </>
  );

};

ProfileInfo.propTypes = {
  person: PropTypes.shape({
    profilePicUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    bio: PropTypes.string,
    birthdate: PropTypes.string,
    interests: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  actionName: PropTypes.string,
  onAction: PropTypes.func
}

export { ProfileInfo };
