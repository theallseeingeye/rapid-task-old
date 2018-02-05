import React, { Component } from 'react';
import styled from "styled-components";

const MapPinStyle = styled.g`
  //visibility: hidden;
  //position: absolute;
`;


class MapPin extends Component {
  render() {
    return (
      <MapPinStyle>
        <path id="svg_2" data-name="svg 2" d="M1488.77,1959.63c-8.25-40.5-22.79-74.2-40.41-105.43-13.06-23.17-28.2-44.55-42.21-67-4.67-7.5-8.71-15.42-13.2-23.2-9-15.57-16.27-33.61-15.81-57,.46-22.87,7.07-41.21,16.61-56.21a110,110,0,0,1,77.22-50.22,116.55,116.55,0,0,1,75,14.21,108.58,108.58,0,0,1,37,35.81c9.62,15,16.25,32.82,16.8,56a103.41,103.41,0,0,1-4.4,32c-2.77,9.24-7.23,17-11.2,25.21-7.75,16.1-17.46,30.85-27.21,45.61C1528,1853.36,1500.71,1898.19,1488.77,1959.63Z" transform="translate(-1370.12 -1592.27)" fill="red" stroke="#000" strokeMiterlimit="10" strokeWidth="14"/>
        <circle id="svg_4" data-name="svg 4" cx="119.21" cy="107.84" r="39.01" stroke="#000" strokeMiterlimit="10" strokeWidth="14"/>
      </MapPinStyle>
    );
  }
}

export default MapPin;
