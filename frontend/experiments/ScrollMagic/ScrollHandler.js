
/*
This is the magical scroll that fixes objects to the scroll trigger points inside selected div top and bottom.
Requires that the svg layer has "position: fixed" in css.
Requires this to initialize this following function under componentWillMount:

  function scrollHandler() {
    layerScrollHandler("svgMainId", "parentDivId", 0.5);
  }

  window.onscroll = function () {
    window.requestAnimationFrame(scrollHandler);
  }

Utilities:
postionTweek = is adjustment of svg locked to the position of the fixed scroll. Applies transform Y axis in units of px

 */

export default function layerScrollHandler(mainSvgId, parentDivId, positionTweak = 0, positionEnd = 0) {

  // ELEMENT ID
  const mainSvg = document.getElementById(String(mainSvgId)); // This is the id for the main SVG
  const parentDiv = document.getElementById(String(parentDivId)); // This is the Parent Div of the SVG - WATCH FOR NAMING CONFLICTS!

  // DATA EXTRACTION
  const svgHeight = mainSvg.getBoundingClientRect().height; // Gets the svg's height based on responsive size.
  const topDivTrigger = parentDiv.getBoundingClientRect().top; // Top trigger of the div
  const divHeight = parentDiv.getBoundingClientRect().height; // Height of the div
  // The topDivTrigger counts down to position, we need to flip the sequence to match the scrollY count.
  const scrollPositionToParentDiv = topDivTrigger + (window.pageYOffset || document.documentElement.scrollTop);
  const divScrollBottomRange = (scrollPositionToParentDiv + divHeight);
  const userWindowHeight = document.body.clientHeight;
  // Centers the SVG's viewbox exactly to the middle of y-axis of the user's viewer.
  const svgPositionOnScroll = (userWindowHeight / 2) - ((svgHeight / 2) + positionTweak);
  const adjustedBottom = divScrollBottomRange-svgHeight-positionEnd;


  // Watches the scrolls and toggles visibility
  if (scrollPositionToParentDiv >= window.scrollY) {
    mainSvg.style.display = "none";
    // mainSvg.style.visibility = "hidden";
    // console.log("hidden Top");
  } else if (adjustedBottom <= window.scrollY) {
    mainSvg.style.display = "none";
    // mainSvg.style.visibility = "hidden";
    // console.log("hidden Bottom");
  } else {
    // console.log('It Is Inside The DIV');
    // This allows the SVG to stick and stay, even after refresh.
    // mainSvg.style.transform = "translateY(-" + (scrollPositionToParentDiv - svgPositionOnScroll) + "px";
    // mainSvg.style = "-webkit-transform: translateY(-" + (scrollPositionToParentDiv - svgPositionOnScroll) + "px";
    // mainSvg.style = "-ms-transform: translateY(-" + (scrollPositionToParentDiv - svgPositionOnScroll) + "px";
    // mainSvg.style = "-moz-transform: translateY(-" + (scrollPositionToParentDiv - svgPositionOnScroll) + "px";
    // mainSvg.style = "-o-transform: translateY(-" + (scrollPositionToParentDiv - svgPositionOnScroll) + "px";
    mainSvg.style = "transform: translateY(-" + (scrollPositionToParentDiv - svgPositionOnScroll) + "px";
    mainSvg.style.display = 'block';
    // mainSvg.style.visibility = 'visible';
    // console.log("visible");
  }
}




