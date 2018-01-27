import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import CityJpg from './city.jpg';
import RepeatButton from './Repeat.svg';
import BlueTruck from "./MapLayers/BlueTruck";


const MainDiv = styled.div`
  margin: auto;
`;

const Svg = styled.svg`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  height: 100vh;
  position: absolute;

`;

const Text1AnimatePhone = keyframes`
  from {
    visibility: visible;
    opacity: 0;
    transform: translate(40px , 455px);
  }
  20%, 80% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate(90px, 420px)
  }
`;

const Text1AnimateTablet = keyframes`
  from {
    visibility: visible;  
    opacity: 0;
    transform: translate(0px, 1400px);
  }
  20%, 80% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate(200px, 900px);
  }
`;

const Text1AnimateDesktop = keyframes`
  from {
    visibility: visible;
    opacity: 0;
    transform: translate(0px, 1400px);
  }
  20%, 80% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate(200px, 900px);
  }
`;

const Text1AnimateGiant = keyframes`
  from {
    visibility: visible;
    opacity: 0;
    transform: translate(1500px, 4950px);
  }
  20%, 80% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate(1750px, 5000px);
  }
  
`;


const Text1MNull = keyframes`
  from {
    visibility: hidden;
  to {
    visibility: hidden;
  }
}`;

const Text1M = styled.p`
  position: absolute;
  animation-timing-function: ease-in-out;
  margin: auto;
  visibility: hidden;
  animation: ${Text1AnimatePhone} 6s;
  margin-top: 4em;
  max-width: 768px;
  animation-delay: 11s;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    animation: ${Text1MNull} 6s;
    margin-top: 4em;
    }
`;



const Text1 = styled.text`
  position: absolute;
  animation-tim+ing-function: ease-in-out;
  border: solid black;
  margin: auto;
  visibility: hidden;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    animation: ${Text1AnimateTablet} 7s;
    margin-top: 4em;
    max-width: 992px;
    font-size: 10em;
    animation-delay: 11s;
    }
  @media (min-width: ${props => props.theme.desktopscreen}) {
    animation: ${Text1AnimateDesktop} 7s;
    margin-top: 4em;
    max-width: 1170px;
    font-size: 12em;
    animation-delay: 11s;
    }
  @media (min-width: ${props => props.theme.giantscreen}) {
    animation: ${Text1AnimateGiant} 7s;
    margin-top: 4em;
    font-size: 15em;
    animation-delay: 11s;
    }
`;

const Text2AnimatePhone = keyframes`
  from {
    visibility: visible;
    opacity: 0;
    transform: translate(42px, 100px);
  }
  20%, 80% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate(60px, 100px);
  }
`;

const Text2AnimateTablet = keyframes`
  from {
    visibility: visible;
    opacity: 0;
    transform: translate(2200px, 500px);
  }
  20%, 80% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate(2000px, 1000px);
  }
`;

const Text2AnimateDesktop = keyframes`
  from {
    visibility: visible;
    opacity: 0;
    transform: translate(2200px, 500px);
  }
  20%, 80% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate(2000px, 1000px);
  }
`;

const Text2AnimateGiant = keyframes`
  from {
    visibility: visible;
    opacity: 0;
    transform: translate(2500px, 1000px);
  }
  20%, 80% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate(2700px, 1500px);
  }
`;



const Text2MNull = keyframes`
  from {
    visibility: hidden;
  to {
    visibility: hidden;
  }
}`;

const Text2M = styled.p`
  position: absolute;
  animation-timing-function: ease-in-out;
  margin: auto;
  visibility: hidden;
  animation: ${Text2AnimatePhone} 7s;
  margin-top: 4em;
  max-width: 768px;
  animation-delay: 4s;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    animation: ${Text2MNull} 6s;
    margin-top: 4em;
    }
`;

const Text2 = styled.text`
  position: absolute;
  animation-timing-function: ease-in-out;
  border: solid black;
  margin: auto;
  visibility: hidden;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    animation: ${Text2AnimateTablet} 7s;
    margin-top: 4em;
    max-width: 992px;
    font-size: 10em;
    animation-delay: 4s;
    }
  @media (min-width: ${props => props.theme.desktopscreen}) {
    animation: ${Text2AnimateDesktop} 7s;
    margin-top: 4em;
    max-width: 1170px;
    font-size: 12em;
    animation-delay: 4s;
    }
  @media (min-width: ${props => props.theme.giantscreen}) {
    animation: ${Text2AnimateGiant} 7s;
    margin-top: 4em;
    font-size: 15em;
    animation-delay: 4s;
    }
`;

