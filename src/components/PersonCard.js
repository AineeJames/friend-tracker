import styles from './PersonCard.module.css';
import PropTypes from 'prop-types';

const PersonCard = ({
  person: { profilePicUrl, name, age, id },
  onCardClicked,
  actionName,
  onAction,
}) => {

  return (
    <>
    <div
      className={styles.cardNorm}
      onClick={() => onCardClicked(id)}
    >
      <div className={styles.detailsContainer}>
        <div className={styles.profilePicLeft}>
          <div className={styles.profilePicWrap}>
            <img 
              className={styles.profilePic}
              src={profilePicUrl}
              alt="" 
            /> 
          </div>
        </div>
        <div className={styles.cardDetails}>
          <h3>Name</h3>
          <p>{name}</p>
          <h3>Age</h3>
          <p>{age}</p>
        </div>
      </div>
      { actionName && onAction && <button
        onClick={(e) => {
          onAction(id);
          e.stopPropagation();
        }}
        className={styles.actionButton}
      >
      {actionName}
      </button>}
    </div>
    </>
  );
}

PersonCard.propTypes = {
  person: PropTypes.shape({
    profilePicUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onCardClicked: PropTypes.func.isRequired,
  onAction: PropTypes.func,
  actionName: PropTypes.string,
};

export { PersonCard }; /* named export */
