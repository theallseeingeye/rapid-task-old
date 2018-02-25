import React, { Component } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  bottom: 0;
  position: fixed;
  width: 100%;
  z-index: 2;
  overflow: hidden;
  
  // To set bounds of placing nav-bar on top.
  @media (min-width: ${props => props.theme.tabletscreen}) {
    bottom: initial;
    position: absolute;
    top: 10px; // Brings the nav bar from the top
  }
`;

const FlexContainer = styled.div`
  align-content: flex-end;
  display: flex;
  margin: 0 auto;

  // Adjusts the size of the nav-bar according to screen sizes.
   @media (min-width: ${props => props.theme.tabletscreen}) {
    max-width: ${props => props.theme.tabletscreen};
    margin: auto;
  };
  @media (min-width: ${props => props.theme.giantscreen}) {
    max-width: ${props => props.theme.desktopscreen};
    margin: auto;
  };
`;

const FlexItem = styled.button`
  // Styling
  background: rgba(63, 169, 245, 0.8);
  color: white;
  font-family: ${props => props.theme.Robotofont};
  font-size: 1em;
  font-weight: bold;
  margin: auto; 
  padding: 10px 5px;
  position: relative;
  text-align: center;

  // Border styling
  border-radius: 10px 10px 0 0;

  @media (min-width: ${props => props.theme.tabletscreen}) {
      transform: skewX(-32deg);
        border-radius: 10px 10px 10px 10px;
  };
  
  // z-index tells css the position order it has over the objects.
  z-index: 1;
  
  // Formatting
  align-self: auto;
  flex-grow: ${props => props.flexgrow};
  flex-shrink: ${props => props.flexshrink};

  :hover {
    background: rgba(63, 169, 245, 0.3);
  };
`;

class NavBar extends Component {
  render() {
    return (
      <Nav>
        <FlexContainer>
          <FlexItem flexgrow="1">Features</FlexItem>
          <FlexItem flexgrow="1">Contact</FlexItem>
          <FlexItem flexgrow="1">About</FlexItem>
          <FlexItem flexgrow="1">Development</FlexItem>
        </FlexContainer>
      </Nav>
    );
  }
}

export default NavBar;

