import React, { Component } from 'react';
import styled from 'styled-components';
import ClientTablet from './svg-layers/ClientTablet';

const Div = styled.div`
  height: 160vh;
  margin: 0 5px 0 5px;
  font-family: ${props => props.theme.Robotofont};
  @media (min-width: ${props => props.theme.tabletscreen}) {
  height: 90vh;
  }
  @media (min-width: ${props => props.theme.giantscreen}) {
  margin: 0 20vw 0 20vw;
  height: 90vh;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ColumnL = styled.div`
  height: 0vh;
  width: 100%;
  @media (min-width: ${props => props.theme.tabletscreen}) {
  width: 43%;
  }  
`;

const ColumnR = styled.div`
  width: 100%;
  height: 60vh;
  margin-bottom: 5vh;
  @media (min-width: ${props => props.theme.tabletscreen}) {
  width: 56%;
  max-width: 590px;
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
  font-size: 2em;
  margin: -0.5em 0 0.25em 0;
  text-align: center;
`;

const Text = styled.p`
  @media (min-width: ${props => props.theme.tabletscreen}) {
  font-size: 1.5em;
  }
`;

class ClientFeatures extends Component {
  render() {


    return (
      <Div>
        <Title>Impress Your Clients </Title>
        <SubTitle>Never Lose Track Again</SubTitle>


        <FlexContainer>
          <ColumnL>
            <Text>
              Keep organized profile of your clients <br/><br/>
              Lead tracker of your potential clients <br/><br/>
              Can allow Rapid Task to provide automatic updates of the job progress<br/><br/>
              Clients have easy platform to see their quotes and easily accept them<br/><br/>
              Tools to easily communicate the details of the quote<br/><br/>
              Clients know the outstanding bills
            </Text>
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
