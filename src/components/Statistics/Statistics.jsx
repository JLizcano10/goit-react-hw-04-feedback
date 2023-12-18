import { CountText } from './Statistics.stlyes';

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

export default Statistics;
