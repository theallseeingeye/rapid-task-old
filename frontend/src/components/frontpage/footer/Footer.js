import React, { Component } from 'react';
import OfficeBeach from './svg/OfficeBeach';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components'

const FindOutMore = styled.div`
  font-family: ${props => props.theme.Robotofont};
  text-align: right;
  line-height: 1.4em;
  font-size: 1.2em;
  bottom: 10vh;
  height: 40vh;
  min-height: 300px;
  position: absolute;
  width: 95%;
  @media (min-width: ${props => props.theme.giantscreen}) {
   height: 450px;
  }
 
  //a:link {
  //  color: black;
  //}
  //a:hover {
  //  color: slategray;
  //}
`;


const ButtonLinks = styled.a` // Need this to match the styled of the other buttons from "Links" 
  color: black;
  cursor: pointer;
  
   
  &:link {
    color: black;
  }
  
  &:hover {
    color: slategray;
  }
`;

const Links = ButtonLinks.withComponent(NavLink).extend` // Required for the react-router to carry the style
`;

const AboutHeader = styled.p`
  font-weight: bold;
  font-size: 1.3em;
`;
const BackgroundContainer = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
  min-height: 520px;
  // To fade the background
  opacity: 1;
  // To place behind all divs
  z-index: -1;
  // To hide the sides that are stretching beyond the div
  overflow: hidden;
  @media (min-width: ${props => props.theme.tabletscreen}) {
   height: 112vh;
   font-size: 1.2em;
   min-height: 1200px;
  }
  @media (min-width: ${props => props.theme.giantscreen}) {
   height: 110vw;
   font-size: 1.6em;
  }
`;

class Footer extends Component {
  constructor() {
    super();

    const year = new Date(),
      dateValue = year.getFullYear();
    this.state = {
      dateYear: dateValue
    };
  }

  handleClick = (e, location) => {
    e.preventDefault();
    console.log("it clicked");
    TweenLite.to(window, 1, {scrollTo:{y:location, autoKill:false}});
  };

  render() {
    return (
      <BackgroundContainer>
        <OfficeBeach/>
        <FindOutMore>
          <AboutHeader>Find Out More</AboutHeader>
          <ButtonLinks onClick={ (e) => this.handleClick(e, "#aboutScrollTarget")}><u>About</u></ButtonLinks>
          <br />
          <Links to="/careers">Careers</Links>
          <br />
          <Links to="/media-relations">Media Relations</Links>
          <br />
          <Links to="/investor-relations">Investor Relations</Links>
          <br />
          <br />
          <div className='dateValue'>
            © {this.state.dateYear} Rapid Task
          </div>
        </FindOutMore>
       </BackgroundContainer>
    );
  }
}

export default Footer;