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
  //padding-top: 15vh; // adjusts the element from the top under the title
  margin-top: 1vh;
  //border: solid pink;
  position: absolute;
`;

const TextRightLadder = styled.p`
  //margin-right: -60vw; // keeps text left of painter
  margin-left: 65vw;
  margin-top: 20vh; // to keep to top of div
  width: 32vw; // keeps the width of the text left of painter
  position: absolute; // Makes it not conflict the painter
  text-align: left; // Keeps text next to painter
  border: solid grey;
`;

const Title = styled.h2`
  margin-right: -60vw; // keeps text left of painter
  margin-top: auto; // to keep to top of div
  width: 39vw; // keeps the width of the text left of painter
  position: absolute; // Makes it not conflict the painter
  text-align: right; // Keeps text next to painter
  font-size: 5vh;
`;

// const TextLeftLadder = styled.div`
//   border: solid red;
//   //margin: auto;
//   margin-top: 20vh;
//   position: absolute;
//   //height: 100vh;
//
// `;

const LadderParagraph = styled.p`
  display: flex;
  border: solid orange;
  
  //float: right;
`;


const RightLadder1 = TextRightLadder.extend`
  width: 38vw;
  margin-top: 30vh;
  margin-left: 60vw;
  border: solid green;
`;

const RightLadder2 = TextRightLadder.extend`
  width: 43vw;
  margin-top: 40vh;
  margin-left: 55vw;
  border: solid green;
`;

const RightLadder3 = TextRightLadder.extend`
  width: 50vw;
  margin-top: 50vh;
  margin-left: 48vw;
  border: solid green;
`;

const RightLadder4 = TextRightLadder.extend`
  width: 57vw;
  margin-top: 60vh;
  margin-left: 41vw;
  border: solid green;
`;

const RightLadder5 = TextRightLadder.extend`
  width: 63vw;
  margin-top: 70vh;
  margin-left: 35vw;
  border: solid green;
`;

// Triple Flex UNIT.

// To do- Apply the shape-outer css and use this as a fallback.
const FlexTest = styled.ul`
  display: flex;
  justify-content: space-around;
  //position: relative;
  list-style: none;
  padding: 0;
  border: solid yellow;
  height: 20vh;
`;

const MiddleItem = styled.li`
  width: 20vw;
  border: solid red;
  order: 2;
`;

const LeftItem = styled.li`
  order: 1;
  border: solid white;
  flex: 2;
  text-align: center;
  font-size: 1.5em;
  margin: auto;
`;

const RightItem = styled.li`
  order: 3;
  border: solid green;
  flex: 2;
  text-align: center;
  margin: auto;
  width: 100%;
`;

const FlexTest2 = FlexTest.extend`
  height: 8vh;
`;

const MiddleItem2 = MiddleItem.extend`
  width: 80px;
`;

const LeftItem2 = LeftItem.extend`
  flex: 1.9;
  font-size: 1em;
`;

const MiddleItem3 = MiddleItem.extend`
  width: 50px;
`;

const LeftItem3 = LeftItem2.extend`
  flex: 1.5;
`;

const LeftItem4 = LeftItem2.extend`
  flex: 1;
`;

const RightItem4 = RightItem.extend`
  flex: 1.5;
`;

const LeftItem5 = LeftItem2.extend`
  flex: 0.5%;
`;

class EmployeeFeatures extends Component {
  render() {
    return (
      <Div>
        {/*<PaintingBorder/>*/}
        <PainterLadder/>
        {/*<Title> Automate Employee Tasks </Title>*/}


         {/*<TextRightLadder>*/}
          {/*Right of ladder*/}
        {/*</TextRightLadder>*/}
        {/*<RightLadder1>*/}
          {/*Line 2*/}
        {/*</RightLadder1>*/}
        {/*<RightLadder2>*/}
          {/*Line 3*/}
        {/*</RightLadder2>*/}
        {/*<RightLadder3>*/}
          {/*Line 4*/}
        {/*</RightLadder3>*/}
        {/*<RightLadder4>*/}
          {/*line 5*/}
        {/*</RightLadder4>*/}
        {/*<RightLadder5>*/}
          {/*Line 6*/}
        {/*</RightLadder5>*/}


        {/*<FlexTest>*/}
          {/*<LeftItem>Easily Manage Employees</LeftItem>*/}
          {/*<MiddleItem/>*/}
          {/*<RightItem>something poopy ass</RightItem>*/}
        {/*</FlexTest>*/}

         {/*<FlexTest2>*/}
          {/*<LeftItem2>Easily Manage Employees</LeftItem2>*/}
          {/*<MiddleItem2/>*/}
          {/*<RightItem>something poopy ass</RightItem>*/}
        {/*</FlexTest2>*/}

        {/*<FlexTest2>*/}
          {/*<LeftItem3>Easily Manage Employees</LeftItem3>*/}
          {/*<MiddleItem3/>*/}
          {/*<RightItem>something poopy ass</RightItem>*/}
        {/*</FlexTest2>*/}

        {/*<FlexTest2>*/}
          {/*<LeftItem4/>*/}
          {/*<MiddleItem3/>*/}
          {/*<RightItem4>something poopy ass</RightItem4>*/}
        {/*</FlexTest2>*/}

         {/*<FlexTest2>*/}
          {/*<LeftItem5/>*/}
          {/*<MiddleItem3/>*/}
          {/*<RightItem>something poopy ass</RightItem>*/}
        {/*</FlexTest2>*/}

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
