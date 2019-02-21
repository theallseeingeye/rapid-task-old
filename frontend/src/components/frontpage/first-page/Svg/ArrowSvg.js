import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';

const Div = styled.div`
  background-color: white; //this is to hide the fixed position animations to prevent them from showing up on slower devices
  position: absolute;
  height: 17vh;
  bottom: 7vh;
  width: 100%;
  align-content: center;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    bottom: 4vh;
  }
`;

const Text = styled.p`
  font-family: ${props => props.theme.Robotofont};
  font-size: 1.2em;
  text-align: center;  
  margin-top: 2em;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    margin-bottom: 5vh;
  }

`;

const ArrowSvg = styled.svg`
  height: 6vh;
  margin: auto;
  display: block;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    height: 10vh;
  }
`;

const ArrowBounce = keyframes`
  from {
    transform: translate(0px, 0px);
  }
  50% { 
    transform: translate(0px, 10px);
  }
  to {
    transform: translate(0px, 0px);
  }
`;

const ArrowAnimation = styled.g`
  animation: ${ArrowBounce} 1s infinite;
  animation-timing-function: ease-in-out;
`;

class Arrow extends Component {
  render() {
    return (
      <Div>
        <Text>
          Let us show you how you can perfect your business!
        </Text>
        <ArrowSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 473.03 300">
          <title>Rapid Task Arrow</title>
          <ArrowAnimation>
            <path d="M307.25,799l-201-201a10.27,10.27,0,0,0-14.52,0l-18,18a10.27,10.27,0,0,0,0,14.52L307.25,864,540.76,630.51a10.27,10.27,0,0,0,0-14.52l-18-18a10.27,10.27,0,0,0-14.52,0Z" transform="translate(-70.73 -595)" fill="#3fa9f5"/>
          </ArrowAnimation>
        </ArrowSvg>
      </Div>
    );
  }
}

export default Arrow;
