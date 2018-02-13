import React, { Component } from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
  height: 1vh;
`;

const Mask = styled.div`
  height: 55vh;
  background: white;
  background: linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,1));
`;

class ContactMask extends Component {
  render() {
    return (
      <MainDiv>
        <Mask/>
      </MainDiv>
    );
  }
}

export default ContactMask;