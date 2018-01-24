import React, { Component } from 'react';
import styled from "styled-components";


import BaseAnimation from './QuotesAnimation';

const GravelLayerAnimate = BaseAnimation.extend`
  //animation-delay: 1.2s;
`;

const Text = styled.text`
  size: 5em;
`;

class GravelLayer extends Component {
  render() {
    return (
      <GravelLayerAnimate>
        <g id="Middle_Layer_Shadow" opacity="0.29">
          <polygon points="295.21 525.74 546.24 379.9 293.33 233.96 42.4 379.78 295.21 525.74" fill="#563f2c"/>
        </g>
        <polygon points="587.98 280.31 587.98 316.08 295.21 486.12 295.21 450.36 587.98 280.31" fill="#82612b"/>
        <polygon points="0.68 280.33 0.68 316.08 295.21 486.12 295.21 450.36 0.68 280.33" fill="#ad8851"/>
        <polygon points="293.33 110.28 587.98 280.31 295.21 450.36 0.72 280.31 293.33 110.28" fill="#ba9563"/>
      </GravelLayerAnimate>
    )
  }
}

export default GravelLayer;