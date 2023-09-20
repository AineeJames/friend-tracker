import { useState } from 'react';
import styles from './PersonInfoForm.module.css';
import PropTypes from 'prop-types';

const PersonInfoForm = ({ person = {}, onSubmit = () => {}, buttonText = "Submit"}) => {

  const [name, setName] = useState(person.name || "");
  const [age, setAge] = useState(person.age || "");
  const [bio, setBio] = useState(person.bio || "");
  const [birthday, setBirthday] = useState(person.birthday || "");
  const [interests, setInterests] = useState((person.interests && person.interests.join(", ")) || "");
  const [profilePicUrl, setProfilePicUrl] = useState(person.profilePicUrl || "");

  const datePickerToString = (pickerVal) => {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var now = new Date(pickerVal);
    return `${months[now.getMonth()]} ${now.getDay()}, ${now.getFullYear()}`
  };

  const onAddClicked = () => {
    const newFriend = {
      name,
      profilePicUrl,
      age,
      bio,
      birthdate: datePickerToString(birthday),
      interests: interests.split(",").map(str => str.trim())
    };
    onSubmit(newFriend);
  };

  const generateInterests = () => {
    const interests = ['Travel', 'Cooking', 'Reading', 'Hiking', 'Gaming', 'Art', 'Music', 'Photography', 'Sports', 'Singing', 'Dancing', 'Writing', 'Technology', 'Nature', 'Food tasting', 'History', 'Yoga', 'Meditation', 'Fashion', 'DIY crafts', 'Running', 'Film', 'Science', 'Camping', 'Fishing', 'Animals', 'Volunteering', 'Learning languages', 'Chess', 'Board games', 'Swimming', 'Skiing', 'Gardening', 'Sculpting', 'Collecting stamps', 'Interior design', 'Reading comics', 'Watching anime', 'Playing instruments', 'Exercising', 'Horseback riding', 'Traveling', 'Kayaking', 'Skydiving', 'Surfing', 'Baking', 'Beer tasting', 'Cocktail mixing', 'Woodworking', 'Magic tricks', 'Stand-up comedy', 'Virtual reality', 'Podcasting', 'Archery', 'Astrology', 'Cycling', 'Calligraphy', 'Learning magic', 'Oil painting', 'Beekeeping', 'Astronomy', 'Scuba diving', 'Snorkeling', 'Amateur radio', 'Geocaching', 'Horse racing', 'Jewelry making', 'Metal detecting', 'Philately', 'Robotics', 'RC vehicles', 'Sailing', 'Sewing', 'Stone skipping', 'Wine tasting', 'Beekeeping', 'Brewing beer', 'Candle making', 'Dog training', 'Foraging', 'Glassblowing', 'Lapidary', 'Origami', 'Paintball', 'Pottery', 'Robot combat', 'Writing music', 'Wood carving'];
    const numInterests = Math.floor(Math.random() * 4) + 2;
    for (let i = interests.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [interests[i], interests[j]] = [interests[j], interests[i]];
    }
    const selectedInterests = interests.slice(0, numInterests);
    const formattedInterests = selectedInterests.join(', ');
    return formattedInterests;
  }

  const formatDateForDatePicker = (dateObj) => {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(dateObj.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  const onRandomizeClicked = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const randomPerson = await response.json();
    const first = randomPerson.results[0].name.first;
    const last = randomPerson.results[0].name.last;
    setName(`${first} ${last}`);
    setAge(`${randomPerson.results[0].dob.age}`);
    setProfilePicUrl(`${randomPerson.results[0].picture.large}`);
    const country = randomPerson.results[0].location.country;
    setBio(`Born and raised in ${country}!`);
    const dob = new Date(randomPerson.results[0].dob.date);
    setBirthday(formatDateForDatePicker(dob))
    setInterests(generateInterests)
  }

  return (
    <>
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
      <div className={styles.prevProfilePicContainer}>
        <input 
          id="profile-pic-url" 
          placeholder="https://www.images.com/my-picture" 
          type="text" 
          value={profilePicUrl} 
          onChange={e => {setProfilePicUrl(e.target.value)}}
          className={styles.profilePicInput}
        />
      {profilePicUrl && <img src={profilePicUrl} className={styles.profilePicPreview} alt="" />}
      </div>
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
      <button onClick={onRandomizeClicked}>Randomize Info</button>
      <button onClick={onAddClicked}>{buttonText}</button>
    </div>
    </>
  );
};

PersonInfoForm.propTypes = {
  person: PropTypes.shape({
    profilePicUrl: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number,
    bio: PropTypes.string,
    birthdate: PropTypes.string,
    interests: PropTypes.arrayOf(PropTypes.string)
  }),
  actions: PropTypes.arrayOf(PropTypes.shape({
    actionName: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired
  }))
}

export { PersonInfoForm }
