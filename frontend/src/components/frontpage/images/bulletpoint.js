import React, { Component } from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  width: 1.4em;
`;

class BulletPoint extends Component {
  render() {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 435 435">
        <title>Rapid Task Bullet Point</title>
        <circle id="Circle" cx="217.5" cy="217.5" r="217.5" fill="#ffffff"/>
        <g id="Small_Logo">
          <path d="M431.63,446.49,404,405l-69.16,41.49-23.19,36.65c-16.6,27.66-18.09,25.59-25.22,25.59h-109l-35.84,55.33H290.31c40.59,0,65.57,0,93.23-42.19" transform="translate(-74 -321)" fill="#3fa9f5"/>
          <path d="M498,506.93l-27.66-41.49-69.16,41.49L378,543.59c-16.6,27.66-18.09,25.59-25.22,25.59l-214.35-.08L103,624.5H356.7c40.59,0,65.57,0,93.23-42.19" transform="translate(-74 -321)" fill="#3fa9f5"/>
        </g>
      </Svg>
    );
  }
}

export default BulletPoint;