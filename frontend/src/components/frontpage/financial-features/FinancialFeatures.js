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
  width: 99%;
  position: absolute;
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
  height: 50vh;
  font-family: ${props => props.theme.Robotofont};
  float: right;
  text-align: right;
  margin-right: 2%;
  @media (min-width: ${props => props.theme.tabletscreen}) {
  //margin-top: 10vw;
  font-size: 1.5em;
  opacity: 0.7;
  }
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
        <FinanceTitle id="InvoiceActivateTrigger">Automated book-keeping</FinanceTitle>

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
                What used to take hours in administrative work becomes simple with Rapid Task. In order to save
                you time on invoicing and taxes, Rapid Task gathers information from your quote, as well as jobsite data and automatically
                prepares documents for your review. Here's an example showing just how easy this can be with Rapid Task!
              </MainContent>

              <Title1 id="InvoiceTitleTrigger">

              </Title1>
              <Context1>
              </Context1>
              <Title1 id="InvoiceHeaderTrigger">
                 Automatically enter customer's address and information
              </Title1>
              <Context1>
                In order to serve your clients better we make sure that you can always remember important details about your
                customers. This information is consistent from first contact, to quote, to invoice, to a lasting relationship
              </Context1>
              <Title1 id="InvoiceBoxTrigger">
                Customize your invoice layout
              </Title1>
              <Context1>
                In our interface you have ultimate freedom to setup the invoice with branding that suits your business.
                We are here to handle the data for you
              </Context1>
              <Title1 id="InvoiceLine4ATrigger">
                Rapid Task enters job description
              </Title1>
              <Context1>
                We are happy to do the heavy lifting. Rapid Task enters data from the job automatically using information
                from your quote, and onsite data.
              </Context1>
              <Title1 id="InvoiceLine4BTrigger">
                Automatically calculates job costs
              </Title1>
              <Context1>
                Based on real information drawn from work completed for this client, Rapid Task compiles an accurate price
                for the job
              </Context1>
              <Title1 id="InvoiceLine5ATrigger">
                Applies subcontracted
              </Title1>
              <Context1>
                All of the work done by subcontractors is automatically included and just needs to be reviewed
              </Context1>
              <Title1 id="InvoiceLine5BTrigger">
                Subcontracted margins
              </Title1>
              <Context1>
                Any additional margins added to subcontracted work are applied here.
              </Context1>
              <Title1 id="InvoiceLine6ATrigger">
                Progress payments
              </Title1>
              <Context1>
                Keep track of large projects and partial payments on jobs
              </Context1>
              <Title1 id="InvoiceLine6BTrigger">
                Progree payment details
              </Title1>
              <Context1>
                Display percentage of work completed compared with payments due
              </Context1>
              <Title1 id="InvoiceLine6CTrigger">
                Payment in percentage
              </Title1>
              <Context1>
                Rapid Task tracks your progress payments automatically so you can have some peace of mind
              </Context1>
              <Title1 id="InvoiceLine7ATrigger">
                Customized, detailed descriptions of work completed
              </Title1>
              <Context1>
                For any of the information presented in your invoice you will maintain complete control of what is visible
                on the client's end.
              </Context1>
              <Title1 id="InvoiceLine7BTrigger">
                Costs per unit
              </Title1>
              <Context1>
                As mentioned, you will have final say in all information shared with the client. This allows you to show
                any relevant equipment or material cost you wish to share.
              </Context1>
              <Title1 id="InvoiceLine8ATrigger">
                Splitting and combining invoices
              </Title1>
              <Context1>
                Rapid Task has the versatility to meet any clients needs, including splitting and combining to fit their
                situation
              </Context1>
              <Title1 id="InvoiceLine8BTrigger">
                Easy reference to invoices for this client
              </Title1>
              <Context1>
                This way you can keep track of all of the work done for this client automatically and provide better service
                over the lifetime customer provider relationship
              </Context1>
              <Title1 id="InvoiceLine9ATrigger">
                GST
              </Title1>
              <Context1>
                Based on your state or province, Rapid Task applies any relevant taxes
              </Context1>
              <Title1 id="InvoiceLine9BTrigger">
                Total charges to be paid by your client
              </Title1>
              <Context1>
                After compiling all of the job information, Rapid Task produces an accurate and clear price which will be
                sent off to the client once approved
              </Context1>
              <Title1 id="InvoiceLine10Trigger">
                Payment due-date
              </Title1>
              <Context1>
                When your clients receive an invoice using Rapid Task, they will be connected directly to our internal
                payment processing so we can make sure you get your money faster than ever. If we don't catch them on the
                first go around we'll take care of sending reminders before the due date comes.
              </Context1>
             <Title1 id="InvoiceFooter1Trigger">
                Invoice number
              </Title1>
              <Context1>
                This helps to keep your business organized. If you would prefer, we can help you build a system to manage this
              </Context1>
             <Title1 id="InvoiceFooter2Trigger">
                Create a digital signature to sign off your completed work
              </Title1>
              <Context1>

              </Context1>
             <Title1 id="InvoiceStampTrigger">
                Applies warranty, terms and conditions
              </Title1>
              <Context1>
                Conditions and warranty referenced in your estimate will be applied and communicated here
              </Context1>
             <Title1 id="InvoicePaidTrigger">
                Rapid Task will catalog your paid invoices
              </Title1>
              <Context1>
                Never miss a payment. With Rapid Task's integrated payment system it is easier for your clients to make
                payments
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