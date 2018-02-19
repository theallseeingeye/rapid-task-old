import React, { Component } from 'react';
import OfficeBeach from './OfficeBeach';
import styled from 'styled-components';
import SubscriptionForm from './SubscriptionForm';


const BackgroundContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  // To fade the background
  opacity: 1;
  // To place behind all divs
  z-index: -1;
  height: unset;
  // To hid the sides that are stretching beyond the div
  overflow: hidden;
   @media (min-width: ${props => props.theme.tabletscreen}) {
  height: 160vh;
  }
  @media (min-width: ${props => props.theme.desktopscreen}) {
  height: 210vh;
  }
  @media (min-width: ${props => props.theme.giantscreen}) {
  height: 170vw;
  }
`;

const BackgroundBox = styled.div`
  align-self: flex-start;
  margin: auto;
  width: 100%;
`;

const FormElements = styled.form`
  font-family: ${props => props.theme.Robotofont};
  margin: 0.25em;
  position: absolute;
  font-size: 1.6em;
  opacity: 0.7;
  
  @media (min-width: ${props => props.theme.tabletscreen}) {
  margin-top: 40vw;
  margin-left: 2em;
  }
  @media (min-width: ${props => props.theme.giantscreen}) {
  margin-top: 50vw;
  margin-left: 2em;
  }
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 1.2em;
  opacity: 1;
`;

const Name = styled.input`
  border-radius: 6px;
`;

const Email = styled.input`
  border-radius: 6px;
`;

const Subscribe = styled.input`
  border-radius: 20px;
  background-color: ${props => props.theme.logoblue};
  border-color: darkcyan;
  font-size: 1.1em;
`;

class Contact extends Component {
  render() {
    return (
      <div>
        <SubscriptionForm/>
        <BackgroundContainer>

          <BackgroundBox>
            <OfficeBeach/>
          </BackgroundBox>
        </BackgroundContainer>
      </div>
    );
  }
}

export default Contact;
