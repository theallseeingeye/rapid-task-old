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
        You now can automate every business task at your fingertips.
          ( You can track every business task at your fingertips. )
        </Text>
        <List>
          <ListItem>
            <ListText>
              Creates Simple Steps for Producing Faster and More Accurate Quotes
            </ListText>
          </ListItem>
          <li>
            <ListText>
              Proves Business Organization to Clients
            </ListText>
          </li>
          <li>
            <ListText>
              Knows The Exact Status and Progress of All Your Jobs
            </ListText>
          </li>
          <li>
            <ListText>
              Automates Paper Work of Invoicing and Billing
            </ListText>
          </li>
          <li>
            <ListText>
              Provides Accurate Performance of Employees
            </ListText>
          </li>
          <li>
            <ListText>
              Efficient Steps For Updating Inventory and Expenses
            </ListText>
          </li>
          <li>
            <ListText>
              Equipment Tracking For Usage and Maintenance
            </ListText>
          </li>
          <li>
            <ListText>
              Full Accounting Support
            </ListText>
          </li>
          <li>
            <ListText>
              Understand Your Business Health With Powerful Analytics
            </ListText>
          </li>
        </List>
        <Text>
          Since Rapid Task Focuses On Each Business Task, it is Flexible For All Service Based Businesses
        </Text>
      </FeatureDiv>
    );
  }
}

export default Features;
