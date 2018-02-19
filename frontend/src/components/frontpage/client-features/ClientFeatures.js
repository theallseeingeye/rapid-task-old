import React, { Component } from 'react';
import styled from 'styled-components';
import ClientTablet from './svg-layers/ClientTablet';



const Title = styled.h1`
  font-family: ${props => props.theme.Robotofont};
`;

const SubTitle = styled.h3`
  font-family: ${props => props.theme.Robotofont};
`;

const JobTitle = styled.p`
  margin: auto;
`;

const Text1 = styled.p`
  font-family: ${props => props.theme.Robotofont};
`;

const Text2 = styled.p`
  font-family: ${props => props.theme.Robotofont}; 
`;

class ClientFeatures extends Component {
  render() {


    return (
      <div>
        <Title>Impress Your Clients </Title>
        <SubTitle>Never Lose Track Again</SubTitle>
        <ClientTablet/>


        <Text1>
          Rapid Task will keep track of all your interactions with the client. Know their work history,
          built in reminders to apply and keep notes to build good raport.
        </Text1>
        <Text2>
          Keep organized profile of your clients <br/>
          Lead tracker of your potential clients <br/>
          Can allow Rapid Task to provide automatic updates of the job progress<br/>
          Clients have easy platform to see their quotes and easily accept them<br/>
          Tools to easily communicate the details of the quote<br/>
          Clients know the outstanding bills
        </Text2>
      </div>
    );
  }
}

export default ClientFeatures;