const Text3AnimatePhone = keyframes`
  from {
    visibility: visible;
    opacity: 0;
    transform: translate(200px, 100px);
  }
  20%,80% {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate(170px, 150px);
  }
`;

const Text3AnimateTablet = keyframes`
  from {
      visibility: visible;
      opacity: 0;
      transform: translate(1450px, 4900px);
    }
    20%,80% {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      transform: translate(1500px, 5150px);
    }
`;

const Text3AnimateDesktop = keyframes`
  from {
      visibility: visible;
      opacity: 0;
      transform: translate(1450px, 4900px);
    }
    20%,80% {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      transform: translate(1500px, 5150px);
    }
`;

const Text3AnimateGiant = keyframes`
  from {
    visibility: visible;
    opacity: 0;
    transform: translate(-2000px, 1500px);
  }
  20%,80% {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate(-1500px, 1200px);
  }
`;

const Text3MNull = keyframes`
  from {
    visibility: hidden;
  to {
    visibility: hidden;
  }
}`;

const Text3M = styled.p`
  position: absolute;
  animation-timing-function: ease-in-out;
  margin: auto;
  visibility: hidden;
  text-align: right;
  animation: ${Text3AnimatePhone} 6s;
  margin-top: 4em;
  max-width: 768px;
  animation-delay: 18s;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    animation: ${Text3MNull} 6s;
    margin-top: 4em;
    
    }
`;

const Text3 = styled.text`
  position: absolute;
  animation-timing-function: ease-in-out;
  margin: auto;
  visibility: hidden;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    animation: ${Text3AnimateTablet} 8s;
    margin-top: 4em;
    max-width: 992px;
    font-size: 10em;
    animation-delay: 16s;
    }
  @media (min-width: ${props => props.theme.desktopscreen}) {
    animation: ${Text3AnimateDesktop} 8s;
    margin-top: 4em;
    max-width: 1170px;
    font-size: 12em;
    animation-delay: 16s;
    }
  @media (min-width: ${props => props.theme.giantscreen}) {
    animation: ${Text3AnimateGiant} 8s;
    margin-top: 4em;
    font-size: 15em;
    animation-delay: 16s;
    }
`;


const MapPin = keyframes`

  from, 20%, 53%, 80%, to {
    visibility: visible;
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
  visibility: hidden;
  position: absolute;
  animation: ${MapPin} 1.5s 3;
  animation-fill-mode: forwards;
  animation-delay: 11.5s;
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
  }
`;

const MouseCursor = styled.g`
  position: absolute;
  animation: ${MouseCursorAnimate} 12s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
`;

const Repeat = styled.button`
  background-color: transparent;
  border: transparent;
  display: flex;
  justify-content: flex-end;
  margin: auto;
  transform: translate(0, 78vh);
  @media (min-width: ${props => props.theme.tabletscreen}) {
    transform: translate(0, 87vh);
`;

class CityAnimation extends Component {

  //
  // componentDidMount() {
  //   TweenMax.to(this.truck, 1, {rotationX:200})
  // }
  //   const controller = new ScrollMagic.Controller();
  //   const item = this.animate;
  //
  //   // const item = document.getElementById(this.poopyass);
  //   const truck = this.refs.truck;
  //
  //   const scene = new ScrollMagic.Scene({
  //     triggerElement: item,
  //     duration: 500,
  //     offset: 75
  //   })
  //     scene.setTween(truck, 0.5, {rotationX: 200})
  //     scene.setPin(truck)
  //     .addTo(controller);
  // }


  render() {
    return (
      <MainDiv>

        <Svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 6000 6000">
          <image xlinkHref={CityJpg} width="100%" height="100%"/>
          <BlueTruck/>
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
          <Text1>
          Efficient routing to save you money.
          </Text1>
          <Text2>
            Use maps to refine quoting processes.
          </Text2>
          <Text3>
            Onboard data tracking for <br/>
            jobs and equipment.
          </Text3>
        </Svg>
        <Text1M>
          Efficient routing to save you money.
        </Text1M>
        <Text2M>
          Use maps to refine quoting processes.
        </Text2M>
        <Text3M>
          Onboard data tracking for <br/>
          jobs and equipment.
        </Text3M>
        <Repeat>
          <img src={RepeatButton} alt="button" />
        </Repeat>
      </MainDiv>
    );
  }
}

export default CityAnimation;
