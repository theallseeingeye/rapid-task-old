import React, { Component } from 'react';
import styled from 'styled-components';
import GraphAnimation from './GraphAnimation'
import CalendarGraph from './CalendarGraph'

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
  margin: auto;
  top: 0;
`;

const Text1 = styled.p`

`;

const Text2 = styled.p`

`;

const Graph1 = styled.div`
  position: absolute;
  width: 100%;
`;

const Graph2 = styled.div`
  transform: translate(200px, 200px);
  border: solid red;
  width: 100%;
`;


class AnalyticsFeatures extends Component {

  render() {
    return (
      <Div>
        <Title> Strong Data Means Stronger Business</Title>
        <Text1>

        </Text1>
        <Graph1>
          <GraphAnimation key="1"/>
        </Graph1>
        <Text2>
          AFDSLJABJDABLKADFJBJFDAIJBFDAJBFDAJBFDAB
        </Text2>
        <CalendarGraph/>

      </Div>
    );
  }
}

export default AnalyticsFeatures;
