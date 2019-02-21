import React, { Component } from 'react';
import styled from 'styled-components';
import DevicesSVG from './Svg/DeviceSvg';
import CloudsSvg from "./Svg/CloudsSvg";
import ParkingLotAnimation from "./Svg/parkingLot/ParkingLotAnimation";

const FeatureDiv = styled.div`
	font-family: ${props => props.theme.Robotofont};
	height: auto;
	display: flex;
	flex-direction: column;
	//justify-content: flex-start;
	position: relative;
	// z-index: -7;
	color: white;
	border: solid red;
`;

const GradientDiv = styled.div`
	 //position: absolute;
	// //margin-top: 1em;
	 width: 100%;
	 height: auto;
	 text-align: center;
	// z-index: -1;
	 background: linear-gradient(white 75%, ${props => props.theme.logoblue} 95%, ${props => props.theme.logoblue} 95%);
	 border: solid green;
`;

const GradientDiv2 = styled.div`
	 //height: 100%;
	 width: 100%;
	 background: linear-gradient(${props => props.theme.logoblue} 0%, rgba(63,169,245,0) 10%, rgba(63,169,245,0) 10%);
	 position: absolute;
	 border: solid yellow;
`;

const BelowDevice = styled.div`
	 border: solid darkorange;
	 position: relative;
	 z-index: -7;
	 background: ${props => props.theme.logoblue};
`;

const Text = styled.div`
	margin-top: 1.2em;
`;

const DeviceDescription = styled.div`
	//margin-top: 10vh;
	border: solid pink;
	//margin: auto;
	height: auto;
	text-align: center;
	background: ${props => props.theme.logoblue};
	padding: 2em;
	font-size: 1.2em;
	//position: relative;
`;



const Title1 = styled.div`
	margin-top: 4em;
	font-size: 1.2em;
	
	/* To place text above gradient2*/
	position: relative;
	z-index: 1;
	
	padding-left: 10px;
	padding-right: 10px;
	
	//flex-grow: 0.001;
`;


const Columns = styled.div`
	display: flex;
	width: 100%;
	
	/* The top and bottom padding for the text and the bottom for the clouds*/
	margin: 1vh 0 20vh 0;
`;

const RightColumn = styled.div`
	Width: 45vw;
	//border: solid grey;
	height: auto;
`;

const LeftColumn = styled.div`
	width: 54vw;
	//margin-top: 5em;
`;

const FlexContainer = styled.div`
	////Flex box container options
	//display: flex;
	text-align: center;
	//flex-direction: column;
`;

// This div is required for the scrollMagic to trigger the tween animation of the Parking Lot Layers off.
const EndTrigger = styled.div`
  bottom: 0;
  //position: absolute;
  height: 1px; // Need this to give something to trigger on.
  width: 100%;
`;

const Shift = styled.div`
	overflow: hidden;
  @media (min-width: ${props => props.theme.giantscreen}) {
   // To keep the layers from getting too big
		transform: translateX(1350px);
  }
`;

class Features extends Component {
	render() {
		return (
			<FeatureDiv id="featuresScrollTarget">
				<div id="parentDiv">
					<GradientDiv>
						<DevicesSVG/>

					</GradientDiv>
					<DeviceDescription>
						<Text>
							Rapid Task helps you manage your business tasks with ease across all platforms <br/>
						</Text>
						<Text>
							You now can automate every business task at your fingertips
						</Text>
					</DeviceDescription>
					{/*<TextFooter>*/}
						{/*Flexible for all Service Based Businesses*/}
					{/*</TextFooter>*/}


					<BelowDevice>
						<GradientDiv2/>
						<Columns >
						<LeftColumn>
							{/*Elements tagged with id's for identifying triggers*/}
							<FlexContainer>
								<Title1 id="bottomTrigger">
									Simple steps for producing accurate quotes faster
								</Title1>

								<Title1>
									Improved business organization
								</Title1>

								<Title1>
									Status and progress tracking for all of your jobs
								</Title1>
								<div id="gravelTrigger"/>
								<div id="equipmentTrigger"/>

								<Title1>
									Automated invoicing and billing
								</Title1>

								<Title1 >
									Statistical reporting for employees
								</Title1>


								<Title1 >
									Efficient steps for updating inventory expenses
								</Title1>

								<div id="asphaltTrigger"/>
								<div id="curbsTrigger"/>

								<Title1 >
									Equipment tracking or maintenance schedule for usage
								</Title1>


								<Title1 >
									Full Accounting Support
								</Title1>

								<div id="grassTrigger"/>
								<div id="lampsTrigger"/>
								<div id="treesTrigger"/>
								<Title1>
									Analytics at your fingertips to better understand your business
								</Title1>

								<Title1 >
									Flexible for all service based businesses
								</Title1>
								<div id="linesTrigger"/>
								<div id="pylonsTrigger"/>
							</FlexContainer>
						</LeftColumn>
						<RightColumn>
							<ParkingLotAnimation/>
						</RightColumn>

					</Columns>
					</BelowDevice>


				</div>
				<EndTrigger id="endTrigger"/>
				<CloudsSvg/>
				<Shift>
					<CloudsSvg/>
				</Shift>
			</FeatureDiv>
		);
	}
}

export default Features;
