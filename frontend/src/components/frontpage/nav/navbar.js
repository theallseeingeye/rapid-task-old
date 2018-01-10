import React, { Component } from 'react';
import styled from 'styled-components';


const Nav = styled.nav`
  bottom: 0;
  position: fixed;
  width: 100%;
  z-index: 1;
  
  // To set bounds of placing nav-bar on top.
  @media (min-width: ${props => props.theme.tabletscreen}) {
    bottom: initial;
    position: absolute;
    top: 10px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  list-style: none;
  padding: 0;
  flex-wrap: nowrap;
  align-content: flex-end;
  margin: 0;

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
  margin: auto; 
  font-size: 1.2em;

  font-weight: bold;
  padding: 10px 5px;
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: all 0.5s;
  border: 1px solid black;
  position: relative;
  // z-index tells css the position order it has over the objects.
  z-index: 1;
  
  // Formatting
  align-self: auto;
  flex-grow: ${props => props.flexgrow};
  flex-shrink: ${props => props.flexshrink};
  flex-basis: ${props => props.flexbasis};

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
          <FlexItem flexgrow="1">TEST4</FlexItem>
        </FlexContainer>
      </Nav>
    );
  }
}

export default NavBar;

