import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  bottom: 0;
  position: fixed;
  width: 100%;
  z-index: 3;
  overflow: hidden;
  
  // To set bounds of placing nav-bar on top.
  @media (min-width: ${props => props.theme.tabletscreen}) {
    bottom: initial;
    position: absolute;
    top: 10px; // Brings the nav bar from the top
  }
`;

const NavOption = styled.button`
  // Styling
  background: #353535;
  width: 20%;
  opacity: 0.8;
  color: white;
  font-family: ${props => props.theme.Robotofont};
  font-size: 0.9em;
  font-weight: bold;
  margin: auto; 
  padding: 15px 5px;
  
  // Border styling
  border: 1px solid white;
  border-radius: 5px 5px 0px 0px;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    transform: skewX(-32deg);
    border-radius: 10px 10px 10px 10px;
      :hover {
    background-color: ${props => props.theme.logoblue};
    opacity: 0.5;
    };
  };
  outline: none;
  
  // z-index tells css the position order it has over the objects.
  z-index: 1;
 
  // Formatting
  align-self: auto;
`;

class AppNav extends Component {
  render() {
    return (
      <Nav>
          <NavOption>Home</NavOption>
          <NavOption>Existing</NavOption>
          <NavOption>New Job</NavOption>
          <NavOption>Clients</NavOption>
          <NavOption>Settings</NavOption>
      </Nav>
    );
  }
}

export default AppNav;
