import React, { Component } from 'react';
import styled from "styled-components";


const Svg = styled.svg`
  width: 100%;
  position: absolute;
  margin-top: 60vh;
`;


class Arrow extends Component {
  render() {
    return (
    <Svg id="Arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 642.93 480.49">
      <title>Rapid Task Arrow</title>
      <polyline id="Head" points="642.93 318.57 481 480.49 319.07 318.57" fill="#39f"/>
      <path id="Tail" d="M542,645H407c10.16-59.58-6.5-98.19-17-112-51.6-67.88-211.73-61.1-393,39V310c77.58-6.18,632-109,545,335" transform="translate(3 -295.43)" fill="#39f"/>
    </Svg>
    )
  }
}

export default Arrow;