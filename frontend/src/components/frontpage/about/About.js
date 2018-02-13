import React, { Component } from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
  height: 55vh;
  background: white;
  background: linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,1));
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
