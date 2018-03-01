import React, { Component } from 'react';
import styled from 'styled-components';
import ManFinance from "./svg/ManFinanceSvg"
import InvoiceSvg from "./svg/InvoiceSvg";
import theme from "../../../global-styles/DefaultTheme";

const Div = styled.div`
  font-family: ${props => props.theme.Robotofont};
  margin: auto;
  height: auto;
  position: relative;
  max-width: 1200px;
`;

const Svg = styled.svg`
  position: absolute;
  z-index: -3;
  transform: translate(-20%, -20%);
  @media (min-width: ${props => props.theme.giantscreen}) {
    max-width: 1200px; // To keep the layers from getting too big
  }
`;

const ManGraphic = styled.div`
  @media (min-width: 1200px) {
    margin-left: 15vw;
  }
`;

const FinanceTitle = styled.p`
  font-size: 2.5em;
  text-align: center;
  width: 100%;
  position: absolute;
  z-index: 2;
  @media (min-width: ${props => props.theme.tabletscreen}) {
   font-weight: 900;
  }
`;

const WhiteDiv = styled.div` // This div box is to help hide the invoice scroll. Older mobile delays the appearance.
  position: absolute;
  z-index: -1;
  background-color: white;
  width: 50%;

  // Required to keep the box from growing down too much on screen resize.
  max-height: 40vw;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    max-height: 60vw;
  }
  @media (min-width: ${props => props.theme.desktopscreen}) {
    max-height: 39vw;
  }
  @media (min-width: ${props => props.theme.giantscreen}) {
    max-height: 30vw;
    width: 51%;
  }
`;

const DivSpacer = styled.div` // Controls the spacing of the right column for the text.
  width: 100%;
  position: relative;

  // To control the boundaries along the svg
  height: 100vw;
  max-height: 69vw;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    max-height: 70vw;
  }
  @media (min-width: ${props => props.theme.desktopscreen}) {
    max-height: 60vw;
  }
  @media (min-width: ${props => props.theme.giantscreen}) {
    max-height: 950px;
  }
`;

const RightColumn = styled.div`
  width: 65vw;
  flex: 1;
  position: relative;
`;

const LeftColumn = styled.div`
  width: 35vw;
  z-index: -2;
  position: relative;
  margin-left: 5px;
  height: auto;
  @media (min-width: ${props => props.theme.desktopscreen}) {
    flex: 1;
  }
`;

const FlexContainerLeft = styled.div`
  display: flex;
  justify-content: right;
`;

const FlexContainerRight = styled.div`
  // Flex box container options
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Columns = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 0 20vh 0;
`;


const Title1 = styled.div`
  margin-top: 2em;
  font-size: 1.2em;
  padding-left: 10px;
  padding-right: 10px;
  flex-grow: 0.001;
`;

const Context1 = styled.div`
  font-family: ${props => props.theme.RobotoCondensedfont};
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 400;
  text-align: justify;
  flex-grow: 1;
  max-width: 500px;
  margin-bottom: 5vh;
`;

const MainContent = styled.div`
  font-family: ${props => props.theme.Robotofont};
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 400;
  font-size: 1.1em;
  text-align: justify;
  flex-grow: 1;
  max-width: 500px;
`;

// This div is required to close the animation of the invoice.
const DivEnd = styled.div`
  bottom: 0;
  position: absolute;
  height: 1px;
  width: 100%;
`;

