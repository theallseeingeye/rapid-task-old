import React, { Component } from 'react';
import styled from 'styled-components';
import theme from "../../../../global-styles/DefaultTheme";
import ProgressBar from './Progressbars';
import RapidTaskLogo from './../../global-svg/logo'

const Svg = styled.svg`
  width: 100%;
  margin: auto;
  display: block;
  min-width: 350px;
`;

const HandPoint = styled.g`
  transform: scale(1.2) translate(-15px, -40px); // To scale up and reposition her hand
`;

const Title = styled.text`
  font-family: ${props => props.theme.Robotofont};
  transform: translate(185px, 240px) scale(1.3);
`;

const Bar1 = styled.g`
  transform: translate(185px, 140px) scale(0.5);
`;

const Bar2 = styled.g`
  transform: translate(185px, 190px) scale(0.5);

`;

const Bar3 = styled.g`
  transform: translate(185px, 240px) scale(0.5);
`;

const Bar4 = styled.g`
  transform: translate(185px, 290px) scale(0.5);
`;

const Bar5 = styled.g`
  transform: translate(185px, 340px) scale(0.5);
`;

const Job1 = styled.text`
  transform: translate(1px, 255px);
  font-family: ${props => props.theme.Robotofont};
`;

const Job2 = styled.text`
  transform: translate(1px, 255px);
  font-family: ${props => props.theme.Robotofont};
`;

const Job3 = styled.text`
  transform: translate(1px, 255px); 
  font-family: ${props => props.theme.Robotofont};
`;

const Job4 = styled.text`
  transform: translate(1px, 255px);
  font-family: ${props => props.theme.Robotofont};
`;

const Job5 = styled.text`
  transform: translate(1px, 255px);
  font-family: ${props => props.theme.Robotofont};
`;

const LogoContainer = styled.g`
  transform: translate(185px, 40px) scale(0.5);
`;



