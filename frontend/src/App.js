import React, { Component } from 'react';
import  styled from 'styled-components';

const Title = styled.p`
  font-size: 4em;
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Title>Welcome to Rapid Task</Title>
        <p>
          This will be the future of RAPID TASK!
        </p>
        <Button>Hello! Congratulations! Press to Pat yourself!</Button>
      </div>
    );
  }
}

export default App;
