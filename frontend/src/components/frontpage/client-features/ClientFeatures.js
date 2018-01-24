import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  
`;

const SubTitle = styled.h3`

`;

class ClientFeatures extends Component {
  render() {
    return (
      <div>
        <Title>Impress Your Clients </Title>
        <SubTitle>Never Lose Track Again</SubTitle>
        <p>
          Rapid Task will keep track of all your interactions with the client. Know their work history,
          built in reminders to apply and keep notes to build good raport.
        </p>
        Keep organized profile of your clients <br/>
        Lead tracker of your potential clients <br/>
        Can allow Rapid Task to provide automatic updates of the job progress<br/>
        Clients have easy platform to see their quotes and easily accept them<br/>
        Tools to easily communicate the details of the quote<br/>
      </div>
    );
  }
}

export default ClientFeatures;
