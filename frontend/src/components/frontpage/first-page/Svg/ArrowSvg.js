import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';

const ArrowSvg = styled.svg`
  width: 100%;
  cursor: pointer;
  height: 50px;
`;

const ArrowBounce = keyframes`
  from {
    transform: translate(0px, 0px);
  }
  50% { 
    transform: translate(0px, 10px);
  }
  to {
    transform: translate(0px, 0px);
  }
`;

const ArrowAnimation = styled.g`
  animation: ${ArrowBounce} 1s infinite;
  animation-timing-function: ease-in-out;
`;

class Arrow extends Component {

  handleClick = (e, location) => {
    e.preventDefault();
    TweenLite.to(window, 1, {scrollTo:{y:location, autoKill:false}});
  };

  render() {
    return (
			<ArrowSvg onClick={ (e) => this.handleClick(e, "#featuresScrollTarget")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 473.03 300">
				<title>Rapid Task Arrow</title>
				<ArrowAnimation>
					<path d="M307.25,799l-201-201a10.27,10.27,0,0,0-14.52,0l-18,18a10.27,10.27,0,0,0,0,14.52L307.25,864,540.76,630.51a10.27,10.27,0,0,0,0-14.52l-18-18a10.27,10.27,0,0,0-14.52,0Z" transform="translate(-70.73 -595)" fill="#3fa9f5"/>
				</ArrowAnimation>
			</ArrowSvg>
    );
  }
}

export default Arrow;
