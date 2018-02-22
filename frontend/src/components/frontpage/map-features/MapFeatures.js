import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import MapAnimation from './MapLayers/MapAnimation';


const MainDiv = styled.div`
  background: white;
  z-index: -4; // Required to let the parking lot layers in above div to hide behind.
  overflow: hidden; // Required for svg when it zooms
  position: relative;
  width: 100%;
  display: table;
`;

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  
  @media (min-width: ${props => props.theme.tabletscreen}) {
    height: 65vh;
  }
  @media (min-width: ${props => props.theme.desktopscreen}) {
    height: 65vh;
  }
  @media (min-width: ${props => props.theme.giantscreen}) {
    height: 70vh;
  }
`;

const Title = styled.div`
  // Title Styling
  font-family: ${props => props.theme.Robotofont};
  font-weight: 900;
  font-size: 2em;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.65);
  height: 4vh;
  width: 100%;
  position: absolute;
  z-index: 2;
`;

const MainContext = styled.h1`
  width: 100%;
  text-align: center;
  font-family: ${props => props.theme.RobotoCondensedfont};
  font-size: 1.2em;
  margin-top: 10vh;
  position: absolute;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.65);
`;

const MapDetails = styled.p`
  background-color: white;
  position: relative;
  text-align: justify;
  z-index: 5;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 0;
  font-family: ${props => props.theme.Robotofont};
  display: flex;
  
  @media (min-width: ${props => props.theme.tabletscreen}) {
    width: 80%;
    margin-left: 10%;
    
  }
  @media (min-width: ${props => props.theme.desktopscreen}) {
    width: 50%;
    margin-left: 25%;
  }
  @media (min-width: ${props => props.theme.giantscreen}) {

  }
  
`;

class CityAnimation extends Component {
  render() {
    return (
      <MainDiv>
        <Div>
          <Title>
            Geospatial Advantage
          </Title>
          <MainContext>
            Gain competitive advantage with use of high resolution satellite imagery.
          </MainContext>
          <MapAnimation/>
        </Div>
        <MapDetails>
          Place markers to very specific areas of the map. Each marker can provide description of the tasks for your
          clients and employees to read. This can save yourself multiple trips to the site explaining the job tasks <br/><br/>
          Use of GPS on mobile devices will help guide your employees to use the most efficient route to the job sites.
          Also monitor odd activities, such as employees not being on the jobsite while clocking their time. These features
          are available to help your business save unnecessary expenses. <br/><br/>
          Useful measuring tools that can accurately measure out regions of the properties to calculate for your quotes.
          You have options of calculating square footage, linear foot and more. Have ease to pick the units for your
          calculations. You can link each drawn measurement to your quotes.
        </MapDetails>
      </MainDiv>
    );
  }
}

export default CityAnimation;
