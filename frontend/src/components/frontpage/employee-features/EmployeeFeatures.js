import React, { Component } from 'react';
import styled from 'styled-components';
import PainterThumbsUp from "./PainterThumbsUp";
import PainterWalking from "./PainterWalking";
import PainterLadder from "./PainterLadder";
import PaintingBorder from "./PaintingBorder"


const Div = styled.div`
  width: 100%;
  overflow: hidden;
`;

const SubTitle = styled.h3`
  //border: solid orange;
`;

const TextArea = styled.div`
  font-family: ${props => props.theme.Robotofont};
  //padding-top: 15vh; // adjusts the element from the top under the title
  //margin-top: 20vh;
  //border: solid pink;
  position: absolute;
`;

const Subheader = styled.div`
  text-align: justify;
  padding: 10px;
  position: absolute;
`;

const TextSection = styled.div`
  margin-top: 25vh;
`;


class EmployeeFeatures extends Component {
  render() {
    return (
      <Div id="parkingLotEnd">
        {/*This id is the end trigger for parking lot layers*/}
        <PainterLadder/>
        <TextArea>
          <Subheader>
            You can empower your employees by making them feel responsibile and important. Rapid Task can provide employees
            transparent work schedule with job details in advanced. Employees can be informed each job details that were
            carried from the build of the quotes. Your employees will feel more better prepared. Happier employees creates
            a better business.

          </Subheader>
          <TextSection>
            <SubTitle>
              Time Tracking
            </SubTitle>
            <p>
            Keep track of how long the employees are working on a task <br/>
            Time Sheets- Employees can enter time and know their hours. Updated in real time <br/>
            Employee Performance Tracking- track how well they are doing vs. estimated budget <br/>
            </p>
            <PainterWalking/>
            <SubTitle>
            Employees Record Data With Ease
            </SubTitle>
            <p>
            Employees can enter company expenses. They can enter materials used.
            Always keep track of receipts on the spot and for easy accounting
            </p>
            <SubTitle>
            Automatic Scheduling
            </SubTitle>
            <p>
            The schedule for employees will follow automatically from the job quotes created and awarded.
            Employees can easily request time off or easily communicate for shift cover
            </p>
              <PainterThumbsUp/> <br/>
            <SubTitle>
              Flexible Rapid Task Permissions
            </SubTitle>
            <p>
              Rapid Task works for any type of employees. Can apply access payroll for staff members who are
              given permission. Supervisors can have access to more control for updating information.
            </p>
            <p>
              Easily distribute notices, updates and training information across your employees.
            </p>
            <p>
              Easily set up incentive programs for your employees. You can decide to pay by piece work or bonuses
            </p>
            <p>
              Employees can receive a list of tasks that are required for the day. Provide incentives for them to work
              efficiently and completing the job. An example would be paying them for the full shift if they complete
              the job sooner than their shift, while meeting quality work.
            </p>
          </TextSection>
        </TextArea>
      </Div>
    );
  }
}

export default EmployeeFeatures;
