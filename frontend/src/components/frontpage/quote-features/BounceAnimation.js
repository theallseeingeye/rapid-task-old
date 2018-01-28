// BOUNCE IN ANIMATION -------------------------------------------------------------------------------------------------
import styled, {keyframes} from "styled-components";

const BounceInDown = keyframes`

  0% {
    opacity: 0;
    transform: translate3d(0, -1000px, 0); // Starting Point
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 300px, 0); // First landing
  }

  75% {
    
    transform: translate3d(0, 200px, 0); // Bounce up
  }

  90% {
    transform: translate3d(0, 300px, 0); // land again
  }

  100% {
    transform: translate3d(0, 300px, 0); // Remain on bottom after bounce
    opacity: 1;
  }
`;

export const BaseAnimation = styled.g`
  animation: ${BounceInDown} 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  
  // In development to allow reverse
  //#reverse {
  //  animation-direction: reverse;
  //}
  //
`;
