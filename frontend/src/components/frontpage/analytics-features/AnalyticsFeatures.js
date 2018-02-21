import React, { Component } from 'react';
import styled from 'styled-components';
import GraphAnimation from './GraphAnimation'
import CalendarGraph from './CalendarGraph'

const Div = styled.div`
  overflow: hidden;
  width: 100%;
  height: 255vh;
  background: linear-gradient(
    rgba(255,255,255,0) 1%, 
    //rgba(255,255,255,0.8) 5%, 
    ${props => props.theme.bluebackground} 8%
  );
  //background-color: {props => props.theme.bluebackground};
`;

const Title = styled.p`
  font-family: ${props => props.theme.Robotofont};
  font-weight: 900;
  color: black;
  font-size: 2em;
  margin: auto;
  position: absolute;
  margin-top: 45vh;
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
  text-align: center;
  color: white;
`;

const Text2 = styled.div`
  font-family: ${props => props.theme.Robotofont};
  font-size: 1em;
  position: absolute;
  margin-top: 12vh;
  margin-left: 5px;
  margin-right: 5px;
  text-align: justify;
  color: white;
`;

const Text3 = Text1.extend`
  position: relative;
  margin: 0vh 5px 0 5px;
`;

const Text4 = Text2.extend`
  margin-top: 0vh;
  margin-bottom: 5vh;
  position: relative;
  height: 25vh;
`;

const Text5 = Text3.extend`
  margin-top: -3vh;
`;

const Text6 = Text4.extend`
`;

const RightColumn = styled.div`
  position: absolute;
  width: 60%;
  height: 145vh;
  margin-left: 38vw;
  color: white;
  
  // Flex Stuff
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;


class AnalyticsFeatures extends Component {

  render() {
    return (
      <Div>
        <Title>Know the Health of Your Business</Title>
        <GraphAnimation/>
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

        <CalendarGraph/>
      </Div>
    );
  }
}

export default AnalyticsFeatures;
