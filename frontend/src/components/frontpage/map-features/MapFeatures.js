import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import CityJpg from './city.jpg';
import RepeatButton from './Repeat.svg';
import BlueTruck from "./MapLayers/BlueTruck";
import MapPin from "./MapLayers/MapPin";
import Polygon from "./MapLayers/Polygon";


const MainDiv = styled.div`
  margin: auto;
  background: white;
  z-index: -3; // Required to let the parking lot layers in above div to hide behind.
`;

const Svg = styled.svg`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  height: 100vh;
  position: absolute;

`;

const Text1AnimatePhone = keyframes`
  from {
    visibility: visible;
    opacity: 0;
    transform: translate(40px , 455px);
  }
  20%, 80% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate(90px, 420px)
  }
`;

const Text1AnimateTablet = keyframes`
  from {
    visibility: visible;  
    opacity: 0;
    transform: translate(0px, 1400px);
  }
  20%, 80% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate(200px, 900px);
  }
`;

const Text1AnimateDesktop = keyframes`
  from {
    visibility: visible;
    opacity: 0;
    transform: translate(0px, 1400px);
  }
  20%, 80% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate(200px, 900px);
  }
`;

const Text1AnimateGiant = keyframes`
  from {
    visibility: visible;
    opacity: 0;
    transform: translate(1500px, 4950px);
  }
  20%, 80% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate(1750px, 5000px);
  }
  
`;


const Text1MNull = keyframes`
  from {
    visibility: hidden;
  to {
    visibility: hidden;
  }
}`;

const Text1M = styled.p`
  position: absolute;
  animation-timing-function: ease-in-out;
  margin: auto;
  visibility: hidden;
  animation: ${Text1AnimatePhone} 6s;
  margin-top: 4em;
  max-width: 768px;
  animation-delay: 11s;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    animation: ${Text1MNull} 6s;
    margin-top: 4em;
    }
`;



const Text1 = styled.text`
  position: absolute;
  animation-tim+ing-function: ease-in-out;
  border: solid black;
  margin: auto;
  visibility: hidden;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    animation: ${Text1AnimateTablet} 7s;
    margin-top: 4em;
    max-width: 992px;
    font-size: 10em;
    animation-delay: 11s;
    }
  @media (min-width: ${props => props.theme.desktopscreen}) {
    animation: ${Text1AnimateDesktop} 7s;
    margin-top: 4em;
    max-width: 1170px;
    font-size: 12em;
    animation-delay: 11s;
    }
  @media (min-width: ${props => props.theme.giantscreen}) {
    animation: ${Text1AnimateGiant} 7s;
    margin-top: 4em;
    font-size: 15em;
    animation-delay: 11s;
    }
`;

const Text2AnimatePhone = keyframes`
  from {
    visibility: visible;
    opacity: 0;
    transform: translate(42px, 100px);
  }
  20%, 80% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate(60px, 100px);
  }
`;

const Text2AnimateTablet = keyframes`
  from {
    visibility: visible;
    opacity: 0;
    transform: translate(2200px, 500px);
  }
  20%, 80% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate(2000px, 1000px);
  }
`;

const Text2AnimateDesktop = keyframes`
  from {
    visibility: visible;
    opacity: 0;
    transform: translate(2200px, 500px);
  }
  20%, 80% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate(2000px, 1000px);
  }
`;

const Text2AnimateGiant = keyframes`
  from {
    visibility: visible;
    opacity: 0;
    transform: translate(2500px, 1000px);
  }
  20%, 80% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate(2700px, 1500px);
  }
`;



const Text2MNull = keyframes`
  from {
    visibility: hidden;
  to {
    visibility: hidden;
  }
}`;

const Text2M = styled.p`
  position: absolute;
  animation-timing-function: ease-in-out;
  margin: auto;
  visibility: hidden;
  animation: ${Text2AnimatePhone} 7s;
  margin-top: 4em;
  max-width: 768px;
  animation-delay: 4s;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    animation: ${Text2MNull} 6s;
    margin-top: 4em;
    }
`;

