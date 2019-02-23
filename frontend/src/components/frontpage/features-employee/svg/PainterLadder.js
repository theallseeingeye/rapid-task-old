import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import theme from '../../../../global-styles/DefaultTheme.js';

const Div = styled.div`
  margin: auto;
  height: 100vh;
  overflow: hidden;
  font-family: ${props => props.theme.Robotofont};
  width: 100%;
`;

const Svg = styled.svg`
  height: 100vh;
  position: absolute; // Won't conflict position of other divs it needs to overlay on.
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;

const PainterLady = styled.g`
  transform: translate(0px, 10px); // To move painter down for brush- Disabled aspect ratio and increased Y viewbox.
`;

const ArmRotate = keyframes`
  from {
    transform: translate(75px, 41px) rotateZ(-130deg); // position's the arm over the shoulder and rotates
  }
  to {
    transform: translate(75px, 41px) rotateZ(-100deg);
  }
`;

const PainterArm = styled.g`
  animation: ${ArmRotate} 2.5s infinite; // Animates the movement of the arm
  animation-timing-function: cubic-bezier(.68,0,.17,1); // Check out http://cubic-bezier.com for more realistic animation
  animation-direction: alternate; // Makes the arm move back and forth
  transform-origin: 2px 2px; // re-position the pivot point on arm
`;

const PaintedWall = styled.svg`
  // Protected aspect ratio is off from the header. preserveAspectRatio="none"
  height: 92%;
  overflow: hidden;
  
  // To center
  display: block;

`;

const PaintStroke = styled.g`
  transform: translate(-20px, -10px);
  fill: ${props => props.theme.logoblue};
`;

const Text4 = styled.text`
  font-size: 0.4em;
  transform: translate(90px, 100px);
  word-wrap: normal;
`;

const Title = styled.text`
  font-size: 0.5em;
  transform: translate(5px, 15px);
  font-weight: 900;
  fill: white;
`;

const WhiteDiv = styled.div` // This div is placed to hide the delayed animations that shows up on older devices.
  background-color: white;
  height: 50vh;
  width: 100%;
  bottom: 0;
