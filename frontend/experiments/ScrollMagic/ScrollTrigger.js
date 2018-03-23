/*
This function watches the user's scroll and sets trigger as the top of the element matches the scroll position.

Note: There is a slight performance hit. Make sure you call through the "requestAnimationFrame" to efficiently animate
the frames.
 */

export function triggerAction(triggerDiv, offSet, fixedElementId ) {
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

    // Resets the animation

    // let resetTarget = document.querySelector(String(triggerDiv));
    // resetTarget.classList.remove();
    // void resetTarget.offsetWidth; // triggering reflow
    // resetTarget.classList.add('anim');
    //
    // console.log("REFLOW BITCH");

    return "Not Active"
  } else {
    // console.log("it is triggered");
    return "Activate";
  }
}






// To check the direction of the scroll so we can can implement reverse trigger.

let lastScrollPosition = 0;
export function scrollDirection() {
  console.log(window.scrollY);
  // Detects the new state and compares.
  if (window.scrollY < lastScrollPosition) {
    console.log("Up");
    return "Up";
  } else {
    lastScrollPosition = window.scrollY;
    console.log("Down");
    return "Down";
  }
}





function reset_animation(fixedElementId) {
  // Removes the animation and adds it back.
  let resetDiv = document.getElementById(String(fixedElementId));
  resetDiv.style.animation = 'none';
  resetDiv.offsetHeight; /* trigger reflow */
  resetDiv.style.animation = null;
}