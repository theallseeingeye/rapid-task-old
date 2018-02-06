import React, { Component } from 'react';
import styled from 'styled-components';
import {TweenMax} from 'gsap';

class GraphAnimation extends Component {
  componentDidMount() {


      const barWidth = 5;
      const range = 300;
      const maxPosition = 80;
      const dataCount = 40;

      // Animate Speed
      const barSpeed = 0.05;
      const lineSpeed = 0.02;

      // Selects the color of the line based on previous bar value
      function colorizer(polyline, polyline1) {
        if (polyline >= polyline1) {
          return "green";
        } else {
          return "red";
        }
      }

      const random = Array.from({length: maxPosition+5}, () => Math.floor(Math.random() * range)); // USE THIS FOR RANDOMIZER randomizer[1]
      const polyArray = [...new Array(((dataCount) * 2) + 1)].map((value, index) => index); //Iterates array count [0, 1, 2, 3, 4, 5, 6...]


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




      const p = [
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
        {x: 400, y: random[19], x2: 400, y2: random[20]}, // 79
      ];




      const chartDraw = new TimelineMax({repeat: -1});


      function polyStart(value, index) {
        return "POOP ASSER"
      }

      function polyEnd(value, index) {
        return "poopy ASS"
      }

      function tweenPower(value, index) {
        return {
          a: polyStart(value, index),
          b: polyEnd(value, index),
        }
      }


      const penis = polyArray.map(tweenPower);
      //
      // console.log(.to(penis[2]));


      // .to(polyline[1], lineSpeed, {attr:})

      chartDraw
        .to(this.polyline, lineSpeed, {attr: {points: p[0].x + ", " + p[0].y + " " + p[0].x2 + ", " + p[0].y2}})  //segment 1
        .to(this.polyline, lineSpeed, {attr: {points: p[1].x + ", " + p[1].y + " " + p[1].x2 + ", " + p[1].y2}})

        .to(this.polyline2, lineSpeed, {attr: {points: p[2].x + ", " + p[2].y + " " + p[2].x2 + ", " + p[2].y2}})   //segment 2
        .to(this.polyline2, lineSpeed, {attr: {points: p[3].x + ", " + p[3].y + " " + p[3].x2 + ", " + p[3].y2}})
        .to(this.polyline3, lineSpeed, {attr: {points: p[4].x + ", " + p[4].y + " " + p[4].x2 + ", " + p[4].y2}})   //segment 3
        .to(this.polyline3, lineSpeed, {
          stroke: colorizer(random[0], random[1]),
          attr: {points: p[5].x + ", " + p[5].y + " " + p[5].x2 + ", " + p[5].y2}
        })

        .to(this.polyline4, lineSpeed, {attr: {points: p[6].x + ", " + p[6].y + " " + p[6].x2 + ", " + p[6].y2}})   //segment 4
        .to(this.polyline4, lineSpeed, {attr: {points: p[7].x + ", " + p[7].y + " " + p[7].x2 + ", " + p[7].y2}})
        .to(this.polyline5, lineSpeed, {attr: {points: p[8].x + ", " + p[8].y + " " + p[8].x2 + ", " + p[8].y2}})   //segment 5
        .to(this.polyline5, lineSpeed, {
          stroke: colorizer(random[1], random[2]),
          attr: {points: p[9].x + ", " + p[9].y + " " + p[9].x2 + ", " + p[9].y2}
        })

        .to(this.polyline6, lineSpeed, {attr: {points: p[10].x + ", " + p[10].y + " " + p[10].x2 + ", " + p[10].y2}})   //segment 6
        .to(this.polyline6, lineSpeed, {attr: {points: p[11].x + ", " + p[11].y + " " + p[11].x2 + ", " + p[11].y2}})
        .to(this.polyline7, lineSpeed, {attr: {points: p[12].x + ", " + p[12].y + " " + p[12].x2 + ", " + p[12].y2}})   //segment 7
        .to(this.polyline7, lineSpeed, {
          stroke: colorizer(random[2], random[3]),
          attr: {points: p[13].x + ", " + p[13].y + " " + p[13].x2 + ", " + p[13].y2}
        })

        .to(this.polyline8, lineSpeed, {attr: {points: p[14].x + ", " + p[14].y + " " + p[14].x2 + ", " + p[14].y2}})   //segment 8
        .to(this.polyline8, lineSpeed, {attr: {points: p[15].x + ", " + p[15].y + " " + p[15].x2 + ", " + p[15].y2}})
        .to(this.polyline9, lineSpeed, {attr: {points: p[16].x + ", " + p[16].y + " " + p[16].x2 + ", " + p[16].y2}})   //segment 9
        .to(this.polyline9, lineSpeed, {
          stroke: colorizer(random[3], random[4]),
          attr: {points: p[17].x + ", " + p[17].y + " " + p[17].x2 + ", " + p[17].y2}
        })

        .to(this.polyline10, lineSpeed, {attr: {points: p[18].x + ", " + p[18].y + " " + p[18].x2 + ", " + p[18].y2}})   //segment 10
        .to(this.polyline10, lineSpeed, {attr: {points: p[19].x + ", " + p[19].y + " " + p[19].x2 + ", " + p[19].y2}})
        .to(this.polyline11, lineSpeed, {attr: {points: p[20].x + ", " + p[20].y + " " + p[20].x2 + ", " + p[20].y2}})   //segment 11
        .to(this.polyline11, lineSpeed, {
          stroke: colorizer(random[4], random[5]),
          attr: {points: p[21].x + ", " + p[21].y + " " + p[21].x2 + ", " + p[21].y2}
        })

        .to(this.polyline12, lineSpeed, {attr: {points: p[22].x + ", " + p[22].y + " " + p[22].x2 + ", " + p[22].y2}})   //segment 12
        .to(this.polyline12, lineSpeed, {attr: {points: p[23].x + ", " + p[23].y + " " + p[23].x2 + ", " + p[23].y2}})
        .to(this.polyline13, lineSpeed, {attr: {points: p[24].x + ", " + p[24].y + " " + p[24].x2 + ", " + p[24].y2}})   //segment 13
        .to(this.polyline13, lineSpeed, {
          stroke: colorizer(random[5], random[6]),
          attr: {points: p[25].x + ", " + p[25].y + " " + p[25].x2 + ", " + p[25].y2}
        })

        .to(this.polyline14, lineSpeed, {attr: {points: p[26].x + ", " + p[26].y + " " + p[26].x2 + ", " + p[26].y2}})   //segment 14
        .to(this.polyline14, lineSpeed, {attr: {points: p[27].x + ", " + p[27].y + " " + p[27].x2 + ", " + p[27].y2}})
        .to(this.polyline15, lineSpeed, {attr: {points: p[28].x + ", " + p[28].y + " " + p[28].x2 + ", " + p[28].y2}})   //segment 15
        .to(this.polyline15, lineSpeed, {
          stroke: colorizer(random[6], random[7]),
          attr: {points: p[29].x + ", " + p[29].y + " " + p[29].x2 + ", " + p[29].y2}
        })

        .to(this.polyline16, lineSpeed, {attr: {points: p[30].x + ", " + p[30].y + " " + p[30].x2 + ", " + p[30].y2}})   //segment 16
        .to(this.polyline16, lineSpeed, {attr: {points: p[31].x + ", " + p[31].y + " " + p[31].x2 + ", " + p[31].y2}})
        .to(this.polyline17, lineSpeed, {attr: {points: p[32].x + ", " + p[32].y + " " + p[32].x2 + ", " + p[32].y2}})   //segment 17
        .to(this.polyline17, lineSpeed, {
          stroke: colorizer(random[7], random[8]),
          attr: {points: p[33].x + ", " + p[33].y + " " + p[33].x2 + ", " + p[33].y2}
        })

        .to(this.polyline18, lineSpeed, {attr: {points: p[34].x + ", " + p[34].y + " " + p[34].x2 + ", " + p[34].y2}})   //segment 18
        .to(this.polyline18, lineSpeed, {attr: {points: p[35].x + ", " + p[35].y + " " + p[35].x2 + ", " + p[35].y2}})
        .to(this.polyline19, lineSpeed, {attr: {points: p[36].x + ", " + p[36].y + " " + p[36].x2 + ", " + p[36].y2}})   //segment 19
        .to(this.polyline19, lineSpeed, {
          stroke: colorizer(random[8], random[9]),
          attr: {points: p[37].x + ", " + p[37].y + " " + p[37].x2 + ", " + p[37].y2}
        })

        .to(this.polyline20, lineSpeed, {attr: {points: p[38].x + ", " + p[38].y + " " + p[38].x2 + ", " + p[38].y2}})   //segment 20
        .to(this.polyline20, lineSpeed, {attr: {points: p[39].x + ", " + p[39].y + " " + p[39].x2 + ", " + p[39].y2}})

        .to(this.polyline21, lineSpeed, {attr: {points: p[40].x + ", " + p[40].y + " " + p[40].x2 + ", " + p[40].y2}})   //segment 21
        .to(this.polyline21, lineSpeed, {
          stroke: colorizer(random[9], random[10]),
          attr: {points: p[41].x + ", " + p[41].y + " " + p[41].x2 + ", " + p[41].y2}
        })

        .to(this.polyline22, lineSpeed, {attr: {points: p[42].x + ", " + p[42].y + " " + p[42].x2 + ", " + p[42].y2}})   //segment 22
        .to(this.polyline22, lineSpeed, {attr: {points: p[43].x + ", " + p[43].y + " " + p[43].x2 + ", " + p[43].y2}})

        .to(this.polyline23, lineSpeed, {attr: {points: p[44].x + ", " + p[44].y + " " + p[44].x2 + ", " + p[44].y2}})   //segment 23
        .to(this.polyline23, lineSpeed, {
          stroke: colorizer(random[10], random[11]),
          attr: {points: p[45].x + ", " + p[45].y + " " + p[45].x2 + ", " + p[45].y2}
        })

        .to(this.polyline24, lineSpeed, {attr: {points: p[46].x + ", " + p[46].y + " " + p[46].x2 + ", " + p[46].y2}})   //segment 24
        .to(this.polyline24, lineSpeed, {attr: {points: p[47].x + ", " + p[47].y + " " + p[47].x2 + ", " + p[47].y2}})

        .to(this.polyline25, lineSpeed, {attr: {points: p[48].x + ", " + p[48].y + " " + p[48].x2 + ", " + p[48].y2}})   //segment 25
        .to(this.polyline25, lineSpeed, {
          stroke: colorizer(random[11], random[12]),
          attr: {points: p[49].x + ", " + p[49].y + " " + p[49].x2 + ", " + p[49].y2}
        })

        .to(this.polyline26, lineSpeed, {attr: {points: p[50].x + ", " + p[50].y + " " + p[50].x2 + ", " + p[50].y2}})   //segment 26
        .to(this.polyline26, lineSpeed, {attr: {points: p[51].x + ", " + p[51].y + " " + p[51].x2 + ", " + p[51].y2}})

        .to(this.polyline27, lineSpeed, {attr: {points: p[52].x + ", " + p[52].y + " " + p[52].x2 + ", " + p[52].y2}})   //segment 27
        .to(this.polyline27, lineSpeed, {
          stroke: colorizer(random[12], random[13]),
          attr: {points: p[53].x + ", " + p[53].y + " " + p[53].x2 + ", " + p[53].y2}
        })

        .to(this.polyline28, lineSpeed, {attr: {points: p[54].x + ", " + p[54].y + " " + p[54].x2 + ", " + p[54].y2}})   //segment 28
        .to(this.polyline28, lineSpeed, {attr: {points: p[55].x + ", " + p[55].y + " " + p[55].x2 + ", " + p[55].y2}})

        .to(this.polyline29, lineSpeed, {attr: {points: p[56].x + ", " + p[56].y + " " + p[56].x2 + ", " + p[56].y2}})   //segment 29
        .to(this.polyline29, lineSpeed, {
          stroke: colorizer(random[13], random[14]),
          attr: {points: p[57].x + ", " + p[57].y + " " + p[57].x2 + ", " + p[57].y2}
        })

        .to(this.polyline30, lineSpeed, {attr: {points: p[58].x + ", " + p[58].y + " " + p[58].x2 + ", " + p[58].y2}})   //segment 30
        .to(this.polyline30, lineSpeed, {attr: {points: p[59].x + ", " + p[59].y + " " + p[59].x2 + ", " + p[59].y2}})

        .to(this.polyline31, lineSpeed, {attr: {points: p[60].x + ", " + p[60].y + " " + p[60].x2 + ", " + p[60].y2}})   //segment 31
        .to(this.polyline31, lineSpeed, {
          stroke: colorizer(random[14], random[15]),
          attr: {points: p[61].x + ", " + p[61].y + " " + p[61].x2 + ", " + p[61].y2}
        })

        .to(this.polyline32, lineSpeed, {attr: {points: p[62].x + ", " + p[62].y + " " + p[62].x2 + ", " + p[62].y2}})   //segment 32
        .to(this.polyline32, lineSpeed, {attr: {points: p[63].x + ", " + p[63].y + " " + p[63].x2 + ", " + p[63].y2}})

        .to(this.polyline33, lineSpeed, {attr: {points: p[64].x + ", " + p[64].y + " " + p[64].x2 + ", " + p[64].y2}})   //segment 33
        .to(this.polyline33, lineSpeed, {
          stroke: colorizer(random[15], random[16]),
          attr: {points: p[65].x + ", " + p[65].y + " " + p[65].x2 + ", " + p[65].y2}
        })

        .to(this.polyline34, lineSpeed, {attr: {points: p[66].x + ", " + p[66].y + " " + p[66].x2 + ", " + p[66].y2}})   //segment 34
        .to(this.polyline34, lineSpeed, {attr: {points: p[67].x + ", " + p[67].y + " " + p[67].x2 + ", " + p[67].y2}})

        .to(this.polyline35, lineSpeed, {attr: {points: p[68].x + ", " + p[68].y + " " + p[68].x2 + ", " + p[68].y2}})   //segment 35
        .to(this.polyline35, lineSpeed, {
          stroke: colorizer(random[16], random[17]),
          attr: {points: p[69].x + ", " + p[69].y + " " + p[69].x2 + ", " + p[69].y2}
        })

        .to(this.polyline36, lineSpeed, {attr: {points: p[70].x + ", " + p[70].y + " " + p[70].x2 + ", " + p[70].y2}})   //segment 36
        .to(this.polyline36, lineSpeed, {attr: {points: p[71].x + ", " + p[71].y + " " + p[71].x2 + ", " + p[71].y2}})

        .to(this.polyline37, lineSpeed, {attr: {points: p[72].x + ", " + p[72].y + " " + p[72].x2 + ", " + p[72].y2}})   //segment 37
        .to(this.polyline37, lineSpeed, {
          stroke: colorizer(random[17], random[18]),
          attr: {points: p[73].x + ", " + p[73].y + " " + p[73].x2 + ", " + p[73].y2}
        })

        .to(this.polyline38, lineSpeed, {attr: {points: p[74].x + ", " + p[74].y + " " + p[74].x2 + ", " + p[74].y2}})   //segment 38
        .to(this.polyline38, lineSpeed, {attr: {points: p[75].x + ", " + p[75].y + " " + p[75].x2 + ", " + p[75].y2}})

        .to(this.polyline39, lineSpeed, {attr: {points: p[76].x + ", " + p[76].y + " " + p[76].x2 + ", " + p[76].y2}})   //segment 39
        .to(this.polyline39, lineSpeed, {
          stroke: colorizer(random[18], random[19]),
          attr: {points: p[77].x + ", " + p[77].y + " " + p[77].x2 + ", " + p[77].y2}
        })

        .to(this.polyline40, lineSpeed, {attr: {points: p[78].x + ", " + p[78].y + " " + p[78].x2 + ", " + p[78].y2}})   //segment 40
        .to(this.polyline40, lineSpeed, {attr: {points: p[79].x + ", " + p[79].y + " " + p[79].x2 + ", " + p[79].y2}})


        // Fills in the bars and erases the vertical lines.
        .to(this.polyline, barSpeed, {strokeWidth: (300 - random[0]), y: ((300 - random[0]) / 2)})
        .set(this.polyline2, {autoAlpha: 0})
        .to(this.polyline3, barSpeed, {strokeWidth: (300 - random[1]), y: ((300 - random[1]) / 2)})
        .set(this.polyline4, {autoAlpha: 0})
        .to(this.polyline5, barSpeed, {strokeWidth: (300 - random[2]), y: ((300 - random[2]) / 2)})
        .set(this.polyline6, {autoAlpha: 0})
        .to(this.polyline7, barSpeed, {strokeWidth: (300 - random[3]), y: ((300 - random[3]) / 2)})
        .set(this.polyline8, {autoAlpha: 0})
        .to(this.polyline9, barSpeed, {strokeWidth: (300 - random[4]), y: ((300 - random[4]) / 2)})
        .set(this.polyline10, {autoAlpha: 0})
        .to(this.polyline11, barSpeed, {strokeWidth: (300 - random[5]), y: ((300 - random[5]) / 2)})
        .set(this.polyline12, {autoAlpha: 0})
        .to(this.polyline13, barSpeed, {strokeWidth: (300 - random[6]), y: ((300 - random[6]) / 2)})
        .set(this.polyline14, {autoAlpha: 0})
        .to(this.polyline15, barSpeed, {strokeWidth: (300 - random[7]), y: ((300 - random[7]) / 2)})
        .set(this.polyline16, {autoAlpha: 0})
        .to(this.polyline17, barSpeed, {strokeWidth: (300 - random[8]), y: ((300 - random[8]) / 2)})
        .set(this.polyline18, {autoAlpha: 0})
        .to(this.polyline19, barSpeed, {strokeWidth: (300 - random[9]), y: ((300 - random[9]) / 2)})
        .set(this.polyline20, {autoAlpha: 0})
        .to(this.polyline21, barSpeed, {strokeWidth: (300 - random[10]), y: ((300 - random[10]) / 2)})
        .set(this.polyline22, {autoAlpha: 0})
        .to(this.polyline23, barSpeed, {strokeWidth: (300 - random[11]), y: ((300 - random[11]) / 2)})
        .set(this.polyline24, {autoAlpha: 0})
        .to(this.polyline25, barSpeed, {strokeWidth: (300 - random[12]), y: ((300 - random[12]) / 2)})
        .set(this.polyline26, {autoAlpha: 0})
        .to(this.polyline27, barSpeed, {strokeWidth: (300 - random[13]), y: ((300 - random[13]) / 2)})
        .set(this.polyline28, {autoAlpha: 0})
        .to(this.polyline29, barSpeed, {strokeWidth: (300 - random[14]), y: ((300 - random[14]) / 2)})
        .set(this.polyline30, {autoAlpha: 0})
        .to(this.polyline31, barSpeed, {strokeWidth: (300 - random[15]), y: ((300 - random[15]) / 2)})
        .set(this.polyline32, {autoAlpha: 0})
        .to(this.polyline33, barSpeed, {strokeWidth: (300 - random[16]), y: ((300 - random[16]) / 2)})
        .set(this.polyline34, {autoAlpha: 0})
        .to(this.polyline35, barSpeed, {strokeWidth: (300 - random[17]), y: ((300 - random[17]) / 2)})
        .set(this.polyline36, {autoAlpha: 0})
        .to(this.polyline37, barSpeed, {strokeWidth: (300 - random[18]), y: ((300 - random[18]) / 2)})
        .set(this.polyline38, {autoAlpha: 0})
        .to(this.polyline39, barSpeed, {strokeWidth: (300 - random[19]), y: ((300 - random[19]) / 2)})
        .set(this.polyline40, {autoAlpha: 0})

  }


