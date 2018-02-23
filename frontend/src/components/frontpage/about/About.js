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

          Our goal is to help you run and grow your business with more ease than ever!



          With years of experience of start ups and running small service based businesses, we had our share of working
          with many other businesses,
          We saw the frustration of business owners who are nearly overworked, and can't find time to be organized or grow,
          on a daily basis. We also worked hard to stay ahead and be organized, also found it to be
          very time consuming. We tried to use some technological solutions hoping to save us some time, but found that
          they lacked functionality, and are lacking ease of use. We formed together as a team to find a solution
          and founded Rapid Task, which is the solution that we all have been needing desperately.




          We are currently seeking investment in order to expand our team so we can deliver a first-rate product to you sooner.
          If you are interested in getting in touch with our team we can be reached at <br/>
          inquiries@rapidtask.com
        </Text>
      </div>
    );
  }
}



export default About;

