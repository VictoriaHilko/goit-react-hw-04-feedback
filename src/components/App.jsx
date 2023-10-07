import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleClick = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalCount = Object.values(this.state);

    return totalCount.reduce((acc, vote) => acc + vote, 0);
  };

  countPositiveFeedbackPercentage = (total, good) => {
    const percentage = Math.round((good / total) * 100);
    return percentage;
  };


  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    const totalCount = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(totalCount, good);

    return (
      <>
        <Section title='Please leave feedback' />
        <FeedbackOptions
          options={options}
          handleClick={this.handleClick}
        />
        <Section />

        <Section title='Statistics' />
        {totalCount ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalCount={totalCount}
            positivePercentage={positivePercentage}
          />
          : <Notification
            message="There is no feedback" />
        }
        <Section />
      </>

    );
  }
}
