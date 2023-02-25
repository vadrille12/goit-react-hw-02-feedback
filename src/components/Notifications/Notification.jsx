import PropTypes from 'prop-types';

export const Notification = ({ message, total }) => {
  return <div>{total === 0 && <p>{message}</p>}</div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
