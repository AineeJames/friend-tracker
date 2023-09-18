import PropTypes from "prop-types";
import { PersonCard } from "./PersonCard.js";
import styles from "./PeopleList.module.css";
import { NewFriendCard } from "./NewFriendCard.js";
import { useNavigate } from "react-router-dom";

const PeopleList = ({
  peopleList,
  onClickPerson = () => {},
  onPersonAction,
  actionName,
  allowAdditions
}) => {

  const navigate = useNavigate();

  return (
    <div className={styles.peopleList}>
      {peopleList.map((person) => (
        <div key={person.id} className={styles.peopleListItems}>
          <PersonCard
            person={person}
            onCardClicked={onClickPerson}
            onAction={onPersonAction}
            actionName={actionName}
          />
        </div>
    ))}
    {allowAdditions && <div className={styles.peopleListItems}>
      <NewFriendCard onClick={() => {navigate("/add-friend");}} />
    </div>}
    </div>
  );
}

PeopleList.propTypes = {
  peopleList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profilePicUrl: PropTypes.string,
      age: PropTypes.number,
    })
  ).isRequired,
  onClickPerson: PropTypes.func,
  onPersonAction: PropTypes.func,
  actionName: PropTypes.string,
  allowAdditions: PropTypes.bool,
}

export { PeopleList };
