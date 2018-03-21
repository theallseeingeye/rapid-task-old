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
  border: 1px solid white;
  border-radius: 10px 10px 0 0;
  @media (min-width: ${props => props.theme.tabletscreen}) {
    transform: skewX(-32deg);
    border-radius: 10px 10px 10px 10px;
      a :hover {
    background: rgba(63, 169, 245, 0.3);
    };
  };
  outline: none;
  
  // z-index tells css the position order it has over the objects.
  z-index: 1;
 
  // Formatting
  align-self: auto;
  flex-grow: 1;
`;

const NavLinks = FlexItem.withComponent(NavLink).extend` // To override the properties of react-router and apply styling
  text-decoration: none;
`;

class NavBar extends Component {

  handleClick = (e, location) => {
    e.preventDefault();
    TweenLite.to(window, 1, {scrollTo:{y:location, autoKill:false}});
  };

  render() {
    return (
      <Nav>
        <FlexContainer>
          <FlexItem onClick={ (e) => this.handleClick(e, "#featuresScrollTarget")}>Features</FlexItem>
          <FlexItem onClick={ (e) => this.handleClick(e, "#contactScrollTarget")}>Contact</FlexItem>
          <FlexItem onClick={ (e) => this.handleClick(e, "#aboutScrollTarget")}>About</FlexItem>
          <NavLinks to="/investor-relations">Investors</NavLinks>
        </FlexContainer>
      </Nav>
    );
  }
}

export default NavBar;

