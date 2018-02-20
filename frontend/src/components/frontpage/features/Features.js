import React, { Component } from 'react';
import styled from 'styled-components';
import DevicesSVG from './DeviceSvg';
import CloudsSvg from "./CloudsSvg";

const FeatureDiv = styled.div`
  height: 130vh;
  position: relative;
  width: 100%;
  background: linear-gradient(white 20%, ${props => props.theme.logoblue} 27%, ${props => props.theme.logoblue} 27%);
`;

const TextTitle = styled.p`
  font-family: ${props => props.theme.Robotofont};
  font-weight: 900;
  text-align: center;
  margin: auto;
  padding: 4px;
`;

const TextFooter = styled.p`
  font-family: ${props => props.theme.RobotoCondensedfont};
  font-size: 1.3em;
  height: 5vh;
  margin: auto;
  text-align: center;
  position: relative;
  z-index: 5;
  margin-top: 5vh;
`;

const DeviceContainer = styled.div`
  height: 35vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-self: center;
`;

const List = styled.div`
  padding: 5px;
  list-style: none;
  text-align: center;
  margin: auto;
  margin-top: 2em;
  margin-bottom: 2em;
  height: 50vh;
`;

const ListItem = styled.p`
  height: 6vh;
  position: relative;
  margin: auto;
`;

const ListText = styled.a`
  font-family: ${props => props.theme.Robotofont};
  margin: auto;
  font-size: 1.0em;
  color: white;
`;

class Features extends Component {
  render() {
    return (
      <FeatureDiv>
        <TextTitle>
          Rapid Task manages your daily business tasks quickly with ease across all platforms <br/>
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
              Simple Steps for Producing Faster and Accurate Quotes
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Improves Your Business Organization
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Know the Exact Status and Progress of All Your Jobs
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Automates Invoicing and Billing
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Provides Accurate Performance of Employees
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Efficient Steps For Updating Inventory and Expenses
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Equipment Tracking For Usage and Maintenance
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Full Accounting Support
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Understand Your Business Health With Powerful Analytics
            </ListText>
          </ListItem>
        </List>
        <TextFooter>
          Flexible For All Service Based Businesses
        </TextFooter>
        <CloudsSvg/>
      </FeatureDiv>
    );
  }
}

export default Features;
