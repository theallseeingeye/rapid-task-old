import React, { Component } from 'react';
import styled from 'styled-components';
import GraphAnimation from './GraphAnimation'

const Div = styled.div`
  overflow: hidden;
`;

class AnalyticsFeatures extends Component {
  render() {
    return (
      <Div>
        Super COOL Analytical Features Goes Here!
        <GraphAnimation/>
      </Div>
    );
  }
}

export default AnalyticsFeatures;
