import React, { Component } from 'react';
import styled from 'styled-components';

import ScrollMagic from '../ScrollMagic/ScrollMagic';




// I have to remember to delete the iscroll-lite after.
// import IScroll from '../ScrollMagic/iscroll/iscroll-probe';


const Animation = styled.svg`
  margin: auto;
  width: 50%;
  height: 50%;
  text-align: center;
  background-color: deeppink;
  position: fixed;
  top: 25vh;
 

  //content: '';

`;


const Div = styled.div`
  border: solid green;
  //position: absolute;
  //margin: 0 auto;
  //overflow-y: scroll;
  //overflow-x: hidden;
  //width: 100%;
`;

const Trigger = styled.div`
  //overflow-y: scroll;
  //overflow-x: hidden;
  width: 100%;
  height: 100%;
  //position: absolute;
  #superWrapper {
    height: 100%;
  }
`;


class AnimationTest extends Component {
  constructor(props) {
    super(props);

    // div = this.div.bind(this);
    // animate = this.animate.bind(this);

  }

  componentDidMount() {
    // const animate = this.animate;
    // const div = this.div;
    const wrapper = document.getElementById("superWrapper");
    const mobileTest = document.getElementById("mobileTest");
    const trigger = document.getElementById("trigger");

    // Init controller
    const controller = new ScrollMagic.Controller();

    // init tween
    const tween = TweenMax.to(mobileTest,  0.5, {
                      ease:
                      Bounce. easeOut,
                      y: 400,
                      opacity: 0
                      });

    const scene = new ScrollMagic.Scene({
      triggerElement: trigger, // Starting scene when it reaches this point.
      // duration: 1000, // Number of px it will scroll for.
      offset: 200  // Start scrolling after (x) px.
    })
      .setTween(tween) // binds scroll position to the tween
      .setPin(mobileTest) // The element we want to pin. This pin puts the element to a fixed position
      .addTo(controller); // Adds this scene to the controller. (can add multiple scene to controller)



    // const myScroll = new IScroll(wrapper, {
    //     // don't scroll horizontal
    //     scrollX: false,
    //     // but do scroll horizontal
    //     scrollY: true,
    //     // show scroll bars
    //     // scrollbars: true,
    //     // mouseWheel: true,
    //
    //     useTransform: false,
    //     useTransition: true,
    //     probeType: 3,
    //   }
    // );
    //
    // controller.scrollPos(function () {
    //   return -myScroll.y;
    // });

    // myScroll.on("scroll", function () {
    //   controller.update();
    // });


//         function isPositionFixed () {
//       return (window.getComputedStyle(elem.domEl).position === 'fixed')
// }

    // scene.addIndicators({parent: '.scrollContent'});
  }



  render() {
    return (
      <Div id="superWrapper">
        <Trigger id="trigger">
        <Animation id="mobileTest">
          <p>The animated part</p>
          {/*<TreesLayer/>*/}
        </Animation>

        </Trigger>
      </Div>
    );
  }
}


export default AnimationTest;
