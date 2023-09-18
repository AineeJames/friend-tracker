import PropTypes from "prop-types"
import styles from "./Tag.module.css"

const Tag = ({ text }) => {
  return (
    <div className={styles.tag}>
      {text}
    </div>
  );
}

Tag.propTypes = {
  text: PropTypes.string.isRequired
}

export { Tag }
