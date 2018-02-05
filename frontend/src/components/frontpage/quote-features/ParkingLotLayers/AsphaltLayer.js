import React, { Component } from 'react';

class AsphaltLayer extends Component {
  render() {
    return (
      <g id="asphaltLayer">
        <polygon id="Top_Layer_Shadow" points="295.21 401.32 546.24 255.48 293.33 109.54 42.4 255.36 295.21 401.32" fill="#563f2c"/>
        <polygon points="587.57 200.8 587.57 208.54 294.75 378.58 294.85 370.88 587.57 200.8" fill="#a89c60"/>
        <polygon points="0.32 200.84 0.21 208.54 294.75 378.58 294.85 370.88 0.32 200.84" fill="#f0dab9"/>
        <polygon points="292.92 30.8 587.57 200.8 294.85 370.88 0.31 200.83 292.92 30.8" fill="#495359"/>
        <polygon points="331.88 53.28 39.09 223.43 149.02 286.2 450.23 121.74 331.88 53.28" fill="#495359"/>
      </g>
    )
  }
}

export default AsphaltLayer;