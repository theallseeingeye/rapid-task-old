import React, { Component } from 'react';
import styled from 'styled-components';
import ParkingLotAnimation from './ParkingLotAnimation'
import ManQuoting from "./ManQuoting"


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
  float: left;
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
`;

const Title1 = styled.p`
  flex-grow: 0.1;
  //border: solid red;
  margin: auto;
  font-family: ${props => props.theme.Robotofont};
  font-weight: 900;
  text-align: left;
  width: 100%;
`;

const Context1 = styled.p`
  flex-grow: 1;
  //border: solid blue;
  margin: auto;
  font-family: ${props => props.theme.RobotoCondensedfont};
  //font-style: 900;
  font-weight: 400;
`;

const Columns = styled.div`
  display: flex;
  //border: solid red;
  justify-content: center;
`;

const RightColumn = styled.div`
  //border: solid blue;
  flex: 1; // width of flexbox compared to others
  Width: 50vw;
  margin-top: 80vh;
`;

const LeftColumn = styled.div`
  //border: solid green;
  flex: 1;
  width: 50vw;
`;

const FlexContainer = styled.div`
  // Flex box container options
  display: flex;
  flex-direction: column;
  
  // Alignment 
  height: 530vh;
  
  //border: solid deeppink;
`;



class Quotes extends Component {
  render() {
    return (
      <div id="parentDiv">

        <QuoteTitle> Automatic Quoting </QuoteTitle>
        <ManQuoting/>

        <Columns >

          <LeftColumn>

            <MainContext>
              Let Rapid Task remove the tedious steps and automatically calculate your quotes for you. Easily customize your
              estimating process that works for your business.
            </MainContext>
            <Example>
              EXAMPLE
            </Example>
            <ParkingLotAnimation/>
          </LeftColumn>

          <RightColumn>


             {/*Elements tagged with id's for identifying triggers*/}
            <FlexContainer>
              <Title1 id="bottomTrigger">
                Quoting <br/>
                a <br/>
                Parking Lot
              </Title1>
              <Context1>
                We begin with simple information:<br/>
                Provide customer information<br/>
                Enter location of site<br/>
                Select Job Type<br/>
                Enter Measurement of parking lot.<br/>
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
                Asphalt Layer Text!
              </Title1>
              <Context1>
                Select Crew and receive estimated time for how long to complete project. Add more or less to try to meet
                with scheduled date.
              </Context1>

              <Title1 id="curbsTrigger">
                Curbs Title
              </Title1>
              <Context1>
                Curbs
              </Context1>

              <Title1 id="grassTrigger">
                Landscaping
              </Title1>
              <Context1>
                Grass Text
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
                Trees Title
              </Title1>
              <Context1>
                Add details of where trees are located. Crew can receive this information when it comes to doing the task
              </Context1>

              <Title1 id="linesTrigger">
                Lines Title
              </Title1>
              <Context1>
                Can simplify your quoting steps such as simply providing line count and provides all the numbers based on
                previous average labour time.
              </Context1>

              <Title1 id="pylonsTrigger">
                Pylons Title
              </Title1>
              <Context1>
                This is where we can add specific instructions specifically for employees. Set Pylons to let the paint dry.
              </Context1>
            </FlexContainer>
          </RightColumn>

        </Columns>


      </div>
    );
  }
}

export default Quotes;
