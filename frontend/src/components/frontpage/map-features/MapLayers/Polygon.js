import React, { Component } from 'react';
import styled, {keyframes} from "styled-components";

const PolygonGroup = styled.g`

`;

const PolygonCircleBottomAnimate = keyframes`
  from {
    transform: scale(7.5) translate(198px, 496px);
    opacity: 0;
  }
  39% {
    transform: scale(7.5) translate(198px, 496px);
    opacity: 0;
  }
  40%, 95% {
    transform: scale(7.5) translate(198px, 496px);
    opacity: 1;
  }
  to {
    transform: scale(7.5) translate(198px, 496px);
    opacity: 0;
  }
`;

const PolygonCircleBottom = styled.g`
  position: absolute;
  animation: ${PolygonCircleBottomAnimate} 12s;
  animation-fill-mode: forwards;
`;

const PolygonCircleLeftAnimate = keyframes`
  from {
    transform: scale(7.5) translate(168px, 478px);
    opacity: 0;
  }
  49% {
    transform: scale(7.5) translate(168px, 478px);
    opacity: 0;
  }
  50%, 95% {
    transform: scale(7.5) translate(168px, 478px);
    opacity: 1;
  }
  to {
    transform: scale(7.5) translate(168px, 478px);
    opacity: 0;
  }
`;

const PolygonCircleLeft = styled.g`
  position: absolute;
  animation: ${PolygonCircleLeftAnimate} 12s;
  animation-fill-mode: forwards;
`;

const PolygonCircleRightAnimate = keyframes`
  from {
    transform: scale(7.5) translate(258px, 461px);
    opacity: 0;
  }
  30% {
    transform: scale(7.5) translate(258px, 461px);
    opacity: 0;
  }
  31%, 95% {
    transform: scale(7.5) translate(258px, 461px);
    opacity: 1;
  }
  to {
    transform: scale(7.5) translate(258px, 461px);
    opacity: 0;
  }
`;

const PolygonCircleRight = styled.g`
  position: absolute;
  animation: ${PolygonCircleRightAnimate} 12s;
  animation-fill-mode: forwards;
`;

const PolygonCircleTopAnimate = keyframes`
  from {
    transform: scale(7.5) translate(226px, 443px);
    opacity: 0;
  }
  59% {
    transform: scale(7.5) translate(226px, 443px);
    opacity: 0;
  }
  60%, 95% {
    transform: scale(7.5) translate(226px, 443px);
    opacity: 1;
  }
  to {
    transform: scale(7.5) translate(226px, 443px);
    opacity: 0;
  }
`;

const PolygonCircleTop = styled.g`
  position: absolute;
  animation: ${PolygonCircleTopAnimate} 12s;
  animation-fill-mode: forwards;
`;

const PolygonLongEdge1Animate = keyframes`
  from {
    transform: scale(5) translate(231px, 607px);
    opacity: 0;
  }
  59% {
    transform: scale(5) translate(231px, 607px);
    opacity: 0;
  }
  60%, 95% {
    transform: scale(5) translate(231px, 607px);
    opacity: 1;
  }
  to {
    transform: scale(5) translate(231px, 607px);
    opacity: 0;
  }
`;

const PolygonLongEdge1 = styled.g`
  position: absolute;
  animation: ${PolygonLongEdge1Animate} 12s;
  animation-fill-mode: forwards;
`;

const PolygonLongEdge2Animate = keyframes`
  from {
    transform: scale(5) translate(278px, 635px);
    opacity: 0;
  }
  39% {
    transform: scale(5) translate(278px, 635px);
    opacity: 0;
  }
  40%, 95% {
    transform: scale(5) translate(278px, 635px);
    opacity: 1;
  }
  to {
    transform: scale(5) translate(278px, 635px);
    opacity: 0;
  }
`;

const PolygonLongEdge2 = styled.g`
  position: absolute;
  animation: ${PolygonLongEdge2Animate} 12s;
  animation-fill-mode: forwards;
`;

const PolygonShortEdge1Animate = keyframes`
  from {
    transform: scale(5) translate(278px, 635px);
    opacity: 0;
  }
  49% {
    transform: scale(5) translate(278px, 635px);
    opacity: 0;
  }
  50%, 95% {
    transform: scale(5) translate(278px, 635px);
    opacity: 1;
  }
  to {
    transform: scale(5) translate(278px, 635px);
    opacity: 0;
  }
`;

const PolygonShortEdge1 = styled.g`
  position: absolute;
  animation: ${PolygonShortEdge1Animate} 12s;
  animation-fill-mode: forwards;
`;

const PolygonShortEdge2Animate = keyframes`
  from {
    transform: scale(5) translate(367px, 582px);
    opacity: 0;
  }
  64% {
    transform: scale(5) translate(367px, 582px);
    opacity: 0;
  }
  65%, 95% {
    transform: scale(5) translate(367px, 582px);
    opacity: 1;
  }
  to {
    transform: scale(5) translate(367px, 582px);
    opacity: 0;
  }
`;

