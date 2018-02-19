import React, { Component } from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
  height: 60vh;
  
  //background-color: rgba(63,169,245,1);
`;

const AboutText1 = styled.div`
  font-family: ${props => props.theme.Robotofont};
  font-weight: bold;
  width: 100%;
  line-height: 1.4em;
  text-align: center;
  
`;


class About extends Component {
  render() {
    return (
      <MainDiv>
        <AboutText1>
          Our goal is to help make running and growing your business easier than ever! <br/>
          At Rapid Task, we are still working on building our business too. <br/>
          We are currently seeking investment in order to expand our team so we can deliver a first-rate product to you sooner. <br/>
          If you are interested in getting in touch with our team we can be reached at inquiries@rapidtask.com
        </AboutText1>

      </MainDiv>
    );
  }
}



export default About;