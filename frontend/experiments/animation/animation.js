import React, { Component } from 'react';
import styled from 'styled-components';

import ScrollMagic from '../ScrollMagic/ScrollMagic';


// I have to remember to delete the iscroll-lite after.
import IScroll from '../ScrollMagic/iscroll/iscroll-probe';


const Animation = styled.div`
  margin: auto;
  width: 50%;
  //height: 50%;
  text-align: center;
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
  overflow-y: scroll;
  overflow-x: hidden;
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
    const controller = new ScrollMagic.Controller({container: wrapper});

    // init tween
    const tween = TweenMax.to(mobileTest, 0.5, {backgroundColor: "red", scale: 0.4, borderRadius: 75});

    const scene = new ScrollMagic.Scene({
      triggerElement: trigger, // Starting scene when it reaches this point.
      duration: 500, // Number of px it will scroll for.
      offset: 500  // Start scrolling after (x) px.
    })
      .setTween(tween) // binds scroll position to the tween
      .setPin(mobileTest) // The element we want to pin. This pin puts the element to a fixed position
      .addTo(controller); // Adds this scene to the controller. (can add multiple scene to controller)



    const myScroll = new IScroll(wrapper, {
        // don't scroll horizontal
        scrollX: false,
        // but do scroll horizontal
        scrollY: true,
        // show scroll bars
        // scrollbars: true,
        // mouseWheel: true,

        useTransform: false,
        useTransition: true,
        probeType: 3,
      }
    );

    controller.scrollPos(function () {
      return -myScroll.y;
    });

    myScroll.on("scroll", function () {
      controller.update();
    });


    // scene.addIndicators({parent: '.scrollContent'});
  }



  render() {
    return (
      <Div id="superWrapper">
        <Trigger id="trigger">
        <Animation id="mobileTest">
          <p>The animated part</p>
        </Animation>
        </Trigger>
      </Div>
    );
  }
}


export default AnimationTest;
