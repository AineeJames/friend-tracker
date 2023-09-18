import { useState, useContext } from 'react';
import styles from './NewFriendPage.module.css';
import { v4 as uuid } from 'uuid';
import { FriendsContext } from '../contexts/FriendsContext.js';
import { useNavigate } from 'react-router-dom';

const NewFriendPage = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [birthday, setBirthday] = useState("");
  const [interests, setInterests] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("");

  const { addFriend } = useContext(FriendsContext);
  const navigate = useNavigate();

  const datePickerToString = (pickerVal) => {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var now = new Date(pickerVal);
    return `${months[now.getMonth()]} ${now.getDay()}, ${now.getFullYear()}`
  };

  const onAddClicked = () => {
    const newFriend = {
      id: uuid(),
      name,
      profilePicUrl,
      age,
      bio,
      birthdate: datePickerToString(birthday),
      interests: interests.split(",").map(str => str.trim())
    };
    addFriend(newFriend);
    navigate("/");
  };

  return (
    <>
    <h1>Add new Friend</h1>
    <div className={styles.infoForm}>
      <label htmlFor="name">Name</label>
      <input 
        id="name" 
        placeholder="John Doe" 
        type="text" 
        value={name} 
        onChange={e => {setName(e.target.value)}}
      />
      <label htmlFor="age">Age</label>
      <input 
        id="age" 
        placeholder="34" 
        type="number" 
        value={age} 
        onChange={e => {setAge(Number(e.target.value))}}
      />
      <label htmlFor="name">Profile Picture Url</label>
      <input 
        id="profile-pic-url" 
        placeholder="https://www.images.com/my-picture" 
        type="text" 
        value={profilePicUrl} 
        onChange={e => {setProfilePicUrl(e.target.value)}}
      />
      <label htmlFor="bio">Bio</label>
      <textarea 
        id="bio" 
        placeholder="Say something about this friend." 
        type="text" 
        value={bio} 
        onChange={e => {setBio(e.target.value)}}
      />
      <label htmlFor="birthday">Birthday</label>
      <input 
        id="birthday" 
        type="date" 
        value={birthday} 
        onChange={e => {setBirthday(e.target.value)}}
      />
      <label htmlFor="interests">Interests</label>
      <input 
        id="interests" 
        placeholder="hiking,cooking,..." 
        type="text" 
        value={interests} 
        onChange={e => {setInterests(e.target.value)}}
      />
      <button onClick={onAddClicked}>Add Friend</button>
    </div>
    </>
  );

};

export { NewFriendPage };
