import React, { Component } from 'react';
import styled from 'styled-components'

const FindOutMore = styled.div`
  text-align: right;
  line-height: 1.4em;
  font-size: 1.2em;
  margin-right: 1em;

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
  margin-top: 40vw;
  margin-right: 3em;
  font-size: 1.5em;
  }
  @media (min-width: ${props => props.theme.desktopscreen}) {
  margin-top: 50vw;
  font-size: 1.8em;
  }
  @media (min-width: ${props => props.theme.giantscreen}) {
  margin-top: 75vw;
  font-size: 2em;
  }
`;

const Logo = styled.svg`
  position: absolute;
  z-index: 1;
`;

const AboutHeader = styled.p`
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
        <Logo id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 600">
              <title>Untitled-2</title>
              <circle cx="384.5" cy="350" r="234.5" fill="#fff"/>
              <g>
                <path d="M479.36,553.72,450.88,511l-71.21,42.72L355.8,591.46c-17.09,28.48-18.63,26.35-26,26.35H217.64l-36.9,57H333.86c41.79,0,67.51,0,96-43.44" transform="translate(37 -300)" fill="#3fa9f5"/>
                <path d="M547.72,616l-28.48-42.72L448,616l-23.87,37.74c-17.09,28.48-18.63,26.35-26,26.35L177.48,680,141,737H402.21c41.79,0,67.51,0,96-43.44" transform="translate(37 -300)" fill="#3fa9f5"/>
              </g>
            </Logo>
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
      </div>
    );
  }
}

export default Footer;