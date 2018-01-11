import React, { Component } from 'react';
import NavBar from "./nav/navbar";
import Logo from "./images/logo"
import styled from 'styled-components';
import Guru from './images/guru-man';
import OfficeBackground from './images/office-background'

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

const SloganBox = styled.p`
  width: 100%;
  z-index: 3;
  align-self: flex-end;
  margin-bottom: 2em;
  
  font-family: ${props => props.theme.mainfont};
  font-weight: bold;
  color: white;
  font-size: 1.2em;
  background-color: ${props => props.theme.logoblue};
  text-align: center;
`;

class FrontPage extends Component {
  render() {
    return (
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
            Streamlining your business process
            <br/>
            so you can focus on what's important.
          </SloganBox>
        </SloganContainer>
      </TopDiv>
    );
  }
}

export default FrontPage;
