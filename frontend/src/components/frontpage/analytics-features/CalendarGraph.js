import React, { Component } from 'react';
import styled from 'styled-components';
import {TweenMax} from 'gsap';


const Svg = styled.svg`
  height: 120vh;
  margin-left: 5%;
  margin-top: 30vh;
`;


class CalendarGraph extends Component {

  componentDidMount() {
    const dataCount = 252;
    const polyArray = [...new Array((dataCount) + 1)].map((value, index) => index);

    // Finds the id of each box and assigns it.
    function BoxId(x) {
      return x = document.getElementById("calendarBoxId" + x);
    }

    // Creates a numbered array to each box.
    const BoxNumber = polyArray.map(x => BoxId(x));

    console.log(BoxNumber[0]);


    function AnimateCalendar() {


      const CalendarAnimate = new TimelineMax({onComplete: AnimateCalendar}); // Call itself once animation completes.


        for (let i = 0; i < dataCount; i++) {
        const random = Math.random();
        // const randomColor = ("rgba(63, 169, 245," + random + ")");

          CalendarAnimate.to(BoxNumber[i], 0.05, {fill: ("rgba(63, 169, 245," + random + ")")});
        }
        CalendarAnimate.to(BoxNumber, 2, {fill: "none"});
      }

      AnimateCalendar();

  }

