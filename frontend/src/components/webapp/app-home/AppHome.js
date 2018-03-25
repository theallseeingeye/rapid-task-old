import React, { Component } from 'react';
import styled from "styled-components";
import Logo from "../../global-svg/logo"
import AppNav from "../app-nav/AppNav";

const MainDiv = styled.div`
  font-family: ${props => props.theme.Robotofont};
  width: 100%;
  height: 90vh;
  text-align: center;
  overflow: hidden;
`;

const LinkDiv = styled.div`
  bottom: 0;
  height: 315px;
  background: ${props => props.theme.logoblue};
  position: absolute;
  width: 100%;
`;

const LogoSmall = styled.svg`
  padding-top: 5vh;
  width: 200px;
  height: 140px;
   @media (min-width: ${props => props.theme.tabletscreen}) {
    width: unset;
    height: unset;
  }
`;

const Button = styled.button`
  background: ${props => props.theme.logoblue};
  color: white;
  border: transparent;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  margin: auto;
  padding: 20px;
  font-size: 1.5em;
  bottom: 0;
  position: relative;
  width: 100%;
 
  :link {
    background: ${props => props.theme.logoblue};
    
    color: white;
    text-decoration: none;
  }
  
  :hover {
    background-color: #1695f4;
    opacity: 0.5;
  }
`;

class AppHome extends Component {
  render() {
    return (
      <MainDiv>
        <LogoSmall data-name="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 344.33 344.33" width="400" height="400">
          <g>
            <path d="M269,100.38,248.06,69l-52.28,31.37-17.53,27.71c-12.55,20.91-13.68,19.34-19.07,19.34H76.82L49.73,189.25H162.15c30.68,0,49.57,0,70.48-31.89" fill="#3FA9F5"/>
            <path d="M319.16,146.06,298.25,114.7,246,146.06l-17.53,27.71c-12.55,20.91-13.68,19.34-19.07,19.34l-162-.06L20.56,234.94H212.33c30.68,0,49.57,0,70.48-31.89" fill="#3FA9F5"/>
          </g>
        </LogoSmall>
        <Logo/>
        <LinkDiv>
          <Button><a to="/createjob">New Job</a></Button>
          <Button><a to="/existingjobs">Existing Jobs</a></Button>
          <Button><a to="/jobstobill">Jobs to Bill</a></Button>
          <Button><a to="/clients">Clients</a></Button>
        </LinkDiv>
        <AppNav/>
      </MainDiv>
    );
  }
}

export default AppHome;