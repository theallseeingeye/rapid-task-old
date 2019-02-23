import React, { Component } from 'react';
import styled from 'styled-components';
import ManQuoting from "./svg/ManQuoting";

const Text = styled.div`
  position: absolute;
  border: solid pink;
  height: auto;
  bottom: 15vh;
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
const Div = styled.div`
  font-family: ${props => props.theme.Robotofont};
  width: 100%;
  max-width: 1200px;
  margin: auto;
  min-height: 850px;  
  max-height: 1000px;
  position: relative; // Required to help arrange the divs- especially the trigger div, as we need it to the bottom.
	background: white;
  overflow: hidden;
  border: solid red;
  @media (min-width: ${props => props.theme.giantscreen}) {
    overflow: visible;
  }
`;

const QuoteTitle = styled.p`
  font-size: 2em;
  width: 100%;
  text-align: center;
  border: solid green;
  font-weight: 900;
`;

const QuoteDescription = styled.div`
  font-size: 1.2em;
  max-width: 600px;
  padding-left: 10px;
  padding-right: 10px;
`;

class Quotes extends Component {
  render() {
    return (
      <Div>

        <ManQuoting/>
        <Text>
          <QuoteTitle>Rapid Quotes</QuoteTitle>
          <QuoteDescription>
            Providing accurate quotes can be tedious and time consuming. Rapid Task removes the tedious steps, allowing
            you to build your quotes quickly. We allow easy custom estimating processes that works for your business.
          </QuoteDescription>
        </Text>
      </Div>
    );
  }
}

export default Quotes;
