import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PainterThumbsUp from "./svg/PainterThumbsUp";

const Div = styled.div`
  font-family: ${props => props.theme.RobotoCondensedfont};
  height: auto;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  margin-top: 5vh;
  background-color: white; //this is to hide the fixed position animations to prevent them from showing up on slower devices
  display: flex;
  flex-direction: row;
  //border: solid blue;
`;

const Button = styled.button`
  width: 100%;
  height: 63px;
  background: ${props => props.theme.logoblue};
  border: 2px solid white;
  border-radius: 5px;
  text-align: left;
  font-family: ${props => props.theme.Robotofont};
  outline: none;
  color: white;
  font-size: 0.9em;
`;


const TextSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    font-size: 1.5em;
    margin-left: 50px;
  }
  @media (min-width: ${props => props.theme.desktopscreen}) {
    max-width: 1000px;
    margin-right: 150px;
  }
  //border: solid red;
`;

const ContentDiv = styled.div`
  background: #f7f9fc;
  
`;

const ContentAnimate = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  } 
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Content = styled.div`
  padding: 5px;
  font-size: 0.8em;
  animation: ${ContentAnimate} ease-out;
  //transition: max-height 2s ease-out;
`;

const PainterSvg = styled.div`
	height: 100%;
	//border: solid pink;
`;

class EmployeeFeatures extends Component {

  constructor(props) {
    super(props);

    this.state = {
      timeTracking: false,
      employeeRecording: false,
      automaticScheduling: false,
      flexiblePermissions: false,
      employeePerformance: false,
    };
  };

  accordion = (event) => {
    if (event === 'timeTracking') {
      this.setState(prevState => ({
        employeeRecording: false,
        automaticScheduling: false,
        flexiblePermissions: false,
        employeePerformance: false,
        timeTracking: !prevState.timeTracking
      }));
    } if (event === 'employeeRecording') {
      this.setState(prevState => ({
        timeTracking: false,
        automaticScheduling: false,
        flexiblePermissions: false,
        employeePerformance: false,
        employeeRecording: !prevState.employeeRecording
      }));
    } if (event === 'automaticScheduling') {
      this.setState(prevState => ({
        timeTracking: false,
        employeeRecording: false,
        flexiblePermissions: false,
        employeePerformance: false,
        automaticScheduling: !prevState.automaticScheduling
      }));
    } if (event === 'flexiblePermissions') {
      this.setState(prevState => ({
        timeTracking: false,
        employeeRecording: false,
        automaticScheduling: false,
        employeePerformance: false,
        flexiblePermissions: !prevState.flexiblePermissions
      }));
    } if (event === 'employeePerformance') {
      this.setState(prevState => ({
        timeTracking: false,
        employeeRecording: false,
        automaticScheduling: false,
        flexiblePermissions: false,
        employeePerformance: !prevState.employeePerformance
      }));
    }
  };


  render() {

    const timeTracking = this.state.timeTracking ? (
      <ContentDiv>
        <Content>
          Employees will be able to enter and track their hours in real-time. This helps to minimize confusion when
          doing payroll. Having all of the hours documented in the same place, conveniently connected to your
          calendar allows you to quickly verify the information.<br/>
          We'll help you keep track of how long it takes your employees to complete specific tasks. Knowing this
          information ensures that you never quote too low again!<br/>
        </Content>
      </ContentDiv>
      ) : (
      <div />
    );

    const employeeRecording = this.state.employeeRecording ? (
      <ContentDiv>
        <Content>
          Employees can enter company expenses including the materials that are used on the job. Your employees will
          be able to keep track of receipts on the spot through Rapid Task. Not only does this make accounting easier,
          it ensures that you don't have to track down missing receipts every month.
        </Content>
      </ContentDiv>
      ) : (
      <div />
    );

    const automaticScheduling = this.state.automaticScheduling ? (
      <ContentDiv>
        <Content>
          Once a quote has been completed, Rapid Task will schedule a team of your employees automatically based on
          the needs represented in the quote awarded. This automatic scheduling will take total workload, approved time-off,
          hours of operation, and any other considerations into account.
          Employees can also submit their time-off requests directly into Rapid Task to be reviewed, or to communicate
          a shift which they need to be covered by another employee.
        </Content>
      </ContentDiv>
      ) : (
      <div />
    );

    const flexiblePermissions = this.state.flexiblePermissions ? (
      <ContentDiv>
        <Content>
          Rapid Task works for any type of employee. You have complete freedom to share access to whatever features
          you see fit with your staff. Payroll staff can be given permissions to timesheets, and supervisors can be
          granted greater access when updating information or reviewing data. <br />

          You will be able to easily distribute notices, updates, and training information to all of your employees
          in one place. You will also be able to review which of your employees have accessed the information that
          you have shared.
        </Content>
      </ContentDiv>
      ) : (
      <div />
    );

    const employeePerformance = this.state.employeePerformance ? (
      <ContentDiv>
        <Content>
          You will know which staff are really shining, and those
          that are under performing with the click of a button. We want to help you find and keep the best people to
          be a part of your business. <br />
          Employees can receive a list of tasks that are required for the day. Provide incentives for them to work
          efficiently and competently on the job. This helps you stay under budget, while maintaining an exceptional
          quality standard in their work. <br />
        </Content>
      </ContentDiv>
      ) : (
      <div />
    );

    const animation = (event) => {
        if (this.state.timeTracking) {

        }
    };


    return (
      <Div>
        {/*This id is the end trigger for parking lot layers*/}

          <TextSection>

            <Button onClick={() => this.accordion('timeTracking')}>
              Time Tracking
            </Button>
						{timeTracking}
            <Button onClick={() => this.accordion('employeeRecording')}>
              Employees Enter Data
            </Button>
            {employeeRecording}
            <Button onClick={() => this.accordion('automaticScheduling')}>
              Automatic Scheduling
            </Button>
            {automaticScheduling}
            <Button onClick={() => this.accordion('flexiblePermissions')}>
              Flexible Permissions
            </Button>
            {flexiblePermissions}
            <Button onClick={() => this.accordion('employeePerformance')}>
              Employee Performance
            </Button>
            {employeePerformance}
          </TextSection>
					<PainterSvg>
          	<PainterThumbsUp/>
					</PainterSvg>
      </Div>
    );
  }
}

export default EmployeeFeatures;
