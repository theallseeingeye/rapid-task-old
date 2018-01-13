import React, { Component } from 'react';
import styled from 'styled-components';
import Devices from './../images/devices';
import BulletPoint from './../images/bullet-point.svg';

const FeatureDiv = styled.div`
  height: 100%;
`;

const Text = styled.p`
  font-family: ${props => props.theme.Robotofont};
  font-weight: 900;
  text-align: center;
  margin: auto;
  padding: 4px;
`;

const DeviceContainer = styled.div`
  width: 100%;
  height: 22vh;
  //margin: auto;
  margin-top: 1em;
  //display: block;
`;

const List = styled.ul`
  //list-style: none;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  justify-content: center;
  list-style-image: url(${BulletPoint});
  margin: auto;
  margin-top: 2em;
  position: relative
`;

const ListItem = styled.li`
  //line-height: 30px;
  //padding-left: 30px;
`;

const ListText = styled.a`
  font-family: ${props => props.theme.Robotofont};
  margin: auto;
  font-size: 1.1em;
`;

const Text3 = styled.p`
  font-family: ${props => props.theme.RobotoCondensedfont};
  margin: auto;
  size: 0.5em;
`;

class Features extends Component {
  render() {
    return (
      <FeatureDiv>
        <Text>
        Rapid Task manages your daily business tasks quickly with ease across all platforms <br/>
        </Text>
        <DeviceContainer>
          <Devices/>
        </DeviceContainer>
        <Text>
        You now can automate every business task at your fingertips
        </Text>
        <List>
          <ListItem>
            <ListText>
              Automatic Quote Generator
            </ListText>
          </ListItem>
          <li>
            <ListText>
              Keep Track of Clients
            </ListText>
          </li>
          <li>
            <ListText>
              Automatically Keep Track of Jobs
            </ListText>
          </li>
          <li>
            <ListText>
              Automatic Invoicing
            </ListText>
          </li>
          <li>
            <ListText>
              Employee Scheduling and Tracking
            </ListText>
          </li>
          <li>
            <ListText>
              Expense Tracking
            </ListText>
          </li>
          <li>
            <ListText>
              Equipment Tacking
            </ListText>
          </li>
          <li>
            <ListText>
              Full Accounting Support
            </ListText>
          </li>
          <li>
            <ListText>
              Business Analytics
            </ListText>
          </li>
        </List>
      </FeatureDiv>
    );
  }
}

export default Features;
