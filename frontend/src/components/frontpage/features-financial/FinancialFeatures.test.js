import React from 'react';
import ReactDOM from 'react-dom';
import FinancialFeatures from './svg/ManFinanceSvg';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FinancialFeatures/>, div);
});