import React, { Component } from 'react';
import styled from 'styled-components';

const Text = styled.div`
  font-family: ${props => props.theme.Robotofont};
  line-height: 1.4em;
  text-align: center;
  width: 95%;
  margin: 2.5%;
  @media (min-width: ${props => props.theme.tabletscreen}) {
  font-size: 1.5em;
  }
  @media (min-width: ${props => props.theme.desktopscreen}) {
  width: 60%;
  margin-left: 20%;
  }
  @media (min-width: ${props => props.theme.giantscreen}) {
  line-height: 2em;
  }
`;

class About extends Component {
  render() {
    return (
      <div>
        <Text>
          Our goal is to help make running and growing your business easier than ever!
          At Rapid Task, we are still working on building our business too.
          We are currently seeking investment in order to expand our team so we can deliver a first-rate product to you sooner.
          If you are interested in getting in touch with our team we can be reached at <br/>
          inquiries@rapidtask.com
        </Text>
      </div>
    );
  }
}



export default About;

