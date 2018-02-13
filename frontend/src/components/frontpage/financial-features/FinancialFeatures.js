import React, { Component } from 'react';
import styled from 'styled-components';
import ManFinance from "./ManFinanceSvg"
import InvoiceSvg from "./InvoiceSvg";

const Div = styled.div`
  overflow: hidden;
  margin: auto;
  height:450vh;
  position: relative;
`;

const FinanceTitle = styled.p`
  font-family: ${props => props.theme.Robotofont};
  font-weight: 900;
  font-size: 2.5em;
  text-align: right;
  position: absolute;
  width: 95%;
`;

const RightColumn = styled.div`
  flex: 1; // width of flexbox compared to others
  Width: 50vw;
  margin-top: 50vh;
`;

const LeftColumn = styled.div`
  width: 50vw;
  border: solid green;
`;

const FlexContainerLeft = styled.div`
  //display: flex;
  //justify-content: left;
  float: right;
  display: block;
  margin-right: 85%;
`;

const FlexContainerRight = styled.div`
  // Flex box container options
  display: flex;
  flex-direction: column;
  
  // Alignment 
  height: 350vh;
`;

const Columns = styled.div`
  display: flex;
  justify-content: center;
`;


const Title1 = styled.p`
  flex-grow: 0.001;
  border: solid red;
  margin: auto;
  font-family: ${props => props.theme.Robotofont};
  font-weight: 900;
  text-align: center;
  width: 100%;
`;

const Context1 = styled.p`
  flex-grow: 0.1;
  margin: auto;
  font-family: ${props => props.theme.RobotoCondensedfont};
  padding: 10px;
  font-weight: 400;
  border: solid yellow;
`;

const MainContent = styled.p`
  height: 30vh;
`;

// This div is required to close the animation of the invoice.
const DivEnd = styled.div`
  bottom: 0;
  position: absolute;
  height: 1px;
  width: 100%;
`;




class FinancialFeatures extends Component {
  render() {
    return (
      <Div>
        <FinanceTitle id="InvoiceActivateTrigger"> Automated book-keeping</FinanceTitle>
        <ManFinance/>

        <Columns>


          <LeftColumn>
            <FlexContainerLeft>
              <InvoiceSvg/>
            </FlexContainerLeft>
          </LeftColumn>

          <RightColumn>
            <FlexContainerRight>

              <MainContent>
                Blah blah
              </MainContent>

              <Title1 id="InvoiceTitleTrigger">
                InvoiceTitleTrigger
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
              </Context1>
              <Title1 id="InvoiceHeaderTrigger">
                InvoiceHeaderTrigger
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
              </Context1>
              <Title1 id="InvoiceBoxTrigger">
                InvoiceBoxTrigger
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
              </Context1>
              <Title1 id="InvoiceLine4ATrigger">
                InvoiceLine4ATrigger
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
              </Context1>
              <Title1 id="InvoiceLine4BTrigger">
                InvoiceLine4BTrigger
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
              </Context1>
              <Title1 id="InvoiceLine5ATrigger">
                InvoiceLine5ATrigger
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
              </Context1>
              <Title1 id="InvoiceLine5BTrigger">
                InvoiceLine5bTrigger
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
              </Context1>
              <Title1 id="InvoiceLine6ATrigger">
                InvoiceLine6ATrigger
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
              </Context1>
              <Title1 id="InvoiceLine6BTrigger">
                InvoiceLine6BTrigger
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
              </Context1>
              <Title1 id="InvoiceLine6CTrigger">
                InvoiceLine6CTrigger
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
              </Context1>
              <Title1 id="InvoiceLine7ATrigger">
                InvoiceLine7ATrigger
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
              </Context1>
              <Title1 id="InvoiceLine7BTrigger">
                InvoiceLine7BTrigger
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
              </Context1>
              <Title1 id="InvoiceLine8ATrigger">
                InvoiceLine8ATrigger
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
              </Context1>
              <Title1 id="InvoiceLine8BTrigger">
                InvoiceLine8BTrigger
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
              </Context1>
              <Title1 id="InvoiceLine9ATrigger">
                InvoiceLine9ATrigger
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
              </Context1>
              <Title1 id="InvoiceLine9BTrigger">
                InvoiceLine9BTrigger
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
              </Context1>
              <Title1 id="InvoiceLine10Trigger">
                InvoiceLine10Trigger
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
              </Context1>
             <Title1 id="InvoiceFooter1Trigger">
                InvoiceFooter1Trigger
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
              </Context1>
             <Title1 id="InvoiceFooter2Trigger">
                InvoiceFooter2Trigger
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
              </Context1>
             <Title1 id="InvoiceStampTrigger">
                InvoiceStampTrigger
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
              </Context1>
             <Title1 id="InvoicePaidTrigger">
                InvoicePaidTrigger
              </Title1>
              <Context1>
                Never repeat yourself and only enter data once!
              </Context1>

            </FlexContainerRight>
          </RightColumn>


        </Columns>
        <DivEnd id="InvoiceEndTrigger"/>
      </Div>
    );
  }
}

export default FinancialFeatures;