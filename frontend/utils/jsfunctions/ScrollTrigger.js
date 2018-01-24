function TriggerAction(triggerDiv, offSet, fixedElementId ) {
  const trigger = document.getElementById(String(triggerDiv));
  const topDivTrigger = Math.round(trigger.getBoundingClientRect().top); // Top trigger of the div
  const scrollPositionToTargetDiv = Math.round(topDivTrigger + (window.pageYOffset || document.documentElement.scrollTop));
  const userWindowHeight = document.body.clientHeight;
  const mainSvg = document.getElementById(String(fixedElementId)); // This is the id for the main SVG
  const svgHeight = Math.round(mainSvg.getBoundingClientRect().height);

  // Offsets the center of the svg from the top of the div by percentage.
  const svgPositionOnScroll = (userWindowHeight - svgHeight) * (offSet);
  const triggered = true;

  // console.log("topDivTrigger: " + topDivTrigger);
  // console.log("scrollPositionToTargetDiv: " + scrollPositionToTargetDiv);

  if ((scrollPositionToTargetDiv - svgPositionOnScroll) >= window.scrollY) {
    // console.log("No Trigger");
    } else {
        console.log("Triggered");
        return {triggered};

    }
}
export default TriggerAction;