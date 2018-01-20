
/* -----------------------------------------------------------------------------------------------------------------
This section watches the scroll actions of the user and animate the basic SVG attributes according to scroll
travel.

- Watch for which SVG attribute compatibility: https://caniuse.com/#search=svg
- To adjust the scroll speed, adjust the div height (vh) to the desired length. The scroll will calculate the
  animation time-line based on the scroll distance or height of the div.
 */

// For ReactJS- place this under "componentDidMount".
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

  if ((scrollPositionToParentDiv) >= window.scrollY) {
    // console.log('above div');
    mainSvg.style.transform = "translateY(-" + (window.scrollY) + "px)";

  } else if ((divScrollBottomRange - svgHeight) <= window.scrollY) {
    // console.log('below div');
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
      mainSvg.style.transform = "translateY(-" + scrollPositionToParentDiv + "px";
    });
  }
  // ORIGINAL -----------------------------------------------------------------------------------------------
  //   const regex = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/;
  //   const arizona = document.getElementById("arizona"); // This is the id for the main SVG
  //   const triggerdiv = document.getElementById("animation"); // This is the Parent Div of the SVG
  //   const mesaLayers = arizona.querySelectorAll("path"); // Returns a list of paths in the svg file.
  //   const vertHeight = Math.round(arizona.getBoundingClientRect().height); // Gets the svg's height based on responsive size.
  //   const startOffSet = 0; // Indicates when to start after the element reaches the top of page.
  //   const bottomOffset = 0;
  //   const triggeredDiv =  Math.round(triggerdiv.getBoundingClientRect().top); // Top trigger of the div
  //   const triggeredDivBottom = Math.round(triggerdiv.getBoundingClientRect().bottom);// Triggers when the div reaches the top of page
  //   const divHeight = Math.round(triggerdiv.getBoundingClientRect().height); // Height of the div
  //   const vertRoll = (-triggeredDiv / (divHeight - vertHeight)); // Percentage of scroll based on height of svg.
  //   const sun = document.getElementById("sun"); // SVG layer by id.
  //
  //
  //   // Based if the scroll has hit the top trigger or bottom trigger of the div.
  //   if ((triggeredDiv <= startOffSet) && ( bottomOffset <= triggeredDivBottom - vertHeight)) {
  //     Array.prototype.forEach.call(mesaLayers, function (layer) {
  //       const layerFill = layer.getAttribute("fill"); // Get the "fill" out of the paths
  //       const hslComponents = layerFill.match(regex).slice(1); // Match to any hsl to "fill" and remove quotes from hsl and place numbers in array
  //       const newHSL = parseFloat(hslComponents[2]) * vertRoll; // Scroll percentage x last number in hsl row
  //       layer.style.fill = "hsl(" + hslComponents[0] + ", " + hslComponents[1] + "%, " + newHSL + "%)"; // Adds the updated hsl by scroll values. The first two remains the same.
  //       arizona.style.background = "hsl(48, " + 100 * vertRoll + "%, " + 88 * vertRoll + "%)"; // Creates: style="background:rgb(221, 193, 81)
  //       sun.style.transform = "translate(0," + triggeredDiv / 10 + "px"; // Creates: style="transform: translate3d(0px, 50px, 0px);
  //       arizona.style.transform = "translateY(-" + (window.scrollY-(window.scrollY)*2) + "px)";
  //     })
  //
  //   // This listens for the bottom div trigger
  //   } else if  (triggeredDivBottom - vertHeight <= 0) {
  //     arizona.style.transform = "translateY(-" + (window.scrollY - divHeight + vertHeight) + "px)";
  //
  //   // This adjusts and scrolls the svg to the right position.
  //   } else {
  //     arizona.style.transform = "translateY(-" + (window.scrollY) + "px)";
  // }
}

window.onscroll = function() {
    window.requestAnimationFrame(scrollHandler);
};
//-----------------------------------------------------------------------------------------------------------------
