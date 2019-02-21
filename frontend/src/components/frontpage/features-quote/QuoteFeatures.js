import React, { Component } from 'react';
import styled from 'styled-components';
import ParkingLotAnimation from './svg/ParkingLotAnimation';
import ManQuoting from "./svg/ManQuoting";

const Div = styled.div`
  font-family: ${props => props.theme.Robotofont};
  width: 100%;
  max-width: 1200px;
  margin: auto;
  height: auto;
  position: relative; // Required to help arrange the divs- especially the trigger div, as we need it to the bottom.
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

const Context1 = styled.div`
  font-family: ${props => props.theme.RobotoCondensedfont};
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 400;
  text-align: justify;
  flex-grow: 1;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    margin-bottom: 10em;
  }
`;

const Columns = styled.div`
  display: flex;
  width: 100%;
`;

const RightColumn = styled.div`
  Width: 45vw;
`;

const LeftColumn = styled.div`
  width: 54vw;
`;

const FlexContainer = styled.div`
  //Flex box container options
  display: flex;
  flex-direction: column;
`;

// This div is required for the scrollMagic to trigger the tween animation of the Parking Lot Layers off.
const EndTrigger = styled.div`
  bottom: 0;
  position: absolute;
  height: 1px; // Need this to give something to trigger on.
  width: 100%;
`;

const WhiteDiv = styled.div`
  // This div is to block the animation from appearing near the top above the estimating man.
  width: 100%;
  height: 70vh;
  position: absolute;
  background: white;
  z-index: -5;
`;

class Quotes extends Component {
  render() {
    return (
      <Div id="parentDiv">
        <WhiteDiv/>
        <QuoteTitle>Automate Quotes</QuoteTitle>
        <ManQuoting/>
        <MainContext>
          Providing accurate quotes can be tedious and time consuming. Rapid Task removes the tedious steps, allowing
          you to build your quotes quickly. We allow easy custom estimating processes that works for your business.
        </MainContext>


        <EndTrigger id="endTrigger"/>
      </Div>
    );
  }
}

export default Quotes;
