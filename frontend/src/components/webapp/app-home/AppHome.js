import React, { Component } from 'react';
import styled from "styled-components";
import AppNav from "../app-nav/AppNav";

const MainDiv = styled.div`
  background-color: ${props => props.theme.logoblue};
  font-family: ${props => props.theme.Robotofont};
  width: 100%;
  text-align: center;
  overflow: hidden;
`;

const Logo = styled.svg`
  padding-top: 5vh;
  width: 200px;
  height: 200px;
   @media (min-width: ${props => props.theme.tabletscreen}) {
    width: unset;
    height: unset;
  }
`;

const Text = styled.p`
  color: white;
  font-size: 1.5em;
  text-align: center;
  padding-top: 10vh;
  a:link {
    color: white;
    text-decoration: none;
  }
  
  a:hover {
    color: #6cf5ff;
  }
`;

class AppHome extends Component {
  render() {
    return (
      <MainDiv>
        <Text>
          If you require further information regarding Rapid Task or are interested in using our publication materials
          please contact us at <br/>
          <a href="mailto:inquiries@rapidtask.com?Subject=%20" target="_top"><b>inquiries@rapidtask.com</b></a>
        </Text>
        <Logo data-name="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 344.33 344.33" width="400" height="400">
            <circle cx="172.16" cy="172.16" r="172.16" fill="#fff"/>
            <g>
              <path d="M269,100.38,248.06,69l-52.28,31.37-17.53,27.71c-12.55,20.91-13.68,19.34-19.07,19.34H76.82L49.73,189.25H162.15c30.68,0,49.57,0,70.48-31.89" fill="#3FA9F5"/>
              <path d="M319.16,146.06,298.25,114.7,246,146.06l-17.53,27.71c-12.55,20.91-13.68,19.34-19.07,19.34l-162-.06L20.56,234.94H212.33c30.68,0,49.57,0,70.48-31.89" fill="#3FA9F5"/>
            </g>
          </Logo>
        <AppNav/>
      </MainDiv>
    );
  }
}

export default AppHome;