import React, { Component } from 'react';
import styled from "styled-components";

const Div = styled.div`
  border-top: solid ${props => props.theme.logoblue};
  background-color: ${props => props.theme.logoblue};
  font-family: ${props => props.theme.Robotofont};
`;

const Text = styled.p`
  color: white;
  font-size: 1.5em;
  width: 100%;
  text-align: center;
  margin: 25% 5% 0 0;
  a:link {
    color: white;
    text-decoration: none;
  }
  
  a:hover {
    color: #6cf5ff;
  }
`;

class CareersPage extends Component {
  render() {
    return (
      <Div>
        <Text>
          We are in the early stages of business development. For the time being, if you are interested in being a
          part of our team please send us your resumé at <br/>
          <a href="mailto:inquiries@rapidtask.com?Subject=%20" target="_top"><b>inquiries@rapidtask.com</b></a>
        </Text>
      </Div>
    );
  }
}

export default CareersPage;