import { useState } from 'react';
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = key => {
    switch (key) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'bad':
        setBad(prevBad => bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.round((good / countTotalFeedback) * 100);

  return (
    <>
      <Section title='Please leave feedback' />
      <FeedbackOptions
        options={{ good, neutral, bad }}
        handleClick={handleClick} />
      <Section />

      <Section title='Statistics' />
      {countTotalFeedback ?
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalCount={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
        : <Notification
          message="There is no feedback" />
      }
      <Section />
    </>

  );
}
