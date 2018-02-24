import React, { Component } from 'react';
import styled from 'styled-components';
import GraphAnimation from './GraphAnimation'
import CalendarGraph from './CalendarGraph'

const Div = styled.div`
  overflow: hidden;
  width: 100%;
  height: 200vh;
  background: linear-gradient(rgba(255,255,255,0) 5%, rgba(255,255,255,0) 5%, deeppink 15%) ;
`;

const Title = styled.p`
  font-family: ${props => props.theme.Robotofont};
  font-weight: 900;
  color: black;
  font-size: 2em;
  margin: auto;
  position: absolute;
  margin-top: 25vh;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.7);
`;

const Text1 = styled.p`
  font-family: ${props => props.theme.RobotoCondensedfont};
  position: absolute;
  margin-top: 45vh;
  width: 100%;
  text-align: center;
`;

const Text2 = styled.div`
  position: absolute;
  margin-top: 50vh;
  padding: 10px;
  text-align: justify;
  width: 100%;
`;





class AnalyticsFeatures extends Component {

  render() {
    return (
      <Div>
        <Title>Know the Health of Your Business</Title>
        <Text1>
          Powerful Analytics from Beginning to end of your Business
        </Text1>
        <Text2>
          Rapid Task will be able to provide important information of every business task. Starting from first meeting
          with your client through to billing ending with follow ups for more sales, data is analyzed for your benefit.
          More information is collected to provide powerful valuable insights of how well your business is doing.
          We are focused on providing ways to show you how to increase profit and growth of your business.
        </Text2>
        <GraphAnimation/>
        <CalendarGraph/>

      </Div>
    );
  }
}

export default AnalyticsFeatures;
