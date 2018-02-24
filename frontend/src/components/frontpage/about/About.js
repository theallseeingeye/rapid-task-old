import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin-top: 10vh;
  height: 35vh;
`;
const Text = styled.div`
  font-family: ${props => props.theme.Robotofont};
  line-height: 1.4em;
  text-align: center;
  width: 95%;
  max-width: 1200px;
  @media (min-width: ${props => props.theme.tabletscreen}) {
  font-size: 1.5em;
  }
  @media (min-width: ${props => props.theme.desktopscreen}) {
  
  }
  @media (min-width: ${props => props.theme.giantscreen}) {
  line-height: 2em;
  margin: auto;
  }
`;

class About extends Component {
  render() {
    return (
      <Div>
        <Text>
          Our goal is to help you run and grow your business with more ease than ever!
          At Rapid Task, we are still working on building our business too.
          We are currently seeking investment in order to expand our team so we can deliver a first-rate product to you sooner.
          If you are interested in getting in touch with our team we can be reached at <br/>
          inquiries@rapidtask.com
        </Text>
      </Div>
    );
  }
}



export default About;