class FinancialFeatures extends Component {
    constructor(props) {
    super(props);

    this.color = theme.logoblue;
    this.color2 = "#9ed4fa";
  }
  render() {
    return (
      <Div>

        <WhiteDiv/>
        <FinanceTitle id="InvoiceActivateTrigger">Automated Accounting</FinanceTitle>
        <ManGraphic>
        <ManFinance/>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 884.84 1122.59">
          <rect x="122.49" y="510.29" width="72.46" height="575" rx="36.23" ry="36.23" transform="translate(-79.02 1571.6) rotate(-135)" fill={this.color2}/>
          <rect x="200.03" y="245.48" width="33.41" height="650" rx="16.7" ry="16.7" transform="translate(117.58 1391.58) rotate(-135)" fill={this.color}/>
        </Svg>
        </ManGraphic>
        <Columns>
          <LeftColumn>
            <FlexContainerLeft>
              <InvoiceSvg/>
            </FlexContainerLeft>
          </LeftColumn>
          <RightColumn>
            <DivSpacer/>
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
                With access on all of your devices, you will always be up to date on invoicing. Rapid Task will monitor
                and notify you as soon as the project is completed and ready to invoice. This helps your business send
                invoices sooner for payments. This equates to a healthy business that can pay their bills on time.
              </Context1>
              <Title1 id="InvoiceHeaderTrigger">
                Create an Invoice that Matches your Branding
              </Title1>
              <Context1>
                Our interface allows you with ultimate freedom to stylize the invoice with branding that suits your business.
                You can make your business memorable with an invoice that stands out.
              </Context1>
              <Title1 id="InvoiceBoxTrigger">
                You Never Have to Enter Information Twice
              </Title1>
              <Context1>
                Writing and keeping track of client information can be time consuming. Rapid Task will automatically
                generate your invoice with customer's information.
              </Context1>
              <Title1 id="InvoiceLine4ATrigger">
                Rapid Task Enters Information on Work Completed
              </Title1>
              <Context1>
                We are happy to do the heavy lifting. Rapid Task pulls data from the job automatically and compares the
                quote with the actual work completed. If there are any differences, Rapid Task will alert you of the
                discrepancies before you complete the invoice.
              </Context1>
              <Title1 id="InvoiceLine4BTrigger">
                Automatically Calculates Job Costs
              </Title1>
              <Context1>
                Based on real information drawn from work completed for your client, Rapid Task compiles an accurate price
                from your quote and added revisions made by your business.
              </Context1>
              <Title1 id="InvoiceLine5ATrigger">
                Easily Organize Expenses for Each Job
              </Title1>
              <Context1>
                With an easy platform for your employees to enter expenses, You will be able to quickly review and verify
                these costs.
              </Context1>
              <Title1 id="InvoiceLine5BTrigger">
                Subcontracted Work
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
                break them up in your invoices. Your billing will always be up to date and tracked so that you will never
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
                Automatically Organize Information for Accounting
              </Title1>
              <Context1>
                Whether you do it on your own, or you have a team accountants, it is easy to read the organized financial
                information to complete taxes and payroll.
              </Context1>
              <Title1 id="InvoiceLine7ATrigger">
                Customize the Details of the Work
              </Title1>
              <Context1>
                For any of the information presented in your invoice you will maintain complete control of what is visible.
              </Context1>
              <Title1 id="InvoiceLine7BTrigger">
                Display of Units
              </Title1>
              <Context1>
                As mentioned, you will have final say in all information shared with the client. This allows you to show
                any relevant equipment or material cost you wish to share. You can display quantity, cost per item, and
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
                The invoice will be interactive with lookup links to each task. When you select a field, you will be presented
                with all the details that were collected and calculated for the job task. No more complicated menu systems to find
                the information you want. You can allow certain details for your clients to see, such as dates of
                completion or product details.
              </Context1>
              <Title1 id="InvoiceLine9ATrigger">
                Smart Sales Tax Handling
              </Title1>
              <Context1>
                Based on your state or province, Rapid Task applies any relevant taxes. If the project was completed
                in a different state or province, tax laws will be automatically applied according to region.
              </Context1>
              <Title1 id="InvoiceLine9BTrigger">
                Payment Due-Date
              </Title1>
              <Context1>
                When your clients receive an invoice using Rapid Task, they will be connected directly to our internal
                payment processing so we can make sure you get your money faster than ever. If we don't catch them on the
                first go around we'll take care of sending reminders before the due date comes.
              </Context1>
              <Title1 id="InvoiceLine10Trigger">
                Penalties for Late Payment
              </Title1>
              <Context1>
                You have the option to apply and communicate late penalty payments through Rapid Task. These will be automatically
                applied when payment is not received on time.
              </Context1>
             <Title1 id="InvoiceFooter1Trigger">
                Validate your Business
              </Title1>
              <Context1>
                You can automatically have important relevant information placed, such as sales tax number,
                business license, insurance details and more. This communicates professionalism to all of your clients.
              </Context1>
             <Title1 id="InvoiceFooter2Trigger">
                Create a Signature
              </Title1>
              <Context1>
                Rapid Task can apply a signature and name of the person who has approved the invoice.
              </Context1>
             <Title1 id="InvoiceStampTrigger">
                Apply Warranty, Terms and Conditions
              </Title1>
              <Context1>
                Conditions and warranty referenced in your estimate will be applied and communicated here. They can be
                originated from the selection of tasks in your quotes.
              </Context1>
             <Title1 id="InvoicePaidTrigger">
                Never Miss a Payment
              </Title1>
              <Context1>
                With Rapid Task's integrated payment system it is easier for your clients to make payments. The email system
                will keep track of when your client has seen the invoices and made payments.
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