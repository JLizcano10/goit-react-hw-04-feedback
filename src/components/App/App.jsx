import { Container } from 'components/App/App.styles';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import { useState } from 'react';

const App = () => {
  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleIncrement = e => {
    const property = e.target.name;
    setFeedbackState(prevFeedbackState => ({
      ...prevFeedbackState,
      [property]: prevFeedbackState[property] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedbackState.good + feedbackState.neutral + feedbackState.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positiveFeedback = feedbackState.good;
    const positivePercentage = (positiveFeedback / total) * 100;
    if (total === 0) {
      return 0;
    }
    return parseInt(positivePercentage);
  };

  const options = Object.keys(feedbackState);
  const totalFeedback = countTotalFeedback();
  return (
    <Container>
      <Notification></Notification>
      <Section title={'Please leave feedback'}>
        {/* Cuando pasa un manejador de eventos a un componente de React, simplemente proporciona la referencia a la función sin llamarla explícitamente. React manejará la llamada a la función en función del evento que ocurra */}
        <FeedbackOptions options={options} increment={handleIncrement} />
      </Section>
      <Section title={'Statistics'}>
        {totalFeedback > 0 ? (
          <Statistics
            good={feedbackState.good}
            neutral={feedbackState.neutral}
            bad={feedbackState.bad}
            total={countTotalFeedback()}
            positive={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Container>
  );
};

export default App;
