import React, { Component } from 'react';
import styled from 'styled-components';
import {TweenMax} from 'gsap';

import BlueTruck from "./TruckSvg";
import MapPin from "./MapPin";
import Pointer from "./Pointer";


import CityBottom from './cityBottom1000px.gif';

import CityPark from './cityCommunityPark.gif';
import CityTop from './cityTallBuildings.gif';
import theme from "../../../../global-styles/DefaultTheme";

const Div = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 80vh;
`;

const Svg = styled.svg`
  width: 99vw;
  transform: translate(0px, 100px);
  position: absolute;
  z-index: -3;
`;

const BottomCity = styled.image`
  //transform: translate(500px, 100px) scale(0.5);
`;

const CityLawn = styled.image`
  transform: translate(345px, 356px);
`;

const TopCity = styled.image`
  transform: translate(325px, 155px);
`;

const TruckContainer = styled.g`
  //transform: translate(400px, 350px) scale(0.18);
  visibility: hidden;
`;

const PinContainer = styled.g`
  //transform: scale(0.1);
  visibility: hidden;
`;

const Polygon = styled.g`
`;

const PointerContainer = styled.g`
  visibility: hidden;
`;

const CornerPoint = styled.circle`
  visibility: hidden;
`;

const LineDraw = styled.polyline`
  visibility: hidden;
`;

const PolyFill = styled.polygon`
  visibility: hidden;
`;

const TextBox = styled.div`
  font-family: ${props => props.theme.RobotoCondensedfont};
  font-size: 0.8em;
  bottom: 0;
  position: absolute;
  width: 100vw;
  background-color: ${props => props.theme.logoblue};
  height: 15vh;
  z-index: 2;
  display: flex;
  justify-content: center;
`;

const PinText = styled.p`
  position: absolute;
  visibility: hidden;
  font-size: 1.2em;
  font-family: ${props => props.theme.Robotofont};
