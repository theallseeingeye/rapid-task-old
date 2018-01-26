/*
This function watches the user's scroll and sets trigger as the top of the element matches the scroll position.

Note: There is a slight performance hit. Make sure you call through the "requestAnimationFrame" to efficiently animate
the frames.
 */

function triggerAction(triggerDiv, offSet, fixedElementId ) {
  const trigger = document.getElementById(String(triggerDiv));
  const topDivTrigger = trigger.getBoundingClientRect().top; // Top trigger of the div
  const scrollPositionToTargetDiv = topDivTrigger + (window.pageYOffset || document.documentElement.scrollTop);
  const userWindowHeight = document.body.clientHeight;
  const mainSvg = document.getElementById(String(fixedElementId)); // This is the id for the main SVG
  const svgHeight = mainSvg.getBoundingClientRect().height;

  // Offsets the center of the svg from the top of the div by percentage.
  // const svgPositionOnScroll = (userWindowHeight - svgHeight) * (offSet);
  const svgPositionOnScroll = (userWindowHeight * offSet);

  // Returns results after the targeted div meets the scrollY position
  if ((scrollPositionToTargetDiv - svgPositionOnScroll) >= window.scrollY) {
    return false;
  } else {
    // console.log("it is triggered");
    return true;
  }
}
export default triggerAction;