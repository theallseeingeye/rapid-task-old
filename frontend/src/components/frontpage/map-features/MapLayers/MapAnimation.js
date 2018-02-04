import React, { Component } from 'react';
import styled from 'styled-components';
import {TweenMax} from 'gsap';

import BlueTruck from "./TruckSvg";
import MapPin from "./MapPin";
import Polygon from "./Polygon";


import CityBottom from './cityBottom1000px.gif';

import CityPark from './cityCommunityPark.gif';
import CityTop from './cityTallBuildings.gif';

const Div = styled.div`
  position: absolute;
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



class MapAnimation extends Component {

  componentDidMount() {

  const TruckAnimate = new TimelineMax({repeat: -1, delay: 3});


  TruckAnimate.set(this.truck, {autoAlpha: 1, transform: 'translate(390px, 230px) scale(0.13)'})
    .set(this.svg, {scale:1})
    .to(this.svg, 0.5, {scale:1.7, transformOrigin:'50% 50%', x:20, y:300})
    .to(this.svg, 2, {x:-60, y: 200})
    .to(this.truck, 2, {autoAlpha:1, x: 640, y: 375}, '-=2')
    .to(this.truck, 0.2, {scaleX:-0.13, transformOrigin:'50% 50%'}, '-=0.2') //To flip the truck
    .to(this.svg, 2, {x:60, y:100})
    .to(this.truck, 2, {x: 300, y: 572}, '-=2')
    .to(this.svg, 0.5, {scale:1, x:0, y:100})



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
          <MapPin/>
          <Polygon/>
        </Svg>
      </Div>
    );
  }
}

export default MapAnimation;
