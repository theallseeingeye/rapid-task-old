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
`;

const Svg = styled.svg`
  position: absolute;
  z-index: -3;
  max-width: 1200px; // To keep the layers from getting too big
  transform: translate(-20%, -20%);
`;

const ManGraphic = styled.div`
  @media (min-width: 1200px) {
  margin-left: 15vw;
  }
`;

const FinanceTitle = styled.p`
  font-size: 2.5em;
  text-align: center;
  width: 100%;
  position: absolute;
  z-index: 2;
  @media (min-width: ${props => props.theme.tabletscreen}) {
  font-weight: 900;
  }
`;

const WhiteDiv = styled.div` // This div box is to help hide the invoice scroll. Older mobile delays the appearance.
  position: absolute;
  z-index: -1;
  background-color: white;
  width: 100%;
  height: 52vh;
`;

const RightColumn = styled.div`
  width: 65vw;
  margin-top: 50vh; 
  flex: 1;
`;

const LeftColumn = styled.div`
  width: 35vw;
  z-index: -2;
  position: relative;
  //max-width: 500px;
  height: auto;
  @media (min-width: ${props => props.theme.desktopscreen}) {
  flex: 1;
  }
`;

const FlexContainerLeft = styled.div`
  display: flex;
  justify-content: right;
`;

const FlexContainerRight = styled.div`
  // Flex box container options
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  // Alignment 
`;

const Columns = styled.div`
  display: flex;
  max-width: 800px;
  margin: auto;
`;


const Title1 = styled.div`
  margin-top: 2em;
  font-weight: 900;
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
  max-width: 500px;
`;

const MainContent = styled.div`
  font-family: ${props => props.theme.RobotoCondensedfont};
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 400;
  font-size: 1.1em;
  text-align: justify;
  flex-grow: 1;
  max-width: 500px;
  margin-top: 20vh;
  @media (min-width: ${props => props.theme.tabletscreen}) {
  margin-top: 30vh;
  }
  @media (min-width: ${props => props.theme.desktopscreen}) {
  margin-top: 45vh;
  }
`;

// This div is required to close the animation of the invoice.
const DivEnd = styled.div`
  bottom: 0;
  position: absolute;
  height: 1px;
  width: 100%;
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

      </Div>
    );
  }
}

export default FinancialFeatures;