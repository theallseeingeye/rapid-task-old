import React, { Component } from 'react';
import styled from 'styled-components';
import {TweenMax} from 'gsap';

// ScrollMagic and GSAP is used here!
import ScrollMagic from "../../../../../utils/jsfunctions/ScrollMagicGsapAdapter"; //Custom adapter that lets us use GSAP and ScrollMagic in React

// SVG Layers
import BottomLayer from "./BottomLayer";
import GravelLayer from "./GravelLayer";
import AsphaltLayer from "./AsphaltLayer";
import CurbsLayer from "./CurbsLayer";
import GrassLayer from "./GrassLayer";
import LampsLayer from "./LampsLayer";
import TreesLayer from "./TreesLayer";
import LinesLayer from "./LinesLayer";
import PylonsLayer from "./PylonsLayer";
import EquipmentLayer from "./EquipmentLayer";


const Div = styled.div`
  width: 45vw;
  max-width: 500px;
  position: absolute;
  display: flex;
`;

const Svg = styled.svg`
  position: fixed; // This is required to make the svg stick to scroll.
  max-width: 45vw; // This is for small mobile screens
  z-index: -6; // This makes sure that the svg layers hide below the next div for effect.
  top: 25vh; // center the svg on the page vertically.
    
  @media (min-width: ${props => props.theme.desktopscreen}) {
    max-width: 400px; // To keep the layers from getting too big
    top: 10vh; // Adjust the layers to the middle vertical height
    margin-left: 2.5vw;
  }
`;


class ParkingLotAnimation extends Component {
  componentDidMount() {
    const mainSVG = document.getElementById("svgMain");
    const parentDIV = document.getElementById("parentDiv");
    const triggerEnd = document.getElementById("endTrigger"); // The start of the next div which is the employees section

    const layerId = [
      bottomLayer,
      gravelLayer,
      equipmentLayer,
      asphaltLayer,
      curbsLayer,
      grassLayer,
      lampsLayer,
      treesLayer,
      linesLayer,
      pylonsLayer,
    ];

    // Init controller
    const controller = new ScrollMagic.Controller();

    // To set each layer invisible before doing anything.
    TweenMax.set([layerId], {autoAlpha:0});

    // There is a slight start delay on mobile- This sets the trigger sooner before the visible trigger. This allows
    // the scrollMagic to trigger on time for the first layer to trigger.
    const preload = TweenMax.to(bottomLayer, 0.001, {autoAlpha:0});

    // Gsap's animations
    const tweenBottom = TweenMax.to(bottomLayer, 0.3, {autoAlpha: 1, ease: Bounce.easeOut, y:200});
    const tweenGravel = TweenMax.to(gravelLayer, 0.3, {autoAlpha: 1, ease: Bounce.easeOut, y:200});
    const tweenEquipment = TweenMax.to(equipmentLayer, 0.3, {autoAlpha: 1, ease: Bounce.easeOut, y:200});
    const tweenAsphalt = TweenMax.to(asphaltLayer, 0.4, {autoAlpha: 1, ease: Bounce.easeOut, y:200});
    const tweenCurbs = TweenMax.to(curbsLayer, 0.4, {autoAlpha: 1, ease: Bounce.easeOut, y:200});
    const tweenGrass = TweenMax.to(grassLayer, 0.4, {autoAlpha: 1, ease: Bounce.easeOut, y:200});
    const tweenLamps = TweenMax.to(lampsLayer, 0.4, {autoAlpha: 1, ease: Bounce.easeOut, y:200});
    const tweenTrees = TweenMax.to(treesLayer, 0.4, {autoAlpha: 1, ease: Bounce.easeOut, y:200});
    const tweenLines = TweenMax.to(linesLayer, 0.4, {autoAlpha: 1, ease: Bounce.easeOut, y:200});
    const tweenPylons = TweenMax.to(pylonsLayer, 0.4, {autoAlpha: 1, ease: Bounce.easeOut, y:200});

    // This is to hide all the svg layers.
    const endTween = TweenMax.to(mainSVG, 0.01, {autoAlpha:0}); // Require this to fade out super fast to stop flashing below.

    // ScrollMagic Scenes.
    const sceneMain = new ScrollMagic.Scene({
      triggerElement: parentDIV, // This the top of main div of QuoteFeatures.js
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

    const sceneEquipment = new ScrollMagic.Scene({
      triggerElement: equipmentTrigger,
    })
      .setTween(tweenEquipment)
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
      offset: 375
    })
      .setTween(endTween)
      .setPin(mainSVG)
      .addTo(controller);
  }

  // NOTE: The order of these elements layers are important to display correctly.
  render() {
    return (
      <Div>
        <Svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 587.98 900" id="svgMain">
          <title>Rapid Task Layered Lot</title>
          <BottomLayer/>
          <GravelLayer/>
          <EquipmentLayer/>
          <AsphaltLayer/>
          <LinesLayer/>
          <GrassLayer/>
          <CurbsLayer/>
          <LampsLayer/>
          <TreesLayer/>
          <PylonsLayer/>
        </Svg>
      </Div>
    );
  }
}

export default ParkingLotAnimation;