import React, { Component } from 'react';
import styled from 'styled-components';
import PhoneCalendar from './svg/PhoneCalendar';

const MainDiv = styled.div`
  max-width: 1200px;
  font-family: ${props => props.theme.Robotofont};
  @media (min-width: ${props => props.theme.desktopscreen}) {
    margin: 0 auto;
    padding: 5px;
  }
  //border: solid yellow;
`;

const Title = styled.p`
  width: 100%;
  text-align: center;
  font-size: 2em;
	font-weight: 900;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4em;
  margin-bottom: 4em;
  width: 100%;
	@media (min-width: ${props => props.theme.tabletscreen}) {
  	flex-direction: row;
  }
  //border: solid purple;
`;

const Content = styled.div`
	width: 100%;
	height: 100%;
	align-self: center;
	//border: solid blue;
`;

const SvgDiv = styled.div`
	width: 100%;
	text-align: center;
	@media (min-width: ${props => props.theme.tabletscreen}) {
    font-weight: 900;
    order: 1; // To flip the svg to other side of text.
  }
	//border: solid red;
`;

const Text = styled.div`
  font-size: 1.2em;
  text-align: center;
  padding: 10px;
  //border: solid green;
`;

const Subhead = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1em;
  font-family: ${props => props.theme.RobotoCondensedfont};
`;

class CalendarFeatures extends Component {
  render() {
    return (
      <MainDiv>
        <FlexContainer>
					<SvgDiv>
          	<PhoneCalendar/>
					</SvgDiv>
					<Content>
						<Title>No More Dealing With Complicated Schedules</Title>
						<Subhead>Let Us Handle the Scheduling for You</Subhead>
						<Text>
							Your business will be more organized than ever. Rapid Task will plan orders, schedule employees,
							schedule with your clients and check for equipment availability; all within the project due date. Any project
							delays will be a breeze with auto rescheduling as handles and assigns responsibilities to your employees.
						</Text>
					</Content>
        </FlexContainer>
      </MainDiv>
    );
  }
}

export default CalendarFeatures;