
/*
This is the magical scroll that fixes objects to the scroll trigger watch at div ends.
Requires that the svg layer is "position: fixed" in css.
Requires this to initialize this following function under componentWillMount:

  function scrollHandler() {
    layerScrollHandler("svgMainId", "parentDivId", 0.5);
  }

  window.onscroll = function () {
    window.requestAnimationFrame(scrollHandler);
  }

 */
export default function layerScrollHandler(mainSvgId, parentDivId, svgPosition) {
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
  // Offsets the center of the svg from the top of the div by percentage.
  const svgPositionOnScroll = (userWindowHeight - svgHeight) * (svgPosition);

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


