import React, { Component } from 'react';
import styled from 'styled-components';
import {TweenMax} from 'gsap';



const LineDraw = styled.polyline`

`;

class GraphAnimation extends Component {

  componentDidMount() {
    // const holdTime = 3;
    // const t1 = new TimelineMax({repeat:-1});
    // const randomHeight = Math.random()*300;



    const range = 300;

    const test2 = 1 + ": " + "'" + Math.round(Math.random() * range) + "'";

    console.log("this one: " + test2);

    const random = {
      a: Math.random() * range,
      b: Math.random() * range,
      c: Math.random() * range,
      d: Math.random() * range,
      e: Math.random() * range,
      f: Math.random() * range,
      g: Math.random() * range,
      h: Math.random() * range,
      i: Math.random() * range,
      j: Math.random() * range,
      k: Math.random() * range,
      l: Math.random() * range,
      m: Math.random() * range,
      n: Math.random() * range,
      o: Math.random() * range,
      p: Math.random() * range,
      q: Math.random() * range,
      r: Math.random() * range,
      s: Math.random() * range,
      t: Math.random() * range,
      u: Math.random() * range,
    };

    console.log(random.a);
    console.log(random.b);

    const p = [
      {x: 0, y: random.a, x2: 0, y2: random.a}, // 0 First position
      {x: 0, y: random.a, x2: 20, y2: random.a}, // 1 Change to from first

      {x: 20, y: random.a, x2: 20, y2: random.a}, // 2 second position
      {x: 20, y: random.a, x2: 20, y2: random.b}, // 3 change from second

      {x: 20, y: random.b, x2: 20, y2: random.b}, // 4 third position
      {x: 20, y: random.b, x2: 40, y2: random.b}, // 5 change from third

      {x: 40, y: random.b, x2: 40, y2: random.b}, // 6 fourth position
      {x: 40, y: random.b, x2: 40, y2: random.c}, // 7 change from fourth

      {x: 40, y: random.c, x2: 40, y2: random.c}, // 8 fifth position
      {x: 40, y: random.c, x2: 60, y2: random.c}, // 9 change from fifth

      {x: 60, y: random.c, x2: 60, y2: random.c}, // 10 sixth position
      {x: 60, y: random.c, x2: 60, y2: random.d}, // 11 change from sixth

      {x: 60, y: random.d, x2: 60, y2: random.d}, // 12 seventh position
      {x: 60, y: random.d, x2: 80, y2: random.d}, // 13 change from seventh

      {x: 80, y: random.d, x2: 80, y2: random.d}, // 14 eighth position
      {x: 80, y: random.d, x2: 80, y2: random.e}, // 15 change from eighth

      {x: 80, y: random.e, x2: 80, y2: random.e}, // 16 ninth position
      {x: 80, y: random.e, x2: 100, y2: random.e}, // 17 change from ninth

      {x: 100, y: random.e, x2: 100, y2: random.e}, // 18 tenth position
      {x: 100, y: random.e, x2: 100, y2: random.f}, // 19 change from tenth

      {x: 100, y: random.f, x2: 100, y2: random.f}, // 20
      {x: 100, y: random.f, x2: 120, y2: random.f}, // 21

      {x: 120, y: random.f, x2: 120, y2: random.f}, // 22
      {x: 120, y: random.f, x2: 120, y2: random.g}, // 23

      {x: 120, y: random.g, x2: 120, y2: random.g}, // 24
      {x: 120, y: random.g, x2: 140, y2: random.g}, // 25

      {x: 140, y: random.g, x2: 140, y2: random.g}, // 26
      {x: 140, y: random.g, x2: 140, y2: random.h}, // 27

      {x: 140, y: random.h, x2: 140, y2: random.h}, // 28
      {x: 140, y: random.h, x2: 160, y2: random.h}, // 29

      {x: 160, y: random.h, x2: 160, y2: random.h}, // 30
      {x: 160, y: random.h, x2: 160, y2: random.i}, // 31

      {x: 160, y: random.i, x2: 160, y2: random.i}, // 32
      {x: 160, y: random.i, x2: 180, y2: random.i}, // 33

      {x: 180, y: random.i, x2: 180, y2: random.i}, // 34
      {x: 180, y: random.i, x2: 180, y2: random.j}, // 35

      {x: 180, y: random.j, x2: 180, y2: random.j}, // 36
      {x: 180, y: random.j, x2: 200, y2: random.j}, // 37

      {x: 200, y: random.j, x2: 200, y2: random.j}, // 38
      {x: 200, y: random.j, x2: 200, y2: random.k}, // 39

      {x: 200, y: random.k, x2: 200, y2: random.k}, // 40
      {x: 200, y: random.k, x2: 220, y2: random.k}, // 41

      {x: 220, y: random.k, x2: 220, y2: random.k}, // 42
      {x: 220, y: random.k, x2: 220, y2: random.l}, // 43

      {x: 220, y: random.l, x2: 220, y2: random.l}, // 44
      {x: 220, y: random.l, x2: 240, y2: random.l}, // 45

      {x: 240, y: random.l, x2: 240, y2: random.l}, // 46
      {x: 240, y: random.l, x2: 240, y2: random.m}, // 47

      {x: 240, y: random.m, x2: 240, y2: random.m}, // 48
      {x: 240, y: random.m, x2: 260, y2: random.m}, // 49

      {x: 260, y: random.m, x2: 260, y2: random.m}, // 50
      {x: 260, y: random.m, x2: 260, y2: random.n}, // 51

      {x: 260, y: random.n, x2: 260, y2: random.n}, // 52
      {x: 260, y: random.n, x2: 280, y2: random.n}, // 53

      {x: 280, y: random.n, x2: 280, y2: random.n}, // 54
      {x: 280, y: random.n, x2: 280, y2: random.o}, // 55

      {x: 280, y: random.o, x2: 280, y2: random.o}, // 56
      {x: 280, y: random.o, x2: 300, y2: random.o}, // 57

      {x: 300, y: random.o, x2: 300, y2: random.o}, // 58
      {x: 300, y: random.o, x2: 300, y2: random.p}, // 59

      {x: 300, y: random.p, x2: 300, y2: random.p}, // 60
      {x: 300, y: random.p, x2: 320, y2: random.p}, // 61

      {x: 320, y: random.p, x2: 320, y2: random.p}, // 62
      {x: 320, y: random.p, x2: 320, y2: random.q}, // 63

      {x: 320, y: random.q, x2: 320, y2: random.q}, // 64
      {x: 320, y: random.q, x2: 340, y2: random.q}, // 65

      {x: 340, y: random.q, x2: 340, y2: random.q}, // 66
      {x: 340, y: random.q, x2: 340, y2: random.r}, // 67

      {x: 340, y: random.r, x2: 340, y2: random.r}, // 68
      {x: 340, y: random.r, x2: 360, y2: random.r}, // 69

      {x: 360, y: random.r, x2: 360, y2: random.r}, // 70
      {x: 360, y: random.r, x2: 360, y2: random.s}, // 71

      {x: 360, y: random.s, x2: 360, y2: random.s}, // 72
      {x: 360, y: random.s, x2: 380, y2: random.s}, // 73

      {x: 380, y: random.s, x2: 380, y2: random.s}, // 74
      {x: 380, y: random.s, x2: 380, y2: random.t}, // 75

      {x: 380, y: random.t, x2: 380, y2: random.t}, // 76
      {x: 380, y: random.t, x2: 400, y2: random.t}, // 77

      {x: 400, y: random.t, x2: 400, y2: random.t}, // 78
      {x: 400, y: random.t, x2: 400, y2: random.u}, // 79


      // {x:100, y:random.b, x2:1000, y2:0},
    ];



    colorizer = (polyline, polyline1) => {
        if (polyline < polyline1) {
          return "green";
        } else {
          return "red";
        }
      };

    const chartDraw = new TimelineMax({});

    chartDraw.to(this.polyline, .1, {attr: {points: p[0].x + ", " + p[0].y + " " + p[0].x2 + ", " + p[0].y2}})  //segment 1
      .to(this.polyline, .1, {attr: {points: p[1].x + ", " + p[1].y + " " + p[1].x2 + ", " + p[1].y2}})

      .to(this.polyline2, .1, {attr: {points: p[2].x + ", " + p[2].y + " " + p[2].x2 + ", " + p[2].y2}})   //segment 2
      .to(this.polyline2, .1, {attr: {points: p[3].x + ", " + p[3].y + " " + p[3].x2 + ", " + p[3].y2}})

      .to(this.polyline3, .1, {attr: {points: p[4].x + ", " + p[4].y + " " + p[4].x2 + ", " + p[4].y2}})   //segment 3
      .to(this.polyline3, .1, {attr: {points: p[5].x + ", " + p[5].y + " " + p[5].x2 + ", " + p[5].y2}})

      .to(this.polyline4, .1, {attr: {points: p[6].x + ", " + p[6].y + " " + p[6].x2 + ", " + p[6].y2}})   //segment 4
      .to(this.polyline4, .1, {attr: {points: p[7].x + ", " + p[7].y + " " + p[7].x2 + ", " + p[7].y2}})

      .to(this.polyline5, .1, {attr: {points: p[8].x + ", " + p[8].y + " " + p[8].x2 + ", " + p[8].y2}})   //segment 5
      .to(this.polyline5, .1, {attr: {points: p[9].x + ", " + p[9].y + " " + p[9].x2 + ", " + p[9].y2}})

      .to(this.polyline6, .1, {attr: {points: p[10].x + ", " + p[10].y + " " + p[10].x2 + ", " + p[10].y2}})   //segment 6
      .to(this.polyline6, .1, {attr: {points: p[11].x + ", " + p[11].y + " " + p[11].x2 + ", " + p[11].y2}})

      .to(this.polyline7, .1, {attr: {points: p[12].x + ", " + p[12].y + " " + p[12].x2 + ", " + p[12].y2}})   //segment 7
      .to(this.polyline7, .1, {attr: {points: p[13].x + ", " + p[13].y + " " + p[13].x2 + ", " + p[13].y2}})

      .to(this.polyline8, .1, {attr: {points: p[14].x + ", " + p[14].y + " " + p[14].x2 + ", " + p[14].y2}})   //segment 8
      .to(this.polyline8, .1, {attr: {points: p[15].x + ", " + p[15].y + " " + p[15].x2 + ", " + p[15].y2}})

      .to(this.polyline9, .1, {attr: {points: p[16].x + ", " + p[16].y + " " + p[16].x2 + ", " + p[16].y2}})   //segment 9
      .to(this.polyline9, .1, {attr: {points: p[17].x + ", " + p[17].y + " " + p[17].x2 + ", " + p[17].y2}})

      .to(this.polyline10, .1, {attr: {points: p[18].x + ", " + p[18].y + " " + p[18].x2 + ", " + p[18].y2}})   //segment 10
      .to(this.polyline10, .1, {attr: {points: p[19].x + ", " + p[19].y + " " + p[19].x2 + ", " + p[19].y2}})

      .to(this.polyline11, .1, {attr: {points: p[20].x + ", " + p[20].y + " " + p[20].x2 + ", " + p[20].y2}})   //segment 11
      .to(this.polyline11, .1, {attr: {points: p[21].x + ", " + p[21].y + " " + p[21].x2 + ", " + p[21].y2}})

      .to(this.polyline12, .1, {attr: {points: p[22].x + ", " + p[22].y + " " + p[22].x2 + ", " + p[22].y2}})   //segment 12
      .to(this.polyline12, .1, {attr: {points: p[23].x + ", " + p[23].y + " " + p[23].x2 + ", " + p[23].y2}})

      .to(this.polyline13, .1, {attr: {points: p[24].x + ", " + p[24].y + " " + p[24].x2 + ", " + p[24].y2}})   //segment 13
      .to(this.polyline13, .1, {attr: {points: p[25].x + ", " + p[25].y + " " + p[25].x2 + ", " + p[25].y2}})

      .to(this.polyline14, .1, {attr: {points: p[26].x + ", " + p[26].y + " " + p[26].x2 + ", " + p[26].y2}})   //segment 14
      .to(this.polyline14, .1, {attr: {points: p[27].x + ", " + p[27].y + " " + p[27].x2 + ", " + p[27].y2}})

      .to(this.polyline15, .1, {attr: {points: p[28].x + ", " + p[28].y + " " + p[28].x2 + ", " + p[28].y2}})   //segment 15
      .to(this.polyline15, .1, {attr: {points: p[29].x + ", " + p[29].y + " " + p[29].x2 + ", " + p[29].y2}})

      .to(this.polyline16, .1, {attr: {points: p[30].x + ", " + p[30].y + " " + p[30].x2 + ", " + p[30].y2}})   //segment 16
      .to(this.polyline16, .1, {attr: {points: p[31].x + ", " + p[31].y + " " + p[31].x2 + ", " + p[31].y2}})

      .to(this.polyline17, .1, {attr: {points: p[32].x + ", " + p[32].y + " " + p[32].x2 + ", " + p[32].y2}})   //segment 17
      .to(this.polyline17, .1, {attr: {points: p[33].x + ", " + p[33].y + " " + p[33].x2 + ", " + p[33].y2}})

      .to(this.polyline18, .1, {attr: {points: p[34].x + ", " + p[34].y + " " + p[34].x2 + ", " + p[34].y2}})   //segment 18
      .to(this.polyline18, .1, {attr: {points: p[35].x + ", " + p[35].y + " " + p[35].x2 + ", " + p[35].y2}})

      .to(this.polyline19, .1, {attr: {points: p[36].x + ", " + p[36].y + " " + p[36].x2 + ", " + p[36].y2}})   //segment 19
      .to(this.polyline19, .1, {attr: {points: p[37].x + ", " + p[37].y + " " + p[37].x2 + ", " + p[37].y2}})

      .to(this.polyline20, .1, {attr: {points: p[38].x + ", " + p[38].y + " " + p[38].x2 + ", " + p[38].y2}})   //segment 20
      .to(this.polyline20, .1, {attr: {points: p[39].x + ", " + p[39].y + " " + p[39].x2 + ", " + p[39].y2}})

      .to(this.polyline21, .1, {attr: {points: p[40].x + ", " + p[40].y + " " + p[40].x2 + ", " + p[40].y2}})   //segment 21
      .to(this.polyline21, .1, {attr: {points: p[41].x + ", " + p[41].y + " " + p[41].x2 + ", " + p[41].y2}})

      .to(this.polyline22, .1, {attr: {points: p[42].x + ", " + p[42].y + " " + p[42].x2 + ", " + p[42].y2}})   //segment 22
      .to(this.polyline22, .1, {attr: {points: p[43].x + ", " + p[43].y + " " + p[43].x2 + ", " + p[43].y2}})

      .to(this.polyline23, .1, {attr: {points: p[44].x + ", " + p[44].y + " " + p[44].x2 + ", " + p[44].y2}})   //segment 23
      .to(this.polyline23, .1, {attr: {points: p[45].x + ", " + p[45].y + " " + p[45].x2 + ", " + p[45].y2}})

      .to(this.polyline24, .1, {attr: {points: p[46].x + ", " + p[46].y + " " + p[46].x2 + ", " + p[46].y2}})   //segment 24
      .to(this.polyline24, .1, {attr: {points: p[47].x + ", " + p[47].y + " " + p[47].x2 + ", " + p[47].y2}})

      .to(this.polyline25, .1, {attr: {points: p[48].x + ", " + p[48].y + " " + p[48].x2 + ", " + p[48].y2}})   //segment 25
      .to(this.polyline25, .1, {attr: {points: p[49].x + ", " + p[49].y + " " + p[49].x2 + ", " + p[49].y2}})

      .to(this.polyline26, .1, {attr: {points: p[50].x + ", " + p[50].y + " " + p[50].x2 + ", " + p[50].y2}})   //segment 26
      .to(this.polyline26, .1, {attr: {points: p[51].x + ", " + p[51].y + " " + p[51].x2 + ", " + p[51].y2}})

      .to(this.polyline27, .1, {attr: {points: p[52].x + ", " + p[52].y + " " + p[52].x2 + ", " + p[52].y2}})   //segment 27
      .to(this.polyline27, .1, {attr: {points: p[53].x + ", " + p[53].y + " " + p[53].x2 + ", " + p[53].y2}})

      .to(this.polyline28, .1, {attr: {points: p[54].x + ", " + p[54].y + " " + p[54].x2 + ", " + p[54].y2}})   //segment 28
      .to(this.polyline28, .1, {attr: {points: p[55].x + ", " + p[55].y + " " + p[55].x2 + ", " + p[55].y2}})

      .to(this.polyline29, .1, {attr: {points: p[56].x + ", " + p[56].y + " " + p[56].x2 + ", " + p[56].y2}})   //segment 29
      .to(this.polyline29, .1, {attr: {points: p[57].x + ", " + p[57].y + " " + p[57].x2 + ", " + p[57].y2}})

      .to(this.polyline30, .1, {attr: {points: p[58].x + ", " + p[58].y + " " + p[58].x2 + ", " + p[58].y2}})   //segment 30
      .to(this.polyline30, .1, {attr: {points: p[59].x + ", " + p[59].y + " " + p[59].x2 + ", " + p[59].y2}})

      .to(this.polyline31, .1, {attr: {points: p[60].x + ", " + p[60].y + " " + p[60].x2 + ", " + p[60].y2}})   //segment 31
      .to(this.polyline31, .1, {attr: {points: p[61].x + ", " + p[61].y + " " + p[61].x2 + ", " + p[61].y2}})

      .to(this.polyline32, .1, {attr: {points: p[62].x + ", " + p[62].y + " " + p[62].x2 + ", " + p[62].y2}})   //segment 32
      .to(this.polyline32, .1, {attr: {points: p[63].x + ", " + p[63].y + " " + p[63].x2 + ", " + p[63].y2}})

      .to(this.polyline33, .1, {attr: {points: p[64].x + ", " + p[64].y + " " + p[64].x2 + ", " + p[64].y2}})   //segment 33
      .to(this.polyline33, .1, {attr: {points: p[65].x + ", " + p[65].y + " " + p[65].x2 + ", " + p[65].y2}})

      .to(this.polyline34, .1, {attr: {points: p[66].x + ", " + p[66].y + " " + p[66].x2 + ", " + p[66].y2}})   //segment 34
      .to(this.polyline34, .1, {attr: {points: p[67].x + ", " + p[67].y + " " + p[67].x2 + ", " + p[67].y2}})

      .to(this.polyline35, .1, {attr: {points: p[68].x + ", " + p[68].y + " " + p[68].x2 + ", " + p[68].y2}})   //segment 35
      .to(this.polyline35, .1, {attr: {points: p[69].x + ", " + p[69].y + " " + p[69].x2 + ", " + p[69].y2}})

      .to(this.polyline36, .1, {attr: {points: p[70].x + ", " + p[70].y + " " + p[70].x2 + ", " + p[70].y2}})   //segment 36
      .to(this.polyline36, .1, {attr: {points: p[71].x + ", " + p[71].y + " " + p[71].x2 + ", " + p[71].y2}})

      .to(this.polyline37, .1, {attr: {points: p[72].x + ", " + p[72].y + " " + p[72].x2 + ", " + p[72].y2}})   //segment 37
      .to(this.polyline37, .1, {attr: {points: p[73].x + ", " + p[73].y + " " + p[73].x2 + ", " + p[73].y2}})

      .to(this.polyline38, .1, {attr: {points: p[74].x + ", " + p[74].y + " " + p[74].x2 + ", " + p[74].y2}})   //segment 38
      .to(this.polyline38, .1, {attr: {points: p[75].x + ", " + p[75].y + " " + p[75].x2 + ", " + p[75].y2}})

      .to(this.polyline39, .1, {attr: {points: p[76].x + ", " + p[76].y + " " + p[76].x2 + ", " + p[76].y2}})   //segment 39
      .to(this.polyline39, .1, {attr: {points: p[77].x + ", " + p[77].y + " " + p[77].x2 + ", " + p[77].y2}})

      .to(this.polyline40, .1, {attr: {points: p[78].x + ", " + p[78].y + " " + p[78].x2 + ", " + p[78].y2}})   //segment 40
      .to(this.polyline40, .1, {attr: {points: p[79].x + ", " + p[79].y + " " + p[79].x2 + ", " + p[79].y2}})
      .set(this.svg, {autoAlpha: 0});
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

          {/*<rect ref={x => {this.Bar1 = x}} width="50" height="5" fill="green"/>*/}
          {/*<rect ref={x => {this.Bar2 = x}} width="50" height="5" fill="green"/>*/}
          {/*<rect ref={x => {this.Bar3 = x}} width="50" height="5" fill="green"/>*/}
          {/*<rect ref={x => {this.Bar4 = x}} width="50" height="5" fill="green"/>*/}
          {/*<rect ref={x => {this.Bar5 = x}} width="50" height="5" fill="green"/>*/}
          {/*<rect ref={x => {this.Bar6 = x}} width="50" height="5" fill="green"/>*/}
        </svg>
      </div>


    )
  }
}

export default GraphAnimation;