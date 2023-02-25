import PropTypes from 'prop-types';
import { Button, List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => (
        <li key={option}>
          <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
        </li>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
