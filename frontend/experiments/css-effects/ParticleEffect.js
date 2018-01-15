import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 HOVER EFFECT - Styled-Components that provides random hover variability. Refreshes positions per page load.
*/

// These sets the max ranges of the random particle effects.
let maxVerticalRange = 100;
let minVerticalRange = -20;
let maxHorizontalRange = 20;
let minHorizontalRange = -20;
let units = 'px';
let maxSpeed = 2;
let minSpeed = 0;
let minRadius = 0;
let maxRadius = 0;
let particleCount = 25;

/*
 This finds the random number between a specified range.
 The function starts by finding the range by finding the difference of max and min. Then we need to add 1 include
 the last number to make the count of numbers in between the range. Then use random to provide random number of 0
 to 1. The random decimal number is a percentage applied to the range. Adding the min to the range is the starting
 point of the range.
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const startVertical = getRandomInt(minHorizontalRange, maxHorizontalRange)+String(units);
const endVertical = getRandomInt(minHorizontalRange, maxHorizontalRange)+String(units);
const startHorizontal = getRandomInt(minVerticalRange, maxVerticalRange)+String(units);
const endHorizontal = getRandomInt(minVerticalRange, maxVerticalRange)+String(units);
const speedRange = getRandomInt(minSpeed, maxSpeed);

const HoverAnimation = keyframes`
  from {
    transform: translate(${startVertical}, ${startHorizontal});
  }
  50% { 
    transform: translate(${endVertical}, ${endHorizontal});
  }
  to {
    transform: translate(${startVertical}, ${startHorizontal});
  }
`;

const Particles = styled.circle`
  animation: ${HoverAnimation} ${speedRange}s infinite;
  animation-timing-function: ease-in-out;
`;

/////////////////////////////////////////////////////////////////////////////////////////////////////////



const Svg = styled.svg`
  height: 100%;
  width: 100%;
`;

class ParticleEffect extends Component {
  render() {
    const circleCount = [Array.from(Array(particleCount).keys())]; // Creates an Array based on particleCount
    // const particles = circleCount.map((d) => <Particles id={d} cx='50' cy='20' r='26'/>);

    let particles = circleCount;
    for (let i = 0; i < particleCount; i++) {
      circleCount.push(<Particles key={i} cx='50' cy='20' r='26'/>);
    }

    return (
      <div>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 535 564.69">
          <title>Pattern Generator</title>
          {particles}
        </Svg>
      </div>
    );
  }
}

export default ParticleEffect;
