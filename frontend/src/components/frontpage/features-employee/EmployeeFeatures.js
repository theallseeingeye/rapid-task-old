import React, { Component } from 'react';
import styled from 'styled-components';
import PainterThumbsUp from "./svg/PainterThumbsUp";
import PainterWalking from "./svg/PainterWalking";

const Div = styled.div`
  font-family: ${props => props.theme.RobotoCondensedfont};
  height: auto;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
  background-color: white; //this is to hide the fixed position animations to prevent them from showing up on slower devices
`;

const SubTitle = styled.p`
  font-size: 1.5em;
  text-align: left;
  font-family: ${props => props.theme.Robotofont};
`;

const TextArea = styled.div`
  margin: 0 5px 0 5px;
  text-align: justify;
`;

const TextSection = styled.div`
  margin-top: 5vh;
  text-align: justify;
  line-height: 1.4em;
`;

class EmployeeFeatures extends Component {
  render() {
    return (
      <Div id="parkingLotEnd">
        {/*This id is the end trigger for parking lot layers*/}
        <TextArea>
          <TextSection>
            <SubTitle>
              Time Tracking
            </SubTitle>
            <p>
              Employees will be able to enter and track their hours in real-time. This helps to minimize confusion when
              doing payroll. Having all of the hours documented in the same place, conveniently connected to your
              calendar allows you to quickly verify the information.<br/>
              We'll help you keep track of how long it takes your employees to complete specific tasks. Knowing this
              information ensures that you never quote too low again!<br/>
            </p>
            <PainterWalking/>
            <SubTitle>
              Employees Can Directly Record Data With Ease
            </SubTitle>
            <p>
              Employees can enter company expenses including the materials that are used on the job. Your employees will
              be able to keep track of receipts on the spot through Rapid Task. Not only does this make accounting easier,
              it ensures that you don't have to track down missing receipts every month.
            </p>
            <SubTitle>
              Automatic Scheduling
            </SubTitle>
            <p>
              Once a quote has been completed, Rapid Task will schedule a team of your employees automatically based on
              the needs represented in the quote awarded. This automatic scheduling will take total workload, approved time-off,
              hours of operation, and any other considerations into account.
              Employees can also submit their time-off requests directly into Rapid Task to be reviewed, or to communicate
              a shift which they need to be covered by another employee.
            </p>
            <PainterThumbsUp/>
            <SubTitle>
              Flexible Rapid Task Permissions
            </SubTitle>
            <p>
              Rapid Task works for any type of employee. You have complete freedom to share access to whatever features
              you see fit with your staff. Payroll staff can be given permissions to timesheets, and supervisors can be
              granted greater access when updating information or reviewing data.
            </p>
            <p>
              You will be able to easily distribute notices, updates, and training information to all of your employees
              in one place. You will also be able to review which of your employees have accessed the information that
              you have shared.
            </p>
            <SubTitle>
              Employee Performance
            </SubTitle>
            <p>
              You will know which staff are really shining, and those
              that are underperforming with the click of a button. We want to help you find and keep the best people to
              be a part of your business.
            </p>
            <p>
              Being able to effectively track your employees will make it easier to reward the people who are producing
              great results! You can easily set-up incentive programs for your employees, whether that is by piece work
              or by the distribution of bonuses and awards.
            </p>
            <p>
              Employees can receive a list of tasks that are required for the day. Provide incentives for them to work
              efficiently and competently on the job. One example of how this could work for your business could be using
              the method of paying them for the full shift if they are able complete a job before the end of their shift
              and under budget, while maintaining an exceptional quality standard in their work.
            </p>
          </TextSection>
        </TextArea>
      </Div>
    );
  }
}

export default EmployeeFeatures;
