import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import CityJpg from '../frontpage/images/city.jpg';

const MainDiv = styled.div`
  //border: solid purple;
  height: 80vh;
  //margin: auto;
`;

const Svg = styled.svg`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  height: 80vh;
  //border: solid green;
  position: absolute;
  overflow: hidden;
`;

const Text1Animate = keyframes`
  from {
    opacity: 0;
    transform: translate(10%, 450px);
  }

  to {
    opacity: 1;
    transform: translate(15%, 460px);
  }
`;

const Text1 = styled.p`
  position: absolute;
  animation: ${Text1Animate} 4s infinite;
  animation-timing-function: ease-out;
  border: solid black;
  margin: auto;
`;

const Text2Animate = keyframes`
  from {
    opacity: 0;
    transform: translate(110%, 415px);
  }

  to {
    opacity: 1;
    transform: translate(100%, 405px);
  }
`;

const Text2 = styled.p`
  position: absolute;
  animation: ${Text2Animate} 4s infinite;
  animation-timing-function: ease-out;
  border: solid black;
  margin: auto;
`;

const Text3Animate = keyframes`
  from {
    opacity: 0;
    transform: translate(100%, 95px);
  }

  to {
    opacity: 1;
    transform: translate(105%, 110px);
  }
`;

const Text3 = styled.p`
  position: absolute;
  animation: ${Text3Animate} 4s infinite;
  animation-timing-function: ease-out;
  border: solid black;
  margin: auto;
`;

const SouthEast = keyframes`
  from {
    transform: translate(2600px, 1500px);
    visibility: visible;
  }
  
  33% {
    transform: translate(3800px, 2200px);
  }
  
  45% {
    transform: translate(4150px, 2350px) rotateY(180deg);
  }
  to {
    transform: translate(2000px, 3575px) rotateY(180deg);
  }
`;

const SouthEastGo = styled.g`
  position: absolute;
  animation: ${SouthEast} 4s infinite;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

const MapPin = keyframes`

  from, 20%, 53%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: translate3d(1700px ,3100px,0);
  }

  40%, 43% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(1700px, 2950px, 0);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(1700px, 3025px, 0);
  }

  90% {
    transform: translate3d(1700px, 3075px, 0);
  }
`;

const MapPinGo = styled.g`
  position: absolute;
  animation: ${MapPin} 1.5s infinite;
  animation-fill-mode: forwards;
`;

const PolygonCircleBottomAnimate = keyframes`
  from {
    transform: scale(7.5) translate(198px, 496px);
    opacity: 0;
  }
  49% {
    transform: scale(7.5) translate(198px, 496px);
    opacity: 0;
  }
  50% {
    transform: scale(7.5) translate(198px, 496px);
    opacity: 1;
  }
  to {
    transform: scale(7.5) translate(198px, 496px);
    opacity: 1;
  }
`;

const PolygonCircleBottom = styled.g`
  position: absolute;
  animation: ${PolygonCircleBottomAnimate} 4s;
  animation-fill-mode: forwards;
`;

const PolygonCircleLeftAnimate = keyframes`
  from {
    transform: scale(7.5) translate(168px, 478px);
    opacity: 0;
  }
  69% {
    transform: scale(7.5) translate(168px, 478px);
    opacity: 0;
  }
  70% {
    transform: scale(7.5) translate(168px, 478px);
    opacity: 1;
  }
  to {
    transform: scale(7.5) translate(168px, 478px);
    opacity: 1;
  }
`;

const PolygonCircleLeft = styled.g`
  position: absolute;
  animation: ${PolygonCircleLeftAnimate} 4s;
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
  31% {
    transform: scale(7.5) translate(258px, 461px);
    opacity: 1;
  }
  to {
    transform: scale(7.5) translate(258px, 461px);
    opacity: 1;
  }
`;

const PolygonCircleRight = styled.g`
  position: absolute;
  animation: ${PolygonCircleRightAnimate} 4s;
  animation-fill-mode: forwards;
