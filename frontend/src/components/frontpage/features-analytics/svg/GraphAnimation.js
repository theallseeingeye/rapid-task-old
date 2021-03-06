import React, { Component } from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  width: 100%;
  //margin-top: 5vh;
  max-width: 800px;
  height: 100%; // Required for chrome or height will be too short.
  //border: solid pink;
  transform: translateY(10px); // To tuck bottom behind div below
`;


class GraphAnimation extends Component {

  componentDidMount() {

    // Animate Speed
    const barSpeed = 1.5;
    const BarCount = 10;
    const BarArray = [...new Array((BarCount) + 1)].map((value, index) => index);

    // Finds the id of each bar and assigns it.
    function BarId(x) {
      return document.getElementById("svgBarChart" + x);
    }

    // Selects the color of the Bar
    function colorizer(x) {
      if (0.5 <= x) {
        return "rgba(255, 255, 255, 0.9)"; // White
      } else {
        return "rgba(255, 0, 0, 0.9)"; //Red
      }
    }

    // Creates a numbered array to each box.
    const BarList = BarArray.map(x => BarId(x));

    function BarAnimate() {
      const random = Math.random();
      const random2 = Math.random();
      const randomBar = Math.round(random2 * (BarCount-1));

      // Initializes animation
      const BarChart = new TimelineLite({onComplete: BarAnimate}); // Call itself once animation completes.

      BarChart.to(BarList[randomBar], barSpeed, {
        transformOrigin:"0% bottom",
        ease: Elastic.easeOut.config(1, 0.3),
        fill: colorizer(random),
        scaleY:random,
        delay: random*0.1
      })
    }
    BarAnimate();
  }

  render() {

    const BarCount = 10;
    const BarSpacing = 10;
    const BarWidth = ((400-((BarCount-1)*BarSpacing))/BarCount);
    const BarArray = [...new Array(((BarCount)))].map((value, index) => index);

    function ChartBars() {
      return BarArray.map((number) =>
        <rect
          key={number}
          id={"svgBarChart" + number.toString()}
          x={((BarSpacing+BarWidth)*number)}
          y="20"
					stroke="grey"
					strokeWidth="0.5"
          width={BarWidth}
          height="180"
          fill='rgba(255, 255, 255, 0.9)' // Set the visibility to 'zero' from start so it looks like popping up from bottom.
        />
      );
    }

    return (
      <Svg id="ChartSvg" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        {<ChartBars/>}
      </Svg>
    )
  }
}

export default GraphAnimation;