import React, { Component } from 'react';
import styled from 'styled-components';
import PainterThumbsUp from "./PainterThumbsUp";
import PainterWalking from "./PainterWalking";
import PainterLadder from "./PainterLadder";
import PaintingBorder from "./PaintingBorder"

const Title = styled.h2`
  margin-right: -60vw; // keeps text left of painter
  margin-top: auto; // to keep to top of div
  width: 40vw; // keeps the width of the text left of painter
  position: relative; // Makes it not conflict the painter
  text-align: right; // Keeps text next to painter
  font-size: 5vh;
`;

const SubTitle = styled.h3`
`;

const Div = styled.div`
  width: 100%;
  background-color: ${props => props.theme.logoblue};
`;

const TextArea = styled.p`
  //padding-top: 15vh; // adjusts the element from the top under the title
  margin: auto;
`;

class EmployeeFeatures extends Component {
  render() {
    return (
      <Div>
        <PaintingBorder/>
        <PainterLadder/>
        <TextArea>
              <Title> Automate Employee Tasks </Title>
          <SubTitle>
            Employees Empowered With Knowledge
          </SubTitle>
          <p> Employees will know all the details of the task to perform the work. This was automatically pulled together
            from the quotes previously made. No more second guessing the job details.
          </p>
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
        </TextArea>
      </Div>
    );
  }
}

export default EmployeeFeatures;
