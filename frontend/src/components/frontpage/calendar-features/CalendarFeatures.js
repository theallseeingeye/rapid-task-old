import React, { Component } from 'react';
import styled from 'styled-components';
import CalendarSvg from "./CalendarSvg";

const MainDiv = styled.div`
  margin: auto;
  position: absolute;
  height: 130vh;
  border: solid red;
  
`;

const Header = styled.h1`
  font-size: 1.1em;
  color: black;
  margin: 0 auto;
  text-align: center;
  display: block;
  width: 100%;
  //border: solid yellow;
`;

const FlexContainter = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  //border: solid green;
  height: 115vh;
`;

const Svg = styled.svg`
  height: 90vh;
  margin: auto;
  min-width: 350px;
  //border: solid red;
  flex-grow: 1;
`;

const Text1 = styled.div`
  font-size: 1em;
  align-self: center;
  justify-self: center;
  margin: 0 auto;
  min-width: 300px;
  height: 25vh;
  //border: solid gray;
  flex-grow: 1;
`;

const Text2 = styled.div`
  font-size: 1em;
  justify-self: center;
  align-self: center;
  min-width: 300px;
  //border: solid purple;
  height: 28vh;
  flex-grow: 1;
`;


class CalendarFeatures extends Component {
  render() {
    return (
      <MainDiv>
        <Header>Integrated Calendar for Seamless Scheduling Solutions</Header>
        <FlexContainter>
          <Text1>
            <h3>Let us handle the scheduling for you</h3>
            Once you have engaged with a client, RapidTask will use the information from your quote to automatically
            assign and schedule a team to make sure the job gets done promply. Don't worry, you will have the opportunity
            to make any changes you desire.
          </Text1>
          <CalendarSvg/>
          <Text2><h3>Prefer to do your scheduling hands on?</h3>
            RapidTask's integrated calendar makes setting and adjusting schedules easier than ever before on whatever
            device you prefer to work on. Once you are done tinkering we will let your employees know how the changes
            affect their routes to insure that every task is completed, ever day.
          </Text2>
        </FlexContainter>
      </MainDiv>
    );
  }
}

export default CalendarFeatures;
