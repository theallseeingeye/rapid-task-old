import React, { Component } from 'react';
import styled from 'styled-components'

const Copyright = styled.div`
  font-size: 1.2em;
  float: right;
  margin-right: 15px;
  height: 10vh;
  transform: translateY(-65px);
`;

const Divider = styled.div`
  height: 5vh;
  background-color: rgba(113, 130, 161, 1);
  transform: translateY(-17px);
`;

const FindOutMore = styled.div`
  text-align: center;
  line-height: 1.7em;
  font-size: 1.2em;
  a:link {
    color: black;
  }
  a:visited {
    color: dimgray;
  }
  a:hover {
    color: slategray;
  }
  @media (min-width: ${props => props.theme.tabletscreen}) {
  font-size: 1.5em;
  }
  @media (min-width: ${props => props.theme.desktopscreen}) {
  font-size: 1.8em;
  }
  @media (min-width: ${props => props.theme.giantscreen}) {
  font-size: 2em;
  }
`;

const AboutHeader = styled.p`
  color: darkslategray;
  font-weight: bold;
  font-size: 1.3em;
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
      <div>
        <Divider/>
        <FindOutMore>
          <AboutHeader>Find Out More</AboutHeader>
          <a href='About'>About</a>
          <br />
          <a href='Careers'>Careers</a>
          <br />
          <a href='MediaKit'>Media Kit</a>
          <br />
          <a href='Investors'>Investor Relations</a>
        </FindOutMore>
        <Copyright>
          <div className='dateValue'>
            © {this.state.dateYear}, RapidTask
          </div>
        </Copyright>
      </div>
    );
  }
}

export default Footer;