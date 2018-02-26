import React, { Component } from 'react';
import styled from 'styled-components';
import {TweenMax} from 'gsap';


const Svg = styled.svg`
  width: 100%;
  margin-top: 15vh;
  max-width: 800px;
  
`;

const Polyline = styled.polygon`
  stroke: rgba(255, 255, 255, 0.8);
  stroke-width: 1px;
`;

class GraphAnimation extends Component {

  componentDidMount() {
    const barWidth = 5;
    const range = 200;
    const maxPosition = 20;
    const dataCount = 21;

    // Animate Speed
    const barSpeed = 0.05;
    const lineSpeed = 0.05;
    const barFadeSpeed = 0.1;
    const barFadeStagger = 0.05;

    // Selects the color of the line based on previous bar value
    function colorizer(polyline, polyline1) {
      if (polyline >= polyline1) {
        return "rgba(255, 255, 255, 0.8)";
      } else {
        return "rgba(255, 0, 0, 0.8)";
      }
    }
    // ------------- this is a working progress to array everything ---------------------------------
    // function everyFour(index) {
    //     return (index % 4 === 0);
    // }
    //
    // // offsets the loop start on x2: values
    // function x2Offset(index) {
    //   return(index % 4 === 3);
    // }
    // // offsets the loop start on the x: values
    // function xOffset(index) {
    //   return(index % 4 === 2);
    // }
    //
    // console.log(everyFour(random));
    //
    // function horizontalChange(value, index) {
    //   const width = barWidth;
    //
    // if (index === 0) {
    //     return 0;
    //
    //
    // } else if (x2Offset(index)) {
    //     // increment the movement
    //     return (((index-4)/4) * width+(width*1.25));
    //     // return "forth";
    //
    //   } else if (x2Offset(index+1)) {
    //     // Keep previous random number.
    //     return (((index-3)/4) * width+(width*1.25));
    //     // return "third";
    //
    //   } else if (x2Offset(index+2)) {
    //     return (((index-2)/4) * width+(width*1.25));
    //     // return "second";
    //
    //   } else if (x2Offset(index+3)) {
    //     return (((index-1)/4) * width+(width*1.25));
    //     // return "first";
    //   }
    // }
    //
    // function barStart(value, index) {
    //   const width = barWidth;
    //   if (index === 0) {
    //     return 0;
    //
    //   } else if (index === 1) {
    //     return 0;
    //
    //   // } else if (index === 2){
    //   //   return width;
    //   //
    //   // } else if (index === 3){
    //   //   return width;
    //
    //   } else if (xOffset(index)) {
    //     // increment the movement
    //     return (((index)/4) * width+(width/2));
    //     // return "forth";
    //
    //   } else if (xOffset(index+1)) {
    //     // Keep previous random number.
    //     return (((index-3)/4) * width+(width/2));
    //     // return "third";
    //
    //   } else if (xOffset(index+2)) {
    //     return (((index-2)/4) * width+(width/2));
    //     // return "second";
    //
    //   } else if (xOffset(index+3)) {
    //     return (((index-1)/4) * width+(width/2));
    //     // return "first";
    //
    //   }
    // }
    //
    // function randomAssign(value, index, offsetvalue) {
    //   if (everyFour(index + offsetvalue)) {
    //     // increment the movement
    //     return (random[index + offsetvalue]);
    //     // return "forth";
    //
    //   } else if (everyFour(index + 1 + offsetvalue)) {
    //     // Keep previous random number.
    //     return (random[index + 1 + offsetvalue]);
    //     // return "third";
    //
    //   } else if (everyFour(index + 2 + offsetvalue)) {
    //     return (random[index + 2 + offsetvalue]);
    //     // return "second";
    //
    //   } else if (everyFour(index + 3 + offsetvalue)) {
    //     return (random[index + 3 + offsetvalue]);
    //     // return "first";
    //
    //   } else if (index === 0) {
    //     return 0;
    //   }
    // }
    //
    // // console.log(verticalChange(2));
    //
    // function coords(value, index) {
    //     return {
    //       x: barStart(value, index),
    //       y: randomAssign(value, index, 1),
    //       x2: horizontalChange(value, index),
    //       y2: randomAssign(value, index, 2),
    //     }
    // }
    //
    // console.log(coords());
    //
    // const p = polyArray.map(coords);
    //
    // console.log(p);
    //
    // console.log(random);
    // ---------------------------------------------------------------------------------


    function AnimateChart() {
      const polyArray = [...new Array(((dataCount) * 2) + 1)].map((value, index) => index); //Iterates array count [0, 1, 2, 3, 4, 5, 6...]
      const random = Array.from({length: dataCount}, () => Math.round(Math.random() * range)); // USE THIS FOR RANDOMIZER randomizer[1]

      // Finds the id of polylines and assigns it.
      function PolyId(x) {
        return x = document.getElementById("ChartAnimate"+x);
      }
      // Creates a numbered array to each polyline.
      const PolyNumber = polyArray.map(x => PolyId(x));

      const p = [
        {x: 0, y: range, x2: 0, y2: range},
        {x: 0, y: range, x2: 0, y2: random[0]},

        {x: 0, y: random[0], x2: 0, y2: random[0]}, // 0 First position
        {x: 0, y: random[0], x2: 20, y2: random[0]}, // 1 Change to from first
        ///////// vertical movement
        {x: 20, y: random[0], x2: 20, y2: random[0]}, // 2 second position
        {x: 20, y: random[0], x2: 20, y2: random[1]}, // 3 change from second
        // Horizontal movement
        {x: 20, y: random[1], x2: 20, y2: random[1]}, // 4 third position
        {x: 20, y: random[1], x2: 40, y2: random[1]}, // 5 change from third
        ///////////
        {x: 40, y: random[1], x2: 40, y2: random[1]}, // 6 fourth position
        {x: 40, y: random[1], x2: 40, y2: random[2]}, // 7 change from fourth

        {x: 40, y: random[2], x2: 40, y2: random[2]}, // 8 fifth position
        {x: 40, y: random[2], x2: 60, y2: random[2]}, // 9 change from fifth

        {x: 60, y: random[2], x2: 60, y2: random[2]}, // 10 sixth position
        {x: 60, y: random[2], x2: 60, y2: random[3]}, // 11 change from sixth

        {x: 60, y: random[3], x2: 60, y2: random[3]}, // 12 seventh position
        {x: 60, y: random[3], x2: 80, y2: random[3]}, // 13 change from seventh

        {x: 80, y: random[3], x2: 80, y2: random[3]}, // 14 eighth position
        {x: 80, y: random[3], x2: 80, y2: random[4]}, // 15 change from eighth

        {x: 80, y: random[4], x2: 80, y2: random[4]}, // 16 ninth position
        {x: 80, y: random[4], x2: 100, y2: random[4]}, // 17 change from ninth

        {x: 100, y: random[4], x2: 100, y2: random[4]}, // 18 tenth position
        {x: 100, y: random[4], x2: 100, y2: random[5]}, // 19 change from tenth

        {x: 100, y: random[5], x2: 100, y2: random[5]}, // 20
        {x: 100, y: random[5], x2: 120, y2: random[5]}, // 21

        {x: 120, y: random[5], x2: 120, y2: random[5]}, // 22
        {x: 120, y: random[5], x2: 120, y2: random[6]}, // 23

        {x: 120, y: random[6], x2: 120, y2: random[6]}, // 24
        {x: 120, y: random[6], x2: 140, y2: random[6]}, // 25

        {x: 140, y: random[6], x2: 140, y2: random[6]}, // 26
        {x: 140, y: random[6], x2: 140, y2: random[7]}, // 27

        {x: 140, y: random[7], x2: 140, y2: random[7]}, // 28
        {x: 140, y: random[7], x2: 160, y2: random[7]}, // 29

        {x: 160, y: random[7], x2: 160, y2: random[7]}, // 30
        {x: 160, y: random[7], x2: 160, y2: random[8]}, // 31

        {x: 160, y: random[8], x2: 160, y2: random[8]}, // 32
        {x: 160, y: random[8], x2: 180, y2: random[8]}, // 33

        {x: 180, y: random[8], x2: 180, y2: random[8]}, // 34
        {x: 180, y: random[8], x2: 180, y2: random[9]}, // 35

        {x: 180, y: random[9], x2: 180, y2: random[9]}, // 36
        {x: 180, y: random[9], x2: 200, y2: random[9]}, // 37

        {x: 200, y: random[9], x2: 200, y2: random[9]}, // 38
        {x: 200, y: random[9], x2: 200, y2: random[10]}, // 39

        {x: 200, y: random[10], x2: 200, y2: random[10]}, // 40
        {x: 200, y: random[10], x2: 220, y2: random[10]}, // 41

        {x: 220, y: random[10], x2: 220, y2: random[10]}, // 42
        {x: 220, y: random[10], x2: 220, y2: random[11]}, // 43

        {x: 220, y: random[11], x2: 220, y2: random[11]}, // 44
        {x: 220, y: random[11], x2: 240, y2: random[11]}, // 45

        {x: 240, y: random[11], x2: 240, y2: random[11]}, // 46
        {x: 240, y: random[11], x2: 240, y2: random[12]}, // 47

        {x: 240, y: random[12], x2: 240, y2: random[12]}, // 48
        {x: 240, y: random[12], x2: 260, y2: random[12]}, // 49

        {x: 260, y: random[12], x2: 260, y2: random[12]}, // 50
        {x: 260, y: random[12], x2: 260, y2: random[13]}, // 51

        {x: 260, y: random[13], x2: 260, y2: random[13]}, // 52
        {x: 260, y: random[13], x2: 280, y2: random[13]}, // 53

        {x: 280, y: random[13], x2: 280, y2: random[13]}, // 54
        {x: 280, y: random[13], x2: 280, y2: random[14]}, // 55

        {x: 280, y: random[14], x2: 280, y2: random[14]}, // 56
        {x: 280, y: random[14], x2: 300, y2: random[14]}, // 57

        {x: 300, y: random[14], x2: 300, y2: random[14]}, // 58
        {x: 300, y: random[14], x2: 300, y2: random[15]}, // 59

        {x: 300, y: random[15], x2: 300, y2: random[15]}, // 60
        {x: 300, y: random[15], x2: 320, y2: random[15]}, // 61

        {x: 320, y: random[15], x2: 320, y2: random[15]}, // 62
        {x: 320, y: random[15], x2: 320, y2: random[16]}, // 63

        {x: 320, y: random[16], x2: 320, y2: random[16]}, // 64
        {x: 320, y: random[16], x2: 340, y2: random[16]}, // 65

        {x: 340, y: random[16], x2: 340, y2: random[16]}, // 66
        {x: 340, y: random[16], x2: 340, y2: random[17]}, // 67

        {x: 340, y: random[17], x2: 340, y2: random[17]}, // 68
        {x: 340, y: random[17], x2: 360, y2: random[17]}, // 69

        {x: 360, y: random[17], x2: 360, y2: random[17]}, // 70
        {x: 360, y: random[17], x2: 360, y2: random[18]}, // 71

        {x: 360, y: random[18], x2: 360, y2: random[18]}, // 72
        {x: 360, y: random[18], x2: 380, y2: random[18]}, // 73

        {x: 380, y: random[18], x2: 380, y2: random[18]}, // 74
        {x: 380, y: random[18], x2: 380, y2: random[19]}, // 75

        {x: 380, y: random[19], x2: 380, y2: random[19]}, // 76
        {x: 380, y: random[19], x2: 400, y2: random[19]}, // 77

        {x: 400, y: random[19], x2: 400, y2: random[19]}, // 78
        {x: 400, y: random[19], x2: 400, y2: range}, // 79
      ];


      // Initialize the Animation
      const chartDraw = new TimelineMax({onComplete: AnimateChart}); // Call itself once animation completes.

      function pointPosition(index) {
        return {points: p[index].x + ", " + p[index].y + " " + p[index].x2 + ", " + p[index].y2}
      }

      chartDraw.to(PolyNumber[1], lineSpeed, {attr: pointPosition(0)})  //segment 1
        .to(PolyNumber[1], lineSpeed, {autoAlpha:1, attr: pointPosition(1)})


        .to(PolyNumber[2], lineSpeed, {attr: pointPosition(2)})   //segment 2
        .to(PolyNumber[2], lineSpeed, {autoAlpha:1, attr: pointPosition(3)})


        .to(PolyNumber[3], lineSpeed, {attr: pointPosition(4)})   //segment 3
        .to(PolyNumber[3], lineSpeed, {autoAlpha:1, attr: pointPosition(5)})

        .to(PolyNumber[4], lineSpeed, {attr: pointPosition(6)})   //segment 4
        .to(PolyNumber[4], lineSpeed, {autoAlpha:1, stroke: colorizer(random[0], random[1]), attr: pointPosition(7)})


        .to(PolyNumber[5], lineSpeed, {attr: pointPosition(8)})   //segment 5
        .to(PolyNumber[5], lineSpeed, {autoAlpha:1, attr: pointPosition(9)})


        .to(PolyNumber[6], lineSpeed, {attr: pointPosition(10)})   //segment 6
        .to(PolyNumber[6], lineSpeed, {autoAlpha:1, stroke: colorizer(random[1], random[2]), attr: pointPosition(11)})


        .to(PolyNumber[7], lineSpeed, {attr: pointPosition(12)})   //segment 7
        .to(PolyNumber[7], lineSpeed, {autoAlpha:1, attr: pointPosition(13)})


        .to(PolyNumber[8], lineSpeed, {attr: pointPosition(14)})   //segment 8
        .to(PolyNumber[8], lineSpeed, {autoAlpha:1, stroke: colorizer(random[2], random[3]), attr: pointPosition(15)})


        .to(PolyNumber[9], lineSpeed, {attr: pointPosition(16)})   //segment 9
        .to(PolyNumber[9], lineSpeed, {autoAlpha:1, attr: pointPosition(17)})


        .to(PolyNumber[10], lineSpeed, {attr: pointPosition(18)})   //segment 10
        .to(PolyNumber[10], lineSpeed, {autoAlpha:1, stroke: colorizer(random[3], random[4]), attr: pointPosition(19)})


        .to(PolyNumber[11], lineSpeed, {attr: pointPosition(20)})   //segment 11
        .to(PolyNumber[11], lineSpeed, {autoAlpha:1, attr: pointPosition(21)})


        .to(PolyNumber[12], lineSpeed, {attr: pointPosition(22)})   //segment 12
        .to(PolyNumber[12], lineSpeed, {autoAlpha:1, stroke: colorizer(random[4], random[5]), attr: pointPosition(23)})


        .to(PolyNumber[13], lineSpeed, {attr: pointPosition(24)})   //segment 13
        .to(PolyNumber[13], lineSpeed, {autoAlpha:1, attr: pointPosition(25)})


        .to(PolyNumber[14], lineSpeed, {attr: pointPosition(26)})   //segment 14
        .to(PolyNumber[14], lineSpeed, {autoAlpha:1, stroke: colorizer(random[5], random[6]), attr: pointPosition(27)})

        .to(PolyNumber[15], lineSpeed, {attr: pointPosition(28)})   //segment 15
        .to(PolyNumber[15], lineSpeed, {autoAlpha:1, attr: pointPosition(29)})

        .to(PolyNumber[16], lineSpeed, {attr: pointPosition(30)})   //segment 16
        .to(PolyNumber[16], lineSpeed, {autoAlpha:1, stroke: colorizer(random[6], random[7]), attr: pointPosition(31)})

        .to(PolyNumber[17], lineSpeed, {attr: pointPosition(32)})   //segment 17
        .to(PolyNumber[17], lineSpeed, {autoAlpha:1, attr: pointPosition(33)})

        .to(PolyNumber[18], lineSpeed, {attr: pointPosition(34)})   //segment 18
        .to(PolyNumber[18], lineSpeed, {autoAlpha:1, stroke: colorizer(random[7], random[8]), attr: pointPosition(35)})

        .to(PolyNumber[19], lineSpeed, {attr: pointPosition(36)})   //segment 19
        .to(PolyNumber[19], lineSpeed, {autoAlpha:1, attr: pointPosition(37)})

        .to(PolyNumber[20], lineSpeed, {attr: pointPosition(38)})   //segment 20
        .to(PolyNumber[20], lineSpeed, {autoAlpha:1, stroke: colorizer(random[8], random[9]), attr: pointPosition(39)})

        .to(PolyNumber[21], lineSpeed, {attr: pointPosition(40)})   //segment 21
        .to(PolyNumber[21], lineSpeed, {autoAlpha:1, attr: pointPosition(41)})

        .to(PolyNumber[22], lineSpeed, {attr: pointPosition(42)})   //segment 22
        .to(PolyNumber[22], lineSpeed, {autoAlpha:1, stroke: colorizer(random[9], random[10]), attr: pointPosition(43)})

        .to(PolyNumber[23], lineSpeed, {attr: pointPosition(44)})   //segment 23
        .to(PolyNumber[23], lineSpeed, {autoAlpha:1, attr: pointPosition(45)})

        .to(PolyNumber[24], lineSpeed, {attr: pointPosition(46)})   //segment 24
        .to(PolyNumber[24], lineSpeed, {autoAlpha:1, stroke: colorizer(random[10], random[11]), attr: pointPosition(47)})

        .to(PolyNumber[25], lineSpeed, {attr: pointPosition(48)})   //segment 25
        .to(PolyNumber[25], lineSpeed, {autoAlpha:1, attr: pointPosition(49)})

        .to(PolyNumber[26], lineSpeed, {attr: pointPosition(50)})   //segment 26
        .to(PolyNumber[26], lineSpeed, {autoAlpha:1, stroke: colorizer(random[11], random[12]), attr: pointPosition(51)})

        .to(PolyNumber[27], lineSpeed, {attr: pointPosition(52)})   //segment 27
        .to(PolyNumber[27], lineSpeed, {autoAlpha:1, attr: pointPosition(53)})

        .to(PolyNumber[28], lineSpeed, {attr: pointPosition(54)})   //segment 28
        .to(PolyNumber[28], lineSpeed, {autoAlpha:1, stroke: colorizer(random[12], random[13]), attr: pointPosition(55)})

        .to(PolyNumber[29], lineSpeed, {attr: pointPosition(56)})   //segment 29
        .to(PolyNumber[29], lineSpeed, {autoAlpha:1, attr: pointPosition(57)})

        .to(PolyNumber[30], lineSpeed, {attr: pointPosition(58)})   //segment 30
        .to(PolyNumber[30], lineSpeed, {autoAlpha:1, stroke: colorizer(random[13], random[14]), attr: pointPosition(59)})

        .to(PolyNumber[31], lineSpeed, {attr: pointPosition(60)})   //segment 31
        .to(PolyNumber[31], lineSpeed, {autoAlpha:1, attr: pointPosition(61)})

        .to(PolyNumber[32], lineSpeed, {attr: pointPosition(62)})   //segment 32
        .to(PolyNumber[32], lineSpeed, {autoAlpha:1, stroke: colorizer(random[14], random[15]), attr: pointPosition(63)})

        .to(PolyNumber[33], lineSpeed, {attr: pointPosition(64)})   //segment 33
        .to(PolyNumber[33], lineSpeed, {autoAlpha:1, attr: pointPosition(65)})

        .to(PolyNumber[34], lineSpeed, {attr: pointPosition(66)})   //segment 34
        .to(PolyNumber[34], lineSpeed, {autoAlpha:1, stroke: colorizer(random[15], random[16]), attr: pointPosition(67)})

        .to(PolyNumber[35], lineSpeed, {attr: pointPosition(68)})   //segment 35
        .to(PolyNumber[35], lineSpeed, {autoAlpha:1, attr: pointPosition(69)})

        .to(PolyNumber[36], lineSpeed, {attr: pointPosition(70)})   //segment 36
        .to(PolyNumber[36], lineSpeed, {autoAlpha:1, stroke: colorizer(random[16], random[17]), attr: pointPosition(71)})

        .to(PolyNumber[37], lineSpeed, {attr: pointPosition(72)})   //segment 37
        .to(PolyNumber[37], lineSpeed, {autoAlpha:1, attr: pointPosition(73)})

        .to(PolyNumber[38], lineSpeed, {attr: pointPosition(74)})   //segment 38
        .to(PolyNumber[38], lineSpeed, {autoAlpha:1, stroke: colorizer(random[17], random[18]), attr: pointPosition(75)})

        .to(PolyNumber[39], lineSpeed, {attr: pointPosition(76)})   //segment 39
        .to(PolyNumber[39], lineSpeed, {autoAlpha:1, attr: pointPosition(77)})

        .to(PolyNumber[40], lineSpeed, {attr: pointPosition(78)})   //segment 40
        .to(PolyNumber[40], lineSpeed, {autoAlpha:1, stroke: colorizer(random[18], random[19]), attr: pointPosition(79)})

        .to(PolyNumber[41], lineSpeed, {attr: pointPosition(80)})   //segment 41
        .to(PolyNumber[41], lineSpeed, {autoAlpha:1, attr: pointPosition(81)});

        // Fills in the bars and erases the vertical lines.
        chartDraw.to(PolyNumber[1], barSpeed, {autoAlpha: 0})
        .to(PolyNumber[2], barSpeed, {strokeWidth: (200 - random[0]), y: ((range - random[0]) / 2)})
        .to(PolyNumber[3], barSpeed, {autoAlpha: 0})
        .to(PolyNumber[4], barSpeed, {strokeWidth: (range - random[1]), y: ((range - random[1]) / 2)})
        .to(PolyNumber[5], barSpeed, {autoAlpha: 0})
        .to(PolyNumber[6], barSpeed, {strokeWidth: (range - random[2]), y: ((range - random[2]) / 2)})
        .to(PolyNumber[7], barSpeed, {autoAlpha: 0})
        .to(PolyNumber[8], barSpeed, {strokeWidth: (range - random[3]), y: ((range - random[3]) / 2)})
        .to(PolyNumber[9], barSpeed, {autoAlpha: 0})
        .to(PolyNumber[10], barSpeed, {strokeWidth: (range - random[4]), y: ((range - random[4]) / 2)})
        .to(PolyNumber[11], barSpeed, {autoAlpha: 0})
        .to(PolyNumber[12], barSpeed, {strokeWidth: (range - random[5]), y: ((range - random[5]) / 2)})
        .to(PolyNumber[13], barSpeed, {autoAlpha: 0})
        .to(PolyNumber[14], barSpeed, {strokeWidth: (range - random[6]), y: ((range - random[6]) / 2)})
        .to(PolyNumber[15], barSpeed, {autoAlpha: 0})
        .to(PolyNumber[16], barSpeed, {strokeWidth: (range - random[7]), y: ((range - random[7]) / 2)})
        .to(PolyNumber[17], barSpeed, {autoAlpha: 0})
        .to(PolyNumber[18], barSpeed, {strokeWidth: (range - random[8]), y: ((range - random[8]) / 2)})
        .to(PolyNumber[19], barSpeed, {autoAlpha: 0})
        .to(PolyNumber[20], barSpeed, {strokeWidth: (range - random[9]), y: ((range - random[9]) / 2)})
        .to(PolyNumber[21], barSpeed, {autoAlpha: 0})
        .to(PolyNumber[22], barSpeed, {strokeWidth: (range - random[10]), y: ((range - random[10]) / 2)})
        .to(PolyNumber[23], barSpeed, {autoAlpha: 0})
        .to(PolyNumber[24], barSpeed, {strokeWidth: (range - random[11]), y: ((range - random[11]) / 2)})
        .to(PolyNumber[25], barSpeed, {autoAlpha: 0})
        .to(PolyNumber[26], barSpeed, {strokeWidth: (range - random[12]), y: ((range - random[12]) / 2)})
        .to(PolyNumber[27], barSpeed, {autoAlpha: 0})
        .to(PolyNumber[28], barSpeed, {strokeWidth: (range - random[13]), y: ((range - random[13]) / 2)})
        .to(PolyNumber[29], barSpeed, {autoAlpha: 0})
        .to(PolyNumber[30], barSpeed, {strokeWidth: (range - random[14]), y: ((range - random[14]) / 2)})
        .to(PolyNumber[31], barSpeed, {autoAlpha: 0})
        .to(PolyNumber[32], barSpeed, {strokeWidth: (range - random[15]), y: ((range - random[15]) / 2)})
        .to(PolyNumber[33], barSpeed, {autoAlpha: 0})
        .to(PolyNumber[34], barSpeed, {strokeWidth: (range - random[16]), y: ((range - random[16]) / 2)})
        .to(PolyNumber[35], barSpeed, {autoAlpha: 0})
        .to(PolyNumber[36], barSpeed, {strokeWidth: (range - random[17]), y: ((range - random[17]) / 2)})
        .to(PolyNumber[37], barSpeed, {autoAlpha: 0})
        .to(PolyNumber[38], barSpeed, {strokeWidth: (range - random[18]), y: ((range - random[18]) / 2)})
        .to(PolyNumber[39], barSpeed, {autoAlpha: 0})
        .to(PolyNumber[40], barSpeed, {strokeWidth: (range - random[19]), y: ((range - random[19]) / 2)})
        .to(PolyNumber[41], barSpeed, {autoAlpha: 0});

        // Erases out all the remainder PolyNumber[s that are still visible.
        function BarsFadeOut() {
          return chartDraw.staggerTo(PolyNumber, barFadeSpeed, {strokeWidth: 0, autoAlpha: 0}, barFadeStagger); // NEED TO eliminate the evens in this list.
        }
        BarsFadeOut();

        // Clears the values that were created. Array of PolyNumbers.
        function ClearProps() {
          return chartDraw.set(PolyNumber, {clearProps: "all"})
        }
        ClearProps();

        // Add back the autoAlpha that the clearProps have removed. Required to prevent the lines reappearing.
        // Array of PolyNumbers
        function MakeInvisible() {
          return chartDraw.set(PolyNumber, {autoAlpha:0})
        }
        MakeInvisible();
    }

    // Calls the function animation to run
    AnimateChart();
  }


  render() {
    const dataCount = 21;
    const polyArray = [...new Array(((dataCount) * 2) + 1)].map((value, index) => index);

    function PolyList() {
      return polyArray.map((number) =>
        <Polyline key={number} id={"ChartAnimate" + number.toString()}/>
      );
    }

    return (
      <Svg id="ChartSvg" viewBox="0 0 400 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <PolyList/>
      </Svg>
    )
  }
}

export default GraphAnimation;