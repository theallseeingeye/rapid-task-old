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

const TextArea = styled.div`
  //padding-top: 15vh; // adjusts the element from the top under the title
  margin: auto;
`;

const TextLeftLadder = styled.div`
  //border: solid red;
  //margin: auto;
  position: relative;
  height: 30vh;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 60%;
    height: 300%;
    transform-origin: 100% 0;
    transform: rotate(20deg);
    background: grey;
   
  }
`;

const LadderBarrierLeft = styled.div`
  //border: solid green;
  shape-outside: circle(50%);
  width: 50%;
  height: 50%;
  float: right;
`;

const LadderParagraph = styled.p`
  position: relative;
  //float: right;
`;



class EmployeeFeatures extends Component {
  render() {
    return (
      <Div>
        <PaintingBorder/>
        <PainterLadder/>
        <Title> Automate Employee Tasks </Title>
        <TextLeftLadder>
          <LadderParagraph>
          Employees Empowered With Knowledge vasjdfhaskdfh akjsdfa fdsa sdfajSH FKASDFH ASKDFH ASDFH ASKDJHF ASDHF ASDJ
             ADSFASDLKF AJSDF KLASDJF LAor change
          </LadderParagraph>
        </TextLeftLadder>
        <TextArea>
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
