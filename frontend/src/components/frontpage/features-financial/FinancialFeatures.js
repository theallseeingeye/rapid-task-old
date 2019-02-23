import React, { Component } from 'react';
import styled from 'styled-components';
import ManFinance from "./svg/ManFinanceSvg"
import InvoiceSvg from "./svg/InvoiceSvg";
import theme from "../../../global-styles/DefaultTheme";

const Div = styled.div`
  font-family: ${props => props.theme.Robotofont};
  margin: auto;
  height: auto;
  position: relative;
  max-width: 1200px;
  border: solid blue;
  overflow: hidden;
  background: white;
  min-height: 825px;
`;

const FinanceTitle = styled.p`
  font-size: 2em;
  width: 100%;
  text-align: center;
  font-weight: 900;
  border: solid green;
`;

const Text = styled.div`
  position: absolute;
  border: solid pink;
  height: auto;
  //bottom: 1vh;
  bottom: 0;
  right: 0;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    bottom: unset;
    margin-top: 60vh;
  }
  @media (min-width: ${props => props.theme.desktopscreen}) {
    margin-top: 50vh;
    height: unset;
  }
 
  z-index: 2;
`;

const FinanceDescription = styled.div`
  font-size: 1.2em;
  max-width: 600px;
  padding-left: 10px;
  padding-right: 10px;
`;

class FinancialFeatures extends Component {
    constructor(props) {
    super(props);

    this.color = theme.logoblue;
    this.color2 = "#9ed4fa";
  }
  render() {
    return (
      <Div>
        <Text>
          <FinanceTitle id="InvoiceActivateTrigger">Rapid Accounting</FinanceTitle>
          <FinanceDescription>
            What used to take hours in administrative work becomes simple with Rapid Task. In order to save you time on
            invoicing and taxes, Rapid Task gathers information from your quote, including statistics collected during
            the job, and automatically prepares documents for your review.
          </FinanceDescription>
        </Text>
        <ManFinance/>
      </Div>
    );
  }
}

export default FinancialFeatures;