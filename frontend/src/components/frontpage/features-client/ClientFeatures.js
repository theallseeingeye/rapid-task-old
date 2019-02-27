import React, { Component } from 'react';
import styled from 'styled-components';
import ClientTablet from './svg/ClientTablet';
import CloudsSvg from "../features-list/Svg/CloudsSvg";

const Div = styled.div`
  background-color: ${props => props.theme.logoblue};
  font-family: ${props => props.theme.Robotofont};
	width: 100%;
  @media (min-width: ${props => props.theme.giantscreen}) {
    margin: auto;
  }
  color: white;
  //border: solid blue;
`;

const SvgFloor = styled.svg`
	height: 40px;
	width: 100%;
	//border: solid red;
`;

const FlexContainer = styled.div`
	margin: 0 auto;
	margin-top: 3em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
`;

const ColumnL = styled.div`
  height: auto;
  width: 80%;
  margin: auto;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    width: 50%;
  }  
  @media (min-width: ${props => props.theme.desktopscreen}) {
    margin-top: 10vh;
  }  
`;

const ColumnR = styled.div`
  width: 100%;
  height: auto;
  padding: 5px;
  margin: auto; // Centers the svg
  min-width: 350px;
  max-width: 500px;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    width: 45%;
  }  
`;

const Title = styled.p`
  font-size: 2em;
  text-align: center;
	font-weight: 900;
`;

const SubTitle = styled.p`
  text-align: center;
	font-family: ${props => props.theme.RobotoCondensedfont};
`;

const TextList = styled.p`
  font-family: ${props => props.theme.RobotoCondensedfont};
  text-align: center;
  font-size: 1.2em;
`;

const Clouds = styled.div`
	margin-top: 5em;
	//height: 200px;
	height: 100%;
	width: 100%;
	position: relative;
	@media (min-width: ${props => props.theme.tabletscreen}) {
		margin-top: 15em;
  }
	//border: solid green;
`;


class ClientFeatures extends Component {
  render() {
    return (
      <Div>
				 <SvgFloor xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 2" preserveAspectRatio='none'>
					 <rect x="0" y="0" width="100%" height="100%" fill="#e7e3e9"/>
				 </SvgFloor>

        <FlexContainer>
          <ColumnR>
            <ClientTablet/>
          </ColumnR>
          <ColumnL>
        		<Title>Impress Your Clients </Title>
            <SubTitle>
              Rapid Task Will Help You
            </SubTitle>
            <TextList>Keep organized profiles for each of your clients and their history</TextList>
            <TextList>Track leads for new work and potential clients</TextList>
            <TextList>Easily share and communicate quoting details to your clients</TextList>
            <TextList>Clients have easy platform to see their quotes and easily accept them so your team can get to work faster</TextList>
            <TextList>Clients can easily communicate changes or additional job details throughout the project using photos and drawings</TextList>
            <TextList>Send updates to your clients based on job progress so that they are kept in the loop throughout the process</TextList>
            <TextList>Your clients can pay their bills and complete payments faster</TextList>
          </ColumnL>
        </FlexContainer>
				<Clouds>
					<CloudsSvg/>
				</Clouds>
      </Div>
    );
  }
}

export default ClientFeatures;
