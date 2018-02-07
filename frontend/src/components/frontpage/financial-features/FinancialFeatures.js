import React, { Component } from 'react';
import styled from 'styled-components';
import ManFinance from "./ManFinance"

const Div = styled.div`
  overflow: hidden;
  margin: auto;
`;

const FinanceTitle = styled.p`
  font-family: ${props => props.theme.Robotofont};
  font-weight: 900;
  font-size: 2.5em;
  text-align: right;
  position: absolute;
  width: 98%;
`;

class FinancialFeatures extends Component {
  render() {
    return (
      <Div id="parentDiv">
        <FinanceTitle> Automated book-keeping</FinanceTitle>
        <ManFinance/>
      </Div>
    );
  }
}

export default FinancialFeatures;