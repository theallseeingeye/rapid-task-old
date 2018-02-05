import React, { Component } from 'react';


class Pointer extends Component {
  render() {

    const topLeftCornerX = "240";
    const topLeftCornerY = "580";
    const bottomLeftCornerX = "285";
    const bottomLeftCornerY = "605";
    const topRightCornerX = "315";
    const topRightCornerY = "540";
    const bottomRightCornerX = "358";
    const bottomRightCornerY = "565";

    const polygon = topLeftCornerX + "," + topLeftCornerY + " " + bottomLeftCornerX + "," + bottomLeftCornerY + " " + bottomRightCornerX + "," + bottomRightCornerY + " " + topRightCornerX + "," + topRightCornerY;

    return (
      <g>
        <polygon fill="#FFFFFF" points="8.2,20.9 8.2,4.9 19.8,16.5 13,16.5 12.6,16.6 "/>
        <polygon fill="#FFFFFF" points="17.3,21.6 13.7,23.1 9,12 12.7,10.5 "/>
        <rect x="12.5" y="13.6" transform="matrix(0.9221 -0.3871 0.3871 0.9221 -5.7605 6.5909)" width="2" height="8"/>
        <polygon points="9.2,7.3 9.2,18.5 12.2,15.6 12.6,15.5 17.4,15.5 "/>
      </g>
    );
  }
}

export default Pointer;
