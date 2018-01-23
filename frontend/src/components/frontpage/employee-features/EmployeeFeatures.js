import React, { Component } from 'react';
import styled from 'styled-components';
import PainterThumbsUp from "./PainterThumbsUp";
import PainterWalking from "./PainterWalking";
import PainterLadder from "./PainterLadder";

const Title = styled.h2`
  margin: auto;
  display: block;
`;

const SubTitle = styled.h3`
  margin: auto;
`;

const Div = styled.div`
  width: 100%;
`;

class EmployeeFeatures extends Component {
  render() {
    return (
      <Div>
        <Title> Rapid Task Employees </Title>
        <PainterThumbsUp/> <br/>
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
         <PainterLadder/>
        <SubTitle>
          Flexible Rapid Task Permissions
        </SubTitle>
        <p>
          Rapid Task works for any type of employees. Can apply access payroll for staff members who are
          given permission. Supervisors can have access to more control for updating information.
        </p>

      </Div>
    );
  }
}

export default EmployeeFeatures;