class ClientTablet extends Component {
  constructor(props) {
    super(props);

    this.color = theme.logoblue;
  }
  render() {
    return (
      <Svg id="Lady" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 429.36 580.86">
        <title>LadyLeaningOnTablet</title>
        <g id="Left_Leg" data-name="Left Leg">
          <path d="M231.67,815h-.45a10.2,10.2,0,0,1-9.77-10.62l11.2-287a10.2,10.2,0,1,1,20.39.84l-11.2,287A10.2,10.2,0,0,1,231.67,815Z" transform="translate(-99.64 -244.68)" fill="#ffa898"/>
          <path d="M243.35,505.75h-.6a12,12,0,0,0-12,11.56L220.08,792.43a1.68,1.68,0,0,0,1.69,1.75l20.76,0a1.68,1.68,0,0,0,1.68-1.62l10.68-274.24A12.07,12.07,0,0,0,243.35,505.75Z" transform="translate(-99.64 -244.68)" fill="#504062"/>
          <g>
            <path d="M224.39,818.84h-5v-.11a43.8,43.8,0,0,1,.56-9.1C219.67,815.44,224.39,818.84,224.39,818.84Z" transform="translate(-99.64 -244.68)" fill="#533148"/>
            <path d="M246.89,818.84h-8.49c.72-8.84,7.36-12.14,11.42-12.6a48.77,48.77,0,0,1,5.19,7h-1.89A6.62,6.62,0,0,0,246.89,818.84Z" transform="translate(-99.64 -244.68)" fill="#533148"/>
            <path d="M238.41,818.84H258.2a.74.74,0,0,1,.09.17,4.36,4.36,0,0,1-3.91,6.32H226.19a6.85,6.85,0,0,1-6.82-6.49h19Z" transform="translate(-99.64 -244.68)" fill="#412139"/>
            <path d="M238.41,818.84h-14s-4.73-3.39-4.47-9.21v0c1.2-6.65,4.52-12.62,12.62-12.62,6.65,0,12.51,3.91,17.27,9.25C245.76,806.7,239.13,810,238.41,818.84Z" transform="translate(-99.64 -244.68)" fill="#ffa898"/>
            <path d="M253.12,813.18H255a57.51,57.51,0,0,1,3.19,5.65H246.89A6.62,6.62,0,0,1,253.12,813.18Z" transform="translate(-99.64 -244.68)" fill="#ffa898"/>
          </g>
        </g>
        <g id="Right_Leg" data-name="Right Leg">
          <path d="M123,814A10.2,10.2,0,0,1,115.51,802l58.14-281.25a10.2,10.2,0,1,1,20,4.09L135.5,806.12a10.2,10.2,0,0,1-12,8Z" transform="translate(-99.64 -244.68)" fill="#ffa898"/>
          <path d="M138.94,796a1.69,1.69,0,0,0,.75-1.09l55.77-269.64a12,12,0,0,0-8.81-14.1l-.58-.13a12.06,12.06,0,0,0-14.23,9.4L116.25,789.17a1.68,1.68,0,0,0,1.24,2l20.14,5A1.69,1.69,0,0,0,138.94,796Z" transform="translate(-99.64 -244.68)" fill="#504062"/>
          <g>
            <path d="M134,818.84h5v-.11a43.81,43.81,0,0,0-.56-9.1C138.73,815.44,134,818.84,134,818.84Z" transform="translate(-99.64 -244.68)" fill="#533148"/>
            <path d="M111.5,818.84H120c-.72-8.84-7.36-12.14-11.42-12.6a48.74,48.74,0,0,0-5.19,7h1.89A6.62,6.62,0,0,1,111.5,818.84Z" transform="translate(-99.64 -244.68)" fill="#533148"/>
            <path d="M120,818.84H100.2a.75.75,0,0,0-.09.17,4.36,4.36,0,0,0,3.91,6.32H132.2a6.85,6.85,0,0,0,6.82-6.49H120Z" transform="translate(-99.64 -244.68)" fill="#412139"/>
            <path d="M120,818.84h14s4.73-3.39,4.47-9.21v0C137.26,803,133.95,797,125.85,797c-6.65,0-12.51,3.91-17.27,9.25C112.63,806.7,119.27,810,120,818.84Z" transform="translate(-99.64 -244.68)" fill="#ffa898"/>
            <path d="M105.27,813.18h-1.89a57.51,57.51,0,0,0-3.19,5.65H111.5A6.62,6.62,0,0,0,105.27,813.18Z" transform="translate(-99.64 -244.68)" fill="#ffa898"/>
          </g>
        </g>
        <path d="M253.34,490.7l-85,6.44a2.06,2.06,0,0,0-1.88,1.71A37.81,37.81,0,0,0,166,508c1.89,25,6.9,45.41,49.13,42.21s44.1-24.14,42.21-49.13a37.81,37.81,0,0,0-1.84-9A2.06,2.06,0,0,0,253.34,490.7Z" transform="translate(-99.64 -244.68)" fill="#504062"/>
        <g id="Neck">
          <path d="M202,377.77A11.66,11.66,0,0,1,189.51,367L187,334a11.66,11.66,0,1,1,23.26-1.76l2.5,33A11.66,11.66,0,0,1,202,377.77Z" transform="translate(-99.64 -244.68)" fill="#ffa898"/>
        </g>
        <path id="Neck_Shadow" data-name="Neck Shadow" d="M197.75,321.47A11.66,11.66,0,0,0,187,334l1.23,16.22a35.32,35.32,0,0,0,23.26-1.76l-1.23-16.22A11.66,11.66,0,0,0,197.75,321.47Z" transform="translate(-99.64 -244.68)" fill="#f48989"/>
        <g>
          <ellipse cx="233.02" cy="301.66" rx="11.45" ry="8.39" transform="translate(-196.28 248.32) rotate(-82.45)" fill="#f48989"/>
          <ellipse cx="159.92" cy="307.19" rx="8.39" ry="11.46" transform="translate(-179.07 -187.79) rotate(-16.22)" fill="#f48989"/>
          <path d="M233.74,294.84c-2-26.53-10.45-47.52-41.43-45.17s-36.16,24.37-34.15,50.9,20.56,46.76,41.43,45.18S235.75,321.37,233.74,294.84Z" transform="translate(-99.64 -244.68)" fill="#ffa898"/>
          <path d="M218.47,306h0a3,3,0,0,1-3.24-2.79l-.14-1.9a3,3,0,0,1,2.79-3.25h0a3,3,0,0,1,3.25,2.79l.14,1.9A3,3,0,0,1,218.47,306Z" transform="translate(-99.64 -244.68)" fill="#53344d"/>
          <path d="M224.64,294.88a1.2,1.2,0,0,1-.92-.33c-4.24-4-12-2.14-12.11-2.12a1.2,1.2,0,0,1-.59-2.34c.37-.09,9.17-2.23,14.36,2.71a1.2,1.2,0,0,1-.74,2.07Z" transform="translate(-99.64 -244.68)" fill="#803731"/>
          <path d="M174.94,309.27h0a3,3,0,0,0,2.79-3.25l-.14-1.89a3,3,0,0,0-3.25-2.79h0a3,3,0,0,0-2.79,3.25l.14,1.89A3,3,0,0,0,174.94,309.27Z" transform="translate(-99.64 -244.68)" fill="#53344d"/>
          <path d="M167.17,299.23a1.21,1.21,0,0,1-1-1.94c4.39-5.66,13.41-4.88,13.79-4.84a1.2,1.2,0,0,1-.23,2.4c-.08,0-8.08-.69-11.65,3.92A1.2,1.2,0,0,1,167.17,299.23Z" transform="translate(-99.64 -244.68)" fill="#803731"/>
          <path d="M207.92,318l-20.76,1.57a2.38,2.38,0,0,0-1.68.88,2.2,2.2,0,0,0-.45,1.79,12.51,12.51,0,0,0,13.36,9.79l.31,0a12.51,12.51,0,0,0,11.73-11.69,2.2,2.2,0,0,0-.71-1.71A2.38,2.38,0,0,0,207.92,318Z" transform="translate(-99.64 -244.68)" fill="#c74038"/>
        </g>
        <g>
          <path d="M219.94,256c.07.2.12.4.18.6s.14.58.19.86a22.42,22.42,0,0,0-2.63-2.12s.87.19,2.26.67c-3-9-23.27-16.19-40.5-7.14-18,9.43-34.19,27.07-32.56,54.55,1.25,21.67,22,32.07,30.66,35.5a43.52,43.52,0,0,1-9.3-9.63c-6.23-13.34-5.54-27.94,19.15-39.2,18.33-8.36,28.59-14.92,32-22.59,4.44,2.92,11.36,9.38,13.89,22.44,0,0,0,0,0,0a52,52,0,0,1,.94,9.24c8.74-11,7.52-20.53,3.71-29C234.06,261.58,224.34,257.47,219.94,256Z" transform="translate(-99.64 -244.68)" fill="#9f462c"/>
          <path d="M217.77,338.08a33.48,33.48,0,0,1-6.72,4.47,39,39,0,0,1-2.16,15.83c-3.72,8.35-5.54,27.67,12.95,33.54,0,0-1.79-8.36,4.57-21.39C232.58,357.85,233.88,343.94,217.77,338.08Z" transform="translate(-99.64 -244.68)" fill="#9f462c"/>
        </g>
        <g id="Shirt">
          <path d="M173.17,368.6a62.08,62.08,0,0,0-6.1,18.62,77.06,77.06,0,0,1,8.21-9.82,57,57,0,0,1,9.49-7.78c.88-.59,1.79-1.14,2.7-1.67a2.88,2.88,0,0,1,3.25.24,34.67,34.67,0,0,0,11.06,6.34c-5.72-4.62-10.72-10-14-17.85a2.19,2.19,0,0,0-3.06-1,20.39,20.39,0,0,0-2,1.29,20.9,20.9,0,0,0-2,1.64A36.23,36.23,0,0,0,173.17,368.6Z" transform="translate(-99.64 -244.68)" fill="#f3f0f3"/>
          <path d="M228.4,373.37a55.86,55.86,0,0,0-10.57-6.26c-1-.45-1.92-.86-2.9-1.25a2.88,2.88,0,0,0-3.18.72,35.37,35.37,0,0,1-10,7.93,34.67,34.67,0,0,1-11.06-6.34,2.88,2.88,0,0,0-3.25-.24c-.91.53-1.81,1.09-2.7,1.67a57,57,0,0,0-9.49,7.78,76.66,76.66,0,0,0-7.87,9.36,76.1,76.1,0,0,1,6.58-6.46,63.17,63.17,0,0,1,10.42-7.41c.79-.45,1.59-.89,2.38-1.3a45,45,0,0,0,13.34,6.4,4.83,4.83,0,0,0,.58.13c.12,0,.23.06.34.08a5,5,0,0,0,1,0h0a5,5,0,0,0,1-.18c.11,0,.22-.09.33-.13a4.67,4.67,0,0,0,.56-.22,45.94,45.94,0,0,0,12.21-8.32c.85.29,1.7.6,2.57.94a61.85,61.85,0,0,1,11.43,5.75,75.29,75.29,0,0,1,7.42,5.36A76.47,76.47,0,0,0,228.4,373.37Z" transform="translate(-99.64 -244.68)" fill="#d9ced6"/>
          <path d="M214.93,365.86c1,.39,1.94.8,2.9,1.25a55.86,55.86,0,0,1,10.57,6.26,77,77,0,0,1,9.58,8.47,62.3,62.3,0,0,0-8.82-17.49,36.46,36.46,0,0,0-9-8.78c-.76-.5-1.5-.93-2.24-1.32a20.36,20.36,0,0,0-2.28-1,2.12,2.12,0,0,0-2.78,1.45l0,.06c-2,8.24-6.15,14.31-11.11,19.74a35.37,35.37,0,0,0,10-7.93A2.88,2.88,0,0,1,214.93,365.86Z" transform="translate(-99.64 -244.68)" fill="#f3f0f3"/>
          <path d="M244.26,376.57a9.28,9.28,0,0,0,.11-15.29,17.56,17.56,0,0,0-8.16-3.17l-20.62-2.82-.21,0c-.82-.09-1.7-.15-2.58-.21a40.07,40.07,0,0,1-4.43,10.74,52.59,52.59,0,0,1-6.59,8.71c-5.66-4.57-10.6-9.88-13.82-17.58-.86.2-1.72.39-2.52.6l-.22.05-19.87,5.87a17.75,17.75,0,0,0-7.68,4.39,9.29,9.29,0,0,0-.33,13.11,9.43,9.43,0,0,0,2.75,2,7.64,7.64,0,0,1,4.38,6.6c.14,3.08.4,6.31.68,9.65.14,1.57.28,3.19.4,4.82a53.65,53.65,0,0,0,5.91,20.85c4.19,8,6.2,16.87,6.36,28,.37,25.36-13.33,35.74-11.86,55.19.21,2.74.45,5.41.79,8,41-3.46,44-22.13,44-22.13h0s5.79,18,46.9,15.26c0-2.62-.22-5.32-.42-8.05-1.48-19.48-16.51-27.35-20.06-52.77-1.5-11-.85-20.1,2.09-28.62a54,54,0,0,0,2.7-21.51c-.12-1.63-.25-3.25-.35-4.82-.22-3.35-.44-6.58-.77-9.64A7.64,7.64,0,0,1,244.26,376.57Z" transform="translate(-99.64 -244.68)" fill="#e9e6ec"/>
          <path d="M227.29,419.08l-44,3.34c-8.77.66-16.5-6.5-17.21-16h0c1,13.55,10.68,23.91,21.52,23.09l36.54-2.77c10.84-.82,18.82-12.51,17.79-26.06h0C242.62,410.17,236.06,418.42,227.29,419.08Z" transform="translate(-99.64 -244.68)" fill="#d4cdd6"/>
          <path d="M319.27,395a20.3,20.3,0,0,0,11.94-3.84,18.45,18.45,0,0,0,7.64-14.78v-73a7.27,7.27,0,0,0-14.53,0v73a4.73,4.73,0,0,1-2,3.79A5.22,5.22,0,0,1,318,381l-74-18.9a7.3,7.3,0,0,0-8.9,4.9,6.9,6.9,0,0,0,5.14,8.48l74,18.9A20.23,20.23,0,0,0,319.27,395Z" transform="translate(-99.64 -244.68)" fill="#ffa898"/>
          <path d="M332.31,392.55a22.35,22.35,0,0,1-18.53,3.51l-74-18.9a8.63,8.63,0,0,1-6.42-10.6,9,9,0,0,1,8.76-6.42,9.52,9.52,0,0,1,2.36.3l74,18.9a3.32,3.32,0,0,0,2.77-.53,3,3,0,0,0,1.25-2.41V316.24a1,1,0,0,1,1-.94h16.2a1,1,0,0,1,1,.94V376.4A20.16,20.16,0,0,1,332.31,392.55Z" transform="translate(-99.64 -244.68)" fill="#e9e6ec"/>
        </g>
        <path d="M120.43,448.66A19.91,19.91,0,0,0,136,472.21l76.58,15.6a7.41,7.41,0,0,0,3-14.53l-76.58-15.6a5.11,5.11,0,0,1-3.55-7.29l34.89-69.93A7.41,7.41,0,1,0,157,373.85l-34.89,69.93A19.72,19.72,0,0,0,120.43,448.66Z" transform="translate(-99.64 -244.68)" fill="#ffa898"/>
        <path d="M120.36,462.23a22,22,0,0,1-1.74-13.94,21.56,21.56,0,0,1,1.83-5.33L155.34,373a9.27,9.27,0,1,1,16.58,8.27L137,451.23a3.22,3.22,0,0,0-.27.79,3.26,3.26,0,0,0,2.54,3.85l63.09,12.85a1,1,0,0,1,.78,1.19l-3.3,16.19a1,1,0,0,1-1.19.78L135.59,474A21.92,21.92,0,0,1,120.36,462.23Z" transform="translate(-99.64 -244.68)" fill="#e9e6ec"/>
        <g id="Tablet">
          <path id="Body" d="M513.8,397.84H274c-8.38,0-15.18,7.83-15.18,17.48V808c0,9.66,6.8,17.49,15.18,17.49H513.8c8.4,0,15.2-7.83,15.2-17.49V415.32C529,405.67,522.2,397.84,513.8,397.84Z" transform="translate(-99.64 -244.68)"/>
          <path id="Screen" d="M510,413.38H277.84c-3,0-5.51,2.83-5.51,6.34V772.54c0,3.51,2.48,6.34,5.51,6.34H510c3,0,5.5-2.84,5.5-6.34V419.72C515.48,416.22,513,413.38,510,413.38Z" transform="translate(-99.64 -244.68)" fill="#ffffff"/>
          <path id="Button" d="M393.91,787.64c-7,0-12.66,6.52-12.66,14.57s5.67,14.59,12.66,14.59,12.66-6.53,12.66-14.59S400.91,787.64,393.91,787.64Z" transform="translate(-99.64 -244.68)" fill="#666"/>

          {/*Progress Bars - needs to be placed here to be under glare*/}
          <LogoContainer>
            <RapidTaskLogo/>
          </LogoContainer>
          <Title>Client's Jobs</Title>
          <Bar1>
            <Job1> Center 49: Planting Trees </Job1>
            <ProgressBar key="1"/>
          </Bar1>
          <Bar2>
            <Job2> Plaza 102: Sweeping Parking Lot </Job2>
            <ProgressBar key="2"/>
          </Bar2>
          <Bar3>
            <Job3> Plaza 102: Painting Exterior Building </Job3>
            <ProgressBar key="3"/>
          </Bar3>
          <Bar4>
            <Job4> 103 Street Unit: Curb Repairs </Job4>
            <ProgressBar key="4"/>
          </Bar4>
          <Bar5>
            <Job5> South Arena: New Sod </Job5>
            <ProgressBar key="5"/>
          </Bar5>

          <path id="Bottom_Glare" data-name="Bottom Glare" d="M515.48,491.59l-243.15,280v1c0,3.51,2.48,6.34,5.51,6.34H397.28l118.2-136.1Z" transform="translate(-99.64 -244.68)" fill="#a7b2c7" opacity="0.2"/>
          <polygon id="Top_Glare" data-name="Top Glare" points="172.69 436.62 405.39 168.71 285.88 168.71 172.69 299.03 172.69 436.62" fill="#a7b2c7" opacity="0.2"/>
        </g>
        <path id="Ok_Hand" data-name="Ok Hand" d="M351.73,277.53a1.93,1.93,0,0,0-2.63.74L343,289.11a.35.35,0,0,1-.26.18.38.38,0,0,1-.32-.14.59.59,0,0,1-.12-.61l5.72-15.61a2.17,2.17,0,0,0-4.07-1.49l-5.51,15a.34.34,0,0,1-.42.21.3.3,0,0,1-.21-.34l2.66-16.86a2.32,2.32,0,1,0-4.58-.72l-2.63,16.7a.3.3,0,0,1-.3.25.26.26,0,0,1-.25-.21c-.53-3.07-2.32-6.36-6.78-7.07-6.21-1-9.61,3.76-10.53,6.4a2.32,2.32,0,0,0,4.37,1.56c.15-.41,1.59-4,5.44-3.37a3.28,3.28,0,0,1,2.7,2.32,4.2,4.2,0,0,1-.27,3.4,27.08,27.08,0,0,0-2,7.05,2.45,2.45,0,0,1-3.46,1.71c-1.91-.92-3.43-3.32-3-6.67a2.55,2.55,0,0,0-5-.75c-.65,4.32,1.35,7.76,3.93,11a63.26,63.26,0,0,0,5.3,5.85c3.52,3.46,8.64,6.13,13.55,4,3.5-1.49,4.86-5.54,5.63-9,.11-.5.23-1,.34-1.47a42.57,42.57,0,0,1,4.26-10.9l5.29-9.48A1.93,1.93,0,0,0,351.73,277.53Z" transform="translate(-99.64 -244.68)" fill="#ffa898"/>
        <HandPoint>
         <path d="M229.52,480a1.82,1.82,0,0,1,1.81-2h11.42a2,2,0,1,0,0-4h-8.32a44.65,44.65,0,0,1-9.64-1.06,15.22,15.22,0,0,0-1.69-.26,1.81,1.81,0,0,1-1.2-3,28.81,28.81,0,0,0,3.5-5.22,2.19,2.19,0,0,0-3.88-2,26.21,26.21,0,0,1-4.52,6.11c-1.33,1.2-2.67,2.25-3.84,3.24s-2.6,2.14-3.91,3.14a8.06,8.06,0,0,0-3.33,5.56c-.49,4.94,4.35,9.31,10.81,9.76C220.48,490.64,230.49,493.2,229.52,480Z" transform="translate(-99.64 -244.68)" fill="#ffa898"/>
        </HandPoint>
      </Svg>
    );
  }
}

export default ClientTablet;