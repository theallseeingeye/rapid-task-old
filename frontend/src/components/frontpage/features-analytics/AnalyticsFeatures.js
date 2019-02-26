import React, { Component } from 'react';
import styled from 'styled-components';
import GraphAnimation from './svg/GraphAnimation'
import CalendarGraph from './svg/CalendarGraph'

const MainDiv = styled.div`
  font-family: ${props => props.theme.Robotofont};
  width: 100%;
  height: auto;
  // This background color must be a linear gradient to pass accessibility contrast ratio on lighthouse.
  background: linear-gradient(${props => props.theme.logoblue} 100%, ${props => props.theme.logoblue} 100%);
`;

const Div = styled.div`
  max-width: 1200px;
  //height: auto;
  color: white;
  margin:auto;
`;


const GraphContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  max-width: 800px;
`;

const Title = styled.p`
  color: black;
  font-size: 2.5em;
  margin: auto;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.3);
  @media (min-width: ${props => props.theme.tabletscreen}) {
    font-weight: 900;
  }
`;

const IntroText = styled.div`
  height: auto;
`;

const Text1 = styled.p`
  font-size: 1.5em;
  width: 100%;
  text-align: center;
`;

const Text2 = styled.p`
  margin: 5px;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    line-height: 2em;
    font-family: ${props => props.theme.RobotoCondensedfont};
  }
`;

const Text3 = styled.p`
  font-size: 1.5em; 
  margin: 5px; 
`;

const Text4 = styled.p`
  text-align: center;
  width: 100%;
  height: 9vh;
`;

const RightColumn = styled.div`
  text-align: justify;
  margin: 5vh 0 0 0;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    max-width: 800px;
  }
  
  @media (min-width: ${props => props.theme.desktopscreen}) {
    margin-top: 2vh;
    max-width: 1000px;
  }
`;

class AnalyticsFeatures extends Component {
  render() {
    return (
      <MainDiv>
        <Div>
          <GraphContainer>
            <GraphAnimation/>
          </GraphContainer>
          <Title>Know the Health of your Business</Title>
          <IntroText>
            <Text1>
              Powerful Analytics From Beginning to End of your Daily Business Activities
            </Text1>
            <Text2>
              Rapid Task will provide important information for every part of the business process. Starting from meeting
              with your clients to ending with billing and follow ups for more sales, data is analyzed for your benefit.
              This information is collected to provide powerful insights into the areas where your business is thriving,
              and the areas in which your business can improve. We are focused on providing information that will help
              you to increase profit and grow your company.
            </Text2>
          </IntroText>
          <Flex>
            <CalendarGraph/>
            <RightColumn>
              <Text3>
                How Does it Work?
              </Text3>
              <Text2>
                This calendar presents a powerful representation of your business over the year.<br/>
                The data is represented using various shades of blue on a given day. Your busiest days are
                indicated by a darker blue.<br/><br/>
              </Text2>
              <Text3>
                How Can I Use This?
              </Text3>
              <Text2>
                When you are able to track and keep good data you will find many applications for the information
                gathered. By paying attention to sales trends you can easily spot the slow days and narrow down a
                solution to keep your business booming year round. Having quick access to this data will show you which
                marketing strategies are producing the best results to fill in these slower days.
                <br/><br/>
                Another area in which this data tracking is useful is in monitoring the use of your purchased equipment.
                This ensures that you are always getting the best return on investment from the purchases you make for
                your business. On slow downs, you can focus on improving the use of your equipment. Rapid Task can show
                when maintenance costs are increasing on a particular piece of equipment and provides advice on when it
                is time to sell.<br/><br/>
                The darker sections indicate the areas where you may need to hire more employees. If you see
                increasing trends with busier days, the workload of your employees might be stretched
                and you might benefit from recruiting proactively and hiring before the busy times.<br/><br/>
              </Text2>
            </RightColumn>
          </Flex>
          <Text4>The right data helps you make the right decisions. Rapid Task is here to help!</Text4>
        </Div>
      </MainDiv>
    );
  }
}

export default AnalyticsFeatures;
