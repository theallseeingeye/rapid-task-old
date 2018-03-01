import React, { Component } from 'react';
import styled from "styled-components";
import theme from "../../../../global-styles/DefaultTheme";

const Svg = styled.svg`
  width: 100vw;
  margin: auto;
  position: absolute;
  transform: translateX(-29.4%);
  z-index: 1;
  max-width: 1000px;

 `;

class ManFinance extends Component {
    constructor(props) {
    super(props);

    this.color = theme.logoblue;
    this.color2 = "#9ed4fa";
  }
  render() {
    return (
      <Svg id="Background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 884.84 1122.59">
        <rect id="DarkLarge" x="130.45" y="70.49" width="196.39" height="1029.04" rx="98.2" ry="98.2" transform="translate(240.27 1138.42) rotate(-135)" fill={this.color2}/>

        <rect id="MediumLarge" x="-57.45" y="45.54" width="342.91" height="907.21" rx="171.45" ry="171.45" transform="translate(105.28 910.77) rotate(-135)" fill={this.color}/>
        <rect id="MediumMedium" x="8.42" y="-64.45" width="33.41" height="633.7" rx="16.7" ry="16.7" transform="translate(128.03 426.71) rotate(-135)" fill={this.color}/>
        <rect id="DarkMedium" x="55.17" y="-110.11" width="72.46" height="974.1" rx="36.23" ry="36.23" transform="translate(153.1 686.18) rotate(-135)" fill={this.color2}/>

        <rect id="trail" x="171.1" y="285.65" width="29.09" height="558.44" rx="13" ry="13" transform="translate(181.09 1073.63) rotate(-135)" fill="#fff" opacity="0.29"/>
        <path d="M368.51,384.29q4.28,6.57,3.92,10.9t-4.4,8.53a16.7,16.7,0,0,1-9.82,5.19,12.58,12.58,0,0,1-10.32-3.18l-3.72,3.87-2.38-2.28,3.67-3.82q-8-9.83.85-20.27l4.31,4.14q-5.51,6.71-1.51,12.33l13.42-14q-7.05-10.67.49-18.51,4.25-4.42,9.27-4.78a13.63,13.63,0,0,1,9.56,3.19l3.7-3.84,2.38,2.28-3.7,3.84q7.26,8.28,0,17.41l-4.33-4.16q4.11-5,.71-9.45Zm-1.85-2.83,11.59-12.06q-5.57-3.58-10.57,1.61-2.69,2.8-2.61,5.32A10.84,10.84,0,0,0,366.66,381.46ZM351.5,402q5.83,4.21,11.92-2.13a9.13,9.13,0,0,0,2.8-5q.3-2.4-1.88-6.23Z" transform="translate(263.61 -21.93)" fill="green"/>
        <rect x="225.53" y="272.87" width="27.3" height="771.52" rx="13" ry="13" transform="translate(206.19 1271.56) rotate(-135)" fill="#fff" opacity="0.29"/>
        <rect x="484.06" y="382.7" width="33.81" height="27.69" rx="2.78" ry="2.78" transform="translate(129.36 443.33) rotate(-44.54)" fill="#dfd5dc"/>
        <rect x="508.2" y="375.43" width="4" height="24.06" rx="1.19" ry="1.19" transform="translate(138.39 447.2) rotate(-44.54)" fill="#aab0b1"/>
        <path d="M506.25,380.58l-5.36,0a1.16,1.16,0,0,0,.3.6l3,3,5.66,0Z" transform="translate(263.61 -21.93)" fill="#b8bdbd"/>
        <polygon points="776.81 365.73 771.15 365.68 776.25 370.87 781.91 370.91 776.81 365.73" fill="#b8bdbd"/>
        <rect x="497.05" y="382.72" width="3.71" height="5.06" rx="1.19" ry="1.19" transform="translate(136.69 438.64) rotate(-44.54)" fill="#008500"/>
        <rect x="501.49" y="387.23" width="3.71" height="5.06" rx="1.19" ry="1.19" transform="translate(134.8 443.05) rotate(-44.54)" fill="#f0ecef"/>
        <rect x="505.94" y="391.74" width="3.71" height="5.07" rx="1.19" ry="1.19" transform="translate(132.91 447.46) rotate(-44.54)" fill="#f0ecef"/>
        <rect x="510.38" y="396.25" width="3.71" height="5.07" rx="1.19" ry="1.19" transform="translate(131.02 451.87) rotate(-44.54)" fill="#f0ecef"/>
        <rect x="493.57" y="386.15" width="3.71" height="5.06" rx="1.19" ry="1.19" transform="translate(133.29 437.18) rotate(-44.54)" fill="#f0ecef"/>
        <rect x="498.01" y="390.66" width="3.71" height="5.06" rx="1.19" ry="1.19" transform="translate(131.4 441.59) rotate(-44.54)" fill="#f0ecef"/>
        <rect x="502.45" y="395.17" width="3.71" height="5.07" rx="1.19" ry="1.19" transform="translate(129.51 446) rotate(-44.54)" fill="#f0ecef"/>
        <rect x="506.89" y="399.68" width="3.71" height="5.07" rx="1.19" ry="1.19" transform="translate(127.62 450.41) rotate(-44.54)" fill="#f0ecef"/>
        <rect x="490.08" y="389.57" width="3.71" height="5.06" rx="1.19" ry="1.19" transform="translate(129.88 435.72) rotate(-44.54)" fill="#f0ecef"/>
        <rect x="494.52" y="394.09" width="3.71" height="5.06" rx="1.19" ry="1.19" transform="translate(127.99 440.13) rotate(-44.54)" fill="#f0ecef"/>
        <rect x="498.97" y="398.6" width="3.71" height="5.07" rx="1.19" ry="1.19" transform="translate(126.1 444.54) rotate(-44.54)" fill="#f0ecef"/>
        <rect x="503.41" y="403.11" width="3.71" height="5.07" rx="1.19" ry="1.19" transform="translate(124.21 448.95) rotate(-44.54)" fill="#f0ecef"/>
        <rect x="486.6" y="393" width="3.71" height="5.06" rx="1.19" ry="1.19" transform="translate(126.47 434.26) rotate(-44.54)" fill="#f0ecef"/>
        <rect x="491.04" y="397.52" width="3.71" height="5.06" rx="1.19" ry="1.19" transform="translate(124.58 438.67) rotate(-44.54)" fill="#f0ecef"/>
        <rect x="495.48" y="402.03" width="3.71" height="5.07" rx="1.19" ry="1.19" transform="translate(122.69 443.08) rotate(-44.54)" fill="#f0ecef"/>
        <rect x="495.73" y="408.26" width="8.6" height="5.07" rx="1.19" ry="1.19" transform="translate(119.1 446.76) rotate(-44.54)" fill="#f0ecef"/>
        <rect x="485.33" y="395.52" width="3.71" height="11.39" rx="1.19" ry="1.19" transform="translate(122.12 435.01) rotate(-44.54)" fill="#f0ecef"/>
        <rect x="492" y="405.46" width="3.71" height="5.07" rx="1.19" ry="1.19" transform="translate(119.29 441.62) rotate(-44.54)" fill="#f0ecef"/>
        <rect id="trail-2" data-name="trail" x="-37.51" y="249.75" width="27.94" height="442.68" rx="13" ry="13" transform="translate(-109.7 765.63) rotate(-135)" fill="#fff" opacity="0.29"/>
        <path d="M141,288.52a1.83,1.83,0,0,0-1.34-.51,2,2,0,0,0-1.35.61L98.59,329.57a1.91,1.91,0,0,0,0,2.69l17.14,16.63a1.91,1.91,0,0,0,2.68-.1l39.75-41a1.88,1.88,0,0,0,0-2.68Z" transform="translate(263.61 -21.93)" fill="#f0ecef"/>
        <path d="M138.33,288.62,98.58,329.57a1.91,1.91,0,0,0,0,2.69l3.21,3.11a3.32,3.32,0,0,0,.69-.21l25.82-12a9,9,0,0,0,2.66-1.89h0a9,9,0,0,0,1.82-2.72L144,292.34a3.44,3.44,0,0,0,.19-.7L141,288.52A1.91,1.91,0,0,0,138.33,288.62Z" transform="translate(263.61 -21.93)" fill="#dfd5dc"/>
        <path d="M141,288.53a1.91,1.91,0,0,0-2.69.08l-39.75,41a1.91,1.91,0,0,0,0,2.69l1.36,1.32a1.77,1.77,0,0,0,2,.31l25.83-12a7.56,7.56,0,0,0,3.74-3.85l11.26-26.16a1.77,1.77,0,0,0-.37-2Z" transform="translate(263.61 -21.93)" fill="#f0ecef"/>
        <path d="M134.21,315.49a1.8,1.8,0,0,1-.83-.8L133,314a1.84,1.84,0,0,0-2.28-.87l-.76.27a1.9,1.9,0,0,1-1.18,0l-.76-.22a2,2,0,0,0-2.29,1l-.37.73a2,2,0,0,1-.84.86l-.71.39a2,2,0,0,0-1,2.32l.24.75a1.91,1.91,0,0,1,0,1.18l-.25.77a1.84,1.84,0,0,0,.93,2.26l.71.34a1.79,1.79,0,0,1,.83.8l.36.7a1.84,1.84,0,0,0,2.28.87l.76-.27a1.89,1.89,0,0,1,1.18,0l.76.22a2,2,0,0,0,2.29-1l.37-.72a2,2,0,0,1,.84-.86l.71-.39a2,2,0,0,0,1-2.32l-.24-.75a1.91,1.91,0,0,1,0-1.18l.25-.77a1.84,1.84,0,0,0-.94-2.26Z" transform="translate(263.61 -21.93)" fill="#005000"/>
        <ellipse cx="129.35" cy="319.66" rx="4.88" ry="4.68" transform="translate(73.47 167.96) rotate(-45.86)" fill="green"/>
        <rect id="trail-3" data-name="trail" x="221.77" y="173.43" width="48.65" height="441.73" rx="23" ry="23" transform="translate(404.9 825.19) rotate(-135)" fill="#fff" opacity="0.29"/>
        <path d="M441.47,227.55l-29.34-29.34a3.69,3.69,0,0,0-5.22,0l-42.44,42.44a3.69,3.69,0,0,0,0,5.21l29.34,29.34a3.69,3.69,0,0,0,5.22,0l42.44-42.44A3.69,3.69,0,0,0,441.47,227.55ZM397.6,273.5a1.65,1.65,0,0,1-2.34,0l-29.08-29.08a1.65,1.65,0,0,1,0-2.34l42.17-42.17a1.65,1.65,0,0,1,2.34,0L439.77,229a1.65,1.65,0,0,1,0,2.34Z" transform="translate(263.61 -21.93)" fill="#8b5657"/>
        <path d="M439.77,229l-29.08-29.08a1.65,1.65,0,0,0-2.34,0l-42.17,42.17a1.65,1.65,0,0,0,0,2.34l29.08,29.08a1.65,1.65,0,0,0,2.34,0l42.17-42.17A1.65,1.65,0,0,0,439.77,229Z" transform="translate(263.61 -21.93)" fill="#f0ecef"/>
        <path d="M402.7,259.19,380.49,237a.74.74,0,1,0-1,1l22.21,22.21a.74.74,0,0,0,1-1Z" transform="translate(263.61 -21.93)" fill="#cabac4"/>
        <path d="M405.44,256.45l-22.21-22.21a.74.74,0,1,0-1,1l22.21,22.21a.74.74,0,0,0,1-1Z" transform="translate(263.61 -21.93)" fill="#cabac4"/>
        <path d="M408.18,253.71,386,231.5a.74.74,0,1,0-1,1l22.21,22.21a.74.74,0,1,0,1-1Z" transform="translate(263.61 -21.93)" fill="#cabac4"/>
        <path d="M410.92,251l-22.21-22.21a.74.74,0,1,0-1,1L409.88,252a.74.74,0,0,0,1-1Z" transform="translate(263.61 -21.93)" fill="#cabac4"/>
        <path d="M413.67,248.22,391.46,226a.74.74,0,1,0-1,1l22.21,22.21a.74.74,0,0,0,1-1Z" transform="translate(263.61 -21.93)" fill="#cabac4"/>
        <path d="M416.41,245.48,394.2,223.27a.74.74,0,1,0-1,1l22.21,22.21a.74.74,0,1,0,1-1Z" transform="translate(263.61 -21.93)" fill="#cabac4"/>
        <path d="M419.15,242.74l-22.21-22.21a.74.74,0,1,0-1,1l22.21,22.21a.74.74,0,0,0,1-1Z" transform="translate(263.61 -21.93)" fill="#cabac4"/>
        <path d="M421.89,240l-22.21-22.21a.74.74,0,1,0-1,1L420.85,241a.74.74,0,0,0,1-1Z" transform="translate(263.61 -21.93)" fill="#cabac4"/>
        <path d="M424.64,237.25,402.43,215a.74.74,0,1,0-1,1l22.21,22.21a.74.74,0,0,0,1-1Z" transform="translate(263.61 -21.93)" fill="#cabac4"/>
        <path d="M427.38,234.51,405.17,212.3a.74.74,0,1,0-1,1l22.21,22.21a.74.74,0,0,0,1-1Z" transform="translate(263.61 -21.93)" fill="#cabac4"/>
        <path d="M432.43,229.39l.15-1a3.83,3.83,0,0,0-.53-2.6l-2.1-3.4a1.29,1.29,0,0,1,.19-1.59l2.86-2.86a1.29,1.29,0,0,0,0-1.82l-1.45-1.45a.93.93,0,0,1,0-1.32l1.92-1.92a3.7,3.7,0,1,0-5.24-5.24l-1.92,1.92a.93.93,0,0,1-1.32,0l-1.45-1.45a1.29,1.29,0,0,0-1.82,0l-2.86,2.86a1.29,1.29,0,0,1-1.59.19l-3.4-2.1a3.83,3.83,0,0,0-2.6-.53l-1,.15a.68.68,0,0,0-.38,1.15l21.36,21.36a.68.68,0,0,0,1.15-.38Zm-3.06-19.08a2.1,2.1,0,1,1,3,0A2.1,2.1,0,0,1,429.37,210.31Z" transform="translate(263.61 -21.93)" fill="#b8a5b2"/>
        <rect id="trail-4" data-name="trail" x="125.21" y="405.83" width="6.52" height="598.27" rx="2.18" ry="2.18" transform="translate(799.72 93.71) rotate(45)" fill="#fff" opacity="0.29"/>
        <path d="M361.65,472a.22.22,0,0,1,.3.3l-1.22,1.69-.77-.78Z" transform="translate(263.61 -21.93)" fill="#412139"/>
        <path d="M340.67,489.52,344,486.4c1.1-1,2.18-2,3.25-3s2.09-1.89,3.08-2.75l2.8-2.43c1.74-1.49,3.22-2.72,4.26-3.56l1.08-.85,1.6,1.61c-.22.27-.5.64-.85,1.08-.84,1-2.08,2.51-3.57,4.25l-2.44,2.79c-.86,1-1.81,2-2.77,3.07s-2,2.15-3,3.24l-3.13,3.31c-1.2,1.22-2.38,2.45-3.54,3.66L337,493C338.2,491.89,339.44,490.71,340.67,489.52Z" transform="translate(263.61 -21.93)" fill="#3b0e19"/>
        <path d="M337,493l3.76,3.78-1.39,1.42-3.81-3.82Z" transform="translate(263.61 -21.93)" fill="#007000"/>
        <path d="M326.22,509.61a1.49,1.49,0,0,1-2.06-2.07l.26-.37,2.18,2.18Z" transform="translate(263.61 -21.93)" fill="#007000"/>
        <path d="M340.11,501.07a.83.83,0,0,0-.77-.22,2,2,0,0,0-1,.58l-7.07,7.46a2.71,2.71,0,0,1-3,.65l-1.22-.5-.48-.19a.49.49,0,0,1,.37-.9l1,.43.67.27a1.72,1.72,0,0,0,1.91-.41l7.06-7.46a3.09,3.09,0,0,1,1.49-.85,1.82,1.82,0,0,1,1.69.48.49.49,0,0,1-.7.69Z" transform="translate(263.61 -21.93)" fill="#007000"/>
        <path d="M326.32,508.19a.49.49,0,0,0,.26.64l.48.19-.47.33-2.18-2.18c.2-.3.53-.76,1-1.35.81-1.08,2-2.57,3.52-4.31.76-.85,1.57-1.8,2.47-2.75s1.84-2,2.84-3c.43-.44.88-.89,1.33-1.34l3.81,3.82c-.45.45-.9.89-1.34,1.32-1,1-2,1.94-3,2.83s-1.91,1.7-2.76,2.46c-1.73,1.48-3.21,2.67-4.29,3.48l-1-.43A.49.49,0,0,0,326.32,508.19Z" transform="translate(263.61 -21.93)" fill="green"/>
        <path d="M360,473.17h0l.77.78h0a1.05,1.05,0,0,1-.2.92l-.46.57-1.6-1.61.57-.46A1,1,0,0,1,360,473.17Z" transform="translate(263.61 -21.93)" fill="green"/>
        <rect id="trail-5" data-name="trail" x="121.13" y="166.93" width="2" height="427.69" rx="0.95" ry="0.95" transform="translate(202.84 714.45) rotate(-135)" fill="#fff" opacity="0.29"/>
        <path d="M289.57,211.7a.2.2,0,0,0,.24,0l.13-.07a.13.13,0,0,1,.11,0L267.9,234.34l-.43-.42,22.3-22.83-.23.37A.2.2,0,0,0,289.57,211.7Z" transform="translate(263.61 -21.93)" fill="#007000"/>
        <path d="M290.78,212.32a.13.13,0,0,1,0,.12l-.13.32a.13.13,0,0,0,.19.16l.47-.3L269,235.44l-.43-.42Z" transform="translate(263.61 -21.93)" fill="#007000"/>
        <path d="M290.08,211.67a.13.13,0,0,1,0,.14l-.11.43a.13.13,0,0,0,0,.12.13.13,0,0,0,.13,0l.46-.13a.13.13,0,0,1,.13,0s0,0,0,0L268.6,235l-.7-.68,22.15-22.67Z" transform="translate(263.61 -21.93)" fill="green"/>
        <path d="M267.15,233.86a.19.19,0,0,1,.27,0l.06.06.43.42.7.68.43.42.06.06a.19.19,0,0,1,0,.27l-.15.15L267,234Z" transform="translate(263.61 -21.93)" fill="#dfd5dc"/>
        <path d="M267.43,237.2l-.06-.06-1.56-1.52-.06-.06a.19.19,0,0,1,0-.27l.15-.15,2,1.91-.15.15A.19.19,0,0,1,267.43,237.2Z" transform="translate(263.61 -21.93)" fill="#dfd5dc"/>
        <path d="M266.65,237.87a.62.62,0,0,1-.87,0l-.68-.66a.62.62,0,0,1,0-.87l.72-.73,1.56,1.52Z" transform="translate(263.61 -21.93)" fill="#f2a5ab"/>
        <rect x="266.64" y="234.16" width="1.58" height="2.73" transform="translate(175.68 240.3) rotate(-45.67)" fill="#e9e3e8"/>
        <path d="M290.71,212.9a.13.13,0,0,1,0-.15l.13-.32a.13.13,0,0,0,0-.12s0,0,0,0a.13.13,0,0,0-.13,0l-.46.13a.13.13,0,0,1-.13,0,.13.13,0,0,1,0-.12l.11-.43a.13.13,0,0,0,0-.14h0a.13.13,0,0,0-.11,0l-.13.07a.2.2,0,0,1-.24,0,.2.2,0,0,1,0-.24l.23-.37,2.22-1.47-.07.12a.16.16,0,0,0,.21.22l.18-.09a.16.16,0,0,1,.23.19l-.08.25a.09.09,0,0,0,0,.09.08.08,0,0,0,.1,0l.22-.14.86-1.37-2.33,3.71-.47.3A.13.13,0,0,1,290.71,212.9Z" transform="translate(263.61 -21.93)" fill="#e1b887"/>
        <path d="M292.58,210.41a.08.08,0,0,1-.1,0,.09.09,0,0,1,0-.09l.08-.25a.16.16,0,0,0-.23-.19l-.18.09a.16.16,0,0,1-.21-.22l.07-.12h0l1.43-.95a.17.17,0,0,1,.24.24l-.86,1.37Z" transform="translate(263.61 -21.93)" fill="#412139"/>
        <path d="M324,451.72a7.17,7.17,0,0,1,6.31,12.87l-9,4.42L315,456.14Z" transform="translate(263.61 -21.93)" fill="#ffa898"/>
        <path d="M333.56,455a7.17,7.17,0,0,0-9.59-3.28l-64.56,31.67a.58.58,0,0,1-.83-.56l4.86-71.74a7.17,7.17,0,0,0-14.3-1l-4.86,71.74a14.91,14.91,0,0,0,21.45,14.39l64.56-31.66A7.17,7.17,0,0,0,333.56,455Z" transform="translate(263.61 -21.93)" fill="#ffa898"/>
        <path d="M249.78,496.84a16.87,16.87,0,0,1-7.41-15.1L247.23,410a9.08,9.08,0,1,1,18.11,1.23l-4.7,69.44L313,455a1.3,1.3,0,0,1,1.74.6l6.85,14a1.3,1.3,0,0,1-.6,1.74L266.57,498A16.87,16.87,0,0,1,249.78,496.84Z" transform="translate(263.61 -21.93)" fill="#c60909"/>
        <path d="M348.78,454.15c-1.32-10.76-5.7-10.84-11.84-9.87a2.31,2.31,0,0,1-2.61-2.78,26.55,26.55,0,0,0,.48-9.08,2.78,2.78,0,0,0-5.53.61,24.34,24.34,0,0,1-.31,7c-2.7,10.93-8.89,10.37-7.94,18.11.77,6.25,7.6,10.43,15.27,9.32S350.36,467,348.78,454.15Z" transform="translate(263.61 -21.93)" fill="#ffa898"/>
        <path d="M214.43,407.07a12.52,12.52,0,0,0,13.75-6l22.73-40.13a12.52,12.52,0,1,0-21.79-12.34L206.39,388.7a12.53,12.53,0,0,0,8,18.37Z" transform="translate(263.61 -21.93)" fill="#ffa898"/>
        <path d="M217.63,368.84l11.48-20.27a12.52,12.52,0,1,1,21.79,12.34l-14.7,25.95A62.78,62.78,0,0,1,224,376.74,67,67,0,0,1,217.63,368.84Z" transform="translate(263.61 -21.93)" fill="#f48989"/>
        <path d="M215.48,322.67c3.79-20,24.32-32.89,45.85-28.81a41.59,41.59,0,0,1,9.3,2.93,40.6,40.6,0,0,1,20.27,19.92,37.53,37.53,0,0,1,3.16,13.7c.32,6-1.11,11.61-2.22,17.49-1,5.39-1.6,11.11-3.19,16.38a34.31,34.31,0,0,1-18.9,21.39c-10.45,4.51-21.95-.63-30.61-6.68a60.62,60.62,0,0,1-19.83-23.64,54.31,54.31,0,0,1-4-31.68Q215.39,323.17,215.48,322.67Z" transform="translate(263.61 -21.93)" fill="#ffa898"/>
        <path d="M246.31,331.25c4.46-3.35,11-.94,11.29-.83a1.65,1.65,0,0,1,.92,2.11,1.59,1.59,0,0,1-2,1c-.05,0-5.27-1.92-8.35.39a1.53,1.53,0,0,1-2.21-.36A1.71,1.71,0,0,1,246.31,331.25Z" transform="translate(263.61 -21.93)" fill="#551f2c"/>
        <path d="M280.28,334.71c.3,0,7.28.16,10.2,4.91a1.71,1.71,0,0,1-.49,2.29,1.53,1.53,0,0,1-2.19-.47c-2-3.28-7.57-3.42-7.62-3.42a1.58,1.58,0,0,1-1.53-1.68A1.65,1.65,0,0,1,280.28,334.71Z" transform="translate(263.61 -21.93)" fill="#551f2c"/>
        <path d="M256.06,359.3l15.08,2.86a1.6,1.6,0,0,1,1.13.94,2.47,2.47,0,0,1,.11,1.71c-1.6,5.55-6.33,9.15-11,8.27l-.22,0c-4.67-.89-7.76-6-7.22-11.72a2.47,2.47,0,0,1,.73-1.55A1.6,1.6,0,0,1,256.06,359.3Z" transform="translate(263.61 -21.93)" fill="#c74038"/>
        <path d="M284.05,351.54a2.18,2.18,0,0,0-4.27-.81,1.19,1.19,0,1,1-2.33-.44,4.54,4.54,0,0,1,8.93,1.69,1.19,1.19,0,1,1-2.33-.44Z" transform="translate(263.61 -21.93)" fill="#532442"/>
        <path d="M250.9,340.73a4.5,4.5,0,0,1,3.63,5.22,1.19,1.19,0,1,1-2.33-.44,2.18,2.18,0,0,0-4.27-.81,1.19,1.19,0,1,1-2.33-.44A4.5,4.5,0,0,1,250.9,340.73Z" transform="translate(263.61 -21.93)" fill="#532442"/>
        <path d="M292.58,293.39s1.83,6,.22,10.9c-3.07,9.4-4.25,8.74-4.25,8.74C286.6,305,288.43,300.58,292.58,293.39Z" transform="translate(263.61 -21.93)" fill="#590000"/>
        <path d="M259.77,287.78c16.8,3.75,24.25,8.65,30.06,20.67,4.31,3.76,5.91,8,7.11,12.8,1.37,7.51-1.06,15.36-5.71,22.63,1.35-7.88-.37-14.56-1.46-20.88a.54.54,0,0,0-1-.12c-6.27,14.52-28.81,9.95-37.18,13.44a.54.54,0,0,1-.75-.42c-.79-5.28,1.73-11.19,5.69-17.24-12.08,3.25-19.26,9.24-26.36,13.63a.54.54,0,0,1-.48,0c-6.24-2.38-7.9-6.75-10.37-3.73-7.84,9.56-5,17.71,4.37,33.08-13.22-16.12-22.26-26.93-12.29-50.88C217.72,295.5,236.27,282.54,259.77,287.78Z" transform="translate(263.61 -21.93)" fill="#590000"/>
        <path d="M231.57,403c-2.62-6.43-6.89-12-16.63-21.59A165.84,165.84,0,0,1,237,389.8,24.57,24.57,0,0,1,231.57,403Z" transform="translate(263.61 -21.93)" fill="#ffa898"/>
        <path d="M170.5,378.12a9,9,0,0,1,6-3.57,75.21,75.21,0,0,1,31.9,3.49c1.27.2,2.59.48,3.93.78h0c.93.9,1.81,1.75,2.65,2.58,9.74,9.58,14,15.16,16.63,21.59A24.57,24.57,0,0,0,237,389.8c.06-.57.11-1.12.13-1.66a.57.57,0,0,1,0-.1,75.55,75.55,0,0,1,25.44,16.19A9.08,9.08,0,0,1,261.14,418a20.51,20.51,0,0,0-8.25,11.43c-3.35,11.84-10,28.89-18.43,42.22A119.3,119.3,0,0,0,217,519.48a41.55,41.55,0,0,1-.91,4.72,1.26,1.26,0,0,1-1.63.88l-.54-.18-61.85-21.31-.36-.12a1.26,1.26,0,0,1-.66-1.86c.61-1,1.16-1.77,1.57-2.34a52.93,52.93,0,0,1,4.72-5.67,54.23,54.23,0,0,0,14.82-42.69c-.42-4.33-.61-8.5-.8-12.54-.16-3.3-.3-6.42-.56-9.2-1-10.44-.61-19.42,1-26.84a20.55,20.55,0,0,0-2.06-14.39,9.1,9.1,0,0,1,.66-9.81Z" transform="translate(263.61 -21.93)" fill="#bc0000"/>
        <path d="M218.3,519.64a43.16,43.16,0,0,1-2,8.33l-.16.48c-3.26,9.48-6.34,18.43-13.31,23.66-7.76,5.83-18.89,6-35,.39C155,548.09,147,541.1,144,531.73c-4.64-14.6,4.64-29.12,7.59-33.22a54.21,54.21,0,0,1,4.83-5.81l.37-.4a1.59,1.59,0,0,1,1.69-.43l59.6,20.53a1.59,1.59,0,0,1,1,1.79C218.84,516,218.54,517.82,218.3,519.64Z" transform="translate(263.61 -21.93)" fill="#34344c"/>
        <rect x="192.39" y="509.91" width="8.65" height="8.52" rx="0.7" ry="0.7" transform="translate(-89.89 510.77) rotate(-70.99)" fill="#3d1006"/>
        <path d="M204.18,512.91a3,3,0,0,0,.15-.89l7.72,2.66-2.94,8.53-7.72-2.66a3,3,0,0,0,.43-.79Z" transform="translate(263.61 -21.93)" fill="#3d1006"/>
        <polygon points="439.3 489.78 420.14 483.18 425.08 475.34 442.23 481.24 439.3 489.78" fill="#3d1006"/>
        <path d="M153.43,504,149,502.53c.76-1.3,1.47-2.41,2.05-3.25l.54-.77c.56-.78,1.16-1.53,1.77-2.28.37-.45.74-.91,1.13-1.36h0l3.85,1.33Z" transform="translate(263.61 -21.93)" fill="#3d1006"/>
        <path d="M189.24,515.44a3,3,0,0,0-.15.89L179.45,513l2.94-8.53,9.64,3.32a3,3,0,0,0-.43.79Z" transform="translate(263.61 -21.93)" fill="#3d1006"/>
        <path d="M215.07,515.73,218.7,517c-.14.89-.28,1.78-.4,2.67s-.29,1.88-.48,2.81l-.15.7c-.2.93-.43,1.86-.69,2.77h0l-4.85-1.67Z" transform="translate(263.61 -21.93)" fill="#3d1006"/>
        <path d="M191.16,519.36l6.74,2.32a3.08,3.08,0,0,0,3.5-1.12,3,3,0,0,0,.43-.79l2.36-6.86a3,3,0,0,0,.15-.89,3.08,3.08,0,0,0-2.06-3l-6.74-2.32a3.08,3.08,0,0,0-3.5,1.12,3,3,0,0,0-.43.79l-2.36,6.86a3,3,0,0,0-.15.89A3.08,3.08,0,0,0,191.16,519.36Zm7.52.06-6.74-2.32a.7.7,0,0,1-.43-.89l2.36-6.86a.7.7,0,0,1,.89-.43l6.74,2.32a.7.7,0,0,1,.43.89L199.56,519A.7.7,0,0,1,198.68,519.42Z" transform="translate(263.61 -21.93)" fill="#bc6a11"/>
        <path d="M134.09,456.51a15.92,15.92,0,0,0,19.57,11.11L224.8,448a7.4,7.4,0,1,0-3.94-14.27l-71.14,19.63a1.1,1.1,0,0,1-1.25-1.6l36.43-64.18A7.4,7.4,0,0,0,172,380.26L135.6,444.44A15.86,15.86,0,0,0,134.09,456.51Z" transform="translate(263.61 -21.93)" fill="#ffa898"/>
        <path d="M135.42,463.2A17.71,17.71,0,0,1,134,443.53l36.43-64.18a9.25,9.25,0,1,1,16.09,9.14L151,451.08l56.14-15.49a1,1,0,0,1,1.24.7l4.39,15.9a1,1,0,0,1-.7,1.24l-57.89,16A17.71,17.71,0,0,1,135.42,463.2Z" transform="translate(263.61 -21.93)" fill="#c00"/>
        <path d="M244.9,436.77c-1.32-10.76-5.7-10.84-11.84-9.87a2.31,2.31,0,0,1-2.61-2.78,26.55,26.55,0,0,0,.48-9.08,2.78,2.78,0,0,0-5.53.61,24.34,24.34,0,0,1-.31,7c-2.7,10.93-8.89,10.37-7.94,18.11.77,6.25,7.6,10.43,15.27,9.32S246.47,449.66,244.9,436.77Z" transform="translate(263.61 -21.93)" fill="#ffa898"/>
        <path d="M250.15,703.54a10,10,0,0,1-19.66-3.74l2-10.68,19.66,3.74Z" transform="translate(263.61 -21.93)" fill="#fff"/>
        <path d="M190.65,531.41l58.4,28.12a42.29,42.29,0,0,1,23.13,45.91l-16.42,86.41a1.66,1.66,0,0,1-1.94,1.32l-1.64-.31-19.66-3.74-1.64-.31a1.66,1.66,0,0,1-1.32-1.94L246,600.46a15.56,15.56,0,0,0-8.52-16.89l-58.4-28.12" transform="translate(263.61 -21.93)" fill="#34344c"/>
        <path d="M229.18,699.46a.77.77,0,0,1,1.39.25c.26,1.1,1.08,2.27,3.31,2.69,4.34.82,4.8-8,16.88-6.73a9.21,9.21,0,0,1,4.33,1.62,30.45,30.45,0,0,1,11.84,18,5.08,5.08,0,0,1-1,4.29,3.85,3.85,0,0,1-3.69,1.48l-31.78-6a5.86,5.86,0,0,1-4.15-3.34,7.79,7.79,0,0,1-.26-5.89A29.46,29.46,0,0,1,229.18,699.46Z" transform="translate(263.61 -21.93)" fill="#3d1006"/>
        <path d="M55.79,564.27a10.29,10.29,0,1,1,16-12.94l7,8.69L62.82,573Z" transform="translate(263.61 -21.93)" fill="#fff"/>
        <path d="M159.63,630a25.08,25.08,0,0,1-44.43,13.14l-54-66.71a1.71,1.71,0,0,1,.25-2.41L62.82,573l16-12.94,1.34-1.08a1.71,1.71,0,0,1,2.41.25L133,621.49,142.71,529A13.72,13.72,0,0,1,170,531.86Z" transform="translate(263.61 -21.93)" fill="#34344c"/>
        <path d="M73,550.5a.79.79,0,0,1-1.12.93c-1-.53-2.5-.66-4.31.81C64,555.09,70.6,561.31,61.58,570a9.47,9.47,0,0,1-4.15,2.32,31.31,31.31,0,0,1-22-2.71A5.22,5.22,0,0,1,32.68,566,4,4,0,0,1,34,562.08l25.86-20.92a6,6,0,0,1,5.38-1,8,8,0,0,1,4.8,3.71A30.3,30.3,0,0,1,73,550.5Z" transform="translate(263.61 -21.93)" fill="#3d1006"/>
      </Svg>
    );
  }
}

export default ManFinance;
