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
  height: 150vh;
  }
  @media (min-width: ${props => props.theme.desktopscreen}) {
  height: 180vh;
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
