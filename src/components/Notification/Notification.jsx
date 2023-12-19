import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p style={{ fontSize: '25px', fontWeight: '400' }}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