`;

const PolygonCircleTopAnimate = keyframes`
  from {
    transform: scale(7.5) translate(226px, 443px);
    opacity: 0;
  }
  89% {
    transform: scale(7.5) translate(226px, 443px);
    opacity: 0;
  }
  90% {
    transform: scale(7.5) translate(226px, 443px);
    opacity: 1;
  }
  to {
    transform: scale(7.5) translate(226px, 443px);
    opacity: 1;
  }
`;

const PolygonCircleTop = styled.g`
  position: absolute;
  animation: ${PolygonCircleTopAnimate} 4s;
  animation-fill-mode: forwards;
`;

const PolygonLongEdge1Animate = keyframes`
  from {
    transform: scale(5) translate(231px, 607px);
    opacity: 0;
  }
  89% {
    transform: scale(5) translate(231px, 607px);
    opacity: 0;
  }
  90% {
    transform: scale(5) translate(231px, 607px);
    opacity: 1;
  }
  to {
    transform: scale(5) translate(231px, 607px);
    opacity: 1;
  }
`;

const PolygonLongEdge1 = styled.g`
  position: absolute;
  animation: ${PolygonLongEdge1Animate} 4s;
  animation-fill-mode: forwards;
`;

const PolygonLongEdge2Animate = keyframes`
  from {
    transform: scale(5) translate(278px, 635px);
    opacity: 0;
  }
  50% {
    transform: scale(5) translate(278px, 635px);
    opacity: 0;
  }
  51% {
    transform: scale(5) translate(278px, 635px);
    opacity: 1;
  }
  to {
    transform: scale(5) translate(278px, 635px);
    opacity: 1;
  }
`;

const PolygonLongEdge2 = styled.g`
  position: absolute;
  animation: ${PolygonLongEdge2Animate} 4s;
  animation-fill-mode: forwards;
`;

const PolygonShortEdge1Animate = keyframes`
  from {
    transform: scale(5) translate(278px, 635px);
    opacity: 0;
  }
  70% {
    transform: scale(5) translate(278px, 635px);
    opacity: 0;
  }
  71% {
    transform: scale(5) translate(278px, 635px);
    opacity: 1;
  }
  to {
    transform: scale(5) translate(278px, 635px);
    opacity: 1;
  }
`;

const PolygonShortEdge1 = styled.g`
  position: absolute;
  animation: ${PolygonShortEdge1Animate} 4s;
  animation-fill-mode: forwards;
`;

const PolygonShortEdge2Animate = keyframes`
  from {
    transform: scale(5) translate(367px, 582px);
    opacity: 0;
  }
  99% {
    transform: scale(5) translate(367px, 582px);
    opacity: 0;
  }
  to {
    transform: scale(5) translate(367px, 582px);
    opacity: 1;
  }
`;

const PolygonShortEdge2 = styled.g`
  position: absolute;
  animation: ${PolygonShortEdge2Animate} 4s;
  animation-fill-mode: forwards;
`;

const PolygonFillAnimate = keyframes`
  from {
    transform: scale(5) translate(297px, 666px);
    opacity: 0;
  }
  80% {
    transform: scale(5) translate(297px, 666px);
    opacity: 0;
  }
  to {
    transform: scale(5) translate(297px, 666px);
    opacity: 1;
  }
`;

const PolygonFill = styled.g`
  position: absolute;
  animation: ${PolygonFillAnimate} 5s;
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
  40% {
    transform: scale(10) translate(205px, 340px); 
  }
  50% {
    transform: scale(10) translate(164px, 372px); //BOTTOM POINT
  }
  60% {
    transform: scale(10) translate(157px, 352px); 
  }
  70% {
    transform: scale(10) translate(142px, 356px); //LEFT POINT
  }
  80% {
    transform: scale(10) translate(177px, 340px); 
  }
  90% {
    transform: scale(10) translate(185px, 328px); //TOP POINT
  }
  to {
    transform: scale(10) translate(210px, 341px); //RIGHT POINT
  }
