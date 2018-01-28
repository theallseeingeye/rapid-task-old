import React, { Component } from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  max-width: 30%;
  margin: auto;
  //height: 90%;
`;

class ProgressBars extends Component {
  render() {
    return (
      <Svg id="Progress_Bars" data-name="Progress Bars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 362.5 19.5">
        <g>
          <rect id="Grey_Bar" data-name="Grey Bar" width="362.5" height="19.5" rx="9.75" ry="9.75" fill="#a2aebb"/>
          <rect id="Blue_Bar" data-name="Blue Bar" width="139.75" height="19.5" rx="9.75" ry="9.75" fill="#39f"/>
        </g>
      </Svg>
    );
  }
}

export default ProgressBars;