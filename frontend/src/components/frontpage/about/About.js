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
            About our skills and what we know
            Let them know what we need to get this project going.
      </MainDiv>
    );
  }
}

export default About;
