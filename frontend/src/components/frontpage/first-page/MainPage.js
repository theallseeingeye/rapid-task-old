import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import NavBar from "./../nav/Navbar";
import Logo from "../../global-svg/logo"
import Guru from './Svg/GuruManSvg';
import OfficeBackground from './Svg/OfficeBackgroundSvg';
import Arrow from './Svg/ArrowSvg';

const Div = styled.div`
  height: 100vh;
  background: white;
`;

const BackgroundContainer = styled.div`
  height: 70vh;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  opacity: 0.4;   // To fade the background
  z-index: 1;  // To place behind all divs
  overflow: hidden;  // To hide the sides that are stretching beyond the div
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  height: 70vh;
  width: 100%;
`;

const LogoBox = styled.div`
  z-index: 2;
  align-self: flex-start;
  width: 100%;
  margin-top: 0.5em;
  margin-left: 0.1em;
  margin-right: 0.1em;
  
  @media (min-width: ${props => props.theme.tabletscreen}) {
    margin-top: 4em;
    max-width: 800px;
  }
`;

const GuruContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  height: 70vh;
  width: 100%;
`;

const GuruBox = styled.div`
  height: 80%;
  align-self: flex-end;
  z-index: 2;
`;

const SloganContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  height: 70vh;
  width: 100%;
`;

const SloganBox = styled.div`
  width: 100%;
  z-index: 3;
  align-self: flex-end;
  margin-bottom: 2em;
  background-color: ${props => props.theme.logoblue};
  opacity: 0.8;
  text-align: center;
  height: 3.3em;
`;

const TextStyle1 = styled.p`
  font-family: ${props => props.theme.RobotoCondensedfont};
  font-weight: 900;
  margin: auto;
  font-size: 1.1em;
  color: white;
`;

const TextStyle2 = styled.p`
  font-family: ${props => props.theme.RobotoCondensedfont};
  color: white;
  font-size: 0.8em;
  margin: auto;
`;

const TextStyle3 = styled.p`
  font-family: ${props => props.theme.RobotoCondensedfont};
  color: white;
  font-size: 0.7em;
  margin: auto;
`;

const LightSpeed = keyframes`
  from {
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    transform: skewX(-5deg);
    opacity: 1;
  }

  to {
    transform: none;
    opacity: 1;
  }
`;

const LightSpeedIn = styled.div`
  animation: ${LightSpeed} 0.4s;
  animation-timing-function: ease-out;
`;

class MainPage extends Component {
  render() {
    return (
      <Div>
        <NavBar/>
        <LogoContainer>
          <LogoBox>
            <LightSpeedIn>
             <Logo/>
            </LightSpeedIn>
          </LogoBox>
        </LogoContainer>
        <BackgroundContainer>
          <div>
            <OfficeBackground/>
          </div>
        </BackgroundContainer>
        <GuruContainer>
          <GuruBox>
            <Guru/>
          </GuruBox>
        </GuruContainer>
        <SloganContainer>
          <SloganBox>
            <TextStyle1>
              STREAMLINING
            </TextStyle1>
            <TextStyle2>
              YOUR BUSINESS PROCESS
            </TextStyle2>
            <TextStyle3>
              SO YOU CAN FOCUS ON WHAT'S IMPORTANT
            </TextStyle3>
          </SloganBox>
        </SloganContainer>
        <Arrow/>
      </Div>
    );
  }
}

export default MainPage;
