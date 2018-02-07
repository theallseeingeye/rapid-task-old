import React, { Component } from 'react';
import styled from 'styled-components';
import DevicesSVG from './DeviceSvg';
import BulletPoint from './bullet-point.svg';
import CloudsSvg from "./CloudsSvg";

const FeatureDiv = styled.div`
  height: 130vh;
  position: relative;
  width: 100%;
`;

const TextTitle = styled.p`
  font-family: ${props => props.theme.Robotofont};
  font-weight: 900;
  text-align: center;
  margin: auto;
  padding: 4px;
`;

const TextFooter = styled.p`
  font-size: 1em;
  height: 10vh;
`;

const DeviceContainer = styled.div`
  //width: 100%;
  height: 35vh;
  margin: auto;
  
  //background: linear-gradient(rgba(63,169,245,0) 5%, rgba(100,220,245,0.8) 80%,  rgba(63,169,245,0) 95%);
  display: flex;
  justify-content: center;
  align-self: center;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  list-style-image: url(${BulletPoint});
  margin: auto;
  margin-top: 2em;
  margin-bottom: 2em;
  //position: absolute;
  height: 50vh;
`;

const ListItem = styled.li`
  height: 6vh;
  position: relative;
`;

const ListText = styled.a`
  font-family: ${props => props.theme.Robotofont};
  margin: auto;
  font-size: 1.0em;
`;


// const Background = styled.div`
//   background: rgb(59, 79, 90); // Background of devices
//   height: 20vh;
//   justify-content: center;
//   align-self: flex-end;
//   position: absolute;
//   //width: 100vw;
//   margin-bottom: 2vh;
//   z-index: 1;
// `;

class Features extends Component {
  render() {
    return (
      <FeatureDiv>
        <TextTitle>
          Rapid Task manages your daily business tasks quickly with ease across all platforms <br/>
        </TextTitle>
        <DeviceContainer>
          <DevicesSVG/>
          {/*<Background/>*/}
        </DeviceContainer>
        <TextTitle>
        You now can automate every business task at your fingertips.
        </TextTitle>
        <List>
          <ListItem>
            <ListText>
              Creates Simple Steps for Producing Faster and More Accurate Quotes
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Proves Business Organization to Clients
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Knows The Exact Status and Progress of All Your Jobs
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Automates Paper Work of Invoicing and Billing
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
          Since Rapid Task Focuses On Each Business Task, it is Flexible For All Service Based Businesses <br/><br/>
          Strong secure cloud integration
        </TextFooter>

        <CloudsSvg/>
      </FeatureDiv>
    );
  }
}

export default Features;
