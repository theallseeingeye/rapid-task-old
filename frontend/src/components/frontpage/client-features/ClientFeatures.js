import React, { Component } from 'react';
import styled from 'styled-components';
import ClientTablet from './svg-layers/ClientTablet';

const Div = styled.div`
  height: auto;
  //height: 160vh;
  margin: 0 5px 0 5px;
  font-family: ${props => props.theme.Robotofont};
  max-width: 1200px;
  @media (min-width: ${props => props.theme.giantscreen}) {
  margin: auto;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ColumnL = styled.div`
  height: auto;
  width: 100%;
  @media (min-width: ${props => props.theme.tabletscreen}) {
  width: 50%;
  }  
`;

const ColumnR = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 5vh;
  min-width: 360px;
  @media (min-width: ${props => props.theme.tabletscreen}) {
  width: 50%;
  }  
`;

const Title = styled.p`
  font-size: 2.5em;
  text-align: center;
  @media (min-width: ${props => props.theme.tabletscreen}) {
  font-weight: 900;
  }  
`;

const SubTitle = styled.p`
  font-size: 1.5em;
  margin: -0.5em 0 0.25em 0;
  text-align: center;
`;

const Text = styled.p`
  margin: 10px;
`;

class ClientFeatures extends Component {
  render() {


    return (
      <Div>
        <Title>Impress Your Clients </Title>
        <SubTitle>Never Lose Track Again</SubTitle>


        <FlexContainer>
          <ColumnL>
            <p>
              Rapid Task has a modular client interface that is fully customizeable to perfectly fit the needs of your
              business. You decide what information is most important, and what gets shared with your clients. Rapid Task
              will help you:<br/><br/>
            </p>
            <Text>Keep organized profiles for each of your clients and their history</Text>
            <Text>Track leads for new work and potential clients</Text>
            <Text>Automatic notifications when new quote requests come in</Text>
            <Text>Easily share and communicate quoting details to your clients</Text>
            <Text>Clients have easy platform to see their quotes and easily accept them so your team can get to work faster</Text>
            <Text>If you would like, Rapid Task can send updates to your clients based on job progress so that they are kept in the loop throughout the process</Text>
            <Text>Your clients will have an interactive platform to check up on outstanding bills and complete payments faster</Text>
          </ColumnL>
          <ColumnR>
            <ClientTablet/>
          </ColumnR>

        </FlexContainer>
      </Div>
    );
  }
}

export default ClientFeatures;
