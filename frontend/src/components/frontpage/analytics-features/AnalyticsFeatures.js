import React, { Component } from 'react';
import styled from 'styled-components';
import GraphAnimation from './GraphAnimation'

const Div = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  border: solid yellow;
`;

const Title = styled.p`
  font-family: ${props => props.theme.Robotofont};
  font-weight: 900;
  color: black;
  font-size: 2em;
  position: absolute;
  margin: auto;
  top: 0;
`;


class AnalyticsFeatures extends Component {

  render() {
    return (
      <Div>
        <Title> Strong Data Means Stronger Business</Title>
        <GraphAnimation/>
      </Div>
    );
  }
}

export default AnalyticsFeatures;
