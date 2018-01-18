import React, { Component } from 'react';
import styled from 'styled-components';

import NavBar from "./nav/navbar";
import Logo from "./images/logo"
import Guru from './images/guru-man';
import OfficeBackground from './images/office-background';
import Introduction from "./introduction/introduction";
import Features from "./features/features";
import Quotes from "./quotes/quotes";
import AnimationTest from "./animation/animation";

const TopDiv = styled.div`
  height: 70vh;
`;

const BackgroundContainer = styled.div`
  height: 70vh;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  // To fade the background
  opacity: 0.4;
  // To place behind all divs
  z-index: -1;
  // To hid the sides that are stretching beyond the div
  overflow: hidden;
`;

const BackgroundBox = styled.div`
  align-self: flex-start;
  margin: auto;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  height: 70vh;
  width: 100%;
`;

const LogoBox = styled.div`
  z-index: 1;
  align-self: flex-start;
  width: 100%;
  margin-top: 0.5em;
  margin-left: 0.1em;
  margin-right: 0.1em;
  
  @media (min-width: ${props => props.theme.tabletscreen}) {
    margin-top: 4em;
    max-width: 800px;
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

const Arrow = styled.div`
  height: 30vh;
`;

const FeaturesContainer = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.logoblue};
  clip-path: polygon(0 0, 100% 0, 100% 93%, 0 100%);
`;

const QuotesContainer = styled.div`
  height: 100vh;
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%); // Order of polygon- (x,y) (TL, TR, BR, BL) 
`;

const JobCostsContainer = styled.div`
  height: 80vh;
  background-color: greenyellow;
`;

const MapsContainer = styled.div`
  height: 90vh;
  border: 40px double aqua;
`;

const EmployeeContainer = styled.div`
  height: 90vh;
  background-color: darkorange;
`;

const ClientContainer = styled.div`
  //height: 200vh;
  //border: 8px solid gold;
`;


class FrontPage extends Component {
  render() {
    return (
      <div>
        <TopDiv>
          <NavBar/>
          <LogoContainer>
            <LogoBox>
              <Logo/>
            </LogoBox>
          </LogoContainer>
          <BackgroundContainer>
            <BackgroundBox>
              <OfficeBackground/>
            </BackgroundBox>
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
        </TopDiv>
        <Arrow>
          <Introduction/>
        </Arrow>
        <FeaturesContainer>
          <Features/>
        </FeaturesContainer>
        <QuotesContainer>
          <Quotes/>
        </QuotesContainer>
        <JobCostsContainer>
        </JobCostsContainer>
        <MapsContainer>
        </MapsContainer>
        <EmployeeContainer>
        </EmployeeContainer>
        <ClientContainer>
          <AnimationTest/>
        </ClientContainer>
      </div>
    );
  }
}

export default FrontPage;
