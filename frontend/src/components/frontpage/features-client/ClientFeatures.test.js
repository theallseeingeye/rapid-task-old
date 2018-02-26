import React from 'react';
import ReactDOM from 'react-dom';
import ClientFeatures from './ClientFeatures';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClientFeatures/>, div);
});