import React, { Component } from 'react';
import styled from 'styled-components';


const Svg = styled.svg`
  height: 900px;
  margin: 0 0 0 5px;
  min-width: 120px;
  max-width: 300px;
  @media (min-width: ${props => props.theme.desktopscreen}) {
    height: 800px;
  }
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

    function AnimateCalendar() {
      const CalendarAnimate = new TimelineLite({onComplete: AnimateCalendar}); // Call itself once animation completes.
        for (let i = 0; i < dataCount; i++) {
        const random = Math.random();
          CalendarAnimate.to(BoxNumber[i], 0.05, {fill: ("rgba(255, 255, 255," + random + ")")});
        }
        CalendarAnimate.to(BoxNumber, 2, {fill: "white"});
      }
      AnimateCalendar();

  }

  render() {
    return (
      <Svg viewBox="0 0 150 950">
        <svg viewBox="0 0 150 950" fill="white">
          <text x="40" y="15"> YEAR </text>
          <text x="20" y="-125" transform="rotate(90)" > Jan </text>
          <text x="90" y="-125" transform="rotate(90)" > Feb </text>
          <text x="158" y="-125" transform="rotate(90)" > Mar </text>
          <text x="245" y="-125" transform="rotate(90)" > Apr </text>
          <text x="310" y="-125" transform="rotate(90)" > May </text>
          <text x="378" y="-125" transform="rotate(90)" > Jun </text>
          <text x="465" y="-125" transform="rotate(90)" > Jul </text>
          <text x="533" y="-125" transform="rotate(90)" > Aug </text>
          <text x="600" y="-125" transform="rotate(90)" > Sep </text>
          <text x="685" y="-125" transform="rotate(90)" > Oct </text>
          <text x="752" y="-125" transform="rotate(90)" > Nov </text>
          <text x="820" y="-125" transform="rotate(90)" > Dec </text>
        </svg>
        <g transform="translate(0 18) scale(-1 1) rotate(90)">
          <g fill="white" stroke="#ccc">
            <rect width="17" height="17" x="0" y="17"/>
            <rect width="17" height="17" x="0" y="34" id="calendarBoxId0">
            </rect>
            <rect width="17" height="17" x="0" y="51" id="calendarBoxId1">
            </rect>
            <rect width="17" height="17" x="0" y="68" id="calendarBoxId2">
            </rect>
            <rect width="17" height="17" x="0" y="85" id="calendarBoxId3">
            </rect>
            <rect width="17" height="17" x="0" y="102"/>
            <rect width="17" height="17" x="17" y="0"/>
            <rect width="17" height="17" x="17" y="17" id="calendarBoxId4">
            </rect>
            <rect width="17" height="17" x="17" y="34" id="calendarBoxId5">
            </rect>
            <rect width="17" height="17" x="17" y="51" id="calendarBoxId6">
            </rect>
            <rect width="17" height="17" x="17" y="68" id="calendarBoxId7">
            </rect>
            <rect width="17" height="17" x="17" y="85" id="calendarBoxId8">
            </rect>
            <rect width="17" height="17" x="17" y="102"/>
            <rect width="17" height="17" x="34" y="0"/>
            <rect width="17" height="17" x="34" y="17" id="calendarBoxId9">
            </rect>
            <rect width="17" height="17" x="34" y="34" id="calendarBoxId10">
            </rect>
            <rect width="17" height="17" x="34" y="51" id="calendarBoxId11">
            </rect>
            <rect width="17" height="17" x="34" y="68" id="calendarBoxId12">
            </rect>
            <rect width="17" height="17" x="34" y="85" id="calendarBoxId13">
            </rect>
            <rect width="17" height="17" x="34" y="102"/>
            <rect width="17" height="17" x="51" y="0"/>
            <rect width="17" height="17" x="51" y="17" id="calendarBoxId14">
            </rect>
            <rect width="17" height="17" x="51" y="34" id="calendarBoxId15">
            </rect>
            <rect width="17" height="17" x="51" y="51" id="calendarBoxId16">
            </rect>
            <rect width="17" height="17" x="51" y="68" id="calendarBoxId17">
            </rect>
            <rect width="17" height="17" x="51" y="85" id="calendarBoxId18">
            </rect>
            <rect width="17" height="17" x="51" y="102"/>
            <rect width="17" height="17" x="68" y="0"/>
            <rect width="17" height="17" x="68" y="17" id="calendarBoxId19">
            </rect>
            <rect width="17" height="17" x="68" y="34" id="calendarBoxId20">
            </rect>
            <rect width="17" height="17" x="68" y="51" id="calendarBoxId21">
            </rect>
            <rect width="17" height="17" x="68" y="68" id="calendarBoxId22">
            </rect>
            <rect width="17" height="17" x="68" y="85" id="calendarBoxId23">
            </rect>
            <rect width="17" height="17" x="68" y="102"/>
            <rect width="17" height="17" x="85" y="0"/>
            <rect width="17" height="17" x="85" y="17" id="calendarBoxId24">
            </rect>
            <rect width="17" height="17" x="85" y="34" id="calendarBoxId25">
            </rect>
            <rect width="17" height="17" x="85" y="51" id="calendarBoxId26">
            </rect>
            <rect width="17" height="17" x="85" y="68" id="calendarBoxId27">
            </rect>
            <rect width="17" height="17" x="85" y="85" id="calendarBoxId28">
            </rect>
            <rect width="17" height="17" x="85" y="102"/>
            <rect width="17" height="17" x="102" y="0"/>
            <rect width="17" height="17" x="102" y="17" id="calendarBoxId29">
            </rect>
            <rect width="17" height="17" x="102" y="34" id="calendarBoxId30">
            </rect>
            <rect width="17" height="17" x="102" y="51" id="calendarBoxId31">
            </rect>
            <rect width="17" height="17" x="102" y="68" id="calendarBoxId32">
            </rect>
            <rect width="17" height="17" x="102" y="85" id="calendarBoxId33">
            </rect>
            <rect width="17" height="17" x="102" y="102"/>
            <rect width="17" height="17" x="119" y="0"/>
            <rect width="17" height="17" x="119" y="17"/>
            <rect width="17" height="17" x="119" y="34" id="calendarBoxId34">
            </rect>
            <rect width="17" height="17" x="119" y="51" id="calendarBoxId35">
            </rect>
            <rect width="17" height="17" x="119" y="68" id="calendarBoxId36">
            </rect>
            <rect width="17" height="17" x="119" y="85" id="calendarBoxId37">
            </rect>
            <rect width="17" height="17" x="119" y="102"/>
            <rect width="17" height="17" x="136" y="0"/>
            <rect width="17" height="17" x="136" y="17" id="calendarBoxId38">
            </rect>
            <rect width="17" height="17" x="136" y="34" id="calendarBoxId39">
            </rect>
            <rect width="17" height="17" x="136" y="51" id="calendarBoxId40">
            </rect>
            <rect width="17" height="17" x="136" y="68" id="calendarBoxId41">
            </rect>
            <rect width="17" height="17" x="136" y="85" id="calendarBoxId42">
            </rect>
            <rect width="17" height="17" x="136" y="102"/>
            <rect width="17" height="17" x="153" y="0"/>
            <rect width="17" height="17" x="153" y="17" id="calendarBoxId43">
            </rect>
            <rect width="17" height="17" x="153" y="34" id="calendarBoxId44">
            </rect>
            <rect width="17" height="17" x="153" y="51" id="calendarBoxId45">
            </rect>
            <rect width="17" height="17" x="153" y="68" id="calendarBoxId46">
            </rect>
            <rect width="17" height="17" x="153" y="85" id="calendarBoxId47">
            </rect>
            <rect width="17" height="17" x="153" y="102"/>
            <rect width="17" height="17" x="170" y="0"/>
            <rect width="17" height="17" x="170" y="17" id="calendarBoxId48">
            </rect>
            <rect width="17" height="17" x="170" y="34" id="calendarBoxId49">
            </rect>
            <rect width="17" height="17" x="170" y="51" id="calendarBoxId50">
            </rect>
            <rect width="17" height="17" x="170" y="68" id="calendarBoxId51">
            </rect>
            <rect width="17" height="17" x="170" y="85" id="calendarBoxId52">
            </rect>
            <rect width="17" height="17" x="170" y="102"/>
            <rect width="17" height="17" x="187" y="0"/>
            <rect width="17" height="17" x="187" y="17" id="calendarBoxId53">
            </rect>
            <rect width="17" height="17" x="187" y="34" id="calendarBoxId54">
            </rect>
            <rect width="17" height="17" x="187" y="51" id="calendarBoxId55">
            </rect>
            <rect width="17" height="17" x="187" y="68" id="calendarBoxId56">
            </rect>
            <rect width="17" height="17" x="187" y="85" id="calendarBoxId57">
            </rect>
            <rect width="17" height="17" x="187" y="102"/>
            <rect width="17" height="17" x="204" y="0"/>
            <rect width="17" height="17" x="204" y="17" id="calendarBoxId58">
            </rect>
            <rect width="17" height="17" x="204" y="34" id="calendarBoxId59">
            </rect>
            <rect width="17" height="17" x="204" y="51" id="calendarBoxId60">
            </rect>
            <rect width="17" height="17" x="204" y="68" id="calendarBoxId61">
            </rect>
            <rect width="17" height="17" x="204" y="85" id="calendarBoxId62">
            </rect>
            <rect width="17" height="17" x="204" y="102"/>
            <rect width="17" height="17" x="221" y="0"/>
            <rect width="17" height="17" x="221" y="17" id="calendarBoxId63">
            </rect>
            <rect width="17" height="17" x="221" y="34" id="calendarBoxId64">
            </rect>
            <rect width="17" height="17" x="221" y="51" id="calendarBoxId65">
            </rect>
            <rect width="17" height="17" x="221" y="68" id="calendarBoxId66">
            </rect>
            <rect width="17" height="17" x="221" y="85" id="calendarBoxId67">
            </rect>
            <rect width="17" height="17" x="221" y="102"/>
            <rect width="17" height="17" x="238" y="0"/>
            <rect width="17" height="17" x="238" y="17" id="calendarBoxId68">
            </rect>
            <rect width="17" height="17" x="238" y="34" id="calendarBoxId69">
            </rect>
            <rect width="17" height="17" x="238" y="51" id="calendarBoxId70">
            </rect>
            <rect width="17" height="17" x="238" y="68" id="calendarBoxId71">
            </rect>
            <rect width="17" height="17" x="238" y="85"/>
            <rect width="17" height="17" x="238" y="102"/>
            <rect width="17" height="17" x="255" y="0"/>
            <rect width="17" height="17" x="255" y="17" id="calendarBoxId72">
            </rect>
            <rect width="17" height="17" x="255" y="34" id="calendarBoxId73">
            </rect>
            <rect width="17" height="17" x="255" y="51" id="calendarBoxId74">
            </rect>
            <rect width="17" height="17" x="255" y="68" id="calendarBoxId75">
            </rect>
            <rect width="17" height="17" x="255" y="85" id="calendarBoxId76">
            </rect>
            <rect width="17" height="17" x="255" y="102"/>
            <rect width="17" height="17" x="272" y="0"/>
            <rect width="17" height="17" x="272" y="17" id="calendarBoxId77">
            </rect>
            <rect width="17" height="17" x="272" y="34" id="calendarBoxId78">
            </rect>
            <rect width="17" height="17" x="272" y="51" id="calendarBoxId79">
            </rect>
            <rect width="17" height="17" x="272" y="68" id="calendarBoxId80">
            </rect>
            <rect width="17" height="17" x="272" y="85" id="calendarBoxId81">
            </rect>
            <rect width="17" height="17" x="272" y="102"/>
            <rect width="17" height="17" x="289" y="0"/>
            <rect width="17" height="17" x="289" y="17" id="calendarBoxId82">
            </rect>
            <rect width="17" height="17" x="289" y="34" id="calendarBoxId83">
            </rect>
            <rect width="17" height="17" x="289" y="51" id="calendarBoxId84">
            </rect>
            <rect width="17" height="17" x="289" y="68" id="calendarBoxId85">
            </rect>
            <rect width="17" height="17" x="289" y="85" id="calendarBoxId86">
            </rect>
            <rect width="17" height="17" x="289" y="102"/>
            <rect width="17" height="17" x="306" y="0"/>
            <rect width="17" height="17" x="306" y="17" id="calendarBoxId87">
            </rect>
            <rect width="17" height="17" x="306" y="34" id="calendarBoxId88">
            </rect>
            <rect width="17" height="17" x="306" y="51" id="calendarBoxId89">
            </rect>
            <rect width="17" height="17" x="306" y="68" id="calendarBoxId90">
            </rect>
            <rect width="17" height="17" x="306" y="85" id="calendarBoxId91">
            </rect>
            <rect width="17" height="17" x="306" y="102"/>
            <rect width="17" height="17" x="323" y="0"/>
            <rect width="17" height="17" x="323" y="17" id="calendarBoxId92">
            </rect>
            <rect width="17" height="17" x="323" y="34" id="calendarBoxId93">
            </rect>
            <rect width="17" height="17" x="323" y="51" id="calendarBoxId94">
            </rect>
            <rect width="17" height="17" x="323" y="68" id="calendarBoxId95">
            </rect>
            <rect width="17" height="17" x="323" y="85" id="calendarBoxId96">
            </rect>
            <rect width="17" height="17" x="323" y="102"/>
            <rect width="17" height="17" x="340" y="0"/>
            <rect width="17" height="17" x="340" y="17" id="calendarBoxId97">
            </rect>
            <rect width="17" height="17" x="340" y="34" id="calendarBoxId98">
            </rect>
            <rect width="17" height="17" x="340" y="51" id="calendarBoxId99">
            </rect>
            <rect width="17" height="17" x="340" y="68" id="calendarBoxId100">
            </rect>
            <rect width="17" height="17" x="340" y="85" id="calendarBoxId101">
            </rect>
            <rect width="17" height="17" x="340" y="102"/>
            <rect width="17" height="17" x="357" y="0"/>
            <rect width="17" height="17" x="357" y="17"/>
            <rect width="17" height="17" x="357" y="34" id="calendarBoxId102">
            </rect>
            <rect width="17" height="17" x="357" y="51" id="calendarBoxId103">
            </rect>
            <rect width="17" height="17" x="357" y="68" id="calendarBoxId104">
            </rect>
            <rect width="17" height="17" x="357" y="85" id="calendarBoxId105">
            </rect>
            <rect width="17" height="17" x="357" y="102"/>
            <rect width="17" height="17" x="374" y="0"/>
            <rect width="17" height="17" x="374" y="17" id="calendarBoxId106">
            </rect>
            <rect width="17" height="17" x="374" y="34" id="calendarBoxId107">
            </rect>
            <rect width="17" height="17" x="374" y="51" id="calendarBoxId108">
            </rect>
            <rect width="17" height="17" x="374" y="68" id="calendarBoxId109">
            </rect>
            <rect width="17" height="17" x="374" y="85" id="calendarBoxId110">
            </rect>
            <rect width="17" height="17" x="374" y="102"/>
            <rect width="17" height="17" x="391" y="0"/>
            <rect width="17" height="17" x="391" y="17" id="calendarBoxId111">
            </rect>
            <rect width="17" height="17" x="391" y="34" id="calendarBoxId112">
            </rect>
            <rect width="17" height="17" x="391" y="51" id="calendarBoxId113">
            </rect>
            <rect width="17" height="17" x="391" y="68" id="calendarBoxId114">
            </rect>
            <rect width="17" height="17" x="391" y="85" id="calendarBoxId115">
            </rect>
            <rect width="17" height="17" x="391" y="102"/>
            <rect width="17" height="17" x="408" y="0"/>
            <rect width="17" height="17" x="408" y="17" id="calendarBoxId116">
            </rect>
            <rect width="17" height="17" x="408" y="34" id="calendarBoxId117">
            </rect>
            <rect width="17" height="17" x="408" y="51" id="calendarBoxId118">
            </rect>
            <rect width="17" height="17" x="408" y="68" id="calendarBoxId119">
            </rect>
            <rect width="17" height="17" x="408" y="85" id="calendarBoxId120">
            </rect>
            <rect width="17" height="17" x="408" y="102"/>
            <rect width="17" height="17" x="425" y="0"/>
            <rect width="17" height="17" x="425" y="17" id="calendarBoxId121">
            </rect>
            <rect width="17" height="17" x="425" y="34" id="calendarBoxId122">
            </rect>
            <rect width="17" height="17" x="425" y="51" id="calendarBoxId123">
            </rect>
            <rect width="17" height="17" x="425" y="68" id="calendarBoxId124">
            </rect>
            <rect width="17" height="17" x="425" y="85" id="calendarBoxId125">
            </rect>
            <rect width="17" height="17" x="425" y="102"/>
            <rect width="17" height="17" x="442" y="0"/>
            <rect width="17" height="17" x="442" y="17" id="calendarBoxId126">
            </rect>
            <rect width="17" height="17" x="442" y="34" id="calendarBoxId127">
            </rect>
            <rect width="17" height="17" x="442" y="51"/>
            <rect width="17" height="17" x="442" y="68" id="calendarBoxId128">
            </rect>
            <rect width="17" height="17" x="442" y="85" id="calendarBoxId129">
            </rect>
            <rect width="17" height="17" x="442" y="102"/>
            <rect width="17" height="17" x="459" y="0"/>
            <rect width="17" height="17" x="459" y="17" id="calendarBoxId130">
            </rect>
            <rect width="17" height="17" x="459" y="34" id="calendarBoxId131">
            </rect>
            <rect width="17" height="17" x="459" y="51" id="calendarBoxId132">
            </rect>
            <rect width="17" height="17" x="459" y="68" id="calendarBoxId133">
            </rect>
            <rect width="17" height="17" x="459" y="85" id="calendarBoxId134">
            </rect>
            <rect width="17" height="17" x="459" y="102"/>
            <rect width="17" height="17" x="476" y="0"/>
            <rect width="17" height="17" x="476" y="17" id="calendarBoxId135">
            </rect>
            <rect width="17" height="17" x="476" y="34" id="calendarBoxId136">
            </rect>
            <rect width="17" height="17" x="476" y="51" id="calendarBoxId137">
            </rect>
            <rect width="17" height="17" x="476" y="68" id="calendarBoxId138">
            </rect>
            <rect width="17" height="17" x="476" y="85" id="calendarBoxId139">
            </rect>
            <rect width="17" height="17" x="476" y="102"/>
            <rect width="17" height="17" x="493" y="0"/>
            <rect width="17" height="17" x="493" y="17" id="calendarBoxId140">
            </rect>
            <rect width="17" height="17" x="493" y="34" id="calendarBoxId141">
            </rect>
            <rect width="17" height="17" x="493" y="51" id="calendarBoxId142">
            </rect>
            <rect width="17" height="17" x="493" y="68" id="calendarBoxId143">
            </rect>
            <rect width="17" height="17" x="493" y="85" id="calendarBoxId144">
            </rect>
            <rect width="17" height="17" x="493" y="102"/>
            <rect width="17" height="17" x="510" y="0"/>
            <rect width="17" height="17" x="510" y="17" id="calendarBoxId145">
            </rect>
            <rect width="17" height="17" x="510" y="34" id="calendarBoxId146">
            </rect>
            <rect width="17" height="17" x="510" y="51" id="calendarBoxId147">
            </rect>
            <rect width="17" height="17" x="510" y="68" id="calendarBoxId148">
            </rect>
            <rect width="17" height="17" x="510" y="85" id="calendarBoxId149">
            </rect>
            <rect width="17" height="17" x="510" y="102"/>
            <rect width="17" height="17" x="527" y="0"/>
            <rect width="17" height="17" x="527" y="17" id="calendarBoxId150">
            </rect>
            <rect width="17" height="17" x="527" y="34" id="calendarBoxId151">
            </rect>
            <rect width="17" height="17" x="527" y="51" id="calendarBoxId152">
            </rect>
            <rect width="17" height="17" x="527" y="68" id="calendarBoxId153">
            </rect>
            <rect width="17" height="17" x="527" y="85" id="calendarBoxId154">
            </rect>
            <rect width="17" height="17" x="527" y="102"/>
            <rect width="17" height="17" x="544" y="0"/>
            <rect width="17" height="17" x="544" y="17" id="calendarBoxId155">
            </rect>
            <rect width="17" height="17" x="544" y="34" id="calendarBoxId156">
            </rect>
            <rect width="17" height="17" x="544" y="51" id="calendarBoxId157">
            </rect>
            <rect width="17" height="17" x="544" y="68" id="calendarBoxId158">
            </rect>
            <rect width="17" height="17" x="544" y="85" id="calendarBoxId159">
            </rect>
            <rect width="17" height="17" x="544" y="102"/>
            <rect width="17" height="17" x="561" y="0"/>
            <rect width="17" height="17" x="561" y="17" id="calendarBoxId160">
            </rect>
            <rect width="17" height="17" x="561" y="34" id="calendarBoxId161">
            </rect>
            <rect width="17" height="17" x="561" y="51" id="calendarBoxId162">
            </rect>
            <rect width="17" height="17" x="561" y="68" id="calendarBoxId163">
            </rect>
            <rect width="17" height="17" x="561" y="85" id="calendarBoxId164">
            </rect>
            <rect width="17" height="17" x="561" y="102"/>
            <rect width="17" height="17" x="578" y="0"/>
            <rect width="17" height="17" x="578" y="17" id="calendarBoxId165">
            </rect>
            <rect width="17" height="17" x="578" y="34" id="calendarBoxId166">
            </rect>
            <rect width="17" height="17" x="578" y="51" id="calendarBoxId167">
            </rect>
            <rect width="17" height="17" x="578" y="68" id="calendarBoxId168">
            </rect>
            <rect width="17" height="17" x="578" y="85" id="calendarBoxId169">
            </rect>
            <rect width="17" height="17" x="578" y="102"/>
            <rect width="17" height="17" x="595" y="0"/>
            <rect width="17" height="17" x="595" y="17"/>
            <rect width="17" height="17" x="595" y="34" id="calendarBoxId170">
            </rect>
            <rect width="17" height="17" x="595" y="51" id="calendarBoxId171">
            </rect>
            <rect width="17" height="17" x="595" y="68" id="calendarBoxId172">
            </rect>
            <rect width="17" height="17" x="595" y="85" id="calendarBoxId173">
            </rect>
            <rect width="17" height="17" x="595" y="102"/>
            <rect width="17" height="17" x="612" y="0"/>
            <rect width="17" height="17" x="612" y="17" id="calendarBoxId174">
            </rect>
            <rect width="17" height="17" x="612" y="34" id="calendarBoxId175">
            </rect>
            <rect width="17" height="17" x="612" y="51" id="calendarBoxId176">
            </rect>
            <rect width="17" height="17" x="612" y="68" id="calendarBoxId177">
            </rect>
            <rect width="17" height="17" x="612" y="85" id="calendarBoxId178">
            </rect>
            <rect width="17" height="17" x="612" y="102"/>
            <rect width="17" height="17" x="629" y="0"/>
            <rect width="17" height="17" x="629" y="17" id="calendarBoxId179">
            </rect>
            <rect width="17" height="17" x="629" y="34" id="calendarBoxId180">
            </rect>
            <rect width="17" height="17" x="629" y="51" id="calendarBoxId181">
            </rect>
            <rect width="17" height="17" x="629" y="68" id="calendarBoxId182">
            </rect>
            <rect width="17" height="17" x="629" y="85" id="calendarBoxId183">
            </rect>
            <rect width="17" height="17" x="629" y="102"/>
            <rect width="17" height="17" x="646" y="0"/>
            <rect width="17" height="17" x="646" y="17" id="calendarBoxId184">
            </rect>
            <rect width="17" height="17" x="646" y="34" id="calendarBoxId185">
            </rect>
            <rect width="17" height="17" x="646" y="51" id="calendarBoxId186">
            </rect>
            <rect width="17" height="17" x="646" y="68" id="calendarBoxId187">
            </rect>
            <rect width="17" height="17" x="646" y="85" id="calendarBoxId188">
            </rect>
            <rect width="17" height="17" x="646" y="102"/>
            <rect width="17" height="17" x="663" y="0"/>
            <rect width="17" height="17" x="663" y="17" id="calendarBoxId189">
            </rect>
            <rect width="17" height="17" x="663" y="34" id="calendarBoxId190">
            </rect>
            <rect width="17" height="17" x="663" y="51" id="calendarBoxId191">
            </rect>
            <rect width="17" height="17" x="663" y="68" id="calendarBoxId192">
            </rect>
            <rect width="17" height="17" x="663" y="85" id="calendarBoxId193">
            </rect>
            <rect width="17" height="17" x="663" y="102"/>
            <rect width="17" height="17" x="680" y="0"/>
            <rect width="17" height="17" x="680" y="17" id="calendarBoxId194">
            </rect>
            <rect width="17" height="17" x="680" y="34" id="calendarBoxId195">
            </rect>
            <rect width="17" height="17" x="680" y="51" id="calendarBoxId196">
            </rect>
            <rect width="17" height="17" x="680" y="68" id="calendarBoxId197">
            </rect>
            <rect width="17" height="17" x="680" y="85" id="calendarBoxId198">
            </rect>
            <rect width="17" height="17" x="680" y="102"/>
            <rect width="17" height="17" x="697" y="0"/>
            <rect width="17" height="17" x="697" y="17" id="calendarBoxId199">
            </rect>
            <rect width="17" height="17" x="697" y="34" id="calendarBoxId200">
            </rect>
            <rect width="17" height="17" x="697" y="51" id="calendarBoxId201">
            </rect>
            <rect width="17" height="17" x="697" y="68" id="calendarBoxId202">
            </rect>
            <rect width="17" height="17" x="697" y="85" id="calendarBoxId203">
            </rect>
            <rect width="17" height="17" x="697" y="102"/>
            <rect width="17" height="17" x="714" y="0"/>
            <rect width="17" height="17" x="714" y="17" id="calendarBoxId204">
            </rect>
            <rect width="17" height="17" x="714" y="34" id="calendarBoxId205">
            </rect>
            <rect width="17" height="17" x="714" y="51" id="calendarBoxId206">
            </rect>
            <rect width="17" height="17" x="714" y="68" id="calendarBoxId207">
            </rect>
            <rect width="17" height="17" x="714" y="85" id="calendarBoxId208">
            </rect>
            <rect width="17" height="17" x="714" y="102"/>
            <rect width="17" height="17" x="731" y="0"/>
            <rect width="17" height="17" x="731" y="17" id="calendarBoxId209">
            </rect>
            <rect width="17" height="17" x="731" y="34" id="calendarBoxId210">
            </rect>
            <rect width="17" height="17" x="731" y="51" id="calendarBoxId211">
            </rect>
            <rect width="17" height="17" x="731" y="68" id="calendarBoxId212">
            </rect>
            <rect width="17" height="17" x="731" y="85" id="calendarBoxId213">
            </rect>
            <rect width="17" height="17" x="731" y="102"/>
            <rect width="17" height="17" x="748" y="0"/>
            <rect width="17" height="17" x="748" y="17" id="calendarBoxId214">
            </rect>
            <rect width="17" height="17" x="748" y="34" id="calendarBoxId215">
            </rect>
            <rect width="17" height="17" x="748" y="51" id="calendarBoxId216">
            </rect>
            <rect width="17" height="17" x="748" y="68" id="calendarBoxId217">
            </rect>
            <rect width="17" height="17" x="748" y="85" id="calendarBoxId218">
            </rect>
            <rect width="17" height="17" x="748" y="102"/>
            <rect width="17" height="17" x="765" y="0"/>
            <rect width="17" height="17" x="765" y="17" id="calendarBoxId219">
            </rect>
            <rect width="17" height="17" x="765" y="34" id="calendarBoxId220">
            </rect>
            <rect width="17" height="17" x="765" y="51" id="calendarBoxId221">
            </rect>
            <rect width="17" height="17" x="765" y="68" id="calendarBoxId222">
            </rect>
            <rect width="17" height="17" x="765" y="85" id="calendarBoxId223">
            </rect>
            <rect width="17" height="17" x="765" y="102"/>
            <rect width="17" height="17" x="782" y="0"/>
            <rect width="17" height="17" x="782" y="17" id="calendarBoxId224">
            </rect>
            <rect width="17" height="17" x="782" y="34" id="calendarBoxId225">
            </rect>
            <rect width="17" height="17" x="782" y="51" id="calendarBoxId226">
            </rect>
            <rect width="17" height="17" x="782" y="68"/>
            <rect width="17" height="17" x="782" y="85" id="calendarBoxId227">
            </rect>
            <rect width="17" height="17" x="782" y="102"/>
            <rect width="17" height="17" x="799" y="0"/>
            <rect width="17" height="17" x="799" y="17" id="calendarBoxId228">
            </rect>
            <rect width="17" height="17" x="799" y="34" id="calendarBoxId229">
            </rect>
            <rect width="17" height="17" x="799" y="51" id="calendarBoxId230">
            </rect>
            <rect width="17" height="17" x="799" y="68" id="calendarBoxId231">
            </rect>
            <rect width="17" height="17" x="799" y="85" id="calendarBoxId232">
            </rect>
            <rect width="17" height="17" x="799" y="102"/>
            <rect width="17" height="17" x="816" y="0"/>
            <rect width="17" height="17" x="816" y="17" id="calendarBoxId233">
            </rect>
            <rect width="17" height="17" x="816" y="34" id="calendarBoxId234">
            </rect>
            <rect width="17" height="17" x="816" y="51" id="calendarBoxId235">
            </rect>
            <rect width="17" height="17" x="816" y="68" id="calendarBoxId236">
            </rect>
            <rect width="17" height="17" x="816" y="85" id="calendarBoxId237">
            </rect>
            <rect width="17" height="17" x="816" y="102"/>
            <rect width="17" height="17" x="833" y="0"/>
            <rect width="17" height="17" x="833" y="17" id="calendarBoxId238">
            </rect>
            <rect width="17" height="17" x="833" y="34" id="calendarBoxId239">
            </rect>
            <rect width="17" height="17" x="833" y="51" id="calendarBoxId240">
            </rect>
            <rect width="17" height="17" x="833" y="68" id="calendarBoxId241">
            </rect>
            <rect width="17" height="17" x="833" y="85" id="calendarBoxId242">
            </rect>
            <rect width="17" height="17" x="833" y="102"/>
            <rect width="17" height="17" x="850" y="0"/>
            <rect width="17" height="17" x="850" y="17" id="calendarBoxId243">
            </rect>
            <rect width="17" height="17" x="850" y="34" id="calendarBoxId244">
            </rect>
            <rect width="17" height="17" x="850" y="51" id="calendarBoxId245">
            </rect>
            <rect width="17" height="17" x="850" y="68" id="calendarBoxId246">
            </rect>
            <rect width="17" height="17" x="850" y="85" id="calendarBoxId247">
            </rect>
            <rect width="17" height="17" x="850" y="102"/>
            <rect width="17" height="17" x="867" y="0"/>
            <rect width="17" height="17" x="867" y="17" id="calendarBoxId248">
            </rect>
            <rect width="17" height="17" x="867" y="34"/>
            <rect width="17" height="17" x="867" y="51" id="calendarBoxId249">
            </rect>
            <rect width="17" height="17" x="867" y="68" id="calendarBoxId250">
            </rect>
            <rect width="17" height="17" x="867" y="85" id="calendarBoxId251">
            </rect>
            <rect width="17" height="17" x="867" y="102"/>
            <rect width="17" height="17" x="884" y="0"/>
            <rect width="17" height="17" x="884" y="17" id="calendarBoxId252">
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