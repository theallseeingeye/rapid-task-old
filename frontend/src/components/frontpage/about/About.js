import React, { Component } from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 102vh;
  background-color: rgba(113, 130, 161, 1);
`;





class About extends Component {
  render() {
    return (
      <MainDiv>
            ABOUT RAPID TASK!
      </MainDiv>
    );
  }
}

export default About;
