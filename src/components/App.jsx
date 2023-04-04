import { Component } from 'react';
import { Section } from './Section/Section';

export class App extends Component {
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
          React homework template
        </Section>
      </div>
    );
  }
}