`;

const MouseCursor = styled.g`
  position: absolute;
  animation: ${MouseCursorAnimate} 4s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  
`;

class CityAnimation extends Component {
  render() {
    return (
      <MainDiv>
        <Svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 6000 6000">
          <image xlinkHref={CityJpg} width="100%" height="100%"/>
          <SouthEastGo>
            <g opacity="0.6">
              <path
                d="M685.77,304.21c-13.34-8-44.1-4.9-63.5,4.51l-52.59,25.51c-19.41,9.41-24.26,23.54-10.89,31.54l132.85,79.47c13.39,8,39.84,6.81,59.26-2.59l52.61-25.53c19.38-9.41,28.52-25.46,15.13-33.49Z"
                transform="translate(-542.27 -225.68)" fill="#1a1a1a"/>
            </g>
            <g>
              <g>
                <path
                  d="M809.35,288.77a4.86,4.86,0,0,1,1.9,4.24l-2.52,0a3.62,3.62,0,0,0-1.25-3,3.67,3.67,0,0,0-2.37-.55L797,290.86V289.1l8.17-1.39A6.66,6.66,0,0,1,809.35,288.77Z"
                  transform="translate(-542.27 -225.68)" fill="#33312f" fillRule="evenodd"/>
                <g>
                  <path
                    d="M816.6,292.17a1.17,1.17,0,0,0-.6-1.05,2.46,2.46,0,0,0-1.49-.37l-9.06,1.72A2.65,2.65,0,0,0,804,293a1.32,1.32,0,0,0-.58,1.06l-.09,21.56a1.29,1.29,0,0,0,.62,1,2.3,2.3,0,0,0,1.46.28l9-2.53a2.34,2.34,0,0,0,1.26-.45,1.35,1.35,0,0,0,.54-1Z"
                    transform="translate(-542.27 -225.68)" fill="#33312f" fillRule="evenodd"/>
                  <path
                    d="M817.67,292.83a1.2,1.2,0,0,0-.61-1,2.73,2.73,0,0,0-1.48-.35l-9.08,1.68a2.64,2.64,0,0,0-1.41.47,1.32,1.32,0,0,0-.6,1l-.09,20.95a1.11,1.11,0,0,0,.61,1,2.26,2.26,0,0,0,1.45.31l9-2.45a2.42,2.42,0,0,0,1.26-.47,1.28,1.28,0,0,0,.52-.94Z"
                    transform="translate(-542.27 -225.68)" fill="#22a5f0" fillRule="evenodd"/>
                </g>
              </g>
              <polygon points="129.97 146.14 203.69 88.59 107.8 32.22 0.2 72.09 129.97 146.14" fill="#cecfd1"/>
              <polygon points="0.01 71.93 121.4 141.01 121.38 147.04 0 77.97 0.01 71.93" fill="#2474a8"/>
              <g>
                <polygon points="65.02 99.94 125.19 76.34 122.85 24.11 64.93 43.03 65.02 99.94" fill="#8c5c26"/>
                <polygon points="64.96 99.72 16.65 74.12 16.77 15.98 64.88 42.84 64.96 99.72" fill="#ea7c00"/>
                <polygon points="122.85 24.11 64.93 43.03 16.77 15.98 73.37 0 122.85 24.11" fill="#f9940c"/>
                <polygon points="64.93 43.03 36.04 27.07 93.15 10.99 35.14 26.59 16.77 15.98 64.93 43.03"
                         fill="#8c5c26"/>
                <polygon points="64.93 43.03 16.77 15.98 64.23 43.58 64.96 99.72 64.93 43.03" fill="#8c5c26"/>
                <polygon points="74.23 0.91 122.36 24.31 64.93 43.03 121.07 24.2 74.23 0.91" fill="#8c5c26"/>
              </g>
              <g>
                <polygon points="115.56 128.33 175.71 104.77 173.39 52.52 115.94 70.53 115.56 128.33" fill="#8c5c26"/>
                <polygon points="115.5 128.1 67.18 102.53 67.05 44.84 115.91 70.3 115.5 128.1" fill="#ea7c00"/>
                <polygon points="173.39 52.52 115.94 70.53 67.05 44.84 123.9 28.43 173.39 52.52" fill="#f9940c"/>
                <polygon points="115.94 70.53 86.57 55.49 143.68 39.38 85.68 55 67.05 44.84 115.94 70.53"
                         fill="#8c5c26"/>
                <polygon points="115.94 70.53 67.05 44.84 115.04 71.08 115.5 128.1 115.94 70.53" fill="#8c5c26"/>
                <polygon points="124.78 29.3 172.9 52.73 115.94 70.53 170.18 52.48 124.78 29.3"
                         fill="url(#linear-gradient)"/>
              </g>
              <g>
                <path
                  d="M841.76,399c-3.36-18.52-16-34.58-28.25-35.78a15.21,15.21,0,0,0-1.87-.11,28,28,0,0,1,6.86-.06c17.82,1.8,35.06,18.59,38.45,37.44s-8.27,32.61-26.15,30.72a33.31,33.31,0,0,1-5.67-1.06,1.75,1.75,0,0,0,.46,0C837.88,431.48,845.09,417.51,841.76,399Z"
                  transform="translate(-542.27 -225.68)" fill="#625f5c"/>
                <path
                  d="M815.81,426.17a44.86,44.86,0,0,0,9.32,4,1.75,1.75,0,0,0,.46,0c12.29,1.3,19.5-12.67,16.17-31.18s-16-34.58-28.25-35.78a15.21,15.21,0,0,0-1.87-.11,24.45,24.45,0,0,0-5.71,1.5c-7.41,4-11.15,15.53-8.61,29.79C799.78,407.89,807.18,420.06,815.81,426.17ZM802.9,395.58c-2.22-12.15,3-21.33,11.54-20.42s17.28,11.44,19.47,23.63-2.93,21.37-11.53,20.48S805.09,407.75,802.9,395.58Z"
                  transform="translate(-542.27 -225.68)" fill="#282322"/>
                <path
                  d="M814.44,375.16c8.58.88,17.28,11.44,19.47,23.63s-2.93,21.37-11.53,20.48-17.29-11.52-19.48-23.69S805.86,374.25,814.44,375.16Z"
                  transform="translate(-542.27 -225.68)" fill="#89827f"/>
              </g>
              <path
                d="M823.86,407.91c1.4-1.88,2-5,1.36-8.9-1.16-6.67-5.44-12.74-9.71-13.61a4.27,4.27,0,0,0-2.76.31,4.2,4.2,0,0,1,4.29-1.6c4.27.87,8.6,6.92,9.75,13.61C827.62,402.74,826.35,406.64,823.86,407.91Z"
                transform="translate(-542.27 -225.68)" fill="#333"/>
              <polygon points="185.74 165.39 191.69 158.89 192.88 128.72 198.03 110.61 187.36 115.37 185.74 165.39"
                       fill="#22a5f0"/>
              <polygon points="188.16 182.72 245.72 215.44 248.05 159.36 190.67 127.34 188.16 182.72" fill="#2473b2"/>
              <path d="M671.63,373.67l50.79,28.84c3.86-10.86,5.73-13.88,5.73-13.88l1.48-47.58-9.55-53.9-44.79-26.33Z"
                    transform="translate(-542.27 -225.68)" fill="#2976ad"/>
              <polygon points="187.36 115.37 262.43 82.67 253.23 30.35 177.81 61.47 187.36 115.37" fill="#22a5f0"/>
              <polygon points="198.03 110.61 255.83 144.21 310.97 122.46 250.53 87.83 198.03 110.61" fill="#1396e1"/>
              <polygon points="206.5 111.49 255.61 140.05 302.54 121.56 251.28 92.28 206.5 111.49" fill="#22a5f0"/>
              <polygon points="190.67 127.34 248.21 160.07 255.83 144.21 198.03 110.61 190.67 127.34" fill="#2baef9"/>
              <polygon
                points="247.52 160.35 246.31 201.98 316.56 173.3 316.21 126.17 310.97 122.46 255.83 144.21 247.52 160.35"
                fill="#22a5f0"/>
              <polygon points="244.98 216.36 318.19 188.12 318.38 172.27 245.75 202.02 244.98 216.36" fill="#b2b2b2"/>
              <polygon points="262.41 94.71 262.43 82.67 250.53 87.83 262.41 94.71" fill="#22a5f0"/>
              <polygon points="177.52 61.78 253.23 30.35 205.82 4.65 133.02 35.13 177.52 61.78" fill="#1396e1"/>
              <path d="M720.62,413.19l12.09-2s20.91-21.84,7.91-28.32c-8.28.91-18,18.77-18,18.77Z"
                    transform="translate(-542.27 -225.68)" fill="#91908a"/>
              <g>
                <g>
                  <path
                    d="M722,411.49c-.68,19.48,13.38,39.28,31.39,44.27s30.4-5.41,31.06-24.83-14.21-41.86-32.22-46.83S722.65,392,722,411.49Z"
                    transform="translate(-542.27 -225.68)" fill="#282629"/>
                  <path
                    d="M725.59,423.2c2.86,15.19,14.54,28,26,28.69s18.5-11.07,15.66-26.26-14.54-28-26-28.7S722.76,408,725.59,423.2Z"
                    transform="translate(-542.27 -225.68)" fill="#4d4d4d"/>
                  <path
                    d="M732.35,423.61c1.95,10.25,9.83,18.95,17.64,19.41s12.5-7.51,10.55-17.78-9.82-18.95-17.59-19.43S730.41,413.33,732.35,423.61Z"
                    transform="translate(-542.27 -225.68)" fill="#2474a8"/>
                  <path
                    d="M737.81,422.19c1.48,7.83,7.14,14.4,12.65,14.72s8.77-5.74,7.32-13.54-7.16-14.39-12.66-14.72S736.34,414.41,737.81,422.19Z"
                    transform="translate(-542.27 -225.68)" fill="#fff"/>
                </g>
                <path
                  d="M750.25,428a5.44,5.44,0,0,0,1.07-4.29c-.39-3.18-2.51-6.11-4.79-6.52a2.49,2.49,0,0,0-1.52.12,2.54,2.54,0,0,1,2.4-.76c2.27.43,4.43,3.33,4.8,6.56C752.48,425.47,751.64,427.35,750.25,428Z"
                  transform="translate(-542.27 -225.68)" fill="#9d9a95"/>
              </g>
              <path d="M676,373.24l43.3,25c1.59-11.69,6.51-18.36,6.51-18.36l.87-36.94-48.3-27.09Z"
                    transform="translate(-542.27 -225.68)" fill="#2375a9"/>
              <path
                d="M770.13,445.24c3.86-1.35,11.22-2.26,16.92-5.32.81-62.11-61.61-87.28-66.43-26.73C723.55,376,772.27,387,770.13,445.24Z"
                transform="translate(-542.27 -225.68)" fill="#1396e1"/>
              <path
                d="M844.62,405.47c-9,3.87-17.56,8.06-32.32,11.62a53.83,53.83,0,0,1-.48-23.36c3.24-16.64,13-27.22,21.73-23.65C841.84,373.47,847,389.7,844.62,405.47Z"
                transform="translate(-542.27 -225.68)" fill="#1396e1"/>
              <path
                d="M839.51,383.16,816,391.36c-.21.74-.46,1.56-.68,2.33l25-8.72A15.8,15.8,0,0,0,839.51,383.16Zm1.4,3.36-26,9.07c0,.27-.13.44-.16.7-.1.54-.16,1-.25,1.57l27-9.43C841.31,387.74,841.13,387.1,840.91,386.52Zm1,3.52-27.68,9.68c-.08.72-.15,1.42-.23,2.14L842.3,392A19.18,19.18,0,0,0,841.93,390Zm-7.24-12.9-14.22,5a23,23,0,0,0-1.67,2.71l17.58-6.18A7.36,7.36,0,0,0,834.69,377.14Zm2.88,2.82-19.85,7c-.38.76-.66,1.59-1,2.44l22-7.72A19.55,19.55,0,0,0,837.57,380Zm-15.09-.3,10.06-3.56C829.13,375,825.56,376.44,822.48,379.66Zm-7.28,36.41c12.49-3.05,19.72-6.55,27.32-9.86,0-.33.05-.69.1-1l-27.71,9.69A9.63,9.63,0,0,0,815.2,416.07Zm-1-4.82c.11.69.2,1.32.32,2l28.22-9.9a13.66,13.66,0,0,0,.14-2.14Zm28.31-17.62-28.62,10c-.06.72,0,1.43-.06,2.12l28.94-10.1C842.74,395,842.67,394.31,842.56,393.63Zm.36,3.8-29,10.06c0,.68,0,1.36.12,2.08L843,399.49C843,398.75,843,398.08,842.92,397.43Z"
                transform="translate(-542.27 -225.68)" fill="#f9fcfd"/>
              <g>
                <polygon points="249.94 143.59 248.92 142.86 243.81 154.36 244.85 155.09 249.94 143.59 249.94 143.59"
                         fill="#1396e1"/>
                <polygon points="244.7 140.54 243.64 139.79 238.54 151.29 239.6 152.03 244.7 140.54 244.7 140.54"
                         fill="#1396e1"/>
                <polygon points="239.39 137.51 238.33 136.72 233.25 148.22 234.29 148.97 239.39 137.51 239.39 137.51"
                         fill="#1396e1"/>
                <polygon points="234.1 134.45 233.05 133.72 227.96 145.17 229 145.94 234.1 134.45 234.1 134.45"
                         fill="#1396e1"/>
                <polygon points="228.82 131.41 227.78 130.64 222.65 142.13 223.75 142.88 228.82 131.41 228.82 131.41"
                         fill="#1396e1"/>
                <polygon points="223.56 128.38 222.51 127.61 217.38 139.07 218.46 139.8 223.56 128.38 223.56 128.38"
                         fill="#1396e1"/>
                <polygon points="218.29 125.31 217.21 124.58 212.11 136.02 213.18 136.76 218.29 125.31 218.29 125.31"
                         fill="#1396e1"/>
                <polygon points="212.99 122.28 211.91 121.54 206.82 132.97 207.86 133.73 212.99 122.28 212.99 122.28"
                         fill="#1396e1"/>
                <polygon points="207.7 119.26 206.64 118.48 201.53 129.95 202.62 130.7 207.7 119.26 207.7 119.26"
                         fill="#1396e1"/>
                <polygon points="202.42 116.21 201.38 115.46 196.28 126.91 197.3 127.64 202.42 116.21 202.42 116.21"
                         fill="#1396e1"/>
              </g>
              <path d="M569.41,320.72c2.37-.85,6.59-2.08,6.59-2.08l5-16.89S571.09,304.86,569.41,320.72Z"
                    transform="translate(-542.27 -225.68)" fill="#314190"/>
              <path d="M583,296.79a20.08,20.08,0,0,0-4.63,2.84A10.1,10.1,0,0,1,583,296.79Z"
                    transform="translate(-542.27 -225.68)" fill="#fff" stroke="#1a171b" strokeWidth="1.31"/>
              <polygon points="84.4 119.97 180.18 175.24 178.23 187.88 70.16 125.71 84.4 119.97" fill="#2474a8"/>
              <polygon points="270.67 204.03 301.07 192.04 301.42 183.94 271.05 195.44 270.67 204.03" fill="#f9fcfd"/>
              <g>
                <polygon points="190.24 111.97 260.24 82.73 251.64 36.66 180.98 65.79 190.24 111.97" fill="#fff"/>
                <polygon points="134.66 81.16 182.93 106.91 175.65 66.65 135.73 44.56 134.66 81.16" fill="#fff"/>
              </g>
              <g>
                <g>
                  <path
                    d="M722.33,317.41c.84,0,1.45.53,1.37,1.16a1.52,1.52,0,0,1-1.62,1.14,6.47,6.47,0,0,0-3.48,1.21c-1.56,1.19-2.39,3.11-2.4,5.76,0,.63-.69,1.15-1.53,1.19s-1.52-.45-1.51-1.06c0-3.32,1.19-5.85,3.44-7.5A10.76,10.76,0,0,1,722.33,317.41Z"
                    transform="translate(-542.27 -225.68)" fill="#33312f" fillRule="evenodd"/>
                  <path
                    d="M722.17,317.39a1.71,1.71,0,0,1,1.66-.6c2.16.49,1.57,4.25-1.35,2.82C723.74,319,722.65,317.6,722.17,317.39Z"
                    transform="translate(-542.27 -225.68)" fill="#2baef9" fillRule="evenodd"/>
                </g>
                <g>
                  <path
                    d="M720.5,325.38a1.44,1.44,0,0,0-.6-1,1.85,1.85,0,0,0-1.33-.38l-11.19,1.8a2,2,0,0,0-1.24.47,1.37,1.37,0,0,0-.5,1.07l.92,21.16a1.18,1.18,0,0,0,.56,1,1.78,1.78,0,0,0,1.32.3l11.13-2.59a1.69,1.69,0,0,0,1.1-.49,1.16,1.16,0,0,0,.43-.9Z"
                    transform="translate(-542.27 -225.68)" fill="#33312f" fillRule="evenodd"/>
                  <path
                    d="M721.46,326a1.28,1.28,0,0,0-.59-1,2.42,2.42,0,0,0-1.33-.37l-11.18,1.79a2.18,2.18,0,0,0-1.26.49,1.27,1.27,0,0,0-.48,1l.85,20.51a1.18,1.18,0,0,0,.59.95,2,2,0,0,0,1.31.35l11.13-2.54a2,2,0,0,0,1.11-.46,1.24,1.24,0,0,0,.42-.93Z"
                    transform="translate(-542.27 -225.68)" fill="#22a5f0" fillRule="evenodd"/>
                </g>
              </g>
              <g>
                <path
                  d="M802.25,382.4c3.22-.61,5.9,4.91,6.06,10.71s-2.34,10.82-5.6,11.19c-2.32.24-4.73-1.83-5.78-5.15C797.11,399.22,792.71,384.2,802.25,382.4Z"
                  transform="translate(-542.27 -225.68)" fill="#f5df3c"/>
                <path
                  d="M793.19,394.41c.2,7.45,3.77,13.11,8,12.63s7.49-6.89,7.28-14.35-3.82-13.16-8.06-12.68S793,386.94,793.19,394.41ZM802,382.75c3.25-.34,6,4.06,6.2,9.86s-2.35,10.83-5.61,11.17-6-4-6.19-9.86S798.79,383.11,802,382.75Z"
                  transform="translate(-542.27 -225.68)" fill="#1a1a1a"/>
              </g>
              <g>
                <path
                  d="M851.87,365.67c3.08-.58,5.63,4.72,5.76,10.24s-2.27,10.35-5.37,10.69c-2.22.23-4.5-1.76-5.52-4.93C846.92,381.75,842.75,367.37,851.87,365.67Z"
                  transform="translate(-542.27 -225.68)" fill="#f5df3c"/>
                <path
                  d="M843.18,377.13c.19,7.11,3.57,12.53,7.64,12.09s7.17-6.55,7-13.69-3.63-12.61-7.66-12.15S843,370,843.18,377.13ZM851.67,366c3.1-.31,5.76,3.9,5.9,9.44s-2.28,10.34-5.38,10.65-5.77-3.88-5.89-9.4S848.56,366.35,851.67,366Z"
                  transform="translate(-542.27 -225.68)" fill="#1a1a1a"/>
              </g>
              <g>
                <g>
                  <path
                    d="M568.28,323.55c.66,18.45,15,36.36,31.91,40.1s27.68-6.76,27-25.18S611.31,299.73,594.35,296,567.62,305.14,568.28,323.55Z"
                    transform="translate(-542.27 -225.68)" fill="#282629"/>
                  <path
                    d="M572.4,334.4c3.67,14.19,15.28,25.68,26,25.71s16.36-11.48,12.72-25.65-15.26-25.72-25.93-25.73S568.77,320.22,572.4,334.4Z"
                    transform="translate(-542.27 -225.68)" fill="#4d4d4d"/>
                  <path
                    d="M578.67,334.43c2.49,9.58,10.34,17.37,17.56,17.36s11-7.75,8.58-17.38-10.33-17.35-17.54-17.36S576.2,324.84,578.67,334.43Z"
                    transform="translate(-542.27 -225.68)" fill="#2474a8"/>
                  <path
                    d="M583.61,332.8c1.9,7.3,7.57,13.22,12.67,13.21s7.73-5.91,5.85-13.18-7.56-13.22-12.66-13.23S581.74,325.49,583.61,332.8Z"
                    transform="translate(-542.27 -225.68)" fill="#fff"/>
                </g>
                <path
                  d="M595.48,337.53a5.11,5.11,0,0,0,.7-4.09c-.56-3-2.71-5.62-4.85-5.91a2.33,2.33,0,0,0-1.39.21,2.29,2.29,0,0,1,2.16-.86c2.13.29,4.32,2.91,4.87,5.92C597.39,335.07,596.74,336.91,595.48,337.53Z"
                  transform="translate(-542.27 -225.68)" fill="#9d9a95"/>
              </g>
              <path
                d="M612.43,351.39c3.39-1.23,8.93-.95,13.89-3.68,11.82-39.12-54.44-81.48-58.72-28C570.23,286.8,622.67,313,612.43,351.39Z"
                transform="translate(-542.27 -225.68)" fill="#2873a7"/>
            </g>
          </SouthEastGo>
          <MapPinGo>
            <path id="svg_2" data-name="svg 2" d="M1488.77,1959.63c-8.25-40.5-22.79-74.2-40.41-105.43-13.06-23.17-28.2-44.55-42.21-67-4.67-7.5-8.71-15.42-13.2-23.2-9-15.57-16.27-33.61-15.81-57,.46-22.87,7.07-41.21,16.61-56.21a110,110,0,0,1,77.22-50.22,116.55,116.55,0,0,1,75,14.21,108.58,108.58,0,0,1,37,35.81c9.62,15,16.25,32.82,16.8,56a103.41,103.41,0,0,1-4.4,32c-2.77,9.24-7.23,17-11.2,25.21-7.75,16.1-17.46,30.85-27.21,45.61C1528,1853.36,1500.71,1898.19,1488.77,1959.63Z" transform="translate(-1370.12 -1592.27)" fill="red" stroke="#000" strokeMiterlimit="10" strokeWidth="14"/>
            <circle id="svg_4" data-name="svg 4" cx="119.21" cy="107.84" r="39.01" stroke="#000" strokeMiterlimit="10" strokeWidth="14"/>
          </MapPinGo>
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
        </Svg>
        <Text1>
          Efficient routing to save you money.
        </Text1>
        <Text2>
          Use maps to measure jobsites <br/>
          to refine quoting processes.
        </Text2>
        <Text3>
          Onboard data tracking for <br/>
          jobs and equipment.
        </Text3>
      </MainDiv>
    )
  }
}

export default CityAnimation;
