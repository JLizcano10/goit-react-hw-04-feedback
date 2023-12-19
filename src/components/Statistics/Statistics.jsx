import { CountText } from './Statistics.stlyes';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div>
      <CountText>Good: {good}</CountText>
      <CountText>Neutral: {neutral}</CountText>
      <CountText>Bad: {bad}</CountText>
      <CountText>Total: {total}</CountText>
      <CountText>Positive feedback: {positive}%</CountText>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};

export default Statistics;
