
/*
This is the magical scroll that fixes objects to the scroll trigger watch at div ends.
Requires that the svg layer has "position: fixed" in css.
Requires this to initialize this following function under componentWillMount:

  function scrollHandler() {
    layerScrollHandler("svgMainId", "parentDivId", 0.5);
  }

  window.onscroll = function () {
    window.requestAnimationFrame(scrollHandler);
  }

 */
export default function layerScrollHandler(mainSvgId, parentDivId) {

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
  const svgPositionOnScroll = (userWindowHeight/2)-(svgHeight/2);


  if ((scrollPositionToParentDiv) >= window.scrollY) {
    // console.log('above div');
    mainSvg.style.transform = "translateY(-" + (window.scrollY - svgPositionOnScroll) + "px)";

  } else if ((divScrollBottomRange - svgHeight - svgPositionOnScroll) <= window.scrollY) {
    // console.log('below div');
    mainSvg.style.transform = "translateY(-" + (window.scrollY - divHeight + svgHeight) + "px)";

  } else {
    // console.log('It Is Inside The DIV');

    // This allows the SVG to stick and stay, even after refresh.
    mainSvg.style.transform = "translateY(-" + (scrollPositionToParentDiv - svgPositionOnScroll) + "px";
  }

}


