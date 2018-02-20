import React, { Component } from 'react';
import OfficeBeach from './OfficeBeach';
import styled from 'styled-components'

const FindOutMore = styled.div`
  text-align: right;
  line-height: 1.4em;
  font-size: 1.2em;
  bottom: 10vh;
  position: absolute;
  width: 95%;
  height: 40vh;

 
  a:link {
    color: black;
  }
  a:visited {
    color: dimgray;
  }
  a:hover {
    color: slategray;
  }
`;


const AboutHeader = styled.p`
  font-weight: bold;
  font-size: 1.3em;
`;
const BackgroundContainer = styled.div`
  width: 100%;
  position: absolute;
  height: 100vh;
  // To fade the background
  opacity: 1;
  // To place behind all divs
  z-index: -1;
  // To hid the sides that are stretching beyond the div
  overflow: hidden;
   @media (min-width: ${props => props.theme.tabletscreen}) {
   height: 112vh;
   font-size: 1.2em;
   }
   @media (min-width: ${props => props.theme.desktopscreen}) {
   height: 125vh;
   font-size: 1.4em;
   
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

  render() {
    return (
      <BackgroundContainer>
        <OfficeBeach/>
        <FindOutMore>
          <AboutHeader>Find Out More</AboutHeader>
          <a href='About'>About</a>
          <br />
          <a href='Careers'>Careers</a>
          <br />
          <a href='MediaKit'>Media Kit</a>
          <br />
          <a href='Investors'>Investor Relations</a>
          <br />
          <br />
          <div className='dateValue'>
            © {this.state.dateYear}, RapidTask
          </div>
        </FindOutMore>
       </BackgroundContainer>
    );
  }
}

export default Footer;