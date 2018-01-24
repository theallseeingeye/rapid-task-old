import React, { Component } from 'react';
import styled from 'styled-components';
import ParkingLotLayers from './ParkingLotAllLayers'


const Text = styled.p`
  position: absolute;
`;

class Quotes extends Component {
  render() {
    return (
      <div>
        <ParkingLotLayers/>
        <Text>
        Am I able to make words happen here?
        </Text>
      </div>
    );
  }
}

export default Quotes;