  render() {
    return (
      <div>
        <svg ref={x => this.svg = x} width="1000" height="300" viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg">
          <polyline ref={x => this.polyline = x} stroke="green"/>
          <polyline ref={x => this.polyline2 = x} stroke="green"/>
          <polyline ref={x => this.polyline3 = x} stroke="green"/>
          <polyline ref={x => this.polyline4 = x} stroke="green"/>
          <polyline ref={x => this.polyline5 = x} stroke="green"/>
          <polyline ref={x => this.polyline6 = x} stroke="green"/>
          <polyline ref={x => this.polyline7 = x} stroke="green"/>
          <polyline ref={x => this.polyline8 = x} stroke="green"/>
          <polyline ref={x => this.polyline9 = x} stroke="green"/>
          <polyline ref={x => this.polyline10 = x} stroke="green"/>
          <polyline ref={x => this.polyline11 = x} stroke="green"/>
          <polyline ref={x => this.polyline12 = x} stroke="green"/>
          <polyline ref={x => this.polyline13 = x} stroke="green"/>
          <polyline ref={x => this.polyline14 = x} stroke="green"/>
          <polyline ref={x => this.polyline15 = x} stroke="green"/>
          <polyline ref={x => this.polyline16 = x} stroke="green"/>
          <polyline ref={x => this.polyline17 = x} stroke="green"/>
          <polyline ref={x => this.polyline18 = x} stroke="green"/>
          <polyline ref={x => this.polyline19 = x} stroke="green"/>
          <polyline ref={x => this.polyline20 = x} stroke="green"/>
          <polyline ref={x => this.polyline21 = x} stroke="green"/>
          <polyline ref={x => this.polyline22 = x} stroke="green"/>
          <polyline ref={x => this.polyline23 = x} stroke="green"/>
          <polyline ref={x => this.polyline24 = x} stroke="green"/>
          <polyline ref={x => this.polyline25 = x} stroke="green"/>
          <polyline ref={x => this.polyline26 = x} stroke="green"/>
          <polyline ref={x => this.polyline27 = x} stroke="green"/>
          <polyline ref={x => this.polyline28 = x} stroke="green"/>
          <polyline ref={x => this.polyline29 = x} stroke="green"/>
          <polyline ref={x => this.polyline30 = x} stroke="green"/>
          <polyline ref={x => this.polyline31 = x} stroke="green"/>
          <polyline ref={x => this.polyline32 = x} stroke="green"/>
          <polyline ref={x => this.polyline33 = x} stroke="green"/>
          <polyline ref={x => this.polyline34 = x} stroke="green"/>
          <polyline ref={x => this.polyline35 = x} stroke="green"/>
          <polyline ref={x => this.polyline36 = x} stroke="green"/>
          <polyline ref={x => this.polyline37 = x} stroke="green"/>
          <polyline ref={x => this.polyline38 = x} stroke="green"/>
          <polyline ref={x => this.polyline39 = x} stroke="green"/>
          <polyline ref={x => this.polyline40 = x} stroke="green"/>
        </svg>
      </div>
    )
  }
}

export default GraphAnimation;