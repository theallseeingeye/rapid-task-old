import React, { Component } from 'react';
import styled from 'styled-components';
import DevicesSVG from './Svg/DeviceSvg';
import CloudsSvg from "./Svg/CloudsSvg";

const FeatureDiv = styled.div`
  font-family: ${props => props.theme.Robotofont};
  height: 975px;
  position: relative;
  background: linear-gradient(white 20%, ${props => props.theme.logoblue} 27%, ${props => props.theme.logoblue} 27%);
  @media (min-width: ${props => props.theme.tabletscreen}) {
  height: 1100px;
  }
  @media (min-width: ${props => props.theme.desktopscreen}) {
   height: 1200px;
  }
`;

const TextTitle = styled.p`
  text-align: center;
  padding: 4px;
  font-size: 1.2em;
`;

const TextFooter = styled.p`
  font-family: ${props => props.theme.RobotoCondensedfont};
  font-size: 1.3em;
  text-align: center;
  z-index: 5;
`;

const DeviceContainer = styled.div`
  height: 35vh;
  min-height: 200px;
  display: flex;
  align-self: center;
    min-height: 300px;
  }
`;

const List = styled.div`
  padding: 5px;
  list-style: none;
  text-align: center;

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  
    height: 350px;

`;

const ListItem = styled.p`
  height: 6vh;
  position: relative;
  margin: auto;
`;

const ListText = styled.a`
  margin: auto;
  font-size: 1.0em;
  color: white;
`;


class Features extends Component {
  render() {
    return (
      <FeatureDiv id="featuresScrollTarget">
        <TextTitle>
          Rapid Task helps you manage your business tasks with ease across all platforms <br/>
        </TextTitle>
        <DeviceContainer>
          <DevicesSVG/>
        </DeviceContainer>
        <TextTitle>
          You now can automate every business task at your fingertips
        </TextTitle>
        <List>
          <ListItem>
            <ListText>
              Simple steps for producing accurate quotes faster
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Improved business organization
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Status and progress tracking for all of your jobs
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Automated invoicing and billing
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Statistical performance reporting for your employees
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Efficient steps for updating inventory and expenses
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Equipment tracking for maintenance schedules and usage
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Full accounting support
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Analytics at your fingertips to better understand your business
            </ListText>
          </ListItem>
        </List>
        <TextFooter>
          Flexible for all Service Based Businesses
        </TextFooter>
        <CloudsSvg/>
      </FeatureDiv>
    );
  }
}

export default Features;
