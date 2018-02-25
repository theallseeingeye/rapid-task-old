import React from 'react';
import ReactDOM from 'react-dom';
import InvestorRelations from './InvestorRelations.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InvestorRelations />, div);
});