  // <Svg viewBox="0 0 1 7.25">
  //         <g transform=" translate(0 0.005) rotate(90) scale(0.008 -0.008)">
  render() {
    return (
      <Svg viewBox="0 0 150 950">
        <svg viewBox="0 0 150 950">
          <text x="40" y="35"> YEAR </text>
          <text x="40" y="-125" transform="rotate(90)" > Jan </text>
          <text x="110" y="-125" transform="rotate(90)" > Feb </text>
          <text x="178" y="-125" transform="rotate(90)" > Mar </text>
          <text x="265" y="-125" transform="rotate(90)" > Apr </text>
          <text x="330" y="-125" transform="rotate(90)" > May </text>
          <text x="398" y="-125" transform="rotate(90)" > Jun </text>
          <text x="485" y="-125" transform="rotate(90)" > Jul </text>
          <text x="553" y="-125" transform="rotate(90)" > Aug </text>
          <text x="620" y="-125" transform="rotate(90)" > Sep </text>
          <text x="705" y="-125" transform="rotate(90)" > Oct </text>
          <text x="772" y="-125" transform="rotate(90)" > Nov </text>
          <text x="840" y="-125" transform="rotate(90)" > Dec </text>
        </svg>
        <g transform="translate(0 40) scale(-1 1) rotate(90)">
          <g fill="none" stroke="#ccc">
            <rect width="17" height="17" x="0" y="17"/>
            <rect width="17" height="17" x="0" y="34" id="calendarBoxId0">
                <title>1990-01-02: 2.1%</title>
            </rect>
            <rect width="17" height="17" x="0" y="51" id="calendarBoxId1">
                <title>1990-01-03: 0.0%</title>
            </rect>
            <rect width="17" height="17" x="0" y="68" id="calendarBoxId2">
                <title>1990-01-04: -0.5%</title>
            </rect>
            <rect width="17" height="17" x="0" y="85" id="calendarBoxId3">
                <title>1990-01-05: -0.8%</title>
            </rect>
            <rect width="17" height="17" x="0" y="102"/>
            <rect width="17" height="17" x="17" y="0"/>
            <rect width="17" height="17" x="17" y="17" id="calendarBoxId4">
                <title>1990-01-08: 0.8%</title>
            </rect>
            <rect width="17" height="17" x="17" y="34" id="calendarBoxId5">
                <title>1990-01-09: -1.0%</title>
            </rect>
            <rect width="17" height="17" x="17" y="51" id="calendarBoxId6">
                <title>1990-01-10: -0.6%</title>
            </rect>
            <rect width="17" height="17" x="17" y="68" id="calendarBoxId7">
                <title>1990-01-11: 0.4%</title>
            </rect>
            <rect width="17" height="17" x="17" y="85" id="calendarBoxId8">
                <title>1990-01-12: -1.7%</title>
            </rect>
            <rect width="17" height="17" x="17" y="102"/>
            <rect width="17" height="17" x="34" y="0"/>
            <rect width="17" height="17" x="34" y="17" id="calendarBoxId9">
                <title>1990-01-15: -0.7%</title>
            </rect>
            <rect width="17" height="17" x="34" y="34" id="calendarBoxId10">
                <title>1990-01-16: 0.9%</title>
            </rect>
            <rect width="17" height="17" x="34" y="51" id="calendarBoxId11">
                <title>1990-01-17: -1.2%</title>
            </rect>
            <rect width="17" height="17" x="34" y="68" id="calendarBoxId12">
                <title>1990-01-18: 0.3%</title>
            </rect>
            <rect width="17" height="17" x="34" y="85" id="calendarBoxId13">
                <title>1990-01-19: 0.4%</title>
            </rect>
            <rect width="17" height="17" x="34" y="102"/>
            <rect width="17" height="17" x="51" y="0"/>
            <rect width="17" height="17" x="51" y="17" id="calendarBoxId14">
                <title>1990-01-22: -2.9%</title>
            </rect>
            <rect width="17" height="17" x="51" y="34" id="calendarBoxId15">
                <title>1990-01-23: 0.6%</title>
            </rect>
            <rect width="17" height="17" x="51" y="51" id="calendarBoxId16">
                <title>1990-01-24: -0.4%</title>
            </rect>
            <rect width="17" height="17" x="51" y="68" id="calendarBoxId17">
                <title>1990-01-25: -1.7%</title>
            </rect>
            <rect width="17" height="17" x="51" y="85" id="calendarBoxId18">
                <title>1990-01-26: -0.1%</title>
            </rect>
            <rect width="17" height="17" x="51" y="102"/>
            <rect width="17" height="17" x="68" y="0"/>
            <rect width="17" height="17" x="68" y="17" id="calendarBoxId19">
                <title>1990-01-29: -0.2%</title>
            </rect>
            <rect width="17" height="17" x="68" y="34" id="calendarBoxId20">
                <title>1990-01-30: -0.4%</title>
            </rect>
            <rect width="17" height="17" x="68" y="51" id="calendarBoxId21">
                <title>1990-01-31: 1.7%</title>
            </rect>
            <rect width="17" height="17" x="68" y="68" id="calendarBoxId22">
                <title>1990-02-01: -0.2%</title>
            </rect>
            <rect width="17" height="17" x="68" y="85" id="calendarBoxId23">
                <title>1990-02-02: 0.6%</title>
            </rect>
            <rect width="17" height="17" x="68" y="102"/>
            <rect width="17" height="17" x="85" y="0"/>
            <rect width="17" height="17" x="85" y="17" id="calendarBoxId24">
                <title>1990-02-05: 0.8%</title>
            </rect>
            <rect width="17" height="17" x="85" y="34" id="calendarBoxId25">
                <title>1990-02-06: -0.6%</title>
            </rect>
            <rect width="17" height="17" x="85" y="51" id="calendarBoxId26">
                <title>1990-02-07: 1.3%</title>
            </rect>
            <rect width="17" height="17" x="85" y="68" id="calendarBoxId27">
                <title>1990-02-08: 0.2%</title>
            </rect>
            <rect width="17" height="17" x="85" y="85" id="calendarBoxId28">
                <title>1990-02-09: 0.1%</title>
            </rect>
            <rect width="17" height="17" x="85" y="102"/>
            <rect width="17" height="17" x="102" y="0"/>
            <rect width="17" height="17" x="102" y="17" id="calendarBoxId29">
                <title>1990-02-12: -1.1%</title>
            </rect>
            <rect width="17" height="17" x="102" y="34" id="calendarBoxId30">
                <title>1990-02-13: 0.2%</title>
            </rect>
            <rect width="17" height="17" x="102" y="51" id="calendarBoxId31">
                <title>1990-02-14: 0.0%</title>
            </rect>
            <rect width="17" height="17" x="102" y="68" id="calendarBoxId32">
                <title>1990-02-15: 1.0%</title>
            </rect>
            <rect width="17" height="17" x="102" y="85" id="calendarBoxId33">
                <title>1990-02-16: -0.5%</title>
            </rect>
            <rect width="17" height="17" x="102" y="102"/>
            <rect width="17" height="17" x="119" y="0"/>
            <rect width="17" height="17" x="119" y="17"/>
            <rect width="17" height="17" x="119" y="34" id="calendarBoxId34">
                <title>1990-02-20: -0.9%</title>
            </rect>
            <rect width="17" height="17" x="119" y="51" id="calendarBoxId35">
                <title>1990-02-21: -0.5%</title>
            </rect>
            <rect width="17" height="17" x="119" y="68" id="calendarBoxId36">
                <title>1990-02-22: -0.3%</title>
            </rect>
            <rect width="17" height="17" x="119" y="85" id="calendarBoxId37">
                <title>1990-02-23: -0.4%</title>
            </rect>
            <rect width="17" height="17" x="119" y="102"/>
            <rect width="17" height="17" x="136" y="0"/>
            <rect width="17" height="17" x="136" y="17" id="calendarBoxId38">
                <title>1990-02-26: 1.5%</title>
            </rect>
            <rect width="17" height="17" x="136" y="34" id="calendarBoxId39">
                <title>1990-02-27: 0.6%</title>
            </rect>
            <rect width="17" height="17" x="136" y="51" id="calendarBoxId40">
                <title>1990-02-28: 0.4%</title>
            </rect>
            <rect width="17" height="17" x="136" y="68" id="calendarBoxId41">
                <title>1990-03-01: 0.3%</title>
            </rect>
            <rect width="17" height="17" x="136" y="85" id="calendarBoxId42">
                <title>1990-03-02: 0.9%</title>
            </rect>
            <rect width="17" height="17" x="136" y="102"/>
            <rect width="17" height="17" x="153" y="0"/>
            <rect width="17" height="17" x="153" y="17" id="calendarBoxId43">
                <title>1990-03-05: -0.4%</title>
            </rect>
            <rect width="17" height="17" x="153" y="34" id="calendarBoxId44">
                <title>1990-03-06: 1.0%</title>
            </rect>
            <rect width="17" height="17" x="153" y="51" id="calendarBoxId45">
                <title>1990-03-07: -0.3%</title>
            </rect>
            <rect width="17" height="17" x="153" y="68" id="calendarBoxId46">
                <title>1990-03-08: 1.0%</title>
            </rect>
            <rect width="17" height="17" x="153" y="85" id="calendarBoxId47">
                <title>1990-03-09: -0.5%</title>
            </rect>
            <rect width="17" height="17" x="153" y="102"/>
            <rect width="17" height="17" x="170" y="0"/>
            <rect width="17" height="17" x="170" y="17" id="calendarBoxId48">
                <title>1990-03-12: 0.1%</title>
            </rect>
            <rect width="17" height="17" x="170" y="34" id="calendarBoxId49">
                <title>1990-03-13: -0.5%</title>
            </rect>
            <rect width="17" height="17" x="170" y="51" id="calendarBoxId50">
                <title>1990-03-14: 0.5%</title>
            </rect>
            <rect width="17" height="17" x="170" y="68" id="calendarBoxId51">
                <title>1990-03-15: 0.3%</title>
            </rect>
            <rect width="17" height="17" x="170" y="85" id="calendarBoxId52">
                <title>1990-03-16: 1.6%</title>
            </rect>
            <rect width="17" height="17" x="170" y="102"/>
            <rect width="17" height="17" x="187" y="0"/>
            <rect width="17" height="17" x="187" y="17" id="calendarBoxId53">
                <title>1990-03-19: 0.5%</title>
            </rect>
            <rect width="17" height="17" x="187" y="34" id="calendarBoxId54">
                <title>1990-03-20: -0.6%</title>
            </rect>
            <rect width="17" height="17" x="187" y="51" id="calendarBoxId55">
                <title>1990-03-21: -0.4%</title>
            </rect>
            <rect width="17" height="17" x="187" y="68" id="calendarBoxId56">
                <title>1990-03-22: -1.2%</title>
            </rect>
            <rect width="17" height="17" x="187" y="85" id="calendarBoxId57">
                <title>1990-03-23: 0.3%</title>
            </rect>
            <rect width="17" height="17" x="187" y="102"/>
            <rect width="17" height="17" x="204" y="0"/>
            <rect width="17" height="17" x="204" y="17" id="calendarBoxId58">
                <title>1990-03-26: 0.1%</title>
            </rect>
            <rect width="17" height="17" x="204" y="34" id="calendarBoxId59">
                <title>1990-03-27: 1.1%</title>
            </rect>
            <rect width="17" height="17" x="204" y="51" id="calendarBoxId60">
                <title>1990-03-28: 0.2%</title>
            </rect>
            <rect width="17" height="17" x="204" y="68" id="calendarBoxId61">
                <title>1990-03-29: -0.6%</title>
            </rect>
            <rect width="17" height="17" x="204" y="85" id="calendarBoxId62">
                <title>1990-03-30: -0.8%</title>
            </rect>
            <rect width="17" height="17" x="204" y="102"/>
            <rect width="17" height="17" x="221" y="0"/>
            <rect width="17" height="17" x="221" y="17" id="calendarBoxId63">
                <title>1990-04-02: -0.2%</title>
            </rect>
            <rect width="17" height="17" x="221" y="34" id="calendarBoxId64">
                <title>1990-04-03: 1.3%</title>
            </rect>
            <rect width="17" height="17" x="221" y="51" id="calendarBoxId65">
                <title>1990-04-04: -0.6%</title>
            </rect>
            <rect width="17" height="17" x="221" y="68" id="calendarBoxId66">
                <title>1990-04-05: 0.1%</title>
            </rect>
            <rect width="17" height="17" x="221" y="85" id="calendarBoxId67">
                <title>1990-04-06: -0.1%</title>
            </rect>
            <rect width="17" height="17" x="221" y="102"/>
            <rect width="17" height="17" x="238" y="0"/>
            <rect width="17" height="17" x="238" y="17" id="calendarBoxId68">
                <title>1990-04-09: 0.2%</title>
            </rect>
            <rect width="17" height="17" x="238" y="34" id="calendarBoxId69">
                <title>1990-04-10: 0.3%</title>
            </rect>
            <rect width="17" height="17" x="238" y="51" id="calendarBoxId70">
                <title>1990-04-11: 0.0%</title>
            </rect>
            <rect width="17" height="17" x="238" y="68" id="calendarBoxId71">
                <title>1990-04-12: 0.8%</title>
            </rect>
            <rect width="17" height="17" x="238" y="85"/>
            <rect width="17" height="17" x="238" y="102"/>
            <rect width="17" height="17" x="255" y="0"/>
            <rect width="17" height="17" x="255" y="17" id="calendarBoxId72">
                <title>1990-04-16: 0.4%</title>
            </rect>
            <rect width="17" height="17" x="255" y="34" id="calendarBoxId73">
                <title>1990-04-17: 0.1%</title>
            </rect>
            <rect width="17" height="17" x="255" y="51" id="calendarBoxId74">
                <title>1990-04-18: -1.2%</title>
            </rect>
            <rect width="17" height="17" x="255" y="68" id="calendarBoxId75">
                <title>1990-04-19: -0.8%</title>
            </rect>
            <rect width="17" height="17" x="255" y="85" id="calendarBoxId76">
                <title>1990-04-20: -0.6%</title>
            </rect>
            <rect width="17" height="17" x="255" y="102"/>
            <rect width="17" height="17" x="272" y="0"/>
            <rect width="17" height="17" x="272" y="17" id="calendarBoxId77">
                <title>1990-04-23: -0.9%</title>
            </rect>
            <rect width="17" height="17" x="272" y="34" id="calendarBoxId78">
                <title>1990-04-24: -0.5%</title>
            </rect>
            <rect width="17" height="17" x="272" y="51" id="calendarBoxId79">
                <title>1990-04-25: 0.4%</title>
            </rect>
            <rect width="17" height="17" x="272" y="68" id="calendarBoxId80">
                <title>1990-04-26: 0.4%</title>
            </rect>
            <rect width="17" height="17" x="272" y="85" id="calendarBoxId81">
                <title>1990-04-27: -1.2%</title>
            </rect>
            <rect width="17" height="17" x="272" y="102"/>
            <rect width="17" height="17" x="289" y="0"/>
            <rect width="17" height="17" x="289" y="17" id="calendarBoxId82">
                <title>1990-04-30: 0.4%</title>
            </rect>
            <rect width="17" height="17" x="289" y="34" id="calendarBoxId83">
                <title>1990-05-01: 0.5%</title>
            </rect>
            <rect width="17" height="17" x="289" y="51" id="calendarBoxId84">
                <title>1990-05-02: 0.8%</title>
            </rect>
            <rect width="17" height="17" x="289" y="68" id="calendarBoxId85">
                <title>1990-05-03: 0.2%</title>
            </rect>
            <rect width="17" height="17" x="289" y="85" id="calendarBoxId86">
                <title>1990-05-04: 0.5%</title>
            </rect>
            <rect width="17" height="17" x="289" y="102"/>
            <rect width="17" height="17" x="306" y="0"/>
            <rect width="17" height="17" x="306" y="17" id="calendarBoxId87">
                <title>1990-05-07: 0.4%</title>
            </rect>
            <rect width="17" height="17" x="306" y="34" id="calendarBoxId88">
                <title>1990-05-08: 0.4%</title>
            </rect>
            <rect width="17" height="17" x="306" y="51" id="calendarBoxId89">
                <title>1990-05-09: 0.0%</title>
            </rect>
            <rect width="17" height="17" x="306" y="68" id="calendarBoxId90">
                <title>1990-05-10: 0.2%</title>
            </rect>
            <rect width="17" height="17" x="306" y="85" id="calendarBoxId91">
                <title>1990-05-11: 2.1%</title>
            </rect>
            <rect width="17" height="17" x="306" y="102"/>
            <rect width="17" height="17" x="323" y="0"/>
            <rect width="17" height="17" x="323" y="17" id="calendarBoxId92">
                <title>1990-05-14: 0.7%</title>
            </rect>
            <rect width="17" height="17" x="323" y="34" id="calendarBoxId93">
                <title>1990-05-15: 0.0%</title>
            </rect>
            <rect width="17" height="17" x="323" y="51" id="calendarBoxId94">
                <title>1990-05-16: -0.1%</title>
            </rect>
            <rect width="17" height="17" x="323" y="68" id="calendarBoxId95">
                <title>1990-05-17: 0.4%</title>
            </rect>
            <rect width="17" height="17" x="323" y="85" id="calendarBoxId96">
                <title>1990-05-18: -0.4%</title>
            </rect>
            <rect width="17" height="17" x="323" y="102"/>
            <rect width="17" height="17" x="340" y="0"/>
            <rect width="17" height="17" x="340" y="17" id="calendarBoxId97">
                <title>1990-05-21: 0.9%</title>
            </rect>
            <rect width="17" height="17" x="340" y="34" id="calendarBoxId98">
                <title>1990-05-22: 0.3%</title>
            </rect>
            <rect width="17" height="17" x="340" y="51" id="calendarBoxId99">
                <title>1990-05-23: 0.1%</title>
            </rect>
            <rect width="17" height="17" x="340" y="68" id="calendarBoxId100">
                <title>1990-05-24: 0.0%</title>
            </rect>
            <rect width="17" height="17" x="340" y="85" id="calendarBoxId101">
                <title>1990-05-25: -1.2%</title>
            </rect>
            <rect width="17" height="17" x="340" y="102"/>
            <rect width="17" height="17" x="357" y="0"/>
            <rect width="17" height="17" x="357" y="17"/>
            <rect width="17" height="17" x="357" y="34" id="calendarBoxId102">
                <title>1990-05-29: 1.8%</title>
            </rect>
            <rect width="17" height="17" x="357" y="51" id="calendarBoxId103">
                <title>1990-05-30: 0.3%</title>
            </rect>
            <rect width="17" height="17" x="357" y="68" id="calendarBoxId104">
                <title>1990-05-31: -0.1%</title>
            </rect>
            <rect width="17" height="17" x="357" y="85" id="calendarBoxId105">
                <title>1990-06-01: 0.8%</title>
            </rect>
            <rect width="17" height="17" x="357" y="102"/>
            <rect width="17" height="17" x="374" y="0"/>
            <rect width="17" height="17" x="374" y="17" id="calendarBoxId106">
                <title>1990-06-04: 1.2%</title>
            </rect>
            <rect width="17" height="17" x="374" y="34" id="calendarBoxId107">
                <title>1990-06-05: -0.3%</title>
            </rect>
            <rect width="17" height="17" x="374" y="51" id="calendarBoxId108">
                <title>1990-06-06: -0.5%</title>
            </rect>
            <rect width="17" height="17" x="374" y="68" id="calendarBoxId109">
                <title>1990-06-07: -0.5%</title>
            </rect>
            <rect width="17" height="17" x="374" y="85" id="calendarBoxId110">
                <title>1990-06-08: -1.2%</title>
            </rect>
            <rect width="17" height="17" x="374" y="102"/>
            <rect width="17" height="17" x="391" y="0"/>
            <rect width="17" height="17" x="391" y="17" id="calendarBoxId111">
                <title>1990-06-11: 1.1%</title>
            </rect>
            <rect width="17" height="17" x="391" y="34" id="calendarBoxId112">
                <title>1990-06-12: 1.4%</title>
            </rect>
            <rect width="17" height="17" x="391" y="51" id="calendarBoxId113">
                <title>1990-06-13: -0.1%</title>
            </rect>
            <rect width="17" height="17" x="391" y="68" id="calendarBoxId114">
                <title>1990-06-14: -0.1%</title>
            </rect>
            <rect width="17" height="17" x="391" y="85" id="calendarBoxId115">
                <title>1990-06-15: 0.3%</title>
            </rect>
            <rect width="17" height="17" x="391" y="102"/>
            <rect width="17" height="17" x="408" y="0"/>
            <rect width="17" height="17" x="408" y="17" id="calendarBoxId116">
                <title>1990-06-18: -1.6%</title>
            </rect>
            <rect width="17" height="17" x="408" y="34" id="calendarBoxId117">
                <title>1990-06-19: 0.4%</title>
            </rect>
            <rect width="17" height="17" x="408" y="51" id="calendarBoxId118">
                <title>1990-06-20: 0.1%</title>
            </rect>
            <rect width="17" height="17" x="408" y="68" id="calendarBoxId119">
                <title>1990-06-21: 0.2%</title>
            </rect>
            <rect width="17" height="17" x="408" y="85" id="calendarBoxId120">
                <title>1990-06-22: -1.5%</title>
            </rect>
            <rect width="17" height="17" x="408" y="102"/>
            <rect width="17" height="17" x="425" y="0"/>
            <rect width="17" height="17" x="425" y="17" id="calendarBoxId121">
                <title>1990-06-25: -0.4%</title>
            </rect>
            <rect width="17" height="17" x="425" y="34" id="calendarBoxId122">
                <title>1990-06-26: -0.1%</title>
            </rect>
            <rect width="17" height="17" x="425" y="51" id="calendarBoxId123">
                <title>1990-06-27: 0.7%</title>
            </rect>
            <rect width="17" height="17" x="425" y="68" id="calendarBoxId124">
                <title>1990-06-28: 0.6%</title>
            </rect>
            <rect width="17" height="17" x="425" y="85" id="calendarBoxId125">
                <title>1990-06-29: 0.1%</title>
            </rect>
            <rect width="17" height="17" x="425" y="102"/>
            <rect width="17" height="17" x="442" y="0"/>
            <rect width="17" height="17" x="442" y="17" id="calendarBoxId126">
                <title>1990-07-02: 0.6%</title>
            </rect>
            <rect width="17" height="17" x="442" y="34" id="calendarBoxId127">
                <title>1990-07-03: 0.4%</title>
            </rect>
            <rect width="17" height="17" x="442" y="51"/>
            <rect width="17" height="17" x="442" y="68" id="calendarBoxId128">
                <title>1990-07-05: -0.9%</title>
            </rect>
            <rect width="17" height="17" x="442" y="85" id="calendarBoxId129">
                <title>1990-07-06: 0.9%</title>
            </rect>
            <rect width="17" height="17" x="442" y="102"/>
            <rect width="17" height="17" x="459" y="0"/>
            <rect width="17" height="17" x="459" y="17" id="calendarBoxId130">
                <title>1990-07-09: 0.3%</title>
            </rect>
            <rect width="17" height="17" x="459" y="34" id="calendarBoxId131">
                <title>1990-07-10: -0.8%</title>
            </rect>
            <rect width="17" height="17" x="459" y="51" id="calendarBoxId132">
                <title>1990-07-11: 1.4%</title>
            </rect>
            <rect width="17" height="17" x="459" y="68" id="calendarBoxId133">
                <title>1990-07-12: 1.3%</title>
            </rect>
            <rect width="17" height="17" x="459" y="85" id="calendarBoxId134">
                <title>1990-07-13: 0.4%</title>
            </rect>
            <rect width="17" height="17" x="459" y="102"/>
            <rect width="17" height="17" x="476" y="0"/>
            <rect width="17" height="17" x="476" y="17" id="calendarBoxId135">
                <title>1990-07-16: 0.7%</title>
            </rect>
            <rect width="17" height="17" x="476" y="34" id="calendarBoxId136">
                <title>1990-07-17: 0.0%</title>
            </rect>
            <rect width="17" height="17" x="476" y="51" id="calendarBoxId137">
                <title>1990-07-18: -0.6%</title>
            </rect>
            <rect width="17" height="17" x="476" y="68" id="calendarBoxId138">
                <title>1990-07-19: 0.4%</title>
            </rect>
            <rect width="17" height="17" x="476" y="85" id="calendarBoxId139">
                <title>1990-07-20: -1.1%</title>
            </rect>
            <rect width="17" height="17" x="476" y="102"/>
            <rect width="17" height="17" x="493" y="0"/>
            <rect width="17" height="17" x="493" y="17" id="calendarBoxId140">
                <title>1990-07-23: -1.9%</title>
            </rect>
            <rect width="17" height="17" x="493" y="34" id="calendarBoxId141">
                <title>1990-07-24: 0.6%</title>
            </rect>
            <rect width="17" height="17" x="493" y="51" id="calendarBoxId142">
                <title>1990-07-25: 0.3%</title>
            </rect>
            <rect width="17" height="17" x="493" y="68" id="calendarBoxId143">
                <title>1990-07-26: -0.3%</title>
            </rect>
            <rect width="17" height="17" x="493" y="85" id="calendarBoxId144">
                <title>1990-07-27: -0.8%</title>
            </rect>
            <rect width="17" height="17" x="493" y="102"/>
            <rect width="17" height="17" x="510" y="0"/>
            <rect width="17" height="17" x="510" y="17" id="calendarBoxId145">
                <title>1990-07-30: 0.6%</title>
            </rect>
            <rect width="17" height="17" x="510" y="34" id="calendarBoxId146">
                <title>1990-07-31: -0.4%</title>
            </rect>
            <rect width="17" height="17" x="510" y="51" id="calendarBoxId147">
                <title>1990-08-01: -0.2%</title>
            </rect>
            <rect width="17" height="17" x="510" y="68" id="calendarBoxId148">
                <title>1990-08-02: -1.2%</title>
            </rect>
            <rect width="17" height="17" x="510" y="85" id="calendarBoxId149">
                <title>1990-08-03: -1.9%</title>
            </rect>
            <rect width="17" height="17" x="510" y="102"/>
            <rect width="17" height="17" x="527" y="0"/>
            <rect width="17" height="17" x="527" y="17" id="calendarBoxId150">
                <title>1990-08-06: -1.5%</title>
            </rect>
            <rect width="17" height="17" x="527" y="34" id="calendarBoxId151">
                <title>1990-08-07: -0.2%</title>
            </rect>
            <rect width="17" height="17" x="527" y="51" id="calendarBoxId152">
                <title>1990-08-08: 0.9%</title>
            </rect>
            <rect width="17" height="17" x="527" y="68" id="calendarBoxId153">
                <title>1990-08-09: 0.9%</title>
            </rect>
            <rect width="17" height="17" x="527" y="85" id="calendarBoxId154">
                <title>1990-08-10: -1.5%</title>
            </rect>
            <rect width="17" height="17" x="527" y="102"/>
            <rect width="17" height="17" x="544" y="0"/>
            <rect width="17" height="17" x="544" y="17" id="calendarBoxId155">
                <title>1990-08-13: 1.1%</title>
            </rect>
            <rect width="17" height="17" x="544" y="34" id="calendarBoxId156">
                <title>1990-08-14: 0.0%</title>
            </rect>
            <rect width="17" height="17" x="544" y="51" id="calendarBoxId157">
                <title>1990-08-15: 0.0%</title>
            </rect>
            <rect width="17" height="17" x="544" y="68" id="calendarBoxId158">
                <title>1990-08-16: -2.4%</title>
            </rect>
            <rect width="17" height="17" x="544" y="85" id="calendarBoxId159">
                <title>1990-08-17: -1.3%</title>
            </rect>
            <rect width="17" height="17" x="544" y="102"/>
            <rect width="17" height="17" x="561" y="0"/>
            <rect width="17" height="17" x="561" y="17" id="calendarBoxId160">
                <title>1990-08-20: 0.4%</title>
            </rect>
            <rect width="17" height="17" x="561" y="34" id="calendarBoxId161">
                <title>1990-08-21: -1.6%</title>
            </rect>
            <rect width="17" height="17" x="561" y="51" id="calendarBoxId162">
                <title>1990-08-22: -1.7%</title>
            </rect>
            <rect width="17" height="17" x="561" y="68" id="calendarBoxId163">
                <title>1990-08-23: -2.2%</title>
            </rect>
            <rect width="17" height="17" x="561" y="85" id="calendarBoxId164">
                <title>1990-08-24: 2.0%</title>
            </rect>
            <rect width="17" height="17" x="561" y="102"/>
            <rect width="17" height="17" x="578" y="0"/>
            <rect width="17" height="17" x="578" y="17" id="calendarBoxId165">
                <title>1990-08-27: 0.8%</title>
            </rect>
            <rect width="17" height="17" x="578" y="34" id="calendarBoxId166">
                <title>1990-08-28: 0.1%</title>
            </rect>
            <rect width="17" height="17" x="578" y="51" id="calendarBoxId167">
                <title>1990-08-29: 0.7%</title>
            </rect>
            <rect width="17" height="17" x="578" y="68" id="calendarBoxId168">
                <title>1990-08-30: -1.5%</title>
            </rect>
            <rect width="17" height="17" x="578" y="85" id="calendarBoxId169">
                <title>1990-08-31: 0.8%</title>
            </rect>
            <rect width="17" height="17" x="578" y="102"/>
            <rect width="17" height="17" x="595" y="0"/>
            <rect width="17" height="17" x="595" y="17"/>
            <rect width="17" height="17" x="595" y="34" id="calendarBoxId170">
                <title>1990-09-04: 0.0%</title>
            </rect>
            <rect width="17" height="17" x="595" y="51" id="calendarBoxId171">
                <title>1990-09-05: 0.6%</title>
            </rect>
            <rect width="17" height="17" x="595" y="68" id="calendarBoxId172">
                <title>1990-09-06: -1.2%</title>
            </rect>
            <rect width="17" height="17" x="595" y="85" id="calendarBoxId173">
                <title>1990-09-07: 0.9%</title>
            </rect>
            <rect width="17" height="17" x="595" y="102"/>
            <rect width="17" height="17" x="612" y="0"/>
            <rect width="17" height="17" x="612" y="17" id="calendarBoxId174">
                <title>1990-09-10: -0.2%</title>
            </rect>
            <rect width="17" height="17" x="612" y="34" id="calendarBoxId175">
                <title>1990-09-11: -0.1%</title>
            </rect>
            <rect width="17" height="17" x="612" y="51" id="calendarBoxId176">
                <title>1990-09-12: 0.5%</title>
            </rect>
            <rect width="17" height="17" x="612" y="68" id="calendarBoxId177">
                <title>1990-09-13: -1.6%</title>
            </rect>
            <rect width="17" height="17" x="612" y="85" id="calendarBoxId178">
                <title>1990-09-14: -0.7%</title>
            </rect>
            <rect width="17" height="17" x="612" y="102"/>
            <rect width="17" height="17" x="629" y="0"/>
            <rect width="17" height="17" x="629" y="17" id="calendarBoxId179">
                <title>1990-09-17: 0.1%</title>
            </rect>
            <rect width="17" height="17" x="629" y="34" id="calendarBoxId180">
                <title>1990-09-18: 0.2%</title>
            </rect>
            <rect width="17" height="17" x="629" y="51" id="calendarBoxId181">
                <title>1990-09-19: -0.5%</title>
            </rect>
            <rect width="17" height="17" x="629" y="68" id="calendarBoxId182">
                <title>1990-09-20: -1.2%</title>
            </rect>
            <rect width="17" height="17" x="629" y="85" id="calendarBoxId183">
                <title>1990-09-21: -0.2%</title>
            </rect>
            <rect width="17" height="17" x="629" y="102"/>
            <rect width="17" height="17" x="646" y="0"/>
            <rect width="17" height="17" x="646" y="17" id="calendarBoxId184">
                <title>1990-09-24: -1.8%</title>
            </rect>
            <rect width="17" height="17" x="646" y="34" id="calendarBoxId185">
                <title>1990-09-25: 1.3%</title>
            </rect>
            <rect width="17" height="17" x="646" y="51" id="calendarBoxId186">
                <title>1990-09-26: -1.0%</title>
            </rect>
            <rect width="17" height="17" x="646" y="68" id="calendarBoxId187">
                <title>1990-09-27: -1.3%</title>
            </rect>
            <rect width="17" height="17" x="646" y="85" id="calendarBoxId188">
                <title>1990-09-28: 1.0%</title>
            </rect>
            <rect width="17" height="17" x="646" y="102"/>
            <rect width="17" height="17" x="663" y="0"/>
            <rect width="17" height="17" x="663" y="17" id="calendarBoxId189">
                <title>1990-10-01: 2.6%</title>
            </rect>
            <rect width="17" height="17" x="663" y="34" id="calendarBoxId190">
                <title>1990-10-02: -0.4%</title>
            </rect>
            <rect width="17" height="17" x="663" y="51" id="calendarBoxId191">
                <title>1990-10-03: -0.6%</title>
            </rect>
            <rect width="17" height="17" x="663" y="68" id="calendarBoxId192">
                <title>1990-10-04: 1.1%</title>
            </rect>
            <rect width="17" height="17" x="663" y="85" id="calendarBoxId193">
                <title>1990-10-05: -0.2%</title>
            </rect>
            <rect width="17" height="17" x="663" y="102"/>
            <rect width="17" height="17" x="680" y="0"/>
            <rect width="17" height="17" x="680" y="17" id="calendarBoxId194">
                <title>1990-10-08: 0.5%</title>
            </rect>
            <rect width="17" height="17" x="680" y="34" id="calendarBoxId195">
                <title>1990-10-09: -2.7%</title>
            </rect>
            <rect width="17" height="17" x="680" y="51" id="calendarBoxId196">
                <title>1990-10-10: -1.5%</title>
            </rect>
            <rect width="17" height="17" x="680" y="68" id="calendarBoxId197">
                <title>1990-10-11: -1.8%</title>
            </rect>
            <rect width="17" height="17" x="680" y="85" id="calendarBoxId198">
                <title>1990-10-12: 1.4%</title>
            </rect>
            <rect width="17" height="17" x="680" y="102"/>
            <rect width="17" height="17" x="697" y="0"/>
            <rect width="17" height="17" x="697" y="17" id="calendarBoxId199">
                <title>1990-10-15: 0.8%</title>
            </rect>
            <rect width="17" height="17" x="697" y="34" id="calendarBoxId200">
                <title>1990-10-16: -1.5%</title>
            </rect>
            <rect width="17" height="17" x="697" y="51" id="calendarBoxId201">
                <title>1990-10-17: 0.3%</title>
            </rect>
            <rect width="17" height="17" x="697" y="68" id="calendarBoxId202">
                <title>1990-10-18: 2.5%</title>
            </rect>
            <rect width="17" height="17" x="697" y="85" id="calendarBoxId203">
                <title>1990-10-19: 2.7%</title>
            </rect>
            <rect width="17" height="17" x="697" y="102"/>
            <rect width="17" height="17" x="714" y="0"/>
            <rect width="17" height="17" x="714" y="17" id="calendarBoxId204">
                <title>1990-10-22: -0.2%</title>
            </rect>
            <rect width="17" height="17" x="714" y="34" id="calendarBoxId205">
                <title>1990-10-23: -0.9%</title>
            </rect>
            <rect width="17" height="17" x="714" y="51" id="calendarBoxId206">
                <title>1990-10-24: 0.4%</title>
            </rect>
            <rect width="17" height="17" x="714" y="68" id="calendarBoxId207">
                <title>1990-10-25: -0.8%</title>
            </rect>
            <rect width="17" height="17" x="714" y="85" id="calendarBoxId208">
                <title>1990-10-26: -1.9%</title>
            </rect>
            <rect width="17" height="17" x="714" y="102"/>
            <rect width="17" height="17" x="731" y="0"/>
            <rect width="17" height="17" x="731" y="17" id="calendarBoxId209">
                <title>1990-10-29: -0.2%</title>
            </rect>
            <rect width="17" height="17" x="731" y="34" id="calendarBoxId210">
                <title>1990-10-30: 0.7%</title>
            </rect>
            <rect width="17" height="17" x="731" y="51" id="calendarBoxId211">
                <title>1990-10-31: -0.2%</title>
            </rect>
            <rect width="17" height="17" x="731" y="68" id="calendarBoxId212">
                <title>1990-11-01: 0.5%</title>
            </rect>
            <rect width="17" height="17" x="731" y="85" id="calendarBoxId213">
                <title>1990-11-02: 1.5%</title>
            </rect>
            <rect width="17" height="17" x="731" y="102"/>
            <rect width="17" height="17" x="748" y="0"/>
            <rect width="17" height="17" x="748" y="17" id="calendarBoxId214">
                <title>1990-11-05: 0.5%</title>
            </rect>
            <rect width="17" height="17" x="748" y="34" id="calendarBoxId215">
                <title>1990-11-06: -0.7%</title>
            </rect>
            <rect width="17" height="17" x="748" y="51" id="calendarBoxId216">
                <title>1990-11-07: -1.8%</title>
            </rect>
            <rect width="17" height="17" x="748" y="68" id="calendarBoxId217">
                <title>1990-11-08: 0.1%</title>
            </rect>
            <rect width="17" height="17" x="748" y="85" id="calendarBoxId218">
                <title>1990-11-09: 1.8%</title>
            </rect>
            <rect width="17" height="17" x="748" y="102"/>
            <rect width="17" height="17" x="765" y="0"/>
            <rect width="17" height="17" x="765" y="17" id="calendarBoxId219">
                <title>1990-11-12: 2.0%</title>
            </rect>
            <rect width="17" height="17" x="765" y="34" id="calendarBoxId220">
                <title>1990-11-13: -0.2%</title>
            </rect>
            <rect width="17" height="17" x="765" y="51" id="calendarBoxId221">
                <title>1990-11-14: 1.0%</title>
            </rect>
            <rect width="17" height="17" x="765" y="68" id="calendarBoxId222">
                <title>1990-11-15: -0.6%</title>
            </rect>
            <rect width="17" height="17" x="765" y="85" id="calendarBoxId223">
                <title>1990-11-16: 0.2%</title>
            </rect>
            <rect width="17" height="17" x="765" y="102"/>
            <rect width="17" height="17" x="782" y="0"/>
            <rect width="17" height="17" x="782" y="17" id="calendarBoxId224">
                <title>1990-11-19: 0.6%</title>
            </rect>
            <rect width="17" height="17" x="782" y="34" id="calendarBoxId225">
                <title>1990-11-20: -1.4%</title>
            </rect>
            <rect width="17" height="17" x="782" y="51" id="calendarBoxId226">
                <title>1990-11-21: 0.4%</title>
            </rect>
            <rect width="17" height="17" x="782" y="68"/>
            <rect width="17" height="17" x="782" y="85" id="calendarBoxId227">
                <title>1990-11-23: -0.5%</title>
            </rect>
            <rect width="17" height="17" x="782" y="102"/>
            <rect width="17" height="17" x="799" y="0"/>
            <rect width="17" height="17" x="799" y="17" id="calendarBoxId228">
                <title>1990-11-26: 0.2%</title>
            </rect>
            <rect width="17" height="17" x="799" y="34" id="calendarBoxId229">
                <title>1990-11-27: 0.4%</title>
            </rect>
            <rect width="17" height="17" x="799" y="51" id="calendarBoxId230">
                <title>1990-11-28: -0.3%</title>
            </rect>
            <rect width="17" height="17" x="799" y="68" id="calendarBoxId231">
                <title>1990-11-29: -0.6%</title>
            </rect>
            <rect width="17" height="17" x="799" y="85" id="calendarBoxId232">
                <title>1990-11-30: 1.6%</title>
            </rect>
            <rect width="17" height="17" x="799" y="102"/>
            <rect width="17" height="17" x="816" y="0"/>
            <rect width="17" height="17" x="816" y="17" id="calendarBoxId233">
                <title>1990-12-03: 0.2%</title>
            </rect>
            <rect width="17" height="17" x="816" y="34" id="calendarBoxId234">
                <title>1990-12-04: 0.5%</title>
            </rect>
            <rect width="17" height="17" x="816" y="51" id="calendarBoxId235">
                <title>1990-12-05: 1.2%</title>
            </rect>
            <rect width="17" height="17" x="816" y="68" id="calendarBoxId236">
                <title>1990-12-06: -0.3%</title>
            </rect>
            <rect width="17" height="17" x="816" y="85" id="calendarBoxId237">
                <title>1990-12-07: -0.5%</title>
            </rect>
            <rect width="17" height="17" x="816" y="102"/>
            <rect width="17" height="17" x="833" y="0"/>
            <rect width="17" height="17" x="833" y="17" id="calendarBoxId238">
                <title>1990-12-10: 0.3%</title>
            </rect>
            <rect width="17" height="17" x="833" y="34" id="calendarBoxId239">
                <title>1990-12-11: -0.4%</title>
            </rect>
            <rect width="17" height="17" x="833" y="51" id="calendarBoxId240">
                <title>1990-12-12: 1.4%</title>
            </rect>
            <rect width="17" height="17" x="833" y="68" id="calendarBoxId241">
                <title>1990-12-13: -0.3%</title>
            </rect>
            <rect width="17" height="17" x="833" y="85" id="calendarBoxId242">
                <title>1990-12-14: -0.8%</title>
            </rect>
            <rect width="17" height="17" x="833" y="102"/>
            <rect width="17" height="17" x="850" y="0"/>
            <rect width="17" height="17" x="850" y="17" id="calendarBoxId243">
                <title>1990-12-17: 0.0%</title>
            </rect>
            <rect width="17" height="17" x="850" y="34" id="calendarBoxId244">
                <title>1990-12-18: 1.3%</title>
            </rect>
            <rect width="17" height="17" x="850" y="51" id="calendarBoxId245">
                <title>1990-12-19: 0.0%</title>
            </rect>
            <rect width="17" height="17" x="850" y="68" id="calendarBoxId246">
                <title>1990-12-20: 0.1%</title>
            </rect>
            <rect width="17" height="17" x="850" y="85" id="calendarBoxId247">
                <title>1990-12-21: 0.2%</title>
            </rect>
            <rect width="17" height="17" x="850" y="102"/>
            <rect width="17" height="17" x="867" y="0"/>
            <rect width="17" height="17" x="867" y="17" id="calendarBoxId248">
                <title>1990-12-24: -0.5%</title>
            </rect>
            <rect width="17" height="17" x="867" y="34"/>
            <rect width="17" height="17" x="867" y="51" id="calendarBoxId249">
                <title>1990-12-26: 0.6%</title>
            </rect>
            <rect width="17" height="17" x="867" y="68" id="calendarBoxId250">
                <title>1990-12-27: -0.4%</title>
            </rect>
            <rect width="17" height="17" x="867" y="85" id="calendarBoxId251">
                <title>1990-12-28: 0.1%</title>
            </rect>
            <rect width="17" height="17" x="867" y="102"/>
            <rect width="17" height="17" x="884" y="0"/>
            <rect width="17" height="17" x="884" y="17" id="calendarBoxId252">
                <title>1990-12-31: 0.2%</title>
            </rect>
          </g>
          <g fill="none" stroke="#000">
            <path d="M17,17H0V119H68V68H85V0H17Z"/>
            <path d="M85,68H68V119H136V68H153V0H85Z"/>
            <path d="M153,68H136V119H204V119H221V0H153Z"/>
            <path d="M238,0H221V119H289V34H306V0H238Z"/>
            <path d="M306,34H289V119H357V85H374V0H306Z"/>
            <path d="M374,85H357V119H425V119H442V0H374Z"/>
            <path d="M459,0H442V119H510V51H527V0H459Z"/>
            <path d="M527,51H510V119H578V102H595V0H527Z"/>
            <path d="M595,102H578V119H663V17H680V0H595Z"/>
            <path d="M680,17H663V119H731V68H748V0H680Z"/>
            <path d="M748,68H731V119H799V102H816V0H748Z"/>
            <path d="M816,102H799V119H884V34H901V0H816Z"/>
          </g>
        </g>
      </Svg>
    )
  }
}

export default CalendarGraph;