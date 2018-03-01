import React, { Component } from 'react';
import styled from 'styled-components';
import ParkingLotAnimation from './svg/ParkingLotAnimation';
import ManQuoting from "./svg/ManQuoting";

const Div = styled.div`
  font-family: ${props => props.theme.Robotofont};
  width: 100%;
  max-width: 1200px;
  margin: auto;
  height: auto;
  position: relative; // Required to help arrange the divs- especially the trigger div, as we need it to the bottom.
  overflow: hidden;
`;

const QuoteTitle = styled.p`
  font-size: 2.5em;
  width: 100%;
  text-align: center;
  position: absolute;
  z-index: 2;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    font-weight: 900;
  }
`;

const MainContext = styled.p`
  width: 54%;
  text-align: justify;
  margin-left: 10px;
  font-size: 1.1em;
  margin-top: -30vh;
  margin-bottom: 10vh;
  @media (min-width: ${props => props.theme.desktopscreen}) {
    width: 43%;
  }
  
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
  @media (min-width: ${props => props.theme.tabletscreen}) {
    margin-bottom: 10em;
  }
`;

const Columns = styled.div`
  display: flex;
  width: 100%;
`;

const RightColumn = styled.div`
  Width: 45vw;
`;

const LeftColumn = styled.div`
  width: 54vw;
`;

const FlexContainer = styled.div`
  //Flex box container options
  display: flex;
  flex-direction: column;
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

class Quotes extends Component {
  render() {
    return (
      <Div id="parentDiv">
        <WhiteDiv/>
        <QuoteTitle>Automate Quotes</QuoteTitle>
        <ManQuoting/>
        <MainContext>
          Providing accurate quotes can be tedious and time consuming. Rapid Task removes the tedious steps, allowing
          you to build your quotes quckly. We allow easy custom estimating processes that works for your business.
        </MainContext>
        <Columns >
          <LeftColumn>
            {/*Elements tagged with id's for identifying triggers*/}
            <FlexContainer>
              <Title1 id="bottomTrigger">
                Quoting a Parking Lot
              </Title1>
              <Context1>
                Rapid Task will automatically propagate data from existing customers or assist in creating a new profile
                for your customer. We want to make sure that you don't have to enter information more than once. Let us
                handle your contacts with efficiency. After you select your customer you want to provide a quote for,
                we help you follow steps that way information is never missed from your quotes. Lets start with the
                Parking Lot that we want to build a quote for. The basic information will only require dimension of the
                land you are developing on, then you select the tasks that are required for the construction.
              </Context1>
              <Title1 id="gravelTrigger">
                Selecting Materials
              </Title1>
              <Context1>
                Easily plan the steps of your jobs. Select the tasks from a menu and Rapid Task will calculate
                all the requirements you need to perform the task. You can choose options of materials that are required
                and the costs will be automatically applied. Rapid Task will help keep track the cost of materials by
                supplier costs, delivery costs, application rate and quantity required. For budget minded clients, you have
                the ability to quickly adjust your quotes or build multiple price options for them. Rapid Task
                can carry forward any product warranty information and safety data sheets to your client's quote. The
                list of required materials can be placed on a order request, to ensure your products arrive on time for the
                project.
              </Context1>
              <Title1 id="equipmentTrigger">
                Assign Equipment
              </Title1>
              <Context1>
                Assign available equipment to perform specific tasks of the project. Rapid Task can calculate the costs
                for using each equipment by using overhead costs, fuel consumption, rental fees, delivery fees, labour cost and
                maintenance automatically as you apply them. As employees perform the jobs with the equipment, Rapid Task
                will monitor the metrics used to calculate the costs and adjust the costs as needed.
              </Context1>
              <Title1 id="asphaltTrigger">
                Paving the Lot
              </Title1>
              <Context1>
                Providing a well detailed quote can be time consuming and many businesses just simply guess their calculations.
                Not with Rapid Task, you can easily plan specific details with little effort. You can have full
                control on selecting your crews to do particular tasks. Rapid Task will provide estimated labour time based
                on the crew's historical performance rate, that way you have an more accurate project time-line. This allows
                you to schedule in more work and be more efficient.
              </Context1>
              <Title1 id="curbsTrigger">
                Installing Curbs
              </Title1>
              <Context1>
                Rapid Task is focused on streamlining your quoting process. If you need to price out installation of curbs,
                only enter the total linear measurement required, and select the type of concrete that is to be used.
                That is all! The full details of required materials, labour and overhead is automatically calculated
                for your quote. Don't worry, we want to make sure you feel in control and allow customization as needed.
              </Context1>

              <Title1 id="grassTrigger">
                Landscaping
              </Title1>
              <Context1>
                You can allow Rapid Task to watch specific steps of the project. As soon as curbs are completed,
                Rapid Task can assist scheduling the landscapers to come immediately after. This is an excellent tool
                to help keep your projects on schedule.
              </Context1>

              <Title1 id="lampsTrigger">
                Install Street Lamps
              </Title1>
              <Context1>
                Handling and managing many quotes from sub-contractors can be daunting.
                Rapid Task can automate the process for you. Simply carry forward the entered specifications of the job
                to your list of sub-contractors. Set a due date, and Rapid Task will monitor and remind them to submit.
                All of the specifications and requirements will be detailed and clear for each contractor, which makes
                awarding the bid easy. You can keep track of the service quality the contractors provide for future reference.
              </Context1>

              <Title1 id="treesTrigger">
                Plant Trees
              </Title1>
              <Context1>
                All of the job details are in one place. No more losing track of emails or spending countless time
                finding specific details of the project. Rapid Task will handle images, drawings, notes, and communication
                with your employees and clients. Clearly show the details of which type of tree
                and where to plant them as you plan your quotes. Your clients can see and approve the details and your
                employees can easily view the platform and gain accurate details to do
                their jobs correctly. Less mistakes. More profit. Simple as that.
              </Context1>

              <Title1 id="linesTrigger">
                Paint Traffic Lines
              </Title1>
              <Context1>
                You have the flexibility of how you want to put your quotes together. Rapid Task provides options
                for how to properly calculate information for the jobs. This includes tabulating quanitities related to
                the needs of your project, in this case, parking lot lines. Other specific details may be important and
                Rapid Task gives you the flexibility to choose what elements you require. In our example, the line width,
                linear length, thickness of the paint, and traffic marking product come into play. We want to leave it up
                to you to decide what is important for your business. Rapid Task is more helpful when you set the details.
                You can assign the quoting platform to your staff members and go through a checklist of important steps
                to calculate the quotes. Easily set up a perfect system for yourself and your staff.
              </Context1>

              <Title1 id="pylonsTrigger">
                Employee Instructions
              </Title1>
              <Context1>
                Finally you will have the time to think about other factors of the job that need to be taken in consideration.
                For example, safety meetings, or extra training can be factored in. Some specific site environments would
                add more time to the project and we want to make sure that you aren't caught off-guard on site. Planning ahead
                ensures that you and your employees are prepared for every scenario. In our example with the parking lot
                we had specified that the employees placed pylons to keep traffic from interfering with the paint drying.
                The more details implemented in the quotes, the more self driven your business will be. Rapid Task wants
                to make sure your business is successful and help make all of your jobs profitable.
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
