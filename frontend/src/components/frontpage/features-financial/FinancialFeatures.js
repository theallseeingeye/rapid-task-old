import React, { Component } from 'react';
import styled from 'styled-components';
import ManFinance from "./svg/ManFinanceSvg"

const Div = styled.div`
  font-family: ${props => props.theme.Robotofont};
  width: 100%;
  height: auto;
	overflow: hidden;
	background: white;
	position: relative;
	display: flex;
	flex-direction: column;
	min-height: 750px;
	//border: solid blue;
`;

const WidthDiv = styled.div`
	width: 100%;
	max-width: 1600px;
	margin: 0 auto;
	margin-top: 50px;
	position: relative;
	//border: solid yellow;
`;

const FinanceTitle = styled.div`
	margin-left: 50%;
	transform: translateX(-50%);	
	font-size: 2em;
	font-weight: 900;
  position: absolute;
  height: auto;
  text-align: right;
  bottom: 5vh;
  padding-left: 20vh; // Use this to shift the text
  //border: solid brown;
`;

const FinanceDescription = styled.div`
  font-size: 1.2em;
  margin: 0 auto;
  margin-bottom: 2em;
  position: relative;
  max-width: 900px;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
	@media (min-width: ${props => props.theme.tabletscreen}) {
		align-self: center;
	}
`;


class FinancialFeatures extends Component {
  render() {
    return (
      <Div>
				<WidthDiv>
					<ManFinance/>
					<FinanceTitle>Rapid Accounting</FinanceTitle>
				</WidthDiv>
				<FinanceDescription>
					What used to take hours in administrative work becomes simple with Rapid Task. In order to save you time on
					invoicing and taxes, Rapid Task gathers information from your quote, including statistics collected during
					the job, and automatically prepares documents for your review.
				</FinanceDescription>
      </Div>
    );
  }
}

export default FinancialFeatures;