import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
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
  //color: white;
  background-color: rgba(255, 255, 255, 0.65);
  //background-color: {props => props.theme.logoblue};

  width: 100%;
  position: absolute;
  display: block;
  margin: auto;
  z-index: 2;
`;

const MainContext = styled.h1`
  width: 100%;
  text-align: center;
  font-family: ${props => props.theme.RobotoCondensedfont};
  font-size: 1em;
  margin-top: 10vh;
  position: absolute;
  //z-index: 2;
  background-color: rgba(255, 255, 255, 0.65);
  //border: solid red;
`;

const MapDetails = styled.div`
  background-color: white;
  height: 40vh; // MAKE SURE IT IS LOW ENOUGH TO COVER MAP
  margin-top: 80vh;
  padding: 5px;
  position: absolute;
  text-align: center;
  z-index: 2;
  width: 100%;
  font-family: ${props => props.theme.Robotofont};
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
        <MapDetails>
          -Place markers with description for your clients and employees. Easily communicate site location specifics. <br/>
          -Use of GPS and trip planning to integrate with scheduling of employees' days and travel costs <br/>
          -Measure distances and calculate areas to show job boundaries and use as measurements for quotes
        </MapDetails>
      </MainDiv>
    );
  }
}

export default CityAnimation;
