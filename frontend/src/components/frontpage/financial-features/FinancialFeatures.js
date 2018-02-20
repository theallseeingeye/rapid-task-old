import React, { Component } from 'react';
import styled from 'styled-components';
import ManFinance from "./ManFinanceSvg"
import InvoiceSvg from "./InvoiceSvg";

const Div = styled.div`
  overflow: hidden;
  margin: auto;
  height:600vh;
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

const WhiteDiv = styled.div` // This div box is to help hide the invoice scroll. Older mobile delays the appearance.
  position: absolute;
  z-index: -1;
  background-color: white;
  width: 100%;
  height: 45vh;
`;

const RightColumn = styled.div`
  flex: 1; // width of flexbox compared to others
  Width: 65vw;
  margin-top: 50vh;
`;

const LeftColumn = styled.div`
  width: 35vw;
  z-index: -5;
  position: relative;
`;

const FlexContainerLeft = styled.div`
  //display: flex;
  //justify-content: left;
  float: right;
  //display: block;
  margin-right: 98%;
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
`;


const Title1 = styled.div`
  margin-top: 2em;
  font-family: ${props => props.theme.Robotofont};
  font-weight: 900;
  padding-left: 10px;
  padding-right: 10px;
`;

const Context1 = styled.div`
  font-family: ${props => props.theme.RobotoCondensedfont};
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 400;
  text-align: justify;
