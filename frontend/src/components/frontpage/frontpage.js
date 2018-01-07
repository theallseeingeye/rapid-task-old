import React, { Component } from 'react';
import NavBar from "./nav/navbar";
import logo from "./../../../images/RapidTaskLogo.svg"
import styled, { keyframes } from 'styled-components';
import backgroundimg from "./../../../images/stock-photo-a-smiling-carpenter-with-his-staff-in-the-background-340579349.jpg"

const ImageSize = {
  maxwidth: 1279,
  maxheight: 994,
};

const Wrapper = styled.div`
`;

const BackgroundImage = styled.div`
  background-image: url(${backgroundimg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top center;

  display: block;
  position: relative;
  border: 2px solid green;
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
  position: relative;
  animation: ${LightSpeed} 0.4s;
  animation-timing-function: ease-out;
  top: 3em;
`;

const Logo = styled.img`
  width: 80%;
  padding: 2em 2em 0 0.5em;
  // To keep the logo relative to the screen sizes.
  @media (min-width: ${props => props.theme.giantscreen}) {
    max-width: calc((${props => props.theme.desktopscreen}) + 200px);
  };
`;

const Slogan = styled.p`

  position: absolute;
  top: 7em;

  margin-left: 1em;
  font-family: ${props => props.theme.mainfont};
  font-weight: bold;
  color: white;
  font-size: 1em;
  //max-width: 60%;
  //max-height: 60%;
  
  // Background
  border-radius: 25px;
  background-color: ${props => props.theme.logoblue};
  text-align: center;
  
  display: block;
  //position: absolute;
  //
  @media (min-width: ${props => props.theme.desktopscreen}) {
    font-size: 2em;
    
  }
`;

class FrontPage extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <BackgroundImage>
            <NavBar/>
            <LightSpeedIn>
              <Logo src={logo} alt="Rapid Task Logo" />
            </LightSpeedIn>
            <Slogan>
              Streamlining your business process so you can focus on what's important.
              <br />
              <br />
              Rapid Task will speed up your business process from start to end.
            </Slogan>
          </BackgroundImage>
        </Wrapper>
      </div>
    );
  }
}

export default FrontPage;
