import React, { Component } from 'react';
import styled from 'styled-components';

import BottomLayer from "./ParkingLotLayers/BottomLayer";
import GravelLayer from "./ParkingLotLayers/GravelLayer";
import AsphaltLayer from "./ParkingLotLayers/AsphaltLayer";
import CurbsLayer from "./ParkingLotLayers/CurbsLayer";
import GrassLayer from "./ParkingLotLayers/GrassLayer";
import LampsLayer from "./ParkingLotLayers/LampsLayer";
import TreesLayer from "./ParkingLotLayers/TreesLayer";
import LinesLayer from "./ParkingLotLayers/LinesLayer";
import PylonsLayer from "./ParkingLotLayers/PylonsLayer";
import ScrollMagic from "./ScrollMagicGsapAdapter";

const Div = styled.div`
  margin: auto;
  max-width: 50%;
  width: 100%;
  position: absolute;
`;

const Svg = styled.svg`
  position: fixed; // This is required for the scroll animation to stick as it passes. For layerScrollHandler Function.
  max-width: 48vw;
  padding: 2px; // Keep svg from left border
  z-index: -6; // This makes sure that the layers hide below the div below.
  top: 25vh;

  // @media (min-width: {props => props.theme.desktopscreen}) {
  //   max-width: 500px;
`;


class ParkingLotAnimation extends Component {

  componentDidMount() {
    const mainSVG = document.getElementById("svgMain");
    const parentDIV = document.getElementById("parentDiv");
    const triggerEnd = document.getElementById("endTrigger"); // The start of the next div which is the employees section

    // Init controller
    const controller = new ScrollMagic.Controller();

    // To set each layer invisible before doing anything.
    TweenMax.set([
      // mainSVG,
      bottomLayer,
      gravelLayer,
      asphaltLayer,
      curbsLayer,
      grassLayer,
      lampsLayer,
      treesLayer,
      linesLayer,
      pylonsLayer,
    ], {autoAlpha:0});

    // There is a slight start delay on mobile- This sets the trigger sooner before the visible trigger. This allows
    // the scrollMagic to trigger on time for the first layer to trigger.
    const preload = TweenMax.to(bottomLayer, 0.1, {autoAlpha:0});

    // Gsap's animations
    const tweenBottom = TweenMax.to(bottomLayer, 0.4, {autoAlpha: 1, ease: Bounce.easeOut, y:200});
    const tweenGravel = TweenMax.to(gravelLayer, 0.4, {autoAlpha: 1, ease: Bounce.easeOut, y:200});
    const tweenAsphalt = TweenMax.to(asphaltLayer, 0.4, {autoAlpha: 1, ease: Bounce.easeOut, y:200});
    const tweenCurbs = TweenMax.to(curbsLayer, 0.4, {autoAlpha: 1, ease: Bounce.easeOut, y:200});
    const tweenGrass = TweenMax.to(grassLayer, 0.4, {autoAlpha: 1, ease: Bounce.easeOut, y:200});
    const tweenLamps = TweenMax.to(lampsLayer, 0.4, {autoAlpha: 1, ease: Bounce.easeOut, y:200});
    const tweenTrees = TweenMax.to(treesLayer, 0.4, {autoAlpha: 1, ease: Bounce.easeOut, y:200});
    const tweenLines = TweenMax.to(linesLayer, 0.4, {autoAlpha: 1, ease: Bounce.easeOut, y:200});
    const tweenPylons = TweenMax.to(pylonsLayer, 0.4, {autoAlpha: 1, ease: Bounce.easeOut, y:200});

    const endTween = TweenMax.to(mainSVG, 0.1, {autoAlpha:0});


    const sceneMain = new ScrollMagic.Scene({
      triggerElement: parentDIV,
    })
      .setTween(preload)
      .setPin(mainSVG)
      .addTo(controller);

    const scene = new ScrollMagic.Scene({
      triggerElement: bottomTrigger, // Starting scene when it reaches this point.
    })
      .setTween(tweenBottom) // binds scroll position to the tween
      .setPin(mainSVG) // The element we want to pin. This pin puts the element to a fixed position
      .addTo(controller); // Adds this scene to the controller. (can add multiple scene to controller)

    const scene2 = new ScrollMagic.Scene({
      triggerElement: gravelTrigger,
    })
      .setTween(tweenGravel)
      .setPin(mainSVG)
      .addTo(controller);

    const scene3 = new ScrollMagic.Scene({
      triggerElement: asphaltTrigger,
    })
      .setTween(tweenAsphalt)
      .setPin(mainSVG)
      .addTo(controller);

    const scene4 = new ScrollMagic.Scene({
      triggerElement: curbsTrigger,
    })
      .setTween(tweenCurbs)
      .setPin(mainSVG)
      .addTo(controller);

    const scene5 = new ScrollMagic.Scene({
      triggerElement: grassTrigger,
    })
      .setTween(tweenGrass)
      .setPin(mainSVG)
      .addTo(controller);

    const scene6 = new ScrollMagic.Scene({
      triggerElement: lampsTrigger,
    })
      .setTween(tweenLamps)
      .setPin(mainSVG)
      .addTo(controller);

    const scene7 = new ScrollMagic.Scene({
      triggerElement: treesTrigger,
    })
      .setTween(tweenTrees)
      .setPin(mainSVG)
      .addTo(controller);

    const scene8 = new ScrollMagic.Scene({
      triggerElement: linesTrigger,
    })
      .setTween(tweenLines)
      .setPin(mainSVG)
      .addTo(controller);

    const scene9 = new ScrollMagic.Scene({
      triggerElement: pylonsTrigger,
    })
      .setTween(tweenPylons)
      .setPin(mainSVG)
      .addTo(controller);

    // This ends all of the tween by changing alpha to 0. Uses the bottom div trigger on the main div of this.
    const sceneEnd = new ScrollMagic.Scene({
      triggerElement: triggerEnd,
      offset: 200
    })
      .setTween(endTween)
      .setPin(mainSVG)
      .addTo(controller);
  }

  // NOTE: The order of these elements layers are important to display correctly.
  render() {
    return (
      <Div id="targetLayer">
        <Svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 587.98 900" id="svgMain">
          <title>Rapid Task Layered Lot</title>
          <BottomLayer/>
          <GravelLayer/>
          <AsphaltLayer/>
          <CurbsLayer/>
          <GrassLayer/>
          <LampsLayer/>
          <TreesLayer/>
          <LinesLayer/>
          <PylonsLayer/>
        </Svg>
      </Div>
    );
  }
}

export default ParkingLotAnimation;