const Text2 = styled.text`
  position: absolute;
  animation-timing-function: ease-in-out;
  border: solid black;
  margin: auto;
  visibility: hidden;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    animation: ${Text2AnimateTablet} 7s;
    margin-top: 4em;
    max-width: 992px;
    font-size: 10em;
    animation-delay: 4s;
    }
  @media (min-width: ${props => props.theme.desktopscreen}) {
    animation: ${Text2AnimateDesktop} 7s;
    margin-top: 4em;
    max-width: 1170px;
    font-size: 12em;
    animation-delay: 4s;
    }
  @media (min-width: ${props => props.theme.giantscreen}) {
    animation: ${Text2AnimateGiant} 7s;
    margin-top: 4em;
    font-size: 15em;
    animation-delay: 4s;
    }
`;

const Text3AnimatePhone = keyframes`
  from {
    visibility: visible;
    opacity: 0;
    transform: translate(200px, 100px);
  }
  20%,80% {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate(170px, 150px);
  }
`;

const Text3AnimateTablet = keyframes`
  from {
      visibility: visible;
      opacity: 0;
      transform: translate(1450px, 4900px);
    }
    20%,80% {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      transform: translate(1500px, 5150px);
    }
`;

const Text3AnimateDesktop = keyframes`
  from {
      visibility: visible;
      opacity: 0;
      transform: translate(1450px, 4900px);
    }
    20%,80% {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      transform: translate(1500px, 5150px);
    }
`;

const Text3AnimateGiant = keyframes`
  from {
    visibility: visible;
    opacity: 0;
    transform: translate(-2000px, 1500px);
  }
  20%,80% {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate(-1500px, 1200px);
  }
`;

const Text3MNull = keyframes`
  from {
    visibility: hidden;
  to {
    visibility: hidden;
  }
}`;

const Text3M = styled.p`
  position: absolute;
  animation-timing-function: ease-in-out;
  margin: auto;
  visibility: hidden;
  text-align: right;
  animation: ${Text3AnimatePhone} 6s;
  margin-top: 4em;
  max-width: 768px;
  animation-delay: 18s;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    animation: ${Text3MNull} 6s;
    margin-top: 4em;
    
    }
`;

const Text3 = styled.text`
  position: absolute;
  animation-timing-function: ease-in-out;
  margin: auto;
  visibility: hidden;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    animation: ${Text3AnimateTablet} 8s;
    margin-top: 4em;
    max-width: 992px;
    font-size: 10em;
    animation-delay: 16s;
    }
  @media (min-width: ${props => props.theme.desktopscreen}) {
    animation: ${Text3AnimateDesktop} 8s;
    margin-top: 4em;
    max-width: 1170px;
    font-size: 12em;
    animation-delay: 16s;
    }
  @media (min-width: ${props => props.theme.giantscreen}) {
    animation: ${Text3AnimateGiant} 8s;
    margin-top: 4em;
    font-size: 15em;
    animation-delay: 16s;
    }
`;

const Repeat = styled.button`
  background-color: transparent;
  border: transparent;
  display: flex;
  justify-content: flex-end;
  margin: auto;
  transform: translate(0, 78vh);
  @media (min-width: ${props => props.theme.tabletscreen}) {
    transform: translate(0, 87vh);
`;

const Title = styled.title`
  
  // Title Styling
  font-family: ${props => props.theme.Robotofont};
  font-weight: 900;
  font-size: 2em;
  text-align: center;
  color: white;
 

  background-color: ${props => props.theme.logoblue};

  width: 100%;
  position: absolute;
  display: block;
  margin: auto;
`;

const MainContext = styled.h1`
  text-align: center;
  font-family: ${props => props.theme.RobotoCondensedfont};
  font-size: 0.5em;
`;
class CityAnimation extends Component {
  render() {
    return (
      <MainDiv>
        <Title>
          Geospatial Advantage
        </Title>
        <MainContext>
          Gain competitive advantage with use of high resolution satellite imagery.
        </MainContext>
        <Svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 6000 6000">
          <image xlinkHref={CityJpg} width="100%" height="100%"/>
          <BlueTruck/>
          <MapPin/>
          <Polygon/>
          <Text1>
            Efficient routing to save you money.
          </Text1>
          <Text2>
            Use maps to refine quoting processes.
          </Text2>
          <Text3>
            Onboard data tracking for <br/>
            jobs and equipment.
          </Text3>
        </Svg>
        <Text1M>
          Efficient routing to save you money.
        </Text1M>
        <Text2M>
          Use maps to refine quoting processes.
        </Text2M>
        <Text3M>
          Onboard data tracking for <br/>
          jobs and equipment.
        </Text3M>
        <Repeat>
          <img src={RepeatButton} alt="button" />
        </Repeat>
      </MainDiv>
    );
  }
}

export default CityAnimation;