`;

class PainterLadder extends Component {
      constructor(props) {
    super(props);

    this.color = 'rgba(63,160,245,1)'; //Applies to the paint color the painter is using
    this.colorBackground = theme.bluebackground;
  }

  render() {
    return (
      <Div>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145 270">
          <title>PaintingLady</title>
          <PainterLady data-name="PainterLadder">
            <Title x="0" y="0" dy="0">
              <tspan x="0" dy="1.5em">BE</tspan>
              <tspan x="0" dy="1.5em">THE</tspan>
              <tspan x="0" dy="1.5em">MOST</tspan>
              <tspan x="0" dy="1.5em">EFFICIENT</tspan>
              <tspan x="0" dy="1.5em">EMPLOYER</tspan>
            </Title>
            <Text4 x="0" y="0" dy="0" text-align="justified" line-height="125%" wrap-margin="25">
              <tspan x="-13" dy="4em">Boost Employee Morale</tspan>
              <tspan x="-22" dy="4em">Easy Employee Scheduling</tspan>
              <tspan x="-31" dy="4em">Establish Trust Of Employees</tspan>
              <tspan x="-40" dy="4em">Measure Employee Performance</tspan>
            </Text4>
            <g id="Left_Arm">
              <path d="M542.63,398.9l12.42-9.22a1.75,1.75,0,1,1,2.09,2.81l-12.42,9.22Z" transform="translate(-480.87 -340.25)" fill="#e28f84"/>
              <path d="M540.81,398.62l-1.37,1a.59.59,0,0,0-.12.83l2.59,3.48a4.2,4.2,0,0,1-5.17-4.69L539.29,382a2.19,2.19,0,1,1,4.33.64l-2.31,15.61Z" transform="translate(-480.87 -340.25)" fill="#71536a"/>
              <path d="M542.28,404.45l-3-4a.59.59,0,0,1,.12-.83l1.94-1.44a.46.46,0,0,1,.17-.08.58.58,0,0,1,.65.21l3,4a.59.59,0,0,1-.12.83l-1.94,1.44A.59.59,0,0,1,542.28,404.45Z" transform="translate(-480.87 -340.25)" fill="#60415a"/>
            </g>
            <PaintStroke data-name="Paint_Stroke">
              <path fill={this.color} d="M575.66,359.65c0-.4-.28-.79.05-1,1-.46,1.95.84,2.88.44l.06-.65a18.78,18.78,0,0,1,2.19,1c1.29,0,2.43,0,3.44,0,0-.24.08-.45.2-.51.48-.07.94.35,1.41.61h.25a2.08,2.08,0,0,0,.29-.43,1.13,1.13,0,0,1,.39.38l.91-.1a3.14,3.14,0,0,1,1.79.87c.76.58,1.74,1.51,2.69,2.33q2.88,2.51,6.06,4.92a24.59,24.59,0,0,1,3.59,2,16.64,16.64,0,0,1,2,2.21,16.76,16.76,0,0,0,2.52,2.67c.52-1.1,2-1.06,3.21-1.54a2.6,2.6,0,0,0,2-2.4c.84.23,2.2.24,2.24-.41a5.91,5.91,0,0,1,3.86-5.56c1.18-.33,3,.42,3.45,0,.63-.65-1.6-1.31-1-2-1.85-.07-3.68-.07-5.51,0-1.31,0-.77,0-.87,0a0,0,0,0,1,0,0,.14.14,0,0,1,0,.1h0l-.15-.15-.6-.6-1.18-1.22a57,57,0,0,1-4.44-5.26A13.74,13.74,0,0,1,605,353c-.51-.6-1-1.25-1.81-2.3a30.15,30.15,0,0,0-3.43-3.87,22.71,22.71,0,0,0-7.89-4.61,32.46,32.46,0,0,0-7.39-1.68,78.65,78.65,0,0,0-9.7-.28l-.53.07a31.21,31.21,0,0,0-4.81.56,17.23,17.23,0,0,0-4.12,1.3c-1,.66-2.1,1.44-3.15,2.2.56.32,1.09.64,1.55,1-1.15.08-2.29.15-2.68.62-2.32,1.25-.82,2.24.29,3.7.75.61,0,1.76,1.09,2.34l-1.91.13c0,.66,2.3-.59,1.89.53-.76-.17-1.53.32-2.3.37.36.85,2.67,0,2.65.92-.39.25-2.27-.94-2.29.15,0,.22.76.17,1.14.14-2.3.59-3.48,1.77-1.21,2.71a12.29,12.29,0,0,0-2.61-.06v0c.4,0,1.1.14,1.46.12l-1.34.09c.09.14.18.28.28.42a3.15,3.15,0,0,0,1,.14l-.89.06a8,8,0,0,0,.87.93c1.13.58,2.25,1.49,2.83,1.45,2.33,0,4.66,0,7-.13S573.63,359.78,575.66,359.65Z" transform="translate(-480.87 -340.25)"/>
            </PaintStroke>
            <g data-name="ladder">
              <g>
                <path d="M566,368.76,481,594a1.49,1.49,0,0,0,.89,1.93l1.75.63a1.54,1.54,0,0,0,2-.9l85-225.26a1.49,1.49,0,0,0-.89-1.93l-1.75-.63A1.54,1.54,0,0,0,566,368.76Z" transform="translate(-480.87 -340.25)" fill="#c9c2cb"/>
                <path d="M481.58,592.39,481,594a1.49,1.49,0,0,0,.89,1.93l1.75.63a1.54,1.54,0,0,0,2-.9l.61-1.63Z" transform="translate(-480.87 -340.25)" fill="#3b0e19"/>
                <path d="M565.35,370.36l.61-1.61a1.53,1.53,0,0,1,2-.88l1.75.63a1.48,1.48,0,0,1,.9,1.91L570,372Z" transform="translate(-480.87 -340.25)" fill="#3b0e19"/>
              </g>
              <g>
                <polygon points="25.43 239.98 26.48 237.19 9.15 237.84 8.1 240.63 25.43 239.98" fill="#8f7e8f"/>
                <polygon points="34.78 215.14 35.83 212.35 18.5 213 17.45 215.79 34.78 215.14" fill="#8f7e8f"/>
                <polygon points="44.13 190.31 45.18 187.52 27.86 188.17 26.8 190.96 44.13 190.31" fill="#8f7e8f"/>
                <polygon points="53.48 165.47 54.53 162.69 37.21 163.34 36.16 166.12 53.48 165.47" fill="#8f7e8f"/>
                <polygon points="62.84 140.64 63.89 137.85 46.56 138.5 45.51 141.29 62.84 140.64" fill="#8f7e8f"/>
                <polygon points="72.19 115.81 73.24 113.02 55.91 113.67 54.86 116.45 72.19 115.81" fill="#8f7e8f"/>
                <polygon points="81.54 90.97 82.59 88.19 65.26 88.83 64.21 91.62 81.54 90.97" fill="#8f7e8f"/>
                <polygon points="90.89 66.14 91.94 63.35 74.61 64 73.56 66.79 90.89 66.14" fill="#8f7e8f"/>
                <polygon points="82.91 41.95 100.24 41.3 101.29 38.52 83.96 39.17 82.91 41.95" fill="#8f7e8f"/>
              </g>
              <g>
                <path d="M545.09,476a14.14,14.14,0,0,1,.91,1.58l.07.15a1.32,1.32,0,0,1-.13,1.13,1.31,1.31,0,0,1-1.12.63h-6a1.83,1.83,0,0,1-1.84-1.76h8.53A3.45,3.45,0,0,0,545.09,476Z" transform="translate(-480.87 -340.25)" fill="#60415a"/>
                <path d="M538.1,473.47a2.79,2.79,0,0,1,2.08-.82c2.17,0,3.83,1.73,4.87,3.26l0,.07a3.45,3.45,0,0,1,.42,1.73H537v0C536.93,476.34,537.09,474.52,538.1,473.47Z" transform="translate(-480.87 -340.25)" fill="#81657a"/>
              </g>
              <g>
                <rect x="422.57" y="479.26" width="245.31" height="4.91" rx="1.52" ry="1.52" transform="translate(-578.93 481.31) rotate(-69.31)" fill="#c9c2cb"/>
                <path d="M500.74,592.53l-.62,1.64a1.52,1.52,0,0,0,.88,2l1.75.66a1.52,1.52,0,0,0,2-.88l.62-1.64Z" transform="translate(-480.87 -340.25)" fill="#3b0e19"/>
                <path d="M585.11,369.17l.62-1.64a1.52,1.52,0,0,1,2-.88l1.75.66a1.52,1.52,0,0,1,.88,2l-.62,1.64Z" transform="translate(-480.87 -340.25)" fill="#3b0e19"/>
              </g>
            </g>
            <g data-name="Right_Leg">
              <g>
                <path d="M542.39,473.83a2.18,2.18,0,0,1-4.15-1.34l1.81-5.63,4.15,1.34Z" transform="translate(-480.87 -340.25)" fill="#81657a"/>
                <path d="M550.93,410.76a2.63,2.63,0,0,1,.71.12,2.8,2.8,0,0,1,1.89,2.88l-1.39,21.17a104,104,0,0,1-4.81,25.48L544,470.78a.44.44,0,0,1-.55.3L539,469.64a.44.44,0,0,1-.27-.56l3.34-10.37a97.84,97.84,0,0,0,4.52-24L548,413.55A2.93,2.93,0,0,1,550.93,410.76Z" transform="translate(-480.87 -340.25)" fill="#ffa528"/>
              </g>
            </g>
            <g data-name="Left_Leg">
              <path d="M535,476a14.14,14.14,0,0,1,.91,1.58l.07.15a1.32,1.32,0,0,1-.13,1.13,1.31,1.31,0,0,1-1.12.63h-6a1.83,1.83,0,0,1-1.84-1.76h8.53A3.45,3.45,0,0,0,535,476Z" transform="translate(-480.87 -340.25)" fill="#60415a"/>
              <path d="M528,473.47a2.79,2.79,0,0,1,2.08-.82c2.17,0,3.83,1.73,4.87,3.26l0,.07a3.45,3.45,0,0,1,.42,1.73h-8.53v0C526.87,476.34,527,474.52,528,473.47Z" transform="translate(-480.87 -340.25)" fill="#81657a"/>
              <g>
                <path d="M532.3,473.83a2,2,0,1,1-3.87-1.26l1.84-5.63,3.87,1.26Z" transform="translate(-480.87 -340.25)" fill="#81657a"/>
                <path d="M541.81,411a2.3,2.3,0,0,1,.67.11,2.66,2.66,0,0,1,1.71,2.83L542.38,435a111,111,0,0,1-5.12,25.39l-3.38,10.36a.43.43,0,0,1-.52.3l-4.16-1.36a.43.43,0,0,1-.24-.55l3.38-10.36a104.43,104.43,0,0,0,4.81-23.91L539,413.84A3,3,0,0,1,541.81,411Z" transform="translate(-480.87 -340.25)" fill="#ffa528"/>
              </g>
            </g>
            <g data-name="Head">
              <path d="M549,385a2.48,2.48,0,0,0,2.43-2.22l1-9.09a2.48,2.48,0,0,0-4.93-.52l-1,9.09a2.48,2.48,0,0,0,2.2,2.73Z" transform="translate(-480.87 -340.25)" fill="#e28f84"/>
              <g>
                <path d="M540.26,364.29c-.39-4.5,3.34-8.49,8.32-8.92a9.73,9.73,0,0,1,2.22.06,9.28,9.28,0,0,1,5.67,3A8.22,8.22,0,0,1,558,361.2a15.63,15.63,0,0,1,.58,3.87,34.3,34.3,0,0,1,.3,3.69,7.58,7.58,0,0,1-2.85,5.71c-2,1.59-4.86,1.19-7.13.42a13.75,13.75,0,0,1-5.8-3.85,11.83,11.83,0,0,1-2.81-6.52Z" transform="translate(-480.87 -340.25)" fill="#e28f84"/>
                <path d="M556.6,363.93c-.78-.07-1.56,1-1.75,2.31s.28,2.5,1.06,2.57,1.56-1,1.75-2.31S557.38,364,556.6,363.93Z" transform="translate(-480.87 -340.25)" fill="#d57c78"/>
              </g>
              <g>
                <path d="M545.13,367.3a11,11,0,0,1-1.11,0,10.24,10.24,0,0,0,.33,1.19c.22.66.44,1.26.65,1.84.29,0,.57,0,.86,0a11,11,0,0,0,5.62-1.7c1.78-1.18,2.63-3.07,4-4.66a22.69,22.69,0,0,1-6.47,2.64A24.6,24.6,0,0,1,545.13,367.3Z" transform="translate(-480.87 -340.25)" fill="#5f3140"/>
                <path d="M543.73,363.5a1,1,0,0,1,1,.43.91.91,0,0,1-.2,1.25,1.1,1.1,0,0,0-.34.38,16.2,16.2,0,0,0,3.89-.52,4.53,4.53,0,0,0-4.12-1.85c-1.76.15-2.13,1.21-2.08,2.2C542.21,364.58,542.83,363.65,543.73,363.5Z" transform="translate(-480.87 -340.25)" fill="#5f3140"/>
                <path d="M558.26,361.16a4.42,4.42,0,0,1-.66,1,13,13,0,0,1,3.25,1.25c1.83,1,2.78.45,2.88-.54S561.43,361,558.26,361.16Z" transform="translate(-480.87 -340.25)" fill="#ffbb45"/>
                <path d="M558.26,361.16a1.63,1.63,0,0,0,.13-.92c-.3-2-1.48-7.13-6-7.55a10.56,10.56,0,0,0-1.38,0l-.48,0-.55.07h0l-.51.08-.15,0-.08,0c-.59.11-1.24.24-1.91.4-4.14,1.13-7.4,3.55-7.88,6.82-.39,2.63-.36,5.44,1.93,6.61a6.57,6.57,0,0,1,.35-1.17l.1-.23c0-1,.32-2,2.08-2.2a4.53,4.53,0,0,1,4.12,1.85,6.56,6.56,0,0,1,.91,1.61,22.69,22.69,0,0,0,6.47-2.64,9.35,9.35,0,0,0,2.18-1.83,4.42,4.42,0,0,0,.66-1Z" transform="translate(-480.87 -340.25)" fill="#e9e6ec"/>
                <path d="M544.16,365.56a2.84,2.84,0,0,0-.22,1.11,4,4,0,0,0,.08.67,11,11,0,0,0,1.11,0,24.6,24.6,0,0,0,3.82-.65,6.56,6.56,0,0,0-.91-1.61A16.2,16.2,0,0,1,544.16,365.56Z" transform="translate(-480.87 -340.25)" fill="#ffa528"/>
                <path d="M544,367.34a4,4,0,0,1-.08-.67,2.84,2.84,0,0,1,.22-1.11,1.1,1.1,0,0,1,.34-.38.91.91,0,0,0,.2-1.25,1,1,0,0,0-1-.43c-.89.15-1.51,1.09-1.88,1.89l-.1.23a6.57,6.57,0,0,0-.35,1.17,6.65,6.65,0,0,0-.13,1.83,20.49,20.49,0,0,0,1.15,4.61,11.09,11.09,0,0,1,.68,4.67,2.88,2.88,0,0,1-.65,1.63,1.57,1.57,0,0,1-1,.49,2.72,2.72,0,0,0,2.31.4,3.65,3.65,0,0,0,2.32-2.86,8.42,8.42,0,0,0,0-2.84c0-.32-.09-.64-.14-1a.13.13,0,0,1,0,0,17.86,17.86,0,0,0-.94-3.34c-.21-.58-.43-1.18-.65-1.84A10.24,10.24,0,0,1,544,367.34Z" transform="translate(-480.87 -340.25)" fill="#76444e"/>
              </g>
            </g>
            <g data-name="Torso">
              <path d="M556.34,409.91c0-1.74,0-3.23-.11-4.22,0-.53-.62-1-.8-1.27l-14.08-1.66a3.55,3.55,0,0,0-1.89,1.23c-.3.53-.64,1.15-1,1.84l2.72.32a.5.5,0,0,1,.35.22l0,0a.49.49,0,0,1,0,.44,26.87,26.87,0,0,0-1.13,3.13,14.48,14.48,0,0,0-.52,2.7.48.48,0,0,1-.18.34.49.49,0,0,1-.37.11l-2.86-.34a.27.27,0,0,1-.18-.12l0,0a6,6,0,0,0,.92,3.85c1.76,2.69,5.39,3.3,6.47,3.43l.2,0c5.84.69,11.38.32,12.25-7a23.19,23.19,0,0,0,.17-2.85S556.34,410,556.34,409.91Zm-12.49-.62c.25-.9.84-2.6,1.9-2.6l5.6.65a.49.49,0,0,1,.37.25.15.15,0,0,1,0,0,.48.48,0,0,1,0,.39,29.91,29.91,0,0,0-1.21,3.25,10.06,10.06,0,0,0-.44,2.55.48.48,0,0,1-.17.36.49.49,0,0,1-.38.12l-5.28-.62a.6.6,0,0,1-.53-.63,22.21,22.21,0,0,1,.4-3.19.45.45,0,0,1-.21-.17A.48.48,0,0,1,543.84,409.29Z" transform="translate(-480.87 -340.25)" fill="#ffa528"/>
              <path d="M555.42,404.42l-.33-1.43a8.58,8.58,0,0,1-.22-1.85q0-.24,0-.48l-11.49-1.36a6.2,6.2,0,0,1-.23.66l-.1.23a10.27,10.27,0,0,1-1.72,2.56Z" transform="translate(-480.87 -340.25)" fill="#e08623"/>
              <path d="M550.07,410.05a.71.71,0,0,1-.75.44l-5.07-.6-.13,0a22.21,22.21,0,0,0-.4,3.19.6.6,0,0,0,.53.63l5.28.62a.49.49,0,0,0,.38-.12.48.48,0,0,0,.17-.36,10.06,10.06,0,0,1,.44-2.55,29.91,29.91,0,0,1,1.21-3.25.48.48,0,0,0,0-.39A5.36,5.36,0,0,0,550.07,410.05Z" transform="translate(-480.87 -340.25)" fill="#e08623"/>
              <path d="M544.13,409.86l.13,0,5.07.6a.71.71,0,0,0,.75-.44,5.36,5.36,0,0,1,1.66-2.42.15.15,0,0,0,0,0,.49.49,0,0,0-.37-.25l-5.6-.65c-1.06,0-1.66,1.7-1.9,2.6a.48.48,0,0,0,.07.4A.45.45,0,0,0,544.13,409.86Zm2.56-.83a.47.47,0,1,1,.34.6A.49.49,0,0,1,546.69,409Z" transform="translate(-480.87 -340.25)" fill="#ffbb45"/>
              <path d="M537.25,409.07l2.53.3c.19,0,.37-.17.46-.48a6.56,6.56,0,0,1,1.31-2.53.5.5,0,0,0-.35-.22l-2.84-.34c-.66-.08-1.53,1.69-1.73,2.63a.73.73,0,0,0,0,.39.29.29,0,0,0,.07.12.2.2,0,0,0,.12.07Zm1.44-.86c-.1.27-.33.43-.5.36s-.24-.34-.13-.61.33-.43.5-.36S538.8,407.94,538.69,408.21Z" transform="translate(-480.87 -340.25)" fill="#ffbb45"/>
              <path d="M536.53,412.78l2.86.34a.49.49,0,0,0,.37-.11.48.48,0,0,0,.18-.34,14.48,14.48,0,0,1,.52-2.7,26.87,26.87,0,0,1,1.13-3.13.49.49,0,0,0,0-.44l0,0a6.56,6.56,0,0,0-1.31,2.53c-.09.31-.27.5-.46.48l-2.94-.35a.2.2,0,0,1-.12-.07,9.82,9.82,0,0,0-.41,3.6.22.22,0,0,0,0,.08l0,0A.27.27,0,0,0,536.53,412.78Z" transform="translate(-480.87 -340.25)" fill="#e08623"/>
              <path d="M543.52,393.39l-.58-3a.39.39,0,0,1,.21-.43l-.09-.33-.08,0a.64.64,0,0,1-.79-.46l-.26-1a.64.64,0,0,1,.46-.79l.09,0-1.21-4.7c-.37-1.46-.43-3.24.28-3.8l.06,0a4.59,4.59,0,0,0-1.3,1,2,2,0,0,0,.19,2.78,1.85,1.85,0,0,1,.62,1.56,15.59,15.59,0,0,0,.38,4.65c.18.86.95,3.61,1.76,6.09A2.35,2.35,0,0,0,543.52,393.39Z" transform="translate(-480.87 -340.25)" fill="#71536a"/>
              <path d="M554.3,383.49l-1.8,4.69.11,0a.64.64,0,0,1,.37.83l-.37,1a.64.64,0,0,1-.83.37l-.11,0-.12.31.23.08a.78.78,0,0,1,.49.59,36.57,36.57,0,0,0,.85,3.93,3.25,3.25,0,0,0,1.85,2l.4.17,1-3.54c.12-.3.23-.61.33-.94a3.22,3.22,0,0,0,2.5-2.9,3.35,3.35,0,0,0-1.21-3.09,1.15,1.15,0,0,1-.14-1.71h0a1.85,1.85,0,0,1,.53-.37l.1,0a2,2,0,0,0,.83-2.66,4.47,4.47,0,0,0-1.46-1.66h0C557.59,380.31,555.68,379.89,554.3,383.49Z" transform="translate(-480.87 -340.25)" fill="#71536a"/>
              <path d="M543.56,382.1l1.2,4.69.08,0a.64.64,0,0,1,.79.46l.26,1a.64.64,0,0,1-.46.79l-.09,0,.1.38a1.63,1.63,0,0,1,.36,0l3,.35a2.29,2.29,0,0,1,.51.12l.13-.35-.06,0a.64.64,0,0,1-.37-.83l.37-1a.64.64,0,0,1,.83-.37l.06,0,1.8-4.69c.4-.92,1.23-3.39,3-3.08l.17,0a35.4,35.4,0,0,0-4.84-1,48.38,48.38,0,0,0-6.31-.18h.37C543.22,378.49,543.17,380.86,543.56,382.1Z" transform="translate(-480.87 -340.25)" fill="#71536a"/>
              <rect x="542.62" y="387.96" width="0.14" height="1.15" transform="translate(-561.54 -190.23) rotate(-14.66)" fill="#71536a"/>
              <rect x="551.59" y="389.22" width="1.15" height="0.17" transform="translate(-489.9 425.22) rotate(-69.02)" fill="#71536a"/>
              <rect x="549.24" y="388.35" width="1.15" height="0.12" transform="translate(-490.59 422.42) rotate(-69.02)" fill="#71536a"/>
              <rect x="545.05" y="387.33" width="0.14" height="1.15" transform="matrix(0.97, -0.25, 0.25, 0.97, -561.3, -189.64)" fill="#71536a"/>
              <rect x="550.4" y="387.67" width="1.15" height="2.37" transform="translate(-490.25 423.81) rotate(-69.02)" fill="#e08623"/>
              <polygon points="68.59 49.27 68.45 49.62 70.68 50.42 70.8 50.11 68.59 49.27" fill="#e08623"/>
              <path d="M552.09,382.65l-1.8,4.69,2.21.85,1.8-4.69c1.38-3.6,3.29-3.18,3.59-3h0l-.08-.05-.25-.15h0l-.26-.12h0l-.09,0-.17-.06h0l-.1,0-.09,0-.09,0-.1,0-.09,0h-.09l-1.42-.36C553.32,379.26,552.49,381.73,552.09,382.65Z" transform="translate(-480.87 -340.25)" fill="#e08623"/>
              <path d="M543.05,389.64l.09.33s1.55-.42,2.3-.55l-.1-.38Z" transform="translate(-480.87 -340.25)" fill="#e08623"/>
              <polygon points="64.05 47.11 61.76 47.71 62.04 48.82 64.33 48.23 64.05 47.11" fill="#e08623"/>
              <path d="M541.55,378.89c-.71.57-.66,2.35-.28,3.8l1.21,4.7,2.29-.6-1.2-4.69c-.39-1.24-.35-3.62.88-3.7H543l-.13,0-.12,0-.09,0-.12,0-.12,0-.13,0-.1,0-.13,0-.12,0-.14.06-.12.06-.12.06Z" transform="translate(-480.87 -340.25)" fill="#e08623"/>
              <path d="M554.88,400.65l1-2.16a.79.79,0,0,0-.42-1.06l-.48-.2a3.25,3.25,0,0,1-1.85-2,36.57,36.57,0,0,1-.85-3.93.78.78,0,0,0-.49-.59l-2.45-.89a2.29,2.29,0,0,0-.51-.12l-3-.35a1.63,1.63,0,0,0-.36,0c-.76.13-2.29.55-2.3.55a.39.39,0,0,0-.21.43l.58,3a2.35,2.35,0,0,1-.41,1.84l-.42.58a.77.77,0,0,0-.13.69l.83,2.79Z" transform="translate(-480.87 -340.25)" fill="#ffa528"/>
              <path d="M545.44,389a.64.64,0,0,0,.46-.79l-.26-1a.64.64,0,0,0-.79-.46l-2.47.64a.64.64,0,0,0-.46.79l.26,1a.64.64,0,0,0,.79.46Zm-2.67.09-.29-1.11,2.57-.67.29,1.11Z" transform="translate(-480.87 -340.25)" fill="#e0dbe0"/>
              <path d="M551.77,390.4a.64.64,0,0,0,.83-.37l.37-1a.64.64,0,0,0-.37-.83l-2.38-.91a.64.64,0,0,0-.83.37l-.37,1a.64.64,0,0,0,.37.83Zm-2.22-1.48.41-1.07,2.48,1-.41,1.07Z" transform="translate(-480.87 -340.25)" fill="#e0dbe0"/>
              <ellipse cx="547.14" cy="409.13" rx="0.52" ry="0.46" transform="translate(-454.52 511.06) rotate(-77.12)" fill="#e08623"/>
              <ellipse cx="538.37" cy="408.09" rx="0.52" ry="0.34" transform="translate(-515.64 425.44) rotate(-69.12)" fill="#e08623"/>
            </g>
            <PainterArm>
              <g data-name="Paintbrush">
                <path d="M585.83,377l.59,8,5.45,0-.65-8.8Z" transform="translate(-556.21 -348.33)" fill="#f1dbd1"/>
                <polygon points="28.34 28.83 28.92 36.69 30.21 36.69 29.62 28.65 28.34 28.83" fill="#ab9eab"/>
                <path d="M582.95,377.28a1,1,0,0,0-.88.68l-.63,1.84a1,1,0,0,1-1,.68l-5.58,0,.2,2.73,5.52-.84a1,1,0,0,1,1.05.53l.89,1.73a1,1,0,0,0,1,.54l1.61-.12-.58-7.86Z" transform="translate(-556.21 -348.33)" fill="#d5a075"/>
                <path d="M573.49,380.44A1.49,1.49,0,0,0,572,382h0a1.49,1.49,0,0,0,1.7,1.35l1.38-.21-.2-2.73Zm.64,1.44a.6.6,0,1,1-.64-.55A.6.6,0,0,1,574.13,381.88Z" transform="translate(-556.21 -348.33)" fill="#c62d38"/>
                <path id="Paint_on_Brush" d="M588.93,382.46a1.06,1.06,0,0,1,0-.9,1,1,0,0,1,.49-.47.54.54,0,0,0,0-.68.54.54,0,0,0-.56-.16,1,1,0,0,1-.77-1.64,3.18,3.18,0,0,1,1.4-1.07,1.19,1.19,0,0,1,.09-.39c.35-.82,1.54-.94,1.66-.94a4.77,4.77,0,0,1,.15,2c.08.36.13.66.15.85.14,1.07,0,1.63.12,3,0,.18,0,.32,0,.4.06.35.11.73.15,1.13a12.79,12.79,0,0,1,0,1.4,1.85,1.85,0,0,1-1.13,0,1.77,1.77,0,0,1-.56-.33.74.74,0,0,1-.31-.39.72.72,0,0,1,.06-.55l.25-.38A1,1,0,0,1,589,383,.76.76,0,0,1,588.93,382.46Z" transform="translate(-556.21 -348.33)" fill={this.color}/>
              </g>
              <path d="M577,386a.59.59,0,0,0,.15-.35.11.11,0,0,1,.05-.08.12.12,0,0,1,.1,0,.78.78,0,0,0,.88-.19.69.69,0,0,0,.18-.51.11.11,0,0,1,0-.09.12.12,0,0,1,.11,0,.89.89,0,0,0,1-.22.78.78,0,0,0,.07-1,.1.1,0,0,1,0-.11.11.11,0,0,1,.1-.06.76.76,0,0,0,.55-.25.7.7,0,0,0-.09-1l-.79-.66a.11.11,0,0,1,0-.16c.54-.62-.14-1.46-1.3-2-1.36-.67-4.26-1.23-5.42.21-1,1.2-.73,3.17.88,4.53.29.24-.25-.19,2.58,2.06A.67.67,0,0,0,577,386Z" transform="translate(-556.21 -348.33)" fill="#e28f84"/>
              <path d="M566.35,372.51l8.78,6.84c.55.43.48,1.38-.16,2.12a1.68,1.68,0,0,1-2.16.57l-8.85-6.9Z" transform="translate(-556.21 -348.33)" fill="#e28f84"/>
              <path d="M562,373.51l-.28.29a12.73,12.73,0,0,1-3.68-7.57l-1.78-15.79a1.85,1.85,0,0,1,.45-1.44,2,2,0,0,1,1.41-.68,2.22,2.22,0,0,1,1.54.48,2,2,0,0,1,.77,1.36L562.17,366a8.7,8.7,0,0,0,2.28,4.93Z" transform="translate(-556.21 -348.33)" fill="#71536a"/>
              <path d="M562.52,375.79l-1.88-1.6a.57.57,0,0,1,0-.83l3.46-3.69a.64.64,0,0,1,.86,0l1.87,1.6a.57.57,0,0,1,.06.83l-3.46,3.68A.64.64,0,0,1,562.52,375.79Z" transform="translate(-556.21 -348.33)" fill="#60415a"/>
            </PainterArm>
            <g data-name="PaintBucket">
              <g>
                <path d="M517.54,592l6.33-2,1.65,4.17-6.93,2.2Z" transform="translate(-480.87 -340.25)" fill="#f1dbd1"/>
                <polygon points="36.42 250.71 42.62 248.75 43 249.73 36.67 251.74 36.42 250.71" fill="#ab9eab"/>
                <path d="M516.89,589.69a.83.83,0,0,1,.25-.88l1.21-1a.83.83,0,0,0,.23-.94l-1.73-4.26,2.15-.68,1,4.48a.83.83,0,0,0,.73.64l1.59.16a.83.83,0,0,1,.71.58l.4,1.27-6.19,2Z" transform="translate(-480.87 -340.25)" fill="#d5a075"/>
                <path d="M516.42,581.49a1.22,1.22,0,0,1,0-1,1.23,1.23,0,0,1,.74-.65h0a1.22,1.22,0,0,1,1.56.89l.26,1.12-2.15.68Zm1.29,0a.49.49,0,1,0-.62-.32A.49.49,0,0,0,517.71,581.54Z" transform="translate(-480.87 -340.25)" fill="#c62d38"/>
              </g>
              <g>
                <path d="M529.34,597.35a.77.77,0,0,1-.77.77H515.43a.77.77,0,0,1-.77-.77V585.83a.28.28,0,0,1,.28-.28h14.12a.28.28,0,0,1,.28.28Z" transform="translate(-480.87 -340.25)" fill="#ab9eab"/>
                <path d="M514.66,596.89v.45a.77.77,0,0,0,.77.77h13.13a.77.77,0,0,0,.77-.77v-.45Z" transform="translate(-480.87 -340.25)" fill="#ded4db"/>
                <path id="Paint_Drips" d="M529.34,585.83a.28.28,0,0,0-.28-.28H514.94a.28.28,0,0,0-.28.28v.61h.44a.41.41,0,0,1,.41.41v6.7a1.27,1.27,0,0,1-.08.45.39.39,0,1,0,.73,0,1.26,1.26,0,0,1-.08-.45v-6.7a.41.41,0,0,1,.41-.41h5.33a.68.68,0,0,1,.68.68v2.09a1.27,1.27,0,0,1-.09.46.43.43,0,0,0,0,.16.44.44,0,1,0,.89,0,.43.43,0,0,0,0-.16,1.26,1.26,0,0,1-.09-.46v-2.09a.68.68,0,0,1,.68-.68.86.86,0,0,1,.86.86v4.1a1.27,1.27,0,0,1-.08.44.73.73,0,1,0,1.36,0,1.26,1.26,0,0,1-.08-.44v-4.2a.76.76,0,0,1,.76-.76.68.68,0,0,1,.68.68v2.13a1.27,1.27,0,0,1-.12.53.6.6,0,1,0,1.09,0,1.26,1.26,0,0,1-.12-.53v-2.13a.68.68,0,0,1,.68-.68h.48Z" transform="translate(-480.87 -340.25)" fill={this.color}/>
                <path d="M529.67,585.93a.33.33,0,0,0-.33.33V587a.33.33,0,0,0,0,.07,7.4,7.4,0,0,1-14.7,0,.33.33,0,0,0,0-.07v-.74a.33.33,0,1,0-.66,0V587a.33.33,0,0,0,.17.29,7.9,7.9,0,0,0,15.66,0A.33.33,0,0,0,530,587v-.74A.33.33,0,0,0,529.67,585.93Z" transform="translate(-480.87 -340.25)" fill="#7b6479"/>
              </g>
            </g>
            <path d="M590.42,352.92" transform="translate(-480.87 -340.25)" fill="#ffa528"/>
          </PainterLady>
        </Svg>
        <PaintedWall data-name="PainterLadder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 200">
          <title>PaintingDiv</title>
          <g data-name="Painted_Wall">
            <path d="M637.12,339.12" transform="translate(0 -322.85)" fill="#39f"/>
            <path d="M637.23,339h0l.9.15,0-.12a.48.48,0,0,0,0-.18l-.09-.07.35.19h0l-.58-.32-.66-.46c-.11-.11-.05,0-.12-.05l-.46,0a15.11,15.11,0,0,1-2.34.15c-5,.14-10.12.47-15.39,1.1l-1.28.25h-2.09c.24-.23.37-.46,0-.73.63,0,1.56-.06,1.48-.25a1.43,1.43,0,0,1-.12-.45c1.12,0,1.68-.18.84-.59a18.39,18.39,0,0,0,1.83.37h0c-.28-.05-.7-.19-1-.23l1,.16,0-.15a3.52,3.52,0,0,0-.66-.18l.66.11a.88.88,0,0,0-.14-.35c-.23-.14-.43-.29-.63-.43a3.43,3.43,0,0,0,1.08,0c.2-.2-1.11-.34-.9-.55-.63,0-1.23.05-1.84.08-3.2-.58-6.76-1.14-10.89-1.51-.12.11,0,.25-.41.27-1.26,0-1.91-.45-3.26-.42l-.22.18c-.89-.14-1.87-.3-2.91-.43-2-.05-4.09,0-6.12,0,.06.07.09.13-.11.16-.77.05-1.83,0-2.91,0-3.65-.08-7.19-.18-10.63-.32.29-.43,1.14-.89,3.19-1.29,1.24-.18,3.46-.1,3.83-.25.57-.24-2-.27-1.47-.5-5.92.33-11.59.8-17.27,1.29-2.2-.2-4.37-.43-6.46-.72-1.21-.07-4-.43-8.53-1-2.25-.25-5.19-.53-8.28-.71s-6.23-.25-9.27-.27c-6.15,0-11.59.12-16.35.2l-11.06.21-.84,0-2.72.07c0-.12-.09-.24-.73-.33,1,0,1.5,0,2.51,0,.12-.2-3.09.09-2.4-.22,1,.07,2.07,0,3.09,0-.32-.28-3.54-.11-3.39-.37.57-.07,2.89.35,3.11,0a7.48,7.48,0,0,0-1.51-.09c3.18-.08,5.13-.34,2.15-.74,1.06,0,2.53.2,3.65.18h0c-.55,0-1.5-.11-2-.13l1.91.06-.29-.14c-.47-.05-.94-.09-1.44-.11l1.28,0a10,10,0,0,0-1-.33,36.75,36.75,0,0,0-3.84-.57c-6.91-.18-13.7,0-20,.4.07.12.49.21,0,.3-1.54.22-3.13-.08-4.65.15l0,.2-4,0-1.29.14a122.38,122.38,0,0,0-13.41-.58,1.77,1.77,0,0,0-.3-.29,17.41,17.41,0,0,0-3.74-1.32,131.74,131.74,0,0,0-25.86-1.35c0,.12.5.22-.13.3-2,.19-3.74-.13-5.6.08l0,.2-4.59,0-3.41.24a1.3,1.3,0,0,1-.27-.38c-.3-.26.89-.44.34-.75l1.43.21c.31-.16-1.93-.14-1.08-.38a9.74,9.74,0,0,0,1.7.17c.14-.24-1.7-.31-1.28-.54.37,0,1,.53,1.46.22.09-.06-.33-.11-.58-.15,1.58.08,2.15-.26,1.55-.64a3.09,3.09,0,0,0,1,.13h0c-.17,0-.41-.07-.55-.08l.52,0-.06-.13a1.27,1.27,0,0,0-.32-.08h.29l-.1-.3c-.25-.22.17-.51,0-.53s-.95-.22-2-.42l-.91-.16-1.35-.2c-.92-.13-1.88-.22-2.85-.31a60.92,60.92,0,0,0-6.24-.14c-2.23.06-3.49.16-4.81.26.1.12.46.21.11.3-1.09.21-2.27-.1-3.29.11l.11.19-2.9,0c-1.63.18-3.22.39-4.78.61.12.06.21.12.07.16-.62.12-1.62.15-2.61.23l-.39.08c-.06.05,0,.12,0,.16-.44,0-.85.06-1.23.08-4.28.87-8.42,1.84-12.77,2.9a21.37,21.37,0,0,1-2.48.82c-1.37.27-3.42.42-4.88.61.84.41-.3.92-.49,1.37a13.81,13.81,0,0,1-1.8.39h-.91l-.52,0a.22.22,0,0,0-.16.15c-.54,0-1,0-1.47,0-5.22.44-10.46,1-15.91,1.6-8.14-.42-15.92-.83-19.5-1.07l-.72,0c-4-.23-9.21-.37-13.17-.18a12.19,12.19,0,0,1,3-.6c1.27-.07,3.17.19,3.63.07.73-.18-1.58-.42-.86-.6-1.59-.05-3.16-.08-4.72-.09-.54-.07-1.39-.09-1.24-.25l-1.82.24c-6.64,0-13,.25-19.46.37-.93.11-3.55.24-6.83.35-.12,0-.18-.07-.08-.13l-2.31.2-4,.1-2.26,0c.67-.17,1.31-.37,1-.49-1.15-.48-2.06-1.11-1.16-1.87.47-.26,2.09-.4,2-.55s-1.85,0-1.93-.26c-4.11,1-7.87,2.14-12.14,3.11h-.38c-2.64-.08-5.77-.14-8.08,0-1.07.11-2.2.25-3.34.38.41.14.79.27,1.11.4a13.94,13.94,0,0,0-2.59,0,7.08,7.08,0,0,0-1.12.13c-1.4-.1-2.77-.22-4.19-.31-.09.12.19.25-.4.28-1.81,0-3-.47-4.8-.44l-.23.18c-1.31-.15-2.68-.33-4.11-.47-1.84-.06-3.69-.09-5.55-.12l-1.71-.38a18.83,18.83,0,0,1-2-.25.9.9,0,0,1-.42-.28l-1.71-.29a27.75,27.75,0,0,0-4.38.26,1.13,1.13,0,0,0-1-.26c-.89.11-1.88.22-2.84.28l-.71,0h-.22l3.54-.53-6.08.92-.65.1h0l0,0,.06,0,.13.09c.36.23.75.45,1.17.67l0,0c-6,.38-12,.95-17.71,1.69l-.67.12-1.67,0c-2,.25-15.32,0-18.67-.21h-.31c-.92,0-1.95-.07-3-.06a6.87,6.87,0,0,0-1.43.17c-.44.12-.69.31-1.25.43l-.22.35a2.11,2.11,0,0,0-.87-.05,2.7,2.7,0,0,0-1.92.67l-3.92-.32a.75.75,0,0,1,.25-1c.31-.11,1.11.08,1.13,0s-.86-.35-.82-.55c-1.24,0-2.38.11-3.51.22a24.66,24.66,0,0,0-5-1.22c-1.3-.2-3.21-.37-4.32-.41-1.26-.06-2.49-.06-3.62,0-2.26,0-4.08.2-5.6.35-.44.12-1.57.32-2.7.53l-1.5.27c-1.8,0-5.5-.19-10.56-.26-5.39-.1-11.86,0-18,.13-2.93.07-5.88.12-8.74.17-.4,0-.83-.09-1.35-.12.11-.08.3-.19-.31-.25a25.46,25.46,0,0,1-4.81-.76c-.17-.12.76-.18.42-.25-.54-.11-1.42,0-2-.11a2.24,2.24,0,0,0-1.42,1.61c-5,.05-9.12.07-11.59.08l-.93,0c-2.69,0-5.65.05-8.52.12a.48.48,0,0,1-.2-.38c.16-.17,1.28-.16,1.13-.29s-1.43-.14-1.68-.34a23.94,23.94,0,0,0-3.79,1.14c-1.44.06-2.81.13-4,.21-2.16.19-4.35.41-6.55.62,1,.1,2,.2,2.82.3H56.58l-.42-.14c-1-.07-2.05-.12-3.11-.14a.27.27,0,0,1-.21.15,11.16,11.16,0,0,1-1.53-.17H51a.74.74,0,0,0-.23.14c-.26,0-.48-.07-.68-.1-3.23.13-6.49.36-9.9.61a21.58,21.58,0,0,1-2.22.32c-1,0-2.1-.16-3-.22-.22.68-2.55.92-2.43,1.62-.57,0-1.45-.09-1.57.1a3.76,3.76,0,0,1-2.68,1.52c-.6.06-1.41-.2-1.65-.09s.62.43.25.61c2.39.19,4.78.25,7.18.32a.52.52,0,0,0,0,.4c-1.69-.13-3.12-.25-4.06-.34l-.55,0c-3.22-.28-7.22-.53-10.19-.49-1.14,0-2.32.12-3.49.19h0l.45-.2.8-.34a3.85,3.85,0,0,1,.46-.19l-.63.18c-.26.07.61-.18.36-.11l-.43.12.62-.17-.36.08-.4.09c-.14,0,0,0,.06,0l-.09,0-.39.08.1,0a37.32,37.32,0,0,1-4,.47c-.57.06-1.15.11-1.45.11s0-.1,0-.14c-2.12.24-3.34.23-5.51.46,0,0,0-.11-.62-.06-1.87.14-1.32.33-2.63.19-.34-.08.37-.27,0-.28-.64,0-1.27.19-1.91.17,0,.49.21.63.65.9s1,.45,1.48.68l-1.53-.16,1.87,1.19H1.4c-.7.07.14.14.12.21,1,0,1.46.19,1,.23L1,341.8A6.74,6.74,0,0,0,0,342V599H640V340.51c-1.65.28-2.09-.09-2.12-.17a1.45,1.45,0,0,1,.11-.91l.13-.3-.88-.14Zm-177.5-7.1,1.33,0-1.2.19A.21.21,0,0,0,459.73,331.89Zm69.13,4.56c.36,0,.83,0,1.26,0l-.12,0h-1.2ZM471.3,330.3c.36,0,.76,0,1.15.07l-2.44.26c.12.06.21.12,0,.17-.9.13-2.24.18-3.6.27l-.56.08c-.11.05-.09.12-.08.16l-1.39.08C465.07,330.89,466.74,330.36,471.3,330.3Zm-9.87-.83h-.08c-.13,0-.21-.08-.35-.11Zm-.94,0h0Zm-.23,0h-.68a5.16,5.16,0,0,0-.91-.41C459.18,329.2,459.72,329.34,460.26,329.49Zm-3.27.1-.58,0c-.33-.08-1-.19-1.35-.25Zm-1.46.06h-.26c-1.05-.2-2.41-.39-2.11-.51A23.34,23.34,0,0,1,455.53,329.65Zm-2.55-.09c.34.07.76.12,1.17.17l-.64,0h-.2C452.81,329.7,452.53,329.63,453,329.56Zm.09.23-.26,0-.22-.09Zm-38.94-2.15s0,0,0,.07l-.12-.09ZM159.34,338.31h.09l-.22,0Zm-144.08.28c.35.11.71.23,1,.33l-1.49-.12Z" transform="translate(0 -322.85)" fill="#39f"/>
            <polygon points="221.37 6.84 221.36 6.84 221.34 6.85 221.27 6.86 221.25 6.86 221.37 6.84 221.37 6.84" fill="#39f"/>
            <path d="M220.85,329.77l.4-.06h0l-.4.06.33-.15a2.41,2.41,0,0,1-.3.14h0l-.11,0Z" transform="translate(0 -322.85)" fill="#39f"/>
            <path d="M220.83,329.77l-.43.07.43-.06Z" transform="translate(0 -322.85)" fill="#39f"/>
            <path d="M220.87,329.78l.5-.09-.12,0-.25,0Z" transform="translate(0 -322.85)" fill="#39f"/>
            <path d="M228.65,330.5l-.43-.07a1.53,1.53,0,0,0,.37.07Z" transform="translate(0 -322.85)" fill="#39f"/>
            <path d="M227.33,329.92A12.44,12.44,0,0,1,226,330l1.7.29A5.37,5.37,0,0,0,227.33,329.92Z" transform="translate(0 -322.85)" fill="#39f"/>
            <path d="M220.68,329.82h0l-.05,0Z" transform="translate(0 -322.85)" fill="#39f"/>
            <path d="M228.22,330.43h0l-.47-.08h0Z" transform="translate(0 -322.85)" fill="#39f"/>
            <path d="M221.6,329.28h0Z" transform="translate(0 -322.85)" fill="#39f"/>
            <path d="M221.57,329.27h0Z" transform="translate(0 -322.85)" fill="#39f"/>
            <path d="M221.57,329.31a.07.07,0,0,0,0-.05h0s0,0,0,.06Z" transform="translate(0 -322.85)" fill="#39f"/>
            <path d="M221.68,329.3h0l-.06,0Z" transform="translate(0 -322.85)" fill="#39f"/>
            <path d="M223.85,329.68,226,330h0Z" transform="translate(0 -322.85)" fill="#39f"/>
            <polygon points="221.37 6.84 221.37 6.84 221.37 6.84 221.37 6.84" fill="#39f"/>
            <path d="M221.71,329.31h0Z" transform="translate(0 -322.85)" fill="#39f"/>
            <path d="M221.72,329.31h0l2.11.36-2.08-.36Z" transform="translate(0 -322.85)" fill="#39f"/>
          </g>
          /*Baseboard*/
            <polygon points="640 193 0 193 0 250 640 250 640 193" fill="#e7e3e9"/>
            <polygon points="640 192 0 192 0 194 640 194 640 192" fill="#f7f9fc"/>
          /*Baseboard*/
          </PaintedWall>
        <WhiteDiv/>
      </Div>
    );
  }
}

export default PainterLadder;