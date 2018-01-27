import React, { Component } from 'react';
import styled from 'styled-components';

import layerScrollHandler from '../../../../utils/jsfunctions/ScrollHandler';
import {triggerAction, scrollDirection} from '../../../../utils/jsfunctions/ScrollTrigger';

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
  max-width: 50%;
  position: absolute;
`;

const Svg = styled.svg`
  position: fixed; // This is required for the scroll animation to stick as it passes. For layerScrollHandler Function.
  max-width: 49vw;
  border: solid yellow;
  padding-left: 2px; // Keep svg from left border
  
  @media (min-width: ${props => props.theme.desktopscreen}) {
    max-width: 500px;
    margin-left: 15vw;
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

  // "triggerAction" sets the trigger to the desired div for a trigger. Activates when the window scroll reaches the div coords.
  // triggerAction(targeted div for trigger, Offset from top of targeted div, object to activate)
  //
  // First condition: If true: show the layer
  // Second condition: If true: remove the layer
  bottomLayerTrigger() {
    if (triggerAction("bottomTrigger", 0.5, "svgMain") === "Activate") {
      this.setState({
        bottomLayerHidden: false
      })
    } else if ((triggerAction("bottomTrigger", 0.5, "svgMain") === "Not Active")) {
      this.setState({
        bottomLayerHidden: true
      })
    }
  }
  gravelLayerTrigger() {
    if (triggerAction("gravelTrigger", 0.5, "svgMain") ===  "Activate") {
      this.setState({
        gravelLayerHidden: false
      })
    } else if ((triggerAction("gravelTrigger", 0.5, "svgMain") === "Not Active")) {
      this.setState({
        gravelLayerHidden: true
      })
    }
  }

  asphaltLayerTrigger() {
    if ((triggerAction("asphaltTrigger", 0.5, "svgMain") === "Activate")) {
      this.setState({
        asphaltLayerHidden: false
      })
    } else if ((triggerAction("asphaltTrigger", 0.5, "svgMain") === "Not Active")) {
      this.setState({
        asphaltLayerHidden: true
      })
    }
  }

  curbsLayerTrigger() {
    if (triggerAction("curbsTrigger", 0.5, "svgMain") ===  "Activate") {
      this.setState({
        curbsLayerHidden: false
      })
    } else if ((triggerAction("curbsTrigger", 0.5, "svgMain") === "Not Active")) {
      this.setState({
        curbsLayerHidden: true
      })
    }
  }

  grassLayerTrigger() {
    if (triggerAction("grassTrigger", 0.5, "svgMain") ===  "Activate") {
      this.setState({
        grassLayerHidden: false
      })
    } else if ((triggerAction("grassTrigger", 0.5, "svgMain") === "Not Active")) {
      this.setState({
        grassLayerHidden: true
      })
    }
  }

  lampsLayerTrigger() {
    if (triggerAction("lampsTrigger", 0.5, "svgMain") ===  "Activate") {
      this.setState({
        lampsLayerHidden: false
      })
    } else if ((triggerAction("lampsTrigger", 0.5, "svgMain") === "Not Active")) {
      this.setState({
        lampsLayerHidden: true
      })
    }
  }

  treesLayerTrigger() {
    if (triggerAction("treesTrigger", 0.5, "svgMain") ===  "Activate") {
      this.setState({
        treesLayerHidden: false
      })
    } else if ((triggerAction("treesTrigger", 0.5, "svgMain") === "Not Active")) {
      this.setState({
        treesLayerHidden: true
      })
    }
  }
  linesLayerTrigger() {
    if (triggerAction("linesTrigger", 0.5, "svgMain") ===  "Activate") {
      this.setState({
        linesLayerHidden: false
      })
    } else if ((triggerAction("linesTrigger", 0.5, "svgMain") === "Not Active")) {
      this.setState({
        linesLayerHidden: true
      })
    }
  }

  pylonsLayerTrigger() {
    if (triggerAction("pylonsTrigger", 0.5, "svgMain") ===  "Activate") {
      this.setState({
        pylonsLayerHidden: false
      })
    } else if ((triggerAction("pylonsTrigger", 0.5, "svgMain") === "Not Active")) {
      this.setState({
        pylonsLayerHidden: true
      })
    }
  }

  componentDidMount() {

    // Magic scroll! This makes the parking lot SVG stick on the scroll.
    function scrollHandler() {
      layerScrollHandler("svgMain", "parentDiv");
    }

    window.onscroll = () => {
      // This applies the user's scroll values on the following functions:
      window.requestAnimationFrame(scrollHandler);
      this.bottomLayerTrigger();
      this.asphaltLayerTrigger();
      this.gravelLayerTrigger();
      this.curbsLayerTrigger();
      this.grassLayerTrigger();
      this.lampsLayerTrigger();
      this.treesLayerTrigger();
      this.linesLayerTrigger();
      this.pylonsLayerTrigger();
    }
  }

  // NOTE: The order of these elements layers are important to display correctly.
  render() {
    return (
      <Div>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 587.98 900" id="svgMain">
          <title>Rapid Task Layered Lot</title>
            {!this.state.bottomLayerHidden && <BottomLayer/>}

            {/*/!*This allows the reverse animation to trigger*!/*/}
            {/*{(() => {*/}
              {/*switch (this.state.bottomLayerHidden) {*/}
                {/*case "forward": return <AsphaltLayer/>;*/}
                {/*case "reverse": return <AsphaltLayer id="reverse"/>*/}
              {/*}*/}
            {/*})()}*/}


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