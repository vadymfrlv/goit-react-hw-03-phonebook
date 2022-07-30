import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={styles.notify}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
