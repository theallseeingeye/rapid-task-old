import React from 'react';
import ReactDOM from 'react-dom';
import Unsubscribe from './Unsubscribe.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Unsubscribe />, div);
});