const PolygonShortEdge2 = styled.g`
  position: absolute;
  animation: ${PolygonShortEdge2Animate} 12s;
  animation-fill-mode: forwards;
`;

const PolygonFillAnimate = keyframes`
  from, 65%{
    transform: scale(5) translate(297px, 666px);
    opacity: 0;
    visibility: visible;
  }
 
  95% {
    transform: scale(5) translate(297px, 666px);
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale(5) translate(297px, 666px);
    visibility: visible;
  }
`;

const PolygonFill = styled.g`
  visibility: hidden;
  position: absolute;
  animation: ${PolygonFillAnimate} 12s;
  animation-fill-mode: forwards;
`;

const MouseCursorAnimate = keyframes`
  from {
    transform: scale(10) translate(600px, 150px);
  }
  10% {
    transform: scale(10) translate(400px, 400px);
  }
  20% {
    transform: scale(10) translate(297px, 333px);
  }
  30% {
    transform: scale(10) translate(210px, 341px); //RIGHT POINT
  }
  35% {
    transform: scale(10) translate(205px, 340px);
  }
  40% {
    transform: scale(10) translate(164px, 372px); //BOTTOM POINT
  }
  45% {
    transform: scale(10) translate(157px, 352px);
  }
  50% {
    transform: scale(10) translate(142px, 356px); //LEFT POINT
  }
  55% {
    transform: scale(10) translate(177px, 340px);
  }
  60% {
    transform: scale(10) translate(185px, 328px); //TOP POINT
  }
  65% {
    transform: scale(10) translate(210px, 341px); //RIGHT POINT
    opacity: 1;
  }
  70%, to {
    transform: scale(10) translate(270px, 376px); //RIGHT POINT
    opacity: 0;
  }
`;

const MouseCursor = styled.g`
  position: absolute;
  animation: ${MouseCursorAnimate} 12s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
`;

class Polygon extends Component {
  render() {
    return (
      <PolygonGroup>
        <PolygonCircleBottom>
          <circle cx="32.53" cy="5" r="4" fill="#ff4d4d" stroke="#e00000" strokeMiterlimit="10" strokeWidth="2"/>
        </PolygonCircleBottom>
        <PolygonCircleLeft>
          <circle cx="32.53" cy="5" r="4" fill="#ff4d4d" stroke="#e00000" strokeMiterlimit="10" strokeWidth="2"/>
        </PolygonCircleLeft>
        <PolygonCircleRight>
          <circle cx="32.53" cy="5" r="4" fill="#ff4d4d" stroke="#e00000" strokeMiterlimit="10" strokeWidth="2"/>
        </PolygonCircleRight>
        <PolygonCircleTop>
          <circle cx="32.53" cy="5" r="4" fill="#ff4d4d" stroke="#e00000" strokeMiterlimit="10" strokeWidth="2"/>
        </PolygonCircleTop>
        <PolygonLongEdge1>
          <line x1="158.35" y1="66.27" x2="68.35" y2="118.27" fill="#fff" stroke="#e00000" strokeMiterlimit="10" strokeWidth="2"/>
        </PolygonLongEdge1>
        <PolygonLongEdge2>
          <line x1="158.35" y1="66.27" x2="68.35" y2="118.27" fill="#fff" stroke="#e00000" strokeMiterlimit="10" strokeWidth="2"/>
        </PolygonLongEdge2>
        <PolygonShortEdge1>
          <line x1="22.03" y1="91.5" x2="69.03" y2="118.5" fill="#fff" stroke="#e00000" strokeMiterlimit="10" strokeWidth="2"/>
        </PolygonShortEdge1>
        <PolygonShortEdge2>
          <line x1="22.03" y1="91.5" x2="69.03" y2="118.5" fill="#fff" stroke="#e00000" strokeMiterlimit="10" strokeWidth="2"/>
        </PolygonShortEdge2>
        <PolygonFill>
          <polygon points="139.03 35.5 49.03 87.5 2.04 60.5 94.03 9.5 139.03 35.5" fill="#ff4d4d" stroke="#e00000" strokeMiterlimit="10" strokeWidth="2" opacity="0.6"/>
        </PolygonFill>
        <MouseCursor>
          <polygon fill="#FFFFFF" points="8.2,20.9 8.2,4.9 19.8,16.5 13,16.5 12.6,16.6 "/>
          <polygon fill="#FFFFFF" points="17.3,21.6 13.7,23.1 9,12 12.7,10.5 "/>
          <rect x="12.5" y="13.6" transform="matrix(0.9221 -0.3871 0.3871 0.9221 -5.7605 6.5909)" width="2" height="8"/>
          <polygon points="9.2,7.3 9.2,18.5 12.2,15.6 12.6,15.5 17.4,15.5 "/>
        </MouseCursor>
      </PolygonGroup>
    );
  }
}

export default Polygon;
