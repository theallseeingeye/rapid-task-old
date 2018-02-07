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

const MapDetails = styled.div`
  background-color: white;
  height: 40vh; // MAKE SURE IT IS LOW ENOUGH TO COVER MAP
  margin-top: 80vh;
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
        <MapDetails>
          Map Details
        </MapDetails>

      </MainDiv>
    );
  }
}

export default CityAnimation;
