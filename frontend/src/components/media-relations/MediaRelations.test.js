import React from 'react';
import ReactDOM from 'react-dom';
import MediaRelations from './MediaRelations.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MediaRelations />, div);
});
