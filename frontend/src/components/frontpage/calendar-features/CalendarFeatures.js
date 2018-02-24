import React, { Component } from 'react';
import styled from 'styled-components';
import PhoneCalendar from './PhoneCalendar';

const MainDiv = styled.div`
  margin: auto;
  position: relative;
  height: 170vh;
  margin: 0 5px 0 5px;
  max-width: 1200px;
  margin: auto;
  font-family: ${props => props.theme.Robotofont};
  @media (min-width: ${props => props.theme.tabletscreen}) {
  height: 145vh;
  }
`;

const Header = styled.p`
  text-align: center;
  display: block;
  width: 100%;
  font-size: 2.5em;
  margin-top: 2em;
  @media (min-width: ${props => props.theme.tabletscreen}) {
  font-weight: 900;
  }
  
`;

const FlexContainter = styled.div`
  display: flex;
  flex-flow: row wrap;
  //flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
`;

const Text = styled.div`
  //align-self: center;
  //justify-self: center;
  margin: auto;
  //min-width: 300px;
  height: 20vh;
  //max-width: 500px;
  flex-grow: 1;
`;

const Subhead = styled.p`
  width: 100%;
  font-size: 1.5em;
  margin-top: -0.5em;
  
`;

class CalendarFeatures extends Component {
  render() {
    return (
      <MainDiv>
        <Header>No More Dealing With Complicated Schedules</Header>
        <FlexContainter>
          <Subhead>Let us handle the scheduling for you</Subhead>
          <Text>
            Once you have engaged with a client, RapidTask will use the information from your quote to automatically
            assign and schedule a team to make sure the job gets done promply. Don't worry, you will have the opportunity
            to make any changes you desire.
          </Text>

          <PhoneCalendar/>
          <Subhead>Prefer to do your scheduling hands on?</Subhead>
          <Text>
            RapidTask's integrated calendar makes setting and adjusting schedules easier than ever before on whatever
            device you prefer to work on. Once you are done tinkering we will let your employees know how the changes
            affect their routes to insure that every task is completed, ever day.
          </Text>
        </FlexContainter>
      </MainDiv>
    );
  }
}

export default CalendarFeatures;