import styles from './WelcomeMessage.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const WelcomeMessage = ({ name }) => {

  const hasBeenHidden = localStorage.getItem("welcomeMessageHidden");
  const [isVisible, setIsVisible] = useState(!hasBeenHidden);

  const hide = () => {
    setIsVisible(false);
    localStorage.setItem("welcomeMessageHidden", true);
  }

  return isVisible ? (
    <>
      <div className={styles.welcomeMessage}>
        <h2>Welcome to the friend tracker page, {name}!</h2>
        <button onClick={hide}>Hide Welcome</button>
      </div>
    </>
  ) : null;
}

WelcomeMessage.propTypes = {
  name: PropTypes.string.isRequired
};

export { WelcomeMessage };
