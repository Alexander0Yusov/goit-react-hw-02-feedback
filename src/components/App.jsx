import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // работает именно стрелка. почему?
  handleButtonClick = e => {
    const { name } = e.currentTarget;

    // обновить значение относительно предыдущих - через функцию
    // объясняется асинхронностью
    this.setState(prevState => {
      return {
        ...prevState,
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="React homework template">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleButtonClick}
          />
        </Section>
      </div>
    );
  }
}