`;

const MainContent = styled.p`
  height: 50vh;
  font-family: ${props => props.theme.Robotofont};
  float: right;
  text-align: right;
  margin-right: 2%;
  @media (min-width: ${props => props.theme.tabletscreen}) {
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
        <WhiteDiv/>
        <FinanceTitle id="InvoiceActivateTrigger">Automated Accounting</FinanceTitle>

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
                you time on invoicing and taxes, Rapid Task gathers information from your quote, including statistics
                collected during the job, and automatically prepares documents for your review. Here's an example
                showing just how easy this can be with Rapid Task!
              </MainContent>

              <Title1 id="InvoiceTitleTrigger">
                Manage Your Invoices Anywhere
              </Title1>
              <Context1>
                With access on all of your devices, you always can be up to date on invoicing. Rapid Task will monitor
                and notify you as soon as the project is completed and ready to invoice. This helps your business send
                invoices sooner for payments. This equates to a healthy business that can pay their bills on time.
              </Context1>
              <Title1 id="InvoiceHeaderTrigger">
                Make the Invoice Match to Your Business
              </Title1>
              <Context1>
                Our interface allows you with ultimate freedom to stylize the invoice with branding that suits your business.
                You can make your business memorable with an invoice that stands out.
              </Context1>
              <Title1 id="InvoiceBoxTrigger">
                You Never Have to Enter Information Twice
              </Title1>
              <Context1>
                Writing and keeping track of client information can be time consuming. Rapid Task will auto generate your
                invoice with customer's information.
              </Context1>
              <Title1 id="InvoiceLine4ATrigger">
                Rapid Task Enters The Completed Tasks
              </Title1>
              <Context1>
                We are happy to do the heavy lifting. Rapid Task enters data from the job automatically using information
                from your quote and compares the actual work that was done.
              </Context1>
              <Title1 id="InvoiceLine4BTrigger">
                Automatically Calculates Job Costs
              </Title1>
              <Context1>
                Based on real information drawn from work completed for your client, Rapid Task compiles an accurate price
                from your quote and added revisions made by your business.
              </Context1>
              <Title1 id="InvoiceLine5ATrigger">
                Applies
              </Title1>
              <Context1>
                All of the work done by subcontractors is automatically included and just needs to be reviewed
              </Context1>
              <Title1 id="InvoiceLine5BTrigger">
                Subcontracted margins
              </Title1>
              <Context1>
                Any additional margins added to subcontracted work are applied here. You can simply click the number and
                see full details of your margins for each job.
              </Context1>
              <Title1 id="InvoiceLine6ATrigger">
                Flexible for Partial Payments
              </Title1>
              <Context1>
                Your business can even handle large jobs with Rapid Task. You can easily set up progress payments and
                break them up in your invoices. Your billing will always be up to date and tracked where you will never
                miss billing a task of your project.
              </Context1>
              <Title1 id="InvoiceLine6BTrigger">
                No More Guessing How Much To Bill
              </Title1>
              <Context1>
                No more figuring out how much to bill your clients. Rapid Task will easily provide
                calculated costs with options of your choice. In a few clicks, you have sent an accurate price to
                charge.
              </Context1>
              <Title1 id="InvoiceLine6CTrigger">
                ????
              </Title1>
              <Context1>
                Rapid Task tracks your progress payments automatically so you can have some peace of mind
              </Context1>
              <Title1 id="InvoiceLine7ATrigger">
                Customize the Details of the Work
              </Title1>
              <Context1>
                For any of the information presented in your invoice you will maintain complete control of what is visible
                on the client's end. Easy selection of options to show or type your own words.
              </Context1>
              <Title1 id="InvoiceLine7BTrigger">
                Display of Units
              </Title1>
              <Context1>
                As mentioned, you will have final say in all information shared with the client. This allows you to show
                any relevant equipment or material cost you wish to share. You can display quantity, cost per item and
                margins as desired. Rapid Task will assist with conversion calculations based on units you wish to show.
              </Context1>
              <Title1 id="InvoiceLine8ATrigger">
                Splitting and Combining Invoices
              </Title1>
              <Context1>
                Each of your clients have different invoicing requirements. We make it easy for you to split or
                combine the job tasks for billing. Rapid Task will remember the client's invoicing requirements for
                future sales.
              </Context1>
              <Title1 id="InvoiceLine8BTrigger">
                Easy Built In References
              </Title1>
              <Context1>
                The invoice will be interactive with lookup links to each task. When you click it will present you all
                the details that was collected and calculated of the job task. No more complicated menu systems to find
                the information you want. You can allow certain details for your clients to see, such as dates of
                completion or product details.
              </Context1>
              <Title1 id="InvoiceLine9ATrigger">
                Smart GST Handling
              </Title1>
              <Context1>
                Based on your state or province, Rapid Task applies any relevant taxes. If the project was taken place
                in a different state or province, tax laws will be automatically applied according to region.
              </Context1>
              <Title1 id="InvoiceLine9BTrigger">
                Clear Total Due
              </Title1>
              <Context1>
                After compiling all of the job information, Rapid Task produces an accurate and clear price which will be
                sent off to the client once approved
              </Context1>
              <Title1 id="InvoiceLine10Trigger">
                Payment Due-Date
              </Title1>
              <Context1>
                When your clients receive an invoice using Rapid Task, they will be connected directly to our internal
                payment processing so we can make sure you get your money faster than ever. If we don't catch them on the
                first go around we'll take care of sending reminders before the due date comes.
              </Context1>
             <Title1 id="InvoiceFooter1Trigger">
                Important Accounting Information
              </Title1>
              <Context1>
                You can automatically have important relevant information placed, such as sales tax number,
                business license, insurance details and more. This helps keep your business organized.
              </Context1>
             <Title1 id="InvoiceFooter2Trigger">
                Create a Signature
              </Title1>
              <Context1>
                Rapid Task can apply a signature and name of the person who has approved the invoice.
              </Context1>
             <Title1 id="InvoiceStampTrigger">
                Applies Warranty, Terms and Conditions
              </Title1>
              <Context1>
                Conditions and warranty referenced in your estimate will be applied and communicated here. They can be
                originated from the selection of tasks in your quotes. You can use this opportunity to
                solidify your relationship with your clients and seek further sales from them.
              </Context1>
             <Title1 id="InvoicePaidTrigger">
                Never Miss a Payment
              </Title1>
              <Context1>
                With Rapid Task's integrated payment system it is easier for your clients to make payments. The sent
                invoice will have an email link for your clients to see the invoice and make payment. The email system
                will keep track of when your clients has seen the invoices and made payments.
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