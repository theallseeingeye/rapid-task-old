import React, { Component } from 'react';
import styled from 'styled-components';
import ParkingLotAnimation from './ParkingLotAnimation'
import ManQuoting from "./ManQuoting"


const QuoteTitle = styled.p`
  position: absolute;
  z-index: 3;
  border: solid green;
`;

const MainContext = styled.p`
  margin-top: 10vh;
  width: 50vw;
  height: 30vh;
  float: left;
  border: solid green;
  position: absolute;
`;

const Title1 = styled.p`
  flex-grow: 0.1;
  border: solid red;
  margin: auto;
`;

const Context1 = styled.p`
  flex-grow: 1;
  border: solid blue;
  margin: auto;
`;

const FlexContainer = styled.div`
  // Flex box container options
  display: flex;
  flex-direction: column;
  
  // Alignment 
  position: absolute;
  width: 49vw;
  margin-left: 50vw;
  margin-top: 70vh;
  height: 530vh;
  
  border: solid deeppink;
`;



class Quotes extends Component {
  render() {
    return (
      <div id="parentDiv">

        <QuoteTitle> Main Quote Title </QuoteTitle>
        <MainContext> Main context box </MainContext>

        <ParkingLotAnimation/>
        <ManQuoting/>

        {/*Elements tagged with id's for identifying triggers*/}
        <FlexContainer>
          <Title1 id="bottomTrigger">
            Bottom Layer Title
          </Title1>
          <Context1>
            Bottom Layer Text
          </Context1>

          <Title1 id="gravelTrigger">
            Gravel Layer Title!
          </Title1>
          <Context1>
            Gravel Layer Context
          </Context1>

          <Title1 id="asphaltTrigger">
            Asphalt Layer Text!
          </Title1>
          <Context1>
            Asphalt Context
          </Context1>

          <Title1 id="curbsTrigger">
            Curbs Title
          </Title1>
          <Context1>
            Curbs text
          </Context1>

          <Title1 id="grassTrigger">
            Grass Title
          </Title1>
          <Context1>
            Grass Text
          </Context1>

          <Title1 id="lampsTrigger">
            Lamps Title
          </Title1>
          <Context1>
            Lamps context
          </Context1>

          <Title1 id="treesTrigger">
            Treess Title
          </Title1>
          <Context1>
            Trees text
          </Context1>

          <Title1 id="linesTrigger">
            Lines Title
          </Title1>
          <Context1>
            Liness text
          </Context1>

          <Title1 id="pylonsTrigger">
            Pylons Title
          </Title1>
          <Context1>
            Pylons text
          </Context1>

        </FlexContainer>




      </div>
    );
  }
}

export default Quotes;
