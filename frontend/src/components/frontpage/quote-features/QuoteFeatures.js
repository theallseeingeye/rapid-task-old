import React, { Component } from 'react';
import styled from 'styled-components';
import ParkingLotAnimation from './ParkingLotLayers/ParkingLotAnimation';
import ManQuoting from "./ParkingLotLayers/ManQuoting";

const Div = styled.div`
  overflow: hidden;
  margin: auto;
  position: relative; // Required to help arrange the divs- especially the trigger div, as we need it to the bottom.
  border: solid green;
`;

const QuoteTitle = styled.p`
  margin: 0 auto;
  font-family: ${props => props.theme.Robotofont};
  font-size: 2.5em;
  text-align: center;
  position: absolute;
  margin-top: 15vh;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  
  @media (min-width: ${props => props.theme.tabletscreen}) {
 
  }
  
  @media (min-width: ${props => props.theme.desktopscreen}) {
    margin-left: 25vw;
    text-align: left;
    margin-top: 20vh;
  }
  
  
`;

const MainContext = styled.p`
  width: 50%;
  margin: auto;
  text-align: left;
  margin-left: 5px;
  font-size: 1.2em;
  font-family: ${props => props.theme.RobotoCondensedfont};
`;

const Example = styled.p`
  font-family: ${props => props.theme.Robotofont};
  float: right;
  text-align: center;
  margin: auto;
  margin-top: 15vh;
`;

const Title1 = styled.p`
  flex-grow: 0.1;
  margin: auto;
  font-family: ${props => props.theme.Robotofont};
  text-align: center;
  width: 100%;
`;

const Context1 = styled.p`
  flex-grow: 1;
  margin: auto;
  font-family: ${props => props.theme.RobotoCondensedfont};
  padding: 10px;
  text-align: justify;
`;

const Columns = styled.div`
  display: flex;
  //justify-content: center;
  //border: solid red;
  width: 100%;
`;

const RightColumn = styled.div`
  //flex: 1; // width of flexbox compared to others
  Width: 45vw;
  margin-top: 80vh;
`;

const LeftColumn = styled.div`
  //flex: 1;
  width: 45vw;
  margin-top: 80vh;

`;

const FlexContainer = styled.div`
   //Flex box container options
  display: flex;
  flex-direction: column;
  
  // Alignment 
  height: 530vh;
`;

// This div is required for the scrollMagic to trigger the tween animation of the Parking Lot Layers off.
const EndTrigger = styled.div`
  bottom: 0;
  position: absolute;
  height: 1px; // Need this to give something to trigger on.
  width: 100%;
`;

const WhiteDiv = styled.div`
  // This div is to block the animation from appearing near the top above the estimating man.
  width: 100%;
  height: 70vh;
  position: absolute;
  background: white;
  z-index: -5;
`;

const WhiteBar = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  width: 100%;
  height: 28vh;
  margin-top: 60vh;
`;




class Quotes extends Component {
  render() {
    return (
      <Div id="parentDiv">
        <WhiteDiv/>
        <QuoteTitle>Automate Quotes</QuoteTitle>
        <ManQuoting/>
        <WhiteBar>
          <MainContext>
            Providing accurate quotes can be tedious and time consuming. Rapid Task removes the tedious steps, allowing
            you to build your quotes quckly. We allow easy custom estimating processes that works for your business.
          </MainContext>
        </WhiteBar>
        <Columns >
          <LeftColumn>
            {/*Elements tagged with id's for identifying triggers*/}
            <FlexContainer>

              <Example>
                EXAMPLE
              </Example>
              <Title1 id="bottomTrigger">
                Quoting a Parking Lot
              </Title1>
              <Context1>
                Rapid Task will automatically propagate data from existing Customers or assist in creating a new profile
                for your customer. We want to make sure that you don't have to enter information more than once. Let us
                handle your contacts with efficiency. After you select your customer you want to provide a quote for,
                we help you follow steps that way information is never missed from your quotes. Lets start with the
                Parking Lot that we want to build a quote for. The basic information will only require dimension of the
                land you are developing on, then you select the tasks that are required for the construction.
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
