import React from 'react';
import ReactDOM from 'react-dom';
import Quotes from './QuoteFeatures';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Quotes/>, div);
});