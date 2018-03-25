import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  bottom: 0;
  position: fixed;
  width: 100%;
  z-index: 3;
  overflow: hidden;
`;

const NavOption = styled.button`
  // Styling
  background: white;
  color: ${props => props.theme.logoblue};
  width: 20%;
  font-family: ${props => props.theme.Robotofont};
  font-size: 0.8em;
  font-weight: bold;
  margin: auto; 
  padding: 15px 5px;
  
  // Border styling
  border: 1px solid ${props => props.theme.logoblue};
  border-radius: 5px 5px 0 0;
  :link {
    background: ${props => props.theme.logoblue};
    
    color: white;
    text-decoration: none;
  }
  
  :hover {
    background-color: white;
    opacity: 0.8;
  }
  
  
  @media (min-width: ${props => props.theme.tabletscreen}) {
    border-radius: 10px 10px 0 0;
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
