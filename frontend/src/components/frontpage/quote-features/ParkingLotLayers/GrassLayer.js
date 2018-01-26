import React, { Component } from 'react';
import {BaseAnimation} from '../BounceAnimation';


const GrassLayerAnimate = BaseAnimation.extend`
`;

class GrassLayer extends Component {
  render() {
    return (
      <GrassLayerAnimate>
        <polygon id="Grass_2" points="230.41 189.14 268.04 211.64 145.23 281 108.34 260.21 230.41 189.14" fill="#76ba4a"/>
        <polygon id="Grass_1" points="292.92 30.8 331.88 53.28 207.56 123.39 170.55 101.87 292.92 30.8" fill="#76ba4a"/>
      </GrassLayerAnimate>
    )
  }
}

export default GrassLayer;