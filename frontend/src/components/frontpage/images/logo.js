import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

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

class RapidTaskLogo extends Component {
  render() {
    return (
      <LightSpeedIn>
        <svg id="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 584.15 40.01">
          <title>RapidTaskLogo</title>
          <g>
            <polygon points="402.73 17.45 401.9 18.7 430.68 18.7 431.51 17.45 402.73 17.45" fill="none"/>
            <polygon points="246.18 29.99 274.41 30 282.22 17.51 253.47 17.51 246.18 29.99" fill="none"/>
            <polygon points="166.34 17.51 165.52 18.76 194.34 18.76 195.13 17.51 166.34 17.51" fill="none"/>
            <polygon points="100.19 17.51 99.35 18.76 128.02 18.76 128.84 17.51 100.19 17.51" fill="none"/>
            <polygon points="61.73 17.51 32.24 17.51 31.42 18.76 60.62 18.76 61.73 17.51" fill="none"/>
            <polygon points="67.69 40.01 85.19 40.01 92.69 28.76 75.19 28.76 67.69 40.01"/>
            <path d="M100.19,17.51h28.66L128,18.76H145.6l1.35-2.07a6,6,0,0,0-5.09-9.18H97.25a15,15,0,0,0-12.72,7l-2.68,4.2h17.5Z"/>
            <polygon points="121.39 28.76 113.94 40.01 131.44 40.01 138.94 28.76 121.39 28.76"/>
            <polygon points="133.94 40.01 151.44 40.01 158.89 28.76 141.39 28.76 133.94 40.01"/>
            <path d="M166.35,17.51h28.78l-.78,1.25H211.9l.79-1.25c2.5-4,.14-10-4.58-10H155.19L148,18.76h17.5Z"/>
            <path d="M295.61,7.51H242.69L221.44,40H274.1a20.62,20.62,0,0,0,17.34-9.37l9.26-13.95A6,6,0,0,0,295.61,7.51ZM274.41,30l-28.24,0,7.29-12.47h28.75Z"/>
            <polygon points="387.9 7.51 324.15 7.51 317.9 17.51 343.74 17.51 329.35 40.01 346.85 40.01 361.24 17.51 381.65 17.51 387.9 7.51"/>
            <path d="M402.73,17.46h28.78l-.83,1.24h17.46l1.34-2.06a6,6,0,0,0-5.09-9.18H399.78a15,15,0,0,0-12.72,7.05L384.4,18.7H401.9Z"/>
            <polygon points="370.19 40.01 387.69 40.01 395.24 28.7 377.73 28.7 370.19 40.01"/>
            <path d="M505.56,18.76H451.65a6.54,6.54,0,0,0,5.66,10h52.76C512.61,24.77,510.36,18.76,505.56,18.76Z" fill="#3fa9f5"/>
            <path d="M508.16,31.53l1.91-2.77h-17.5L491.79,30H445.4l-6.25,10h52.67A20,20,0,0,0,508.16,31.53Z"/>
            <polygon points="505.45 40.01 522.96 40.01 530.28 28.76 512.78 28.76 505.45 40.01"/>
            <polygon points="544.11 7.51 526.61 7.51 519.29 18.76 536.79 18.76 544.11 7.51"/>
            <polygon points="549.9 30.01 556.15 40.01 573.65 40.01 567.4 30.01 549.9 30.01"/>
            <path d="M579.15,0l-12.5,7.51-6,9.64a3,3,0,0,1-2.72,1.61H519.29l-6.51,10h45.83c7.34,0,12.5-1,15.48-5.53L584.15,7.51Z" fill="#3fa9f5"/>
            <path d="M220,28.76a10.52,10.52,0,0,0,9-5l10-16.24L234.12,0l-12.68,7.5L208.37,28.76Z" fill="#3fa9f5"/>
            <polygon points="207.59 30.01 201.34 40.01 218.84 40.01 225.09 30.01 207.59 30.01"/>
            <polygon points="424.01 28.7 416.47 40.01 433.97 40.01 441.49 28.7 424.01 28.7"/>
            <polygon points="448.14 18.7 430.68 18.7 401.9 18.7 384.39 18.7 384.39 18.7 377.73 28.7 377.73 28.7 395.24 28.7 424.01 28.7 441.49 28.7 448.14 18.7" fill="#3fa9f5"/>
            <path d="M469.94,17.51h46.39l6.25-10H469.91c-10.57,0-13.81,4.15-17.46,10l-.79,1.25h17.5Z"/>
            <polygon points="211.9 18.76 194.34 18.76 165.52 18.76 148.02 18.76 141.39 28.76 158.89 28.76 205.58 28.76 211.9 18.76" fill="#3fa9f5"/>
            <polygon points="145.6 18.76 128.02 18.76 99.35 18.76 81.85 18.76 81.85 18.76 75.19 28.76 92.69 28.76 121.39 28.76 138.94 28.76 145.6 18.76" fill="#3fa9f5"/>
            <path d="M60.32,28.76A20,20,0,0,0,76.88,20l2.38-3.27a6,6,0,0,0-5.09-9.18H21.25L0,40H17.5l7.37-11.25h12L44,40H61.5L54.39,28.76Zm-28.9-10,.82-1.25H61.73l-1.11,1.25Z"/>
          </g>
        </svg>
      </LightSpeedIn>
    );
  }
}

export default RapidTaskLogo;