import { PersonInfoForm } from '../components/PersonInfoForm.js';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FriendsContext } from '../contexts/FriendsContext.js';
import { v4 as uuid } from 'uuid';

const NewFriendPage = () => {

  const { addFriend } = useContext(FriendsContext);
  const navigate = useNavigate();

  const onFormSubmit = (friendInfo) => {
    const newFriend = {
      ...friendInfo,
      id: uuid()
    }
    addFriend(newFriend);
    navigate(`/friends/${newFriend.id}`);
  }

  return (
    <>
    <h1>Add A New Friend</h1>
    <PersonInfoForm onSubmit={onFormSubmit} buttonText="Add New Friend" />
    </>
  );

};

export { NewFriendPage };
