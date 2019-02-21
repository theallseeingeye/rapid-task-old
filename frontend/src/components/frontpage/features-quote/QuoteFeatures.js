import React, { Component } from 'react';
import styled from 'styled-components';
import ManQuoting from "./svg/ManQuoting";

const Div = styled.div`
  font-family: ${props => props.theme.Robotofont};
  width: 100%;
  max-width: 1200px;
  margin: auto;
  height: auto;
  position: relative; // Required to help arrange the divs- especially the trigger div, as we need it to the bottom.
	background: white;
  overflow: hidden;
`;

const QuoteTitle = styled.p`
  font-size: 2.5em;
  width: 100%;
  text-align: center;
  position: absolute;
  z-index: 2;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    font-weight: 900;
  }
`;

const MainContext = styled.p`
  width: 54%;
  text-align: justify;
  margin-left: 10px;
  font-size: 1.1em;
  margin-top: -30vh;
  margin-bottom: 10vh;
  @media (min-width: ${props => props.theme.desktopscreen}) {
    width: 43%;
  }
  
`;

const Title1 = styled.div`
  margin-top: 2em;
  font-size: 1.2em;
  padding-left: 10px;
  padding-right: 10px;
  flex-grow: 0.001;
`;

class Quotes extends Component {
  render() {
    return (
      <Div>
        <QuoteTitle>Automate Quotes</QuoteTitle>
        <ManQuoting/>
        <MainContext>
          Providing accurate quotes can be tedious and time consuming. Rapid Task removes the tedious steps, allowing
          you to build your quotes quickly. We allow easy custom estimating processes that works for your business.
        </MainContext>
      </Div>
    );
  }
}

export default Quotes;
