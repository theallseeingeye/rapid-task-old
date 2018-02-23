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
    height: 66vh;
  }
  @media (min-width: ${props => props.theme.desktopscreen}) {
    height: 51vh;
  }
  @media (min-width: ${props => props.theme.giantscreen}) {
    height: 51vh;
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
          Integrating the use of maps is a smart choice for keeping your business organized. You can use the high detailed
          satellite imagery to help illustrate the job details for your employees. Save on equipment expenses by directing
          your employees the most efficient route to work sites. Rapid Task can monitor the gps locations
          of the employees to the scheduled work locations, to ensure schedule is being kept, if not notifications if there are any discrepancy. The use of
          maps are not only for your employees, but also your clients. As you build your quotes, you can use the maps to
          mark and measure for your quotes. With that you can choose to show the details of the markings with the clients
          to ensure that you both are on the same terms of agreement. All of your markings and notes made from each
          job will be stored for your convenience and to calculate analytics to help further perfect your business. This
          is an excellent way keep a very detailed record of your business automatically for any legal matters.
        </MapDetails>
      </MainDiv>
    );
  }
}

export default CityAnimation;
