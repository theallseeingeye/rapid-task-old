import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeFeatures from './EmployeeFeatures';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmployeeFeatures/>, div);
});