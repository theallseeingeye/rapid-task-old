import React, { Component } from 'react';
import NavBar from "./nav/navbar";
import logo from "./../../../images/RapidTaskLogo.svg"
import styled from 'styled-components';
import Charts from "./animations/animations"


const Wrapper = styled.div`

`;


const Logo = styled.img`
  display: block;
  margin: 2em auto;
  
  // To keep the logo relative to the screen sizes.
  @media (min-width: ${props => props.theme.giantscreen}) {
    max-width: calc((${props => props.theme.desktopscreen}) + 200px);

  };
`;

const Slogan = styled.p`
  margin: 1em;
  font-family: ${props => props.theme.mainfont};
  font-weight: bold;
  text-align: center;
`;

class FrontPage extends Component {
  render() {
    return (
      <Wrapper>
        <NavBar/>
          <div>
            <Logo src={logo} alt="Rapid Task Logo" />
            <Slogan>
              Streamlining your business processes so you can focus on what's important.
            </Slogan>
            <Slogan>
              Rapid Task will speed up your business processes from start to end.
            </Slogan>
            <Charts/>
          </div>
      </Wrapper>
    );
  }
}

export default FrontPage;
