import { Component } from 'react';
import css from './Notification.module.css';

export class Notification extends Component {
  render() {
    const { message } = this.props;

    return <h3 className={css.header}>{message}</h3>;
  }
}
