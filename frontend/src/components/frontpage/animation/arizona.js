import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
		margin: auto;
`;

const Svg = styled.svg`
  	background: hsl(47, 100%, 86%);
		position: fixed; // This is required for the scroll animation to stick as it passes.
		//top: 50%;
		//margin-top: -37.5%;

`;

class Arizona extends Component {

  componentDidMount() {

    /* -----------------------------------------------------------------------------------------------------------------
    This section watches the scroll actions of the user and animate the basic SVG attributes according to scroll
    percentage.

    - Watch for which SVG attribute compatibility: https://caniuse.com/#search=svg
    - To adjust the scroll speed, adjust the div height (vh) to the desired length. The scroll will calculate the
      animation time-line based on the scroll distance or height of the div.
     */
    function scrollHandler() {
        // ELEMENT ID
        const sun = document.getElementById("sun"); // SVG layer by id.
        const mainSvg = document.getElementById("arizona"); // This is the id for the main SVG
        const parentDiv = document.getElementById("scrollAnimation"); // This is the Parent Div of the SVG

        // DATA EXTRACTION
        const regex = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/;
        const svgLayers = mainSvg.querySelectorAll("path"); // Returns a list of paths in the svg file.
        const svgHeight = Math.round(mainSvg.getBoundingClientRect().height); // Gets the svg's height based on responsive size.
        const topDivTrigger =  Math.round(parentDiv.getBoundingClientRect().top); // Top trigger of the div
        const divHeight = Math.round(parentDiv.getBoundingClientRect().height); // Height of the div
        const scrollPercentage = (-topDivTrigger / (divHeight - svgHeight)); // Percentage of scroll based on height of svg.
        // The topDivTrigger counts down to position, we need to flip the sequence to match the scrollY count.
        const scrollPositionToParentDiv = Math.round(topDivTrigger + (window.pageYOffset || document.documentElement.scrollTop));
        const divScrollBottomRange = (scrollPositionToParentDiv+divHeight);
        const userWindowHeight = document.body.clientHeight;

        // Offsets the center of the svg from the top of the div by percentage.
        const svgPositionOnScroll = (userWindowHeight - svgHeight) * (0.5);


        if ((scrollPositionToParentDiv) >= window.scrollY) {
          console.log('above div');
          mainSvg.style.transform = "translateY(-" + (window.scrollY - svgPositionOnScroll) + "px)";

        } else if ((divScrollBottomRange - svgHeight - svgPositionOnScroll) <= window.scrollY) {
          console.log('below div');
          mainSvg.style.transform = "translateY(-" + (window.scrollY - divHeight + svgHeight) + "px)";

        } else {
          console.log('It Is Inside The DIV');
          // Below are the SVG Animations:
          // Puts all these in the array and work on them
          Array.prototype.forEach.call(svgLayers, function (layer) {
            //----------------------------------------------------------------------------------------------------------
            // For each "path" layer, pulls the attribute "fill"
            const layerFill = layer.getAttribute("fill");
            // for each "fill" pulls hsl out and removes quotes.
            const hslComponents = layerFill.match(regex).slice(1);
            // hsl is an array of three numbers- multiplies the last number of hsl
            const newHSL = parseFloat(hslComponents[2]) * scrollPercentage;
            // the first two numbers remain the same, the last number is updated by scroll variables
            layer.style.fill = "hsl(" + hslComponents[0] + ", " + hslComponents[1] + "%, " + newHSL + "%)";
            // This adjusts the background color of the svg by the scroll.
            mainSvg.style.background = "hsl(48, " + 100 * scrollPercentage + "%, " + 88 * scrollPercentage + "%)"; // Creates: style="background:rgb(221, 193, 81)
            // Transform the sun circle vector by creating: style="transform: translate3d(0px, 50px, 0px);
            sun.style.transform = "translateY(" + (topDivTrigger / 10) + "px";
            //----------------------------------------------------------------------------------------------------------
            // This allows the SVG to stick and stay, even after refresh.
            mainSvg.style.transform = "translateY(-" + (scrollPositionToParentDiv - svgPositionOnScroll) + "px";
          });
        }

        //
        // const bottomDivTrigger = Math.round(parentDiv.getBoundingClientRect().bottom);// Triggers when the div reaches the top of page
        // const startOffSet = 0; // Indicates when to start after the element reaches the top of page.
        // const bottomOffSet = 0;

        // Based if the scroll has hit between the top trigger and the bottom trigger of the div. IF true, renders svg
        //    new instructions by the scroll position.
      //   if ((topDivTrigger <= startOffSet) && ( bottomOffSet <= bottomDivTrigger - svgHeight)) {
      //     // Puts all these in the array and work on them
      //     Array.prototype.forEach.call(svgLayers, function (layer) {
      //       // For each "path" layer, pulls the attribute "fill"
      //       const layerFill = layer.getAttribute("fill");
      //       // for each "fill" pulls hsl out and removes quotes.
      //       const hslComponents = layerFill.match(regex).slice(1);
      //       // hsl is an array of three numbers- multiplies the last number of hsl
      //       const newHSL = parseFloat(hslComponents[2]) * scrollPercentage;
      //       // the first two numbers remain the same, the last number is updated by scroll variables
      //       layer.style.fill = "hsl(" + hslComponents[0] + ", " + hslComponents[1] + "%, " + newHSL + "%)";
      //       // This adjusts the background color of the svg by the scroll.
      //       mainSvg.style.background = "hsl(48, " + 100 * scrollPercentage + "%, " + 88 * scrollPercentage + "%)"; // Creates: style="background:rgb(221, 193, 81)
      //       // Transform the sun circle vector by creating: style="transform: translate3d(0px, 50px, 0px);
      //       sun.style.transform = "translate(0," + topDivTrigger / 10 + "px";
      //     })
      //
      //   // This listens for the bottom div trigger
      //   } else if  (bottomDivTrigger - svgHeight <= 0) {
      //     mainSvg.style.transform = "translateY(-" + (window.scrollY - divHeight + svgHeight) + "px)";
      //
      //   // This adjusts and scrolls the svg to the right position before the top trigger
      //   } else {
      //     mainSvg.style.transform = "translateY(-" + (window.scrollY) + "px)";
      // }
    }

    // Live watch of the scroll and inputs the coords for the function.
    // window.onscroll = function() {
    //     window.requestAnimationFrame(scrollHandler);
    // }
    //-----------------------------------------------------------------------------------------------------------------
  }


  render() {
    return (
      <Div id="scrollAnimation">
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 279" id="arizona">
          <circle id="sun" fill="#FFF7EB" cx="655" cy="128" r="41.5"/>
          <path fill="hsl(32, 89%, 75%)" d="M750 119.2s-17.5-3.2-26-1.7-25.5 1.5-33.5 4.5-49.5 2.5-55.5 2.5-52-4.1-60.5-3.8c-8.5.3-76.5-5.5-86-3.8-9.5 1.7-34.5 4.2-43.5 3.7s-26-7-41-6.5-43.4 2.3-49.5 2.5-69-.5-77 .5-43-2.6-48-3c-5-.5-18-4.5-25-3.5s-63 4-71 4-45-1.5-52.5-1-54.5 4.9-64.5 3.9-16.4 0-16.4 0L0 279h750V119.2z"/>
          <path fill="hsl(31, 74%, 71%)" d="M745 125h-72s-9.7-5-10.7-6.3c-1-1.3-9.3 3.2-9.3 3.2V120l-5.3-1.6s-6.3-1.1-7.3-2.1-9 0-9 0l-3.3 1.4-4-1.7h-6v-4h-3s-1.7-5.3-1.7-6.7c0-1.3-5.7-6.7-8-6.8-2.3-.2-14.7-.2-17 0-2.3.2-3.3 3.3-3.3 3.3l-3.3 14.6-16.4 7.1-43.2-2.1-28.3 5s-24.3 1.5-32.7 0c-5.9-1-35.3-1-40.3-.7-5 .3-31.3 0-39.3-1s-49.7 1.7-53.3 1.3-37.3-2-46 0c-8.5 2-40 1-45.7.7-5.7-.3-23.7-1-26-1.3-2.3-.4-51.3-16-61-13.6-9.7 2.3-48.7-.3-55.3 0s-37.7 3-48.3 2.6c-10.7-.3 4-3.9-27.7-4.7-12.6-.3-18 .1-18 .1V221l748 1.3 2-96.1-5.3-1.2z"/>
          <path fill="hsl(32, 54%, 63%)" d="M750 135.6s-33.2-2.4-43-1.9-48.9.7-54.6 1.6-25.6.7-25.6.7H625l-18.5 2.8-67.2 2.2H504l-20.5-3.8-51-1.6-55.4-.7-3.2-1.4-2.6-.6-1.6-1.1-.5-.8-9.4-5H358s-5-4.6-6.1-5-4.4-.6-4.9-1.5-1-6.8-1-6.8.6-3.2.4-4.6-2.4-7-2.4-7.4v-2.8s.9-5.2.9-6.6-.9-2.1-1.8-2.2-5.1-1-5.1-1V86s-.4-2-2.1-2H333l-.6-1.6-11-.8s-.1 2.9-.6 3.4-2.5-.4-2.6.1 0 3.6 0 3.6-2.2.1-2.9 1.5-2.2 8.5-2.2 8.5-.2 1.5-.8 1.6-2-2.5-2-2.5-.2-7.6 0-9.1-1-3-1-3-1.6 2.6-1.6 3.5-.1 9.4 0 10-1.5 2.7-1.9 4.7.5 5.2.5 7-1.4 4.4-1.8 4.9-3.1 4.1-3.1 4.1l-8.5 5-1 2.1-9.5 6.2-2.9.1-1.4.4s-25.4.9-29 .9-29.6 1.4-31 1.8-25.8.5-28.2.5-82.2.7-87.9.3c-5.7-.3-17.7-6.6-26.7-6.9-9-.3-13.7 1.9-13.7 1.9l-9.7 4-13.5-5.9-38.5 3V279h750V135.6z"/>
          <path fill="hsl(34, 44%, 57%)" d="M750 279s-.2-114.9-.2-121.8c0-2.5-34.5-1.8-38.7-2.1-10-.9-46-4.5-53.5-4s-36.6-1.1-42.2-1.7c-5.5-.6-20.1-6.2-20.1-6.2l-5.4-.5c-.7-.4-.7-2.1-3.9-2.9-2.5-.6-9.2-3-9.2-3s-.1-2.6-2.1-3.6-5.8-3.4-5.8-3.4l-.9-8.8-3.9-2.5s2.4-7.5 1.9-9.5-4.6-20.4-6.1-21.9-5.5-.8-5.5-.8L553 86s.7-2.5 0-3.2-4.9-1.5-4.9-1.5L547 80h-12l-1.9-.9-5.8.3s-.7 1.3-1.7 1.6-5.3.6-6.1 1c-.8.3-.5 1-.5 1h-4l.7 3.2s-4.8 2.1-5.5 2.2-.9 3-.9 3-5.7 2.3-6.2 2.8-1.1 6.8-1.1 6.8 1.4 1.7 1.2 2.8c-.2 1.2-1.7 3.2-1.8 3.6-.1.4-.9 7.8-.9 9s.9 7.2.9 8.8c0 1.6-11.7 10.2-12.4 10.7s-2.4.3-3.4.6-5.2 4.3-5.8 4.8-9.6 3.2-10.7 3.6c-1.1.3-3.2-.1-4.3.4s-8.3 4-10.9 4.3c-2.6.3-22.1.2-22.1.2l-.7.6s-38.4.8-43.1 1.8-42.7 4.7-50.3 4.7c-7.7 0-30-.3-36 0s-25.7-1.6-29-2.1c-3.3-.5-8 0-8 0s-28.3-3.2-35-3.9c-6.7-.7-27.7-1.7-32.7-1.7s-32.7 0-40.3 1.3C149 152 117 152 109.3 152s-27.7-3.1-35-1.7c-7.3 1.4-47.7 3.8-56.1 4.5s-15.3 0-15.3 0L.1 279"/>
          <path fill="hsl(36, 38%, 54%)" d="M750 177.5c-13 0-55-2.5-62.5 0s-23.5 3.5-33 4-34 .5-51 0-75-5.7-82.5-5.1-94 2.3-105.5 2.7-72-1.4-87-2.8-66.5-1.3-74-3.3-20-4-27-6-18.5-10.8-22-12.1-7-2.4-10.5-5.4-5.3-23.7-5.5-25.3c-.2-1.7-.3-3-1.3-3.8-1-.8-3.3-.7-4.8-1.2s-1.7-4.2-4.8-5c-3.2-.8-7.4-1.2-9.4-1.1-2 .1-10.6-1.1-11.5-.8-.8.3-4.2-2.3-5.8-3.3-1.7-1-4.7-4.7-8.3-4.7s-26 1.7-28.7 1.5c-2.7-.2-45.5 0-49.2-1.5-3.7-1.5-5-2.5-8.2-2.5s-22.7-.2-28.2 0S0 104 0 104v175h750V177.5z"/>
          <path fill="hsl(39, 38%, 44%)" d="M.1 190.2s5.4-7.8 7.2-8.6 28.5-10.9 28.5-10.9.4-1.6 1.6-3.3 12.6-5.1 12.6-5.1V160l12.2-3.2s1.9 0 1.9-1.5-2.2-5.2-2.4-7.8 2.8-11 2.5-14.8-3.2-3.7-3.5-6.7 2-21.2 3.5-22.8 5.2-12 6.7-13.2 10-4.2 12.3-4.2 10.5 5 15.5 5.2 13-1.5 17.5-.8S138 96 138 96l1.6-.2 5.4 3V112l1.5 7.5 1.4.8-1.4 6.5 4.2-1.5s2.4.2 2.4 1.2v3.5s5.5 2.5 6.5 2.2 1.6-12.2 1.6-12.2l.9-7.5V107l5-1v5s1.5 2.2 1.8 4-.9 15.4-.9 15.4l2.8 4.6s-.2 9.5 0 12 3.3 5.5 3.3 7.2 1.3 6.2 1.8 7.5 5.5 1.5 5.5 1.5 2.3 2.8 3 3.8 7 3.8 7 3.8l9.3 6.2 6.5 2s26.3 9.5 27 10.5 6.3 8.2 8.5 9 9-2.2 13-1.2 5.8 3.5 8.3 5.2 12.8 4.5 12.8 4.5 3.5 2.8 6.5 3 74.2-1.8 77.8-1.5 70.5.8 74.2.5 94.5 3.5 99.2 4 37.5.8 41.8 1.2 40.8 0 47.2 0 47.5-3 54-3.2 30.8-1.8 34.5-1.5 34.2-.5 38.2 0V279H0l.1-88.8z"/>
        </Svg>
      </Div>
    );
  }
}


export default Arizona;
