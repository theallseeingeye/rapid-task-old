import React, { Component } from 'react';
import styled from 'styled-components';
import PhoneCalendar from './svg/PhoneCalendar';

const MainDiv = styled.div`
  background-color: white; //this is to hide the fixed position animations to prevent them from showing up on slower devices
  position: relative;
  //height: auto;
  margin: 0 5px 0 5px;
  max-width: 1200px;
  font-family: ${props => props.theme.Robotofont};
  @media (min-width: ${props => props.theme.desktopscreen}) {
    margin:auto;
    padding: 5px;
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

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 5vh;
`;

const Text = styled.div`
  text-align: justify;
  height: auto;
  flex-grow: 1;
  line-height: 1.4em;
  font-family: ${props => props.theme.RobotoCondensedfont};
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
        <FlexContainer>
          <Subhead>Let Us Handle the Scheduling for You</Subhead>
          <Text>
            Once you have engaged with a client, Rapid Task will use the information from your quote to automatically
            assign and schedule a team to make sure the job gets done promptly. Based on your preferences, this accounts
            for whatever parameters you set such as hours of operation or availability of employees and equipment. You
            can also set priority weight for clients and jobs that you would like us to schedule sooner. Rapid Task allows you to
            manage employee time-off requests directly on the calendar, and you might even be able to schedule some time off
            for yourself for once! Once the schedule is complete you will have the opportunity to make any changes you desire.
          </Text>

          <PhoneCalendar/>
          <Subhead>Prefer to Do Your Scheduling Hands On?</Subhead>
          <Text>
            Rapid Task's integrated calendar makes setting and adjusting schedules easier than ever before on whatever
            device you prefer to work on. Once you are done tinkering, we will let your employees know how the changes
            affect their routes to insure that every task is completed, every day. If there are any changes in the weather
            or traffic conditions which might result in potential delays we will do our best to keep you informed with
            notifications of changes.
          </Text>
        </FlexContainer>
      </MainDiv>
    );
  }
}

export default CalendarFeatures;