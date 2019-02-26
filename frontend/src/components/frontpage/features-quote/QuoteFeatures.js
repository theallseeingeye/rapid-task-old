import React, { Component } from 'react';
import styled from 'styled-components';
import ManQuoting from "./svg/ManQuoting";

const Div = styled.div`
  font-family: ${props => props.theme.Robotofont};
  width: 100%;
  height: auto;
	overflow: hidden;
	background: white;
	position: relative;
	display: flex;
	flex-direction: column;
	min-height: 500px;
	//border: solid blue;
`;

const WidthDiv = styled.div`
	height: 80%;
	width: 40%;
	margin: 0 auto;
	position: relative;
	//border: solid yellow;
`;

const QuoteTitle = styled.p`
	margin-left: 50%;
	transform: translateX(-50%);	font-size: 2em;
	font-weight: 900;
  position: absolute;
  height: auto;
  text-align: left;
  bottom: 5vh;
  padding-right: 30vh; // Use this to shift the text to the right
  //border: solid brown;
`;

const QuoteDescription = styled.div`
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

class Quotes extends Component {
  render() {
    return (
      <Div>
				<WidthDiv>
					<ManQuoting/>
					<QuoteTitle>
						Rapid Quotes
					</QuoteTitle>
				</WidthDiv>
				<QuoteDescription>
					Providing accurate quotes can be tedious and time consuming. Rapid Task removes the tedious steps, allowing
					you to build your quotes quickly. We allow easy custom estimating processes that works for your business.
				</QuoteDescription>
      </Div>
    );
  }
}

export default Quotes;
