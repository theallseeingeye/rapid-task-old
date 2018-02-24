import React, { Component } from 'react';
import styled from 'styled-components';
import GraphAnimation from './GraphAnimation'
import CalendarGraph from './CalendarGraph'

const MainDiv = styled.div`
  font-family: ${props => props.theme.Robotofont};
  overflow: hidden;
  width: 100%;
  max-height: 1600px;
  height: 280vh;
  border: solid red;
  background: linear-gradient(
    rgba(255,255,255,0) 1%, 
    ${props => props.theme.bluebackground} 8%
  );
  @media (min-width: ${props => props.theme.tabletscreen}) {
  max-height: unset;
  height: 235vh;
  }
  @media (min-width: ${props => props.theme.desktopscreen}) {
  max-height: unset;
  height: 275vh;
  }
  
  //background-color: {props => props.theme.bluebackground};
`;

const Div = styled.div`
  max-width: 1200px;
  margin: auto;
  color: white;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.p`
  
  font-weight: 900;
  color: black;
  font-size: 2.5em;
  margin: auto;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.3);
  
`;

const IntroText = styled.div`
  position: relative;
  height: 40vh;
`;

const Text1 = styled.p`
  font-family: ${props => props.theme.RobotoCondensedfont};
  font-size: 1.2em;
  position: absolute;
  //margin-top: 45vh;
  width: 100%;
  text-align: center;
`;

const Text2 = styled.div`
  font-size: 1em;
  position: absolute;
  margin-top: 12vh;
  margin-left: 5px;
  margin-right: 5px;
  text-align: justify;
`;

const Text3 = styled.p`
   
`;

const Text4 = styled.p`

`;

const Text5 = styled.p`

`;

const Text6 = styled.p`
`;

const RightColumn = styled.div`
  text-align: justify;
  height: 130vh;
`;


class AnalyticsFeatures extends Component {

  render() {
    return (
      <MainDiv>
        <Div>
          <GraphAnimation/>
          <Title>Know the Health of Your Business</Title>
          <IntroText>
            <Text1>
              Powerful Analytics From Beginning to End of Your Daily Business Activities
            </Text1>
            <Text2>
              Rapid Task will be able to provide important information of every business process. Starting from meeting
              with your clients and ending with billing and follow ups for more sales, data is analyzed for your benefit.
              More information is collected to provide powerful valuable insights of how well your business is doing.
              We are focused on providing ways to show you how to increase profit and growth of your business.
            </Text2>
          </IntroText>
          <Flex>
            <CalendarGraph/>
            <RightColumn>
              <Text3>
                How Does it Work?
              </Text3>
              <Text4>
                This calendar presents a powerful visualization of your business that comes with a
                wealth of information.<br/>
                The days are color coded by the visibility of the blue.
                Darker blue defines more quantitative results.<br/><br/>
              </Text4>
              <Text5>
                How Can I Use This?
              </Text5>
              <Text6>
                There are many uses for this data representation. You can see the days with the most sales. Trends can
                easily spot the slow days and help narrow down a solution to keep your business busy year round.
                Can plan a marketing strategy to boost sales on those days or add additional service.
                <br/>
                Another example would be monitoring the use of your purchased equipment to ensure you are obtaining the ROI
                investment you have made on them. On slow downs, you can focus on improving use of the equipment. Rapid
                Task can show if the maintenance costs are increasing on a particular equipment and if it is time to sell.<br/>
                You can also easily examine the need for more employees. If you see increasing trends with more darker blue
                days that can
                represent the workload of your employees. Helps you be prepared for busy seasons by recruiting on time for
                them.<br/>
                There are nearly unlimited ways to examine your business that will help you make the right decisions.
              </Text6>
            </RightColumn>
          </Flex>
        </Div>
      </MainDiv>
    );
  }
}

export default AnalyticsFeatures;
