import React, { Component } from 'react';
import styled from 'styled-components';

import layerScrollHandler from '../../../../utils/jsfunctions/ScrollHandler';
import triggerAction from '../../../../utils/jsfunctions/ScrollTrigger';

import BottomLayer from "./ParkingLotLayers/BottomLayer";
import GravelLayer from "./ParkingLotLayers/GravelLayer";
import AsphaltLayer from "./ParkingLotLayers/AsphaltLayer";
import CurbsLayer from "./ParkingLotLayers/CurbsLayer";
import GrassLayer from "./ParkingLotLayers/GrassLayer";
import LampsLayer from "./ParkingLotLayers/LampsLayer";
import TreesLayer from "./ParkingLotLayers/TreesLayer";
import LinesLayer from "./ParkingLotLayers/LinesLayer";
import PylonsLayer from "./ParkingLotLayers/PylonsLayer";


const Div = styled.div`
   margin: auto;
   //max-width: 100%;
   position: absolute;
`;

const Svg = styled.svg`
		position: fixed; // This is required for the scroll animation to stick as it passes. For layerScrollHandler Function.
		max-width: 49vw;
		border: solid yellow;
		padding-left: 2px; // Keep svg from left border
`;

class ParkingLotAnimation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bottomLayerHidden: true,
      gravelLayerHidden: true,
      asphaltLayerHidden: true,
      curbsLayerHidden: true,
      grassLayerHidden: true,
      lampsLayerHidden: true,
      treesLayerHidden: true,
      linesLayerHidden: true,
      pylonsLayerHidden: true,
    }
  }

  // These sets the trigger to the desired div for a trigger. Activates when the window scroll reaches the div coords.
  // Formula TriggerAction(targeted div for trigger, Offset from top of targeted div, object to activate)
  bottomLayerTrigger() {
      if (triggerAction("bottomTrigger", 0.5, "svgMain") ===  true) {
      this.setState({
        bottomLayerHidden: false
      })
    }
  }

  gravelLayerTrigger() {
      if (triggerAction("gravelTrigger", 0.5, "svgMain") ===  true) {
      this.setState({
        gravelLayerHidden: false
      })
    }
  }

  asphaltLayerTrigger() {
      if (triggerAction("asphaltTrigger", 0.5, "svgMain") ===  true) {
      this.setState({
        asphaltLayerHidden: false
      })
    }
  }

  curbsLayerTrigger() {
      if (triggerAction("curbsTrigger", 0.5, "svgMain") ===  true) {
      this.setState({
        curbsLayerHidden: false
      })
    }
  }

  grassLayerTrigger() {
      if (triggerAction("grassTrigger", 0.5, "svgMain") ===  true) {
      this.setState({
        grassLayerHidden: false
      })
    }
  }

  lampsLayerTrigger() {
      if (triggerAction("lampsTrigger", 0.5, "svgMain") ===  true) {
      this.setState({
        lampsLayerHidden: false
      })
    }
  }

  treesLayerTrigger() {
      if (triggerAction("treesTrigger", 0.5, "svgMain") ===  true) {
      this.setState({
        treesLayerHidden: false
      })
    }
  }

  linesLayerTrigger() {
      if (triggerAction("linesTrigger", 0.5, "svgMain") ===  true) {
      this.setState({
        linesLayerHidden: false
      })
    }
  }

  pylonsLayerTrigger() {
      if (triggerAction("pylonsTrigger", 0.5, "svgMain") ===  true) {
      this.setState({
        pylonsLayerHidden: false
      })
    }
  }

  componentDidMount() {

    // Magic scroll! This makes the parking lot SVG stick on the scroll.
    function scrollHandler() {
      layerScrollHandler("svgMain", "parentDiv", 0.6);
    }

    window.onscroll = () => {
      // This applies the scroll user values on the following functions:
      this.bottomLayerTrigger();
      this.asphaltLayerTrigger();
      this.gravelLayerTrigger();
      this.curbsLayerTrigger();
      this.grassLayerTrigger();
      this.lampsLayerTrigger();
      this.treesLayerTrigger();
      this.linesLayerTrigger();
      this.pylonsLayerTrigger();
      window.requestAnimationFrame(scrollHandler);
    }
  }

  // NOTE: The order of these elements layers are important to display correctly.
  render() {
    return (
      <Div>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 587.98 900" id="svgMain">
          <title>Rapid Task Layered Lot</title>
            {!this.state.bottomLayerHidden && <BottomLayer/>}
            {!this.state.gravelLayerHidden && <GravelLayer/>}
            {!this.state.asphaltLayerHidden && <AsphaltLayer/>}
            {!this.state.linesLayerHidden && <LinesLayer/>}
            {!this.state.grassLayerHidden && <GrassLayer/>}
            {!this.state.curbsLayerHidden && <CurbsLayer/>}
            {!this.state.lampsLayerHidden && <LampsLayer/>}
            {!this.state.treesLayerHidden && <TreesLayer/>}
            {!this.state.pylonsLayerHidden && <PylonsLayer/>}
        </Svg>
      </Div>
    );
  }
}

export default ParkingLotAnimation;