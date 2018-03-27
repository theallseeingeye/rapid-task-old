import React from 'react';
import ReactDOM from 'react-dom';
import AppNav from './AppNav.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppNav />, div);
});
