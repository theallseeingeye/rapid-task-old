import React, { Component } from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
  height: 50vh;
  
  //background-color: rgba(63,169,245,1);
`;

const AboutText1 = styled.div`
  font-family: ${props => props.theme.Robotofont};
  font-weight: bold;
  width: 100%;
  text-align: center;
`;

const Email = styled.p`
  padding: 3px;
  border: solid black;
  p:hover {
  color: pink;
  }
`;

class About extends Component {
  copyToClipboard = () => {
    const textField = document.createElement('textarea')
    textField.innerText = 'inquiries@rapidtask.com'
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  };
  render() {
    return (
      <MainDiv>
        <AboutText1>
          Our goal is to make running and growing your business easier than ever! At RapidTask, we are still working on
          building our business to provide an outstanding experience to all of our users.
          We are currently seeking investment in order to expand our team so we can deliver a first-rate product to you
          sooner.
          If you are interested in getting in touch with our team we can be reached at
          <Email onClick={this.copyToClipboard}>inquiries@rapidtask.com</Email>
        </AboutText1>

      </MainDiv>
    );
  }
}



export default About;