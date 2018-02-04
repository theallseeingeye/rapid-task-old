import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import RepeatButton from './Repeat.svg';
import MapAnimation from './MapLayers/MapAnimation';


const MainDiv = styled.div`
  margin: auto;
  background: white;
  z-index: -4; // Required to let the parking lot layers in above div to hide behind.
  overflow: hidden; // Required for svg when it zooms
  position: relative;
`;

const Title = styled.title`
  
  // Title Styling
  font-family: ${props => props.theme.Robotofont};
  font-weight: 900;
  font-size: 2em;
  text-align: center;
  color: white;
 
  background-color: ${props => props.theme.logoblue};

  width: 100%;
  position: absolute;
  display: block;
  margin: auto;
  z-index: 2;
`;

const MainContext = styled.h1`
  text-align: center;
  font-family: ${props => props.theme.RobotoCondensedfont};
  font-size: 1em;
  margin-top: 10vh;
  position: absolute;
  z-index: 2;
`;

const MapFeatures = styled.p`
  font-family: ${props => props.theme.RobotoCondensedfont};
  font-size: 0.8em;
  margin-top: 70vh;
  position: absolute;
  width: 100%;
  background-color:  ${props => props.theme.logoblue};
  height: 6vh;
  text-align: center;
  z-index: 2;
`;

const MapDetails = styled.div`
  background-color: white;
  height: 40vh; // MAKE SURE IT IS LOW ENOUGH TO COVER MAP
  margin-top: 76vh;
  position: absolute;
  z-index: 2;
  width: 100%;
`;

class CityAnimation extends Component {
  render() {
    return (
      <MainDiv>
        <Title>
          Geospatial Advantage
        </Title>
        <MainContext>
          Gain competitive advantage with use of high resolution satellite imagery.
        </MainContext>
        <MapAnimation/>
        <MapFeatures>
          COOL MAP FEATURES!
        </MapFeatures>
        <MapDetails>
          Map Details
        </MapDetails>
        {/*<Svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 6000 6000">*/}
          {/*<image xlinkHref={CityJpg} width="100%" height="100%"/>*/}
          {/*<BlueTruck/>*/}
          {/*<MapPin/>*/}
          {/*<Polygon/>*/}
          {/*<Text1>*/}
            {/*Efficient routing to save you money.*/}
          {/*</Text1>*/}
          {/*<Text2>*/}
            {/*Use maps to refine quoting processes.*/}
          {/*</Text2>*/}
          {/*<Text3>*/}
            {/*Onboard data tracking for <br/>*/}
            {/*jobs and equipment.*/}
          {/*</Text3>*/}
        {/*</Svg>*/}
        {/*<Text1M>*/}
          {/*Efficient routing to save you money.*/}
        {/*</Text1M>*/}
        {/*<Text2M>*/}
          {/*Use maps to refine quoting processes.*/}
        {/*</Text2M>*/}
        {/*<Text3M>*/}
          {/*Onboard data tracking for <br/>*/}
          {/*jobs and equipment.*/}
        {/*</Text3M>*/}
        {/*<Repeat>*/}
          {/*<img src={RepeatButton} alt="button" />*/}
        {/*</Repeat>*/}
      </MainDiv>
    );
  }
}

export default CityAnimation;
