import React, { Component } from 'react';
import styled from 'styled-components';

import ScrollMagic from './../../../utils/scrollmagic/ScrollMagic';
import IScroll from './../../../utils/iscroll/iscroll-probe';



const Animate = styled.p`
  border: solid green;
  //margin: 0 auto;
  //overflow-y: scroll;
  //overflow-x: hidden;
  //width: 100%;
`;

const Div = styled.div`
  //height: 100%;
`;


class AnimationTest extends Component {
  constructor(props) {
    super(props);

    // div = this.div.bind(this);
    // animate = this.animate.bind(this);

  }

  componentDidMount() {
    // const controller = new ScrollMagic.Controller();
    // const item = this.animate;
    // const div = this.div;
    //
    // const scene = new ScrollMagic.Scene({
    //   triggerElement: div,
    //   duration: 500,
    //   offset: 75
    // })
    //   .setTween(item, 0.5, {backgroundColor: "red", autoRound: false})
    //   .setPin(item)
    //   .addTo(controller);

    // const myScroll = new IScroll(item,
    //   {
    //     scrollX: false,
    //     scrollY: true,
    //     // scrollbars: true,
    //     // useTransform: false,
    //     // useTransition: false,
    //     // probeType: 3,
    //     // click: true
    //   }
    // );
    //
    // controller.scrollPos(function () {
    //   return -myScroll.y;
    // });
    //
    // myScroll.on("scroll", function () {
    //   controller.update();
    // });

    // scene.addIndicators({parent: '.scrollContent'});
  }


  //
  //   const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
  //   const body = document.body;
  //   const html = document.documentElement;
  //   const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
  //   const windowBottom = windowHeight + window.pageYOffset;
  //   if (windowBottom >= docHeight) {
  //     this.setState({
  //       message:'bottom reached'
  //     });
  //   } else {
  //     this.setState({
  //       message:'not at bottom'
  //     });
  //   }
  //   console.log('Handle Scroll did invoke');
  // }


  render() {
    return (
      <Div innerRef={ (test) => {this.div = test;}}>
        <Animate innerRef={ (test) => {this.animate = test;}}>
          AM I WORKING?
        </Animate>
        <div>
          Event Listener Test
        </div>
      </Div>
    );
  }
}


export default AnimationTest;
