import { Component } from 'react';
import css from './Section.module.css';

export class Section extends Component {
  state = {};

  render() {
    const { title, children } = this.props;
    return (
      <section className={css.section}>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
}
