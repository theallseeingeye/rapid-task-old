import React, { Component } from 'react';
import styled from 'styled-components';
import MapAnimation from './MapLayers/MapAnimation';


const MainDiv = styled.div`
  font-family: ${props => props.theme.Robotofont};
  background: white; // To mask the animation layers
  z-index: -4; // Required to let the parking lot layers in above div to hide behind.
  overflow: hidden; // Required for svg when it zooms
  width: 100%;
  margin: auto;
  position: relative;
  height: auto;
  display: flex;
  flex-direction: column;
  //border: solid green;
`;


const Div = styled.div`
  position: relative; // To push the main context after
  width: 100%;
  height: 45vh;
  min-height: 540px;
  max-width: 1200px;
  margin: 0 auto;
  //border: solid brown;
`;

const Title = styled.p`
  // Title Styling
  //margin-top: -.3vh;
  font-size: 2em;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.65);
  width: 100%;
  position: absolute;
  z-index: 2;
  @media (min-width: ${props => props.theme.tabletscreen}) { 
    font-weight: 900;
  }
`;

const MainContext = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.5em;
  margin-top: 18vh;
  position: absolute;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.65);
  @media (min-width: ${props => props.theme.tabletscreen}) {
    margin-top: 50px;
  }
`;

const MapDetails = styled.div`
  max-width: 1200px;
  background-color: white; // To hide the animation behind
  text-align: center;
  z-index: 5;
  line-height: 1.4em;
  margin: 0 auto;
	padding: 10px;
  font-family: ${props => props.theme.RobotoCondensedfont};
  //border: solid yellow;
`;

class CityAnimation extends Component {
  render() {
    return (
      <MainDiv>

        <Div>
          <Title>
            Always on top of your Business
          </Title>
          <MapAnimation/>
        </Div>
        <MapDetails>
          Integrating the use of maps is a smart choice for keeping your business organized. You can use the high resolution
          satellite imagery to help illustrate job details for your employees. Also save on equipment expenses by directing
          your employees the most efficient route on their travels. Rapid Task can monitor the gps locations
          of the employees to the scheduled work locations, to ensure schedule is being kept, if not, notifications can alert
          discrepancies. The use of
          maps are not only for your employees, but also your clients. As you build your quotes, you can use the maps to
          mark and measure your quotes. With that you can show the details of the markings with clients
          to ensure that you both are on the page of agreement. All of your markings and notes made from each
          job will be stored for your convenience and calculate analytics to help further perfect your business. This
          is an excellent automated way keep a very detailed record of your business for any legal matters.
        </MapDetails>
      </MainDiv>
    );
  }
}

export default CityAnimation;
