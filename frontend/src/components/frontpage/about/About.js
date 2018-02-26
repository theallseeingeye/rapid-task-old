import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin-top: 5vh;
  height: auto;
`;
const Text = styled.div`
  font-family: ${props => props.theme.RobotoCondensedfont};
  line-height: 2em;
  text-align: justify;
  width: 95%;
  max-width: 1200px;
  margin: auto;
`;

const Text2 = styled.p`
  font-family: ${props => props.theme.RobotoCondensedfont};
  line-height: 2em;
  text-align: center;
  width: 95%;
  max-width: 1200px;
  margin: auto;
  
  a:link {
    color: black;
    text-decoration: none;
  }
  
  a:hover {
    color: ${props => props.theme.logoblue};
  }
`;

class About extends Component {
  render() {
    return (
      <Div  id="aboutScrollTarget">
        <Text>
          Our goal is to help you run and grow your business with more ease than ever!
          Over years of experience operating service based businesses of our own we were able to work with many people from
          different types of businesses and found that the challenges we faced in growing our businesses were anything
          but unique. At times, running a business can get a little bit overwhelming which makes it difficult to find the time
          to stay organized and grow. Desperate for a solution, we began trying various technological solutions hoping to save
          us some time. We found that many of these tools were difficult to use and none of them were comprehensive enough
          to manage the complexity of running our businesses. We needed something more. We banded together in search of a
          solution and founded Rapid Task, the business tool that we all have been needing, desperately.<br/><br/>
        </Text>
        <Text2>
          We are currently seeking investment with the goal of expanding our team. This will allow us to deliver a first-rate
          product to you sooner. If you are interested in getting in touch with our team we can be reached at <br/>
          <a href="mailto:inquiries@rapidtask.com?Subject=%20" target="_top"><b>inquiries@rapidtask.com</b></a>
        </Text2>
      </Div>
    );
  }
}

export default About;

