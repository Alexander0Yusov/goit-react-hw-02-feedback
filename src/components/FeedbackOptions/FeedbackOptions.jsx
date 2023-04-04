import { Component } from 'react';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    console.log(options);

    return (
      <ul className={css.buttonSet}>
        {Object.keys(options).map(item => (
          <li key={item}>
            <button
              onClick={onLeaveFeedback}
              className={css.feedbackButton}
              name={item}
              type="button"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {/* {options[item]} */}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
