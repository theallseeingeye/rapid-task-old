import React from 'react';
import ReactDOM from 'react-dom';
import Quotes from './quotes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Quotes/>, div);
});