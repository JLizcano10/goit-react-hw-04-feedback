import { ButtonContainer, ButtonOption } from './FeedbackOptions.styles';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, increment }) => {
  return (
    <ButtonContainer>
      {options.map(option => (
        <ButtonOption
          key={option}
          name={option}
          type="button"
          onClick={increment}
        >
          {option}
        </ButtonOption>
      ))}
    </ButtonContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  increment: PropTypes.func.isRequired,
};

export default FeedbackOptions;
