import React, { Component } from 'react';
import styled from 'styled-components';
import PhoneCalendar from './PhoneCalendar';

const MainDiv = styled.div`
  margin: auto;
  position: relative;
  height: 140vh;
`;

const Header = styled.h1`
  font-family: ${props => props.theme.Robotofont};
  color: black;
  margin: 0 auto;
  text-align: center;
  display: block;
  width: 100%;
  border: solid yellow;
`;

const FlexContainter = styled.div`
  display: flex;
  flex-flow: row wrap;
  //flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  border: solid green;
  height: 100vh;
`;

const Text1 = styled.div`
  font-family: ${props => props.theme.Robotofont};
  font-size: 1em;
  //align-self: center;
  //justify-self: center;
  margin: auto;
  //min-width: 300px;
  height: 28vh;
  border: solid gray;
  //max-width: 500px;
  flex-grow: 1;
`;

const Text2 = styled.div`
  font-family: ${props => props.theme.Robotofont};
  font-size: 1em;
  //justify-self: center;
  //align-self: center;
  margin: auto;
  //min-width: 300px;
  border: solid purple;
  //max-width: 500px;
  height: 25vh;
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
          <PhoneCalendar/>
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