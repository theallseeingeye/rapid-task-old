//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 HOVER EFFECT - Styled-Components that provides random hover variability. Refreshes positions per page load.
*/

// These sets the max ranges of the Hover Effect.
let maxVerticalRange = 10;
let minVerticalRange = -10;
let maxHorizontalRange = 2;
let minHorizontalRange = -2;
let units = 'px';
let maxSpeed = 9;
let minSpeed = 6;

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

const HoverEffect = styled.g`
  animation: ${HoverAnimation} ${speedRange}s infinite;
  animation-timing-function: ease-in-out;
`;

export default HoverEffect;
/////////////////////////////////////////////////////////////////////////////////////////////////////////

