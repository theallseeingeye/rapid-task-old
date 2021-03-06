import React, { Component } from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  width: 100%;
  bottom: -1px; // Required to hide this phantom line that is showing up on some devices.
  position: absolute;
  height: 100px;
	@media (min-width: ${props => props.theme.giantscreen}) {
		height: 400px;
  }	
  @media (min-width: ${props => props.theme.tabletscreen}) {
		height: 300px;
  }
  
`;

const UpperLarge = styled.path`
  transform: translate(0px, 33px);
`;

const UpperMedium = styled.path`
  transform: translate(-200px, 30px);
  visibility: hidden;
`;

const UpperSmall = styled.path`
  transform: translate(140px, 33px);
`;

const LowerLarge = styled.path`
  transform: translate(-15px, 33px);
`;

const LowerLarge2 = styled.path`
  transform: translate(360px, 33px);
`;

const LowerMedium = styled.path`
  transform: translate(-15px, 33px);
`;

const LowerSmall = styled.path`
  transform: translate(-15px, 33px);
`;

class CloudsSvg extends Component {
  render() {
    return (
      <Svg data-name="clouds" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 120" preserveAspectRatio="none">
        <title>Rapid Task Clouds</title>
          <LowerSmall d="M342.46,89.81c.51-7.85,5.9-14.35,13-16,8.92-2.07,15.66,4.65,16,5a12.22,12.22,0,0,1,22-2c6.86-5.48,16.12-6.22,23-2,7.88,4.84,8.9,13.91,9,15Z" fill="#fff"/>
          <LowerMedium d="M217.46,89.81c-.1-1-.8-9.75,6-16a19.29,19.29,0,0,1,19-4,19,19,0,0,1,32-15,27.73,27.73,0,0,1,49,23,12.14,12.14,0,0,1,14-4c5.64,2.38,8.65,9.54,6,16Z" fill="#fff"/>
          <LowerLarge d="M10.46,89.81h215c0-.75-.16-14.72-12-22a25.71,25.71,0,0,0-28,1c-.53-1.61-4.71-13.5-17-18-10.54-3.85-22.79-.71-31,8-.05-.64-1.08-11.44-10-16-8-4.07-18.75-1.41-25,7a26.77,26.77,0,0,0-49,14,26.75,26.75,0,0,0-30-3A26.79,26.79,0,0,0,10.46,89.81Z" fill="#fff"/>
          <LowerLarge2 d="M10.46,89.81h215c0-.75-.16-14.72-12-22a25.71,25.71,0,0,0-28,1c-.53-1.61-4.71-13.5-17-18-10.54-3.85-22.79-.71-31,8-.05-.64-1.08-11.44-10-16-8-4.07-18.75-1.41-25,7a26.77,26.77,0,0,0-49,14,26.75,26.75,0,0,0-30-3A26.79,26.79,0,0,0,10.46,89.81Z" fill="#fff"/>
          <UpperSmall d="M11.46,50.81a8.58,8.58,0,0,1-11-5,8.6,8.6,0,0,1,6-11,17.05,17.05,0,0,1,11-20,17,17,0,0,1,20,8,9,9,0,0,1,7-2,8.94,8.94,0,0,1,7,7,11.56,11.56,0,0,1,9-4,11.39,11.39,0,0,1,8,4,8.7,8.7,0,0,1,9-3c4.54,1.23,5.93,5.75,6,6,9.94,2.49,15.26,10.73,14,16-1.36,5.69-11.15,11.07-22,7a9.57,9.57,0,0,1-9,6c-5.23-.14-7.89-4.8-8-5a16.87,16.87,0,0,1-12,7c-8.33.7-13.55-5.45-14-6a11.16,11.16,0,0,1-13,6A11.15,11.15,0,0,1,11.46,50.81Z" fill="#fff"/>
          <UpperMedium d="M199.46,19.81a10.85,10.85,0,0,1,21-4c3-5.15,8.87-7.56,14-6a12,12,0,0,1,8,9c15.1,3.74,24.18,15.45,23,24-1.36,9.85-17,20.38-36,15a12.79,12.79,0,0,1-13,5c-6.43-1.45-8.83-7.54-9-8-6.84,6.79-16.64,9.15-25,6-8.86-3.34-12.37-11.46-13-13-7.26-.14-12.63-4.73-13-9-.43-5,5.79-11.66,15-11a15.37,15.37,0,0,1,28-8Z" fill="#fff"/>
          <UpperLarge d="M305.46,24.81c.14-1.06,1.53-10.17,10-15,9.66-5.51,19.47-.3,20,0,10.48-11.08,26.93-12.8,38-5,8.78,6.19,13.1,17.61,11,29,7,1.27,10.9,8.38,9,14-1.82,5.4-8.75,8.7-15,6-.07.45-1.72,10.26-11,14-8.82,3.55-16.46-1.62-17-2a14,14,0,0,1-14,5c-7.25-1.65-9.84-8.54-10-9-8.42,5.66-18.73,5.43-25,0-5.25-4.55-5.89-11.2-6-13-5.6-2.29-9.86-6.59-10-11C285.26,31.5,293.45,23.8,305.46,24.81Z" fill="#fff"/>
      </Svg>
    );
  }
}
export default CloudsSvg;

