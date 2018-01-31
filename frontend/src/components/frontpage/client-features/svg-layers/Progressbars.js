import React, { Component } from 'react';
import styled from 'styled-components';
import theme from "../../../../global-styles/DefaultTheme";
import {TweenMax} from 'gsap';

const Svg = styled.svg`
  max-width: 60%;
  //margin: auto;
  //height: 90%;
  border: solid red;
  
`;


class ProgressBars extends Component {
    constructor(props) {
    super(props);

    this.color = theme.logoblue;
  }

  componentDidMount() {
    const poopass = document.getElementById("gay");

    // TweenMax.to({this.blueBar}, 5, {width:"100%"});
    TweenMax.to(poopass, 3, {rotation:360, repeat:10, force3D:true});

  }

  render() {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 362.5 50" id="gay" >

        {/*<defs>*/}
          {/*<clipPath id="maskPath">*/}
             {/*<rect width="362.5" height="19.5" rx="9.75" ry="9.75" fill={this.color}/>*/}
              {/*/!*<rect width="370" height="20" fill={this.color} />*!/*/}
          {/*</clipPath>*/}
          {/*<svg id="progressBar">*/}
              {/*<rect width="370" height="20"/>*/}
          {/*</svg>*/}
        {/*</defs>*/}
        <g>
          <rect width="362.5" height="19.5" rx="9.75" ry="9.75" fill="#ffff1a"/>
        </g>
        {/*<g>*/}
          {/*<rect width="362.5" height="19" rx="9.75" ry="9.75"/>*/}
          {/*/!*<Test width="50" height="20" fill={this.color} clipPath="url(#maskPath)"/>*!/*/}
        {/*</g>*/}
        <g >
          <rect x="282.45" y="29" width="71.82" height="19.5" rx="3.44" ry="3.44" fill={this.color}/>
        </g>

        {/*<svg x="0" y="100">*/}
          {/*<rect width="362.5" height="19.5" rx="9.75" ry="9.75" fill="#a2aebb"/>*/}
          {/*<rect width="139.75" height="19.5" rx="9.75" ry="9.75" fill={this.color}/>*/}
        {/*</svg>*/}
        {/*<svg x="0" y="200">*/}
          {/*<rect width="362.5" height="19.5" rx="9.75" ry="9.75" fill="#a2aebb"/>*/}
          {/*<rect width="139.75" height="19.5" rx="9.75" ry="9.75" fill={this.color}/>*/}
        {/*</svg>*/}
        {/*<svg x="0" y="300">*/}
          {/*<rect width="362.5" height="19.5" rx="9.75" ry="9.75" fill="#a2aebb"/>*/}
          {/*<rect width="139.75" height="19.5" rx="9.75" ry="9.75" fill={this.color}/>*/}
        {/*</svg>*/}
        {/*<svg x="0" y="400">*/}
          {/*<rect width="362.5" height="+19.5" rx="9.75" ry="9.75" fill="#a2aebb"/>*/}
          {/*<rect width="139.75" height="19.5" rx="9.75" ry="9.75" fill={this.color}/>*/}
        {/*</svg>*/}
      </Svg>
    );
  }
}

export default ProgressBars;

