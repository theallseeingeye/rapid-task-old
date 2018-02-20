import React, { Component } from 'react';
import styled from 'styled-components';
import ParkingLotAnimation from './ParkingLotLayers/ParkingLotAnimation';
import ManQuoting from "./ParkingLotLayers/ManQuoting";
import Arrow from "../global-svg/Arrow";

const Div = styled.div`
  overflow: hidden;
  width: 100vw;
  margin: auto;
  position: relative; // Required to help arrange the divs- especially the trigger div, as we need it to the bottom.
`;

const QuoteTitle = styled.p`
  margin: auto;
  font-family: ${props => props.theme.Robotofont};
  font-weight: 900;
  font-size: 2.5em;
  text-align: center;
  padding-left: 2px;
  position: absolute;
  margin-top: 5vh;
`;

const MainContext = styled.p`
  width: 100%;
  text-align: left;
  margin-top: 50vh;
`;

const Example = styled.p`
  font-family: ${props => props.theme.Robotofont};
  float: right;
  text-align: center;
  //border: solid pink;
  margin: auto;
  margin-top: 15vh;
`;

const Title1 = styled.p`
  flex-grow: 0.1;
  //border: solid red;
  margin: auto;
  font-family: ${props => props.theme.Robotofont};
  font-weight: 900;
  text-align: center;
  width: 100%;
`;

const Context1 = styled.p`
  flex-grow: 1;
  margin: auto;
  font-family: ${props => props.theme.RobotoCondensedfont};
  padding: 10px;
  font-weight: 400;
  font-size: 0.8em;
  text-align: justify;
`;

const Columns = styled.div`
  display: flex;
  justify-content: center;
`;

const RightColumn = styled.div`
  flex: 1; // width of flexbox compared to others
  Width: 50vw;
  margin-top: 80vh;
`;

const LeftColumn = styled.div`
  flex: 1;
  width: 50vw;
`;

const FlexContainer = styled.div`
  // Flex box container options
  display: flex;
  flex-direction: column;
  
  // Alignment 
  height: 530vh;
`;

// This div is required for the scrollMagic to trigger the tween animation of the Parking Lot Layers off.
const EndTrigger = styled.div`
  bottom: 0;
  position: absolute;
  height: 1px;
  width: 100%;
`;



class Quotes extends Component {
  render() {
    return (
      <Div id="parentDiv">

        <QuoteTitle>Automate Quotes</QuoteTitle>
        <ManQuoting/>

        <Columns >

          <LeftColumn>
            {/*Elements tagged with id's for identifying triggers*/}
            <FlexContainer>
              <MainContext>
                Rapid Task removes the tedious steps of placing quotes for your jobs. Easily customize your
                estimating process that works for your business.
              </MainContext>
              <Example>
                EXAMPLE
              </Example>
              <Title1 id="bottomTrigger">
                Quoting a Parking Lot
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
                Provide description of: <br/>
                Select Customer<br/>
                Add Location<br/>
                Input Dimensions<br/>
                All of this information is automatically carried across your business tasks

              </Context1>
              <Title1 id="gravelTrigger">
                First Step
              </Title1>
              <Context1>
                You easily plan the steps <br/>
                Add "Packed Gravel":<br/>
                Next Select Equipment Required. Each equip will have metrics of how long to do a task. <br/>
                ( Show equipment working on the surface.)
              </Context1>
              <Title1 id="asphaltTrigger">
                Paving the Lot
              </Title1>
              <Context1>
                Select Crew and receive estimated time for how long to complete project. Add more or less to try to meet
                with scheduled date.
              </Context1>
              <Title1 id="curbsTrigger">
                Install Curbs
              </Title1>
              <Context1>
                Curbs. Only enter the total linear measurement required, and select concrete type. That is all! The
                materials, labour and overhead is automatically calculated for your quote.
              </Context1>

              <Title1 id="grassTrigger">
                Landscaping
              </Title1>
              <Context1>
                Turn on Rapid Task's schedule watch on specific tasks.
                As soon as curbs are completed, Rapid Task can assist scheduling the landscapers to come immediately after,
                while keeping the project schedule on time.
              </Context1>

              <Title1 id="lampsTrigger">
                Install Street Lamps
              </Title1>
              <Context1>
                Sub-contractor request for quote with ease. <br/>
                Enter specs for sub contractors<br/>
                Send request for quote to subcontractors by a click<br/>
                Automatically keep tracks of quote requests and notifies when to review.
              </Context1>

              <Title1 id="treesTrigger">
                Plant Trees
              </Title1>
              <Context1>
                Add details of where trees are located. Crew can receive this information when it comes to doing the task
              </Context1>

              <Title1 id="linesTrigger">
                Paint Traffic Lines
              </Title1>
              <Context1>
                Can simplify your quoting steps such as simply providing line count and provides all the numbers based on
                previous average labour time. Keep track of what materials are needing to be ordered to complete the
                project. Rapid Task can notify in advance of important supply order dates.
              </Context1>

              <Title1 id="pylonsTrigger">
                Employees Instructions
              </Title1>
              <Context1>
                This is where we can add specific instructions specifically for employees. Set Pylons to let the paint dry.
              </Context1>
            </FlexContainer>
          </LeftColumn>

          <RightColumn>
            <ParkingLotAnimation/>
          </RightColumn>

        </Columns>

        <EndTrigger id="endTrigger"/>
      </Div>
    );
  }
}

export default Quotes;