`;

const TruckText = PinText.extend`
`;

const PolyText = PinText.extend`
`;

class MapAnimation extends Component {
  constructor(props) {
    super(props);

    // Polygon corner positions.
    this.topLeftCornerX = "240";
    this.topLeftCornerY = "580";
    this.bottomLeftCornerX = "285";
    this.bottomLeftCornerY = "605";
    this.topRightCornerX = "315";
    this.topRightCornerY = "540";
    this.bottomRightCornerX = "358";
    this.bottomRightCornerY = "565";
  }

  componentDidMount() {

    const PinBounce = new TimelineMax({repeat: -1, delay: 2});

    PinBounce.set(this.pin, {transform: 'translate(254px, 561px) scale(0.1)'})
    .to(this.pin, 0.8, {transform: 'translate(254px, 550px) scale(0.1)'})
    .to(this.pin, 0.8, {transform: 'translate(254px, 561px) scale(0.1)'});

    const MapAnimate = new TimelineMax({repeat: -1});

    const points = [
      {x:285, y:605, x2:285, y2:605}, // Line Left start
      {x:285, y:605, x2:240, y2:580}, // Line Left end

      {x:240, y:580, x2:240, y2:580}, // Line top start
      {x:240, y:580, x2:315, y2:540}, // Line top end

      {x:315, y:540, x2:315, y2:540}, // Line right start
      {x:315, y:540, x2:358, y2:565}, // Line right end

      {x:358, y:565, x2:358, y2:565}, // Line bottom start
      {x:358, y:565, x2:285, y2:605}, // Line bottom end
    ];

    // hide pointer
    MapAnimate.set(this.pointer, {autoAlpha:0, scale: 2, x: 100, y: 100});

    // Pin animate
    MapAnimate.set(this.svg, {scale: 1})
      .set(this.pinText, {autoAlpha: 1})
      .to(this.svg, 1, {scale: 1.7, transformOrigin: '50% 50%', x: 80, y: 50, delay: 1})
      .set(this.pin, {autoAlpha: 1})
      .to(this.svg, 1, {scale: 1, transformOrigin: '50% 50%', x: 0, y: 100, delay: 5})
      .set(this.pin, {autoAlpha: 0})
      .set(this.pinText, {autoAlpha: 0});

    // Truck
    MapAnimate.set(this.truck, {autoAlpha: 1, transform: 'translate(390px, 230px) scale(0.13)'})
      .set(this.truckText, {autoAlpha: 1})
      .set(this.svg, {scale:1})
      .to(this.svg, 0.5, {scale:1.7, transformOrigin:'50% 50%', x:20, y: 200})
      .to(this.svg, 2, {x:-60, y: 200})
      .to(this.truck, 2, {autoAlpha:1, x: 640, y: 375}, '-=2')
      .to(this.truck, 0.2, {scaleX:-0.13, transformOrigin:'50% 50%'}, '-=0.2') //To flip the truck
      .to(this.svg, 2, {x:60, y:100})
      .to(this.truck, 2, {x: 300, y: 572}, '-=2')
      .to(this.svg, 0.5, {scale:1, x:0, y:100})
      .set(this.truck, {autoAlpha: 0})
      .set(this.truckText, {autoAlpha: 0});



    // Polygon edit
    MapAnimate.to(this.svg, 2, {scale:1.7, x: 100, y:20 })
      .set(this.polyText, {autoAlpha: 1})
      .to(this.pointer, 1, {autoAlpha: 1, x:this.bottomLeftCornerX, y:this.bottomLeftCornerY}, "-=1")
      .set(this.blc, {autoAlpha: 1}) // Make bottom left point visible
      .set(this.lineLeft, {autoAlpha:1, attr:{points:points[0].x + ', ' + points[0].y + ' ' + points[0].x2 + ', ' + points[0].y2}})
      .to(this.lineLeft, 1, {autoAlpha:1, attr:{points:points[1].x + ', ' + points[1].y + ' ' + points[1].x2 + ', ' + points[1].y2}})
      .to(this.pointer, 1, {x:this.topLeftCornerX, y:this.topLeftCornerY}, "-=1")
      .set(this.tlc, {autoAlpha: 1}) // Make top left point visible
      .set(this.lineTop, {autoAlpha:1, attr:{points:points[2].x + ', ' + points[2].y + ' ' + points[2].x2 + ', ' + points[2].y2}})
      .to(this.lineTop, 1, {autoAlpha:1, attr:{points:points[3].x + ', ' + points[3].y + ' ' + points[3].x2 + ', ' + points[3].y2}})
      .to(this.pointer, 1, {x:this.topRightCornerX, y:this.topRightCornerY}, "-=1")
      .set(this.trc, {autoAlpha: 1}) // Make top right point visible
      .set(this.lineRight, {autoAlpha:1, attr:{points:points[4].x + ', ' + points[4].y + ' ' + points[4].x2 + ', ' + points[4].y2}})
      .to(this.lineRight, 1, {autoAlpha:1, attr:{points:points[5].x + ', ' + points[5].y + ' ' + points[5].x2 + ', ' + points[5].y2}})
      .to(this.pointer, 1, {x:this.bottomRightCornerX, y:this.bottomRightCornerY}, "-=1")
      .set(this.brc, {autoAlpha: 1}) // Make top right point visible
      .set(this.lineBottom, {autoAlpha:1, attr:{points:points[6].x + ', ' + points[6].y + ' ' + points[6].x2 + ', ' + points[6].y2}})
      .to(this.lineBottom, 1, {autoAlpha:1, attr:{points:points[7].x + ', ' + points[7].y + ' ' + points[7].x2 + ', ' + points[7].y2}})
      .to(this.pointer, 1, {x:this.bottomLeftCornerX, y:this.bottomLeftCornerY}, "-=1")
      .set(this.polyFill, {autoAlpha: 0.6, attr:{points: this.bottomLeftCornerX + ', ' + this.bottomLeftCornerY + ' ' + this.topLeftCornerX + ', ' + this.topLeftCornerY + ' ' + this.topRightCornerX + ', ' + this.topRightCornerY + ' ' + this.bottomRightCornerX + ', ' + this.bottomRightCornerY}})
      .to(this.pointer, 1, {autoAlpha: 0, x:300, y:900})
      .to(this.svg, 0.5, {scale: 1, x:0, y:100, delay: 1})
      .set(this.polyText, {autoAlpha: 0});
  }

  render() {
    return (
      <Div>
        <Svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000" innerRef={x => this.svg = x}>
          <BottomCity xlinkHref={CityBottom} width="100%" height="100%"/>
          <CityLawn xlinkHref={CityPark} width="23%" height="23%"/>
          <TruckContainer innerRef={x => this.truck = x}>
            <BlueTruck/>
          </TruckContainer>
          <TopCity xlinkHref={CityTop} width="33%" height="33%"/>
          <PinContainer innerRef={x => this.pin = x}>
            <MapPin/>
          </PinContainer>
          <Polygon>
            <PolyFill innerRef={x => this.polyFill = x} fill="#ff4d4d" stroke="#e00000" strokeMiterlimit="10" strokeWidth="2"/>
            <CornerPoint innerRef={x => this.trc = x} cx={this.topRightCornerX} cy={this.topRightCornerY} r="4" fill="#ff4d4d" stroke="#e00000" strokeMiterlimit="10" strokeWidth="2"/>
            <CornerPoint innerRef={x => this.brc = x} cx={this.bottomRightCornerX} cy={this.bottomRightCornerY} r="4" fill="#ff4d4d" stroke="#e00000" strokeMiterlimit="10" strokeWidth="2"/>
            <CornerPoint innerRef={x => this.tlc = x} cx={this.topLeftCornerX} cy={this.topLeftCornerY} r="4" fill="#ff4d4d" stroke="#e00000" strokeMiterlimit="10" strokeWidth="2"/>
            <CornerPoint innerRef={x => this.blc = x} cx={this.bottomLeftCornerX} cy={this.bottomLeftCornerY} r="4" fill="#ff4d4d" stroke="#e00000" strokeMiterlimit="10" strokeWidth="2"/>
            <LineDraw innerRef={y => this.lineBottom = y} fill="#fff" stroke="#e00000" strokeMiterlimit="10" strokeWidth="2"/>
            <LineDraw innerRef={x => this.lineLeft = x} fill="#fff" stroke="#e00000" strokeMiterlimit="10" strokeWidth="2"/>
            <LineDraw innerRef={y => this.lineTop = y} fill="#fff" stroke="#e00000" strokeMiterlimit="10" strokeWidth="2"/>
            <LineDraw innerRef={x => this.lineRight = x} fill="#fff" stroke="#e00000" strokeMiterlimit="10" strokeWidth="2"/>
          </Polygon>
          <PointerContainer innerRef={x => this.pointer = x}>
            <Pointer/>
          </PointerContainer>
        </Svg>
        <TextBox>
          <PinText innerRef={x => this.pinText = x}>Specify Exact Points</PinText>
          <TruckText innerRef={x => this.truckText = x}>Efficient Route Planner For Employees</TruckText>
          <PolyText innerRef={x => this.polyText = x}>Powerful Measurement Tools For Quote Calculations</PolyText>
        </TextBox>
      </Div>
    );
  }
}

export default MapAnimation;
