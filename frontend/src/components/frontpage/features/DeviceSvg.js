import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './../../../global-styles/DefaultTheme.js';

const Svg = styled.svg`
  max-width: 90%;
  margin: auto;
  height: 90%;
`;

class DevicesSVG extends Component {
    constructor(props) {
    super(props);

    this.color = theme.logoblue;
  }

  render() {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 341 180.19">
        <title>Rapid Task Works on all Devices</title>
        <g id="Desktop">
          <g id="desktop-2">
            <path id="body" d="M80.72,0h184a9.75,9.75,0,0,1,9.75,9.75V122.5a0,0,0,0,1,0,0H71a0,0,0,0,1,0,0V9.75A9.75,9.75,0,0,1,80.72,0Z"/>
            <circle id="camera" cx="172.72" cy="6.23" r="0.68" fill="#fff"/>
            <polygon id="stand" points="164.97 143.17 192.97 143.17 274.48 143.17 274.48 122.5 70.97 122.5 70.97 143.17 145.31 143.17 142.81 159.83 134.14 163.33 202.31 163.33 192.97 160.33 178.81 160.17 164.97 143.17" fill="#ccc"/>
            <polygon id="shadow" points="164.97 143.17 178.81 160.17 192.97 160.33 192.97 143.17 164.97 143.17" fill="#999"/>
          </g>
          <g id="screen">
            <rect x="80.22" y="11.5" width="185" height="104" fill="#fff"/>
            <rect x="84.54" y="16.15" width="54.75" height="19.5" fill="#333"/>
            <rect x="142.79" y="16.15" width="118.67" height="19.5" fill="#999"/>
            <rect x="84.54" y="38.9" width="176.92" height="52.5" fill={this.color}/>
            <rect x="139.29" y="94.53" width="54.75" height="19.5" fill="#999"/>
            <rect x="196.7" y="94.53" width="64.75" height="19.5" fill="#333"/>
            <rect x="84.54" y="94.53" width="51.42" height="19.5" fill="#333"/>
          </g>
        </g>
        <g id="Tablet">
          <g id="body-2">
            <rect id="body-3" x="20.04" y="82.06" width="70" height="90.67" rx="5.67" ry="5.67"/>
            <circle id="button" cx="55.2" cy="167.31" r="2.84" fill="#fff"/>
            <circle id="camera-2" cx="55.04" cy="85.96" r="0.68" fill="#fff"/>
          </g>
          <g id="screen-2">
            <rect x="27.54" y="89.06" width="55" height="72.33" fill="#fff"/>
            <rect x="28.82" y="92.29" width="16.28" height="13.56" fill="#333"/>
            <rect x="46.13" y="92.29" width="35.28" height="13.56" fill="#999"/>
            <rect x="28.82" y="108.12" width="52.6" height="36.51" fill={this.color}/>
            <rect x="45.49" y="146.81" width="15.24" height="13.56" fill="#999"/>
            <rect x="62.16" y="146.81" width="19.25" height="13.56" fill="#333"/>
            <rect x="28.82" y="146.81" width="15.29" height="13.56" fill="#333"/>
          </g>
        </g>
        <g id="Laptop" transform="translate(-50, 10)">
          <g id="laptop-2">
            <path id="screen_base" d="M242.14,72.67H364.59a3.94,3.94,0,0,1,3.94,3.94V158.5a0,0,0,0,1,0,0H238.2a0,0,0,0,1,0,0V76.61A3.94,3.94,0,0,1,242.14,72.67Z"/>
            <rect id="base" x="216.28" y="158.5" width="174.17" height="4.83" fill="#ccc"/>
            <polygon id="bottom_shadow" points="380.93 165.27 227.02 165.27 216.89 163.33 391.06 163.33 380.93 165.27" fill="#999"/>
            <path id="trackpad" d="M291.87,158.5h23a0,0,0,0,1,0,0v.86a.81.81,0,0,1-.81.81H292.68a.81.81,0,0,1-.81-.81v-.86A0,0,0,0,1,291.87,158.5Z" fill="#999"/>
            <circle id="camera-3" cx="303.98" cy="74.4" r="0.68" fill="#fff"/>
          </g>
          <g id="screen-3">
            <rect x="242.7" y="75.5" width="122.54" height="76.25" fill="#fff"/>
            <rect x="245.56" y="78.91" width="36.26" height="14.3" fill="#333"/>
            <rect x="284.14" y="78.91" width="78.6" height="14.3" fill="#999"/>
            <rect x="245.56" y="95.59" width="117.18" height="38.49" fill={this.color}/>
            <rect x="281.57" y="136.37" width="36.26" height="14.3" fill="#999"/>
            <rect x="319.86" y="136.37" width="42.89" height="14.3" fill="#333"/>
            <rect x="245.49" y="136.37" width="34.06" height="14.3" fill="#333"/>
          </g>
        </g>
        <g id="Phone">
          <g id="phone-2">
            <rect id="body-4" y="111.07" width="34.88" height="69.12" rx="5.25" ry="5.25"/>
            <rect id="speaker" x="14.63" y="114.69" width="5.63" height="0.88" rx="0.24" ry="0.24" fill="#ccc"/>
            <circle id="button-2" cx="17.44" cy="175.82" r="2.84" fill="#fff"/>
            <circle id="camera-4" cx="12.78" cy="115.13" r="0.68" fill="#fff"/>
          </g>
          <g id="screen-4">
            <rect x="2.56" y="119.09" width="29.75" height="52.98" fill="#fff"/>
            <rect x="3.26" y="121.46" width="8.8" height="9.93" fill="#333"/>
            <rect x="12.62" y="121.46" width="19.08" height="9.93" fill="#999"/>
            <rect x="3.26" y="133.05" width="28.45" height="26.74" fill={this.color}/>
            <rect x="12.06" y="161.39" width="8.8" height="9.93" fill="#999"/>
            <rect x="21.29" y="161.39" width="10.41" height="9.93" fill="#333"/>
            <rect x="3.26" y="161.39" width="8.27" height="9.93" fill="#333"/>
          </g>
        </g>
      </Svg>
    );
  }
}
export default DevicesSVG;