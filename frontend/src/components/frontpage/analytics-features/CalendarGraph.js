import React, { Component } from 'react';
import styled from 'styled-components';
import {TweenMax} from 'gsap';
import theme from "../../../global-styles/DefaultTheme";

class CalendarGraph extends Component {

  constructor(props) {
    super(props);

    this.color = theme.logoblue; // Colors the bars blue
  }

  render() {
    return (
      <div>
        <svg width="960" height="136">
            <g transform="translate(29.5,16)">
                <g fill="none" stroke="#ccc">
                    <rect width="17" height="17" x="0" y="17"/>
                    <rect width="17" height="17" x="0" y="34" fill={this.props.color}>
                        <title>1990-01-02: 2.1%</title>
                    </rect>
                    <rect width="17" height="17" x="0" y="51" fill={this.props.color}>
                        <title>1990-01-03: 0.0%</title>
                    </rect>
                    <rect width="17" height="17" x="0" y="68" fill={this.props.color}>
                        <title>1990-01-04: -0.5%</title>
                    </rect>
                    <rect width="17" height="17" x="0" y="85" fill={this.props.color}>
                        <title>1990-01-05: -0.8%</title>
                    </rect>
                    <rect width="17" height="17" x="0" y="102"/>
                    <rect width="17" height="17" x="17" y="0"/>
                    <rect width="17" height="17" x="17" y="17" fill={this.props.color}>
                        <title>1990-01-08: 0.8%</title>
                    </rect>
                    <rect width="17" height="17" x="17" y="34" fill={this.props.color}>
                        <title>1990-01-09: -1.0%</title>
                    </rect>
                    <rect width="17" height="17" x="17" y="51" fill={this.props.color}>
                        <title>1990-01-10: -0.6%</title>
                    </rect>
                    <rect width="17" height="17" x="17" y="68" fill={this.props.color}>
                        <title>1990-01-11: 0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="17" y="85" fill={this.props.color}>
                        <title>1990-01-12: -1.7%</title>
                    </rect>
                    <rect width="17" height="17" x="17" y="102"/>
                    <rect width="17" height="17" x="34" y="0"/>
                    <rect width="17" height="17" x="34" y="17" fill={this.props.color}>
                        <title>1990-01-15: -0.7%</title>
                    </rect>
                    <rect width="17" height="17" x="34" y="34" fill={this.props.color}>
                        <title>1990-01-16: 0.9%</title>
                    </rect>
                    <rect width="17" height="17" x="34" y="51" fill={this.props.color}>
                        <title>1990-01-17: -1.2%</title>
                    </rect>
                    <rect width="17" height="17" x="34" y="68" fill={this.props.color}>
                        <title>1990-01-18: 0.3%</title>
                    </rect>
                    <rect width="17" height="17" x="34" y="85" fill={this.props.color}>
                        <title>1990-01-19: 0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="34" y="102"/>
                    <rect width="17" height="17" x="51" y="0"/>
                    <rect width="17" height="17" x="51" y="17" fill={this.props.color}>
                        <title>1990-01-22: -2.9%</title>
                    </rect>
                    <rect width="17" height="17" x="51" y="34" fill={this.props.color}>
                        <title>1990-01-23: 0.6%</title>
                    </rect>
                    <rect width="17" height="17" x="51" y="51" fill={this.props.color}>
                        <title>1990-01-24: -0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="51" y="68" fill={this.props.color}>
                        <title>1990-01-25: -1.7%</title>
                    </rect>
                    <rect width="17" height="17" x="51" y="85" fill={this.props.color}>
                        <title>1990-01-26: -0.1%</title>
                    </rect>
                    <rect width="17" height="17" x="51" y="102"/>
                    <rect width="17" height="17" x="68" y="0"/>
                    <rect width="17" height="17" x="68" y="17" fill={this.props.color}>
                        <title>1990-01-29: -0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="68" y="34" fill={this.props.color}>
                        <title>1990-01-30: -0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="68" y="51" fill={this.props.color}>
                        <title>1990-01-31: 1.7%</title>
                    </rect>
                    <rect width="17" height="17" x="68" y="68" fill={this.props.color}>
                        <title>1990-02-01: -0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="68" y="85" fill={this.props.color}>
                        <title>1990-02-02: 0.6%</title>
                    </rect>
                    <rect width="17" height="17" x="68" y="102"/>
                    <rect width="17" height="17" x="85" y="0"/>
                    <rect width="17" height="17" x="85" y="17" fill={this.props.color}>
                        <title>1990-02-05: 0.8%</title>
                    </rect>
                    <rect width="17" height="17" x="85" y="34" fill={this.props.color}>
                        <title>1990-02-06: -0.6%</title>
                    </rect>
                    <rect width="17" height="17" x="85" y="51" fill={this.props.color}>
                        <title>1990-02-07: 1.3%</title>
                    </rect>
                    <rect width="17" height="17" x="85" y="68" fill={this.props.color}>
                        <title>1990-02-08: 0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="85" y="85" fill={this.props.color}>
                        <title>1990-02-09: 0.1%</title>
                    </rect>
                    <rect width="17" height="17" x="85" y="102"/>
                    <rect width="17" height="17" x="102" y="0"/>
                    <rect width="17" height="17" x="102" y="17" fill={this.props.color}>
                        <title>1990-02-12: -1.1%</title>
                    </rect>
                    <rect width="17" height="17" x="102" y="34" fill={this.props.color}>
                        <title>1990-02-13: 0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="102" y="51" fill={this.props.color}>
                        <title>1990-02-14: 0.0%</title>
                    </rect>
                    <rect width="17" height="17" x="102" y="68" fill={this.props.color}>
                        <title>1990-02-15: 1.0%</title>
                    </rect>
                    <rect width="17" height="17" x="102" y="85" fill={this.props.color}>
                        <title>1990-02-16: -0.5%</title>
                    </rect>
                    <rect width="17" height="17" x="102" y="102"/>
                    <rect width="17" height="17" x="119" y="0"/>
                    <rect width="17" height="17" x="119" y="17"/>
                    <rect width="17" height="17" x="119" y="34" fill={this.props.color}>
                        <title>1990-02-20: -0.9%</title>
                    </rect>
                    <rect width="17" height="17" x="119" y="51" fill={this.props.color}>
                        <title>1990-02-21: -0.5%</title>
                    </rect>
                    <rect width="17" height="17" x="119" y="68" fill={this.props.color}>
                        <title>1990-02-22: -0.3%</title>
                    </rect>
                    <rect width="17" height="17" x="119" y="85" fill={this.props.color}>
                        <title>1990-02-23: -0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="119" y="102"/>
                    <rect width="17" height="17" x="136" y="0"/>
                    <rect width="17" height="17" x="136" y="17" fill={this.props.color}>
                        <title>1990-02-26: 1.5%</title>
                    </rect>
                    <rect width="17" height="17" x="136" y="34" fill={this.props.color}>
                        <title>1990-02-27: 0.6%</title>
                    </rect>
                    <rect width="17" height="17" x="136" y="51" fill={this.props.color}>
                        <title>1990-02-28: 0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="136" y="68" fill={this.props.color}>
                        <title>1990-03-01: 0.3%</title>
                    </rect>
                    <rect width="17" height="17" x="136" y="85" fill={this.props.color}>
                        <title>1990-03-02: 0.9%</title>
                    </rect>
                    <rect width="17" height="17" x="136" y="102"/>
                    <rect width="17" height="17" x="153" y="0"/>
                    <rect width="17" height="17" x="153" y="17" fill={this.props.color}>
                        <title>1990-03-05: -0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="153" y="34" fill={this.props.color}>
                        <title>1990-03-06: 1.0%</title>
                    </rect>
                    <rect width="17" height="17" x="153" y="51" fill={this.props.color}>
                        <title>1990-03-07: -0.3%</title>
                    </rect>
                    <rect width="17" height="17" x="153" y="68" fill={this.props.color}>
                        <title>1990-03-08: 1.0%</title>
                    </rect>
                    <rect width="17" height="17" x="153" y="85" fill={this.props.color}>
                        <title>1990-03-09: -0.5%</title>
                    </rect>
                    <rect width="17" height="17" x="153" y="102"/>
                    <rect width="17" height="17" x="170" y="0"/>
                    <rect width="17" height="17" x="170" y="17" fill={this.props.color}>
                        <title>1990-03-12: 0.1%</title>
                    </rect>
                    <rect width="17" height="17" x="170" y="34" fill={this.props.color}>
                        <title>1990-03-13: -0.5%</title>
                    </rect>
                    <rect width="17" height="17" x="170" y="51" fill={this.props.color}>
                        <title>1990-03-14: 0.5%</title>
                    </rect>
                    <rect width="17" height="17" x="170" y="68" fill={this.props.color}>
                        <title>1990-03-15: 0.3%</title>
                    </rect>
                    <rect width="17" height="17" x="170" y="85" fill={this.props.color}>
                        <title>1990-03-16: 1.6%</title>
                    </rect>
                    <rect width="17" height="17" x="170" y="102"/>
                    <rect width="17" height="17" x="187" y="0"/>
                    <rect width="17" height="17" x="187" y="17" fill={this.props.color}>
                        <title>1990-03-19: 0.5%</title>
                    </rect>
                    <rect width="17" height="17" x="187" y="34" fill={this.props.color}>
                        <title>1990-03-20: -0.6%</title>
                    </rect>
                    <rect width="17" height="17" x="187" y="51" fill={this.props.color}>
                        <title>1990-03-21: -0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="187" y="68" fill={this.props.color}>
                        <title>1990-03-22: -1.2%</title>
                    </rect>
                    <rect width="17" height="17" x="187" y="85" fill={this.props.color}>
                        <title>1990-03-23: 0.3%</title>
                    </rect>
                    <rect width="17" height="17" x="187" y="102"/>
                    <rect width="17" height="17" x="204" y="0"/>
                    <rect width="17" height="17" x="204" y="17" fill={this.props.color}>
                        <title>1990-03-26: 0.1%</title>
                    </rect>
                    <rect width="17" height="17" x="204" y="34" fill={this.props.color}>
                        <title>1990-03-27: 1.1%</title>
                    </rect>
                    <rect width="17" height="17" x="204" y="51" fill={this.props.color}>
                        <title>1990-03-28: 0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="204" y="68" fill={this.props.color}>
                        <title>1990-03-29: -0.6%</title>
                    </rect>
                    <rect width="17" height="17" x="204" y="85" fill={this.props.color}>
                        <title>1990-03-30: -0.8%</title>
                    </rect>
                    <rect width="17" height="17" x="204" y="102"/>
                    <rect width="17" height="17" x="221" y="0"/>
                    <rect width="17" height="17" x="221" y="17" fill={this.props.color}>
                        <title>1990-04-02: -0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="221" y="34" fill={this.props.color}>
                        <title>1990-04-03: 1.3%</title>
                    </rect>
                    <rect width="17" height="17" x="221" y="51" fill={this.props.color}>
                        <title>1990-04-04: -0.6%</title>
                    </rect>
                    <rect width="17" height="17" x="221" y="68" fill={this.props.color}>
                        <title>1990-04-05: 0.1%</title>
                    </rect>
                    <rect width="17" height="17" x="221" y="85" fill={this.props.color}>
                        <title>1990-04-06: -0.1%</title>
                    </rect>
                    <rect width="17" height="17" x="221" y="102"/>
                    <rect width="17" height="17" x="238" y="0"/>
                    <rect width="17" height="17" x="238" y="17" fill={this.props.color}>
                        <title>1990-04-09: 0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="238" y="34" fill={this.props.color}>
                        <title>1990-04-10: 0.3%</title>
                    </rect>
                    <rect width="17" height="17" x="238" y="51" fill={this.props.color}>
                        <title>1990-04-11: 0.0%</title>
                    </rect>
                    <rect width="17" height="17" x="238" y="68" fill={this.props.color}>
                        <title>1990-04-12: 0.8%</title>
                    </rect>
                    <rect width="17" height="17" x="238" y="85"/>
                    <rect width="17" height="17" x="238" y="102"/>
                    <rect width="17" height="17" x="255" y="0"/>
                    <rect width="17" height="17" x="255" y="17" fill={this.props.color}>
                        <title>1990-04-16: 0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="255" y="34" fill={this.props.color}>
                        <title>1990-04-17: 0.1%</title>
                    </rect>
                    <rect width="17" height="17" x="255" y="51" fill={this.props.color}>
                        <title>1990-04-18: -1.2%</title>
                    </rect>
                    <rect width="17" height="17" x="255" y="68" fill={this.props.color}>
                        <title>1990-04-19: -0.8%</title>
                    </rect>
                    <rect width="17" height="17" x="255" y="85" fill={this.props.color}>
                        <title>1990-04-20: -0.6%</title>
                    </rect>
                    <rect width="17" height="17" x="255" y="102"/>
                    <rect width="17" height="17" x="272" y="0"/>
                    <rect width="17" height="17" x="272" y="17" fill={this.props.color}>
                        <title>1990-04-23: -0.9%</title>
                    </rect>
                    <rect width="17" height="17" x="272" y="34" fill={this.props.color}>
                        <title>1990-04-24: -0.5%</title>
                    </rect>
                    <rect width="17" height="17" x="272" y="51" fill={this.props.color}>
                        <title>1990-04-25: 0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="272" y="68" fill={this.props.color}>
                        <title>1990-04-26: 0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="272" y="85" fill={this.props.color}>
                        <title>1990-04-27: -1.2%</title>
                    </rect>
                    <rect width="17" height="17" x="272" y="102"/>
                    <rect width="17" height="17" x="289" y="0"/>
                    <rect width="17" height="17" x="289" y="17" fill={this.props.color}>
                        <title>1990-04-30: 0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="289" y="34" fill={this.props.color}>
                        <title>1990-05-01: 0.5%</title>
                    </rect>
                    <rect width="17" height="17" x="289" y="51" fill={this.props.color}>
                        <title>1990-05-02: 0.8%</title>
                    </rect>
                    <rect width="17" height="17" x="289" y="68" fill={this.props.color}>
                        <title>1990-05-03: 0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="289" y="85" fill={this.props.color}>
                        <title>1990-05-04: 0.5%</title>
                    </rect>
                    <rect width="17" height="17" x="289" y="102"/>
                    <rect width="17" height="17" x="306" y="0"/>
                    <rect width="17" height="17" x="306" y="17" fill={this.props.color}>
                        <title>1990-05-07: 0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="306" y="34" fill={this.props.color}>
                        <title>1990-05-08: 0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="306" y="51" fill={this.props.color}>
                        <title>1990-05-09: 0.0%</title>
                    </rect>
                    <rect width="17" height="17" x="306" y="68" fill={this.props.color}>
                        <title>1990-05-10: 0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="306" y="85" fill={this.props.color}>
                        <title>1990-05-11: 2.1%</title>
                    </rect>
                    <rect width="17" height="17" x="306" y="102"/>
                    <rect width="17" height="17" x="323" y="0"/>
                    <rect width="17" height="17" x="323" y="17" fill={this.props.color}>
                        <title>1990-05-14: 0.7%</title>
                    </rect>
                    <rect width="17" height="17" x="323" y="34" fill={this.props.color}>
                        <title>1990-05-15: 0.0%</title>
                    </rect>
                    <rect width="17" height="17" x="323" y="51" fill={this.props.color}>
                        <title>1990-05-16: -0.1%</title>
                    </rect>
                    <rect width="17" height="17" x="323" y="68" fill={this.props.color}>
                        <title>1990-05-17: 0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="323" y="85" fill={this.props.color}>
                        <title>1990-05-18: -0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="323" y="102"/>
                    <rect width="17" height="17" x="340" y="0"/>
                    <rect width="17" height="17" x="340" y="17" fill={this.props.color}>
                        <title>1990-05-21: 0.9%</title>
                    </rect>
                    <rect width="17" height="17" x="340" y="34" fill={this.props.color}>
                        <title>1990-05-22: 0.3%</title>
                    </rect>
                    <rect width="17" height="17" x="340" y="51" fill={this.props.color}>
                        <title>1990-05-23: 0.1%</title>
                    </rect>
                    <rect width="17" height="17" x="340" y="68" fill={this.props.color}>
                        <title>1990-05-24: 0.0%</title>
                    </rect>
                    <rect width="17" height="17" x="340" y="85" fill={this.props.color}>
                        <title>1990-05-25: -1.2%</title>
                    </rect>
                    <rect width="17" height="17" x="340" y="102"/>
                    <rect width="17" height="17" x="357" y="0"/>
                    <rect width="17" height="17" x="357" y="17"/>
                    <rect width="17" height="17" x="357" y="34" fill={this.props.color}>
                        <title>1990-05-29: 1.8%</title>
                    </rect>
                    <rect width="17" height="17" x="357" y="51" fill={this.props.color}>
                        <title>1990-05-30: 0.3%</title>
                    </rect>
                    <rect width="17" height="17" x="357" y="68" fill={this.props.color}>
                        <title>1990-05-31: -0.1%</title>
                    </rect>
                    <rect width="17" height="17" x="357" y="85" fill={this.props.color}>
                        <title>1990-06-01: 0.8%</title>
                    </rect>
                    <rect width="17" height="17" x="357" y="102"/>
                    <rect width="17" height="17" x="374" y="0"/>
                    <rect width="17" height="17" x="374" y="17" fill={this.props.color}>
                        <title>1990-06-04: 1.2%</title>
                    </rect>
                    <rect width="17" height="17" x="374" y="34" fill={this.props.color}>
                        <title>1990-06-05: -0.3%</title>
                    </rect>
                    <rect width="17" height="17" x="374" y="51" fill={this.props.color}>
                        <title>1990-06-06: -0.5%</title>
                    </rect>
                    <rect width="17" height="17" x="374" y="68" fill={this.props.color}>
                        <title>1990-06-07: -0.5%</title>
                    </rect>
                    <rect width="17" height="17" x="374" y="85" fill={this.props.color}>
                        <title>1990-06-08: -1.2%</title>
                    </rect>
                    <rect width="17" height="17" x="374" y="102"/>
                    <rect width="17" height="17" x="391" y="0"/>
                    <rect width="17" height="17" x="391" y="17" fill={this.props.color}>
                        <title>1990-06-11: 1.1%</title>
                    </rect>
                    <rect width="17" height="17" x="391" y="34" fill={this.props.color}>
                        <title>1990-06-12: 1.4%</title>
                    </rect>
                    <rect width="17" height="17" x="391" y="51" fill={this.props.color}>
                        <title>1990-06-13: -0.1%</title>
                    </rect>
                    <rect width="17" height="17" x="391" y="68" fill={this.props.color}>
                        <title>1990-06-14: -0.1%</title>
                    </rect>
                    <rect width="17" height="17" x="391" y="85" fill={this.props.color}>
                        <title>1990-06-15: 0.3%</title>
                    </rect>
                    <rect width="17" height="17" x="391" y="102"/>
                    <rect width="17" height="17" x="408" y="0"/>
                    <rect width="17" height="17" x="408" y="17" fill={this.props.color}>
                        <title>1990-06-18: -1.6%</title>
                    </rect>
                    <rect width="17" height="17" x="408" y="34" fill={this.props.color}>
                        <title>1990-06-19: 0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="408" y="51" fill={this.props.color}>
                        <title>1990-06-20: 0.1%</title>
                    </rect>
                    <rect width="17" height="17" x="408" y="68" fill={this.props.color}>
                        <title>1990-06-21: 0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="408" y="85" fill={this.props.color}>
                        <title>1990-06-22: -1.5%</title>
                    </rect>
                    <rect width="17" height="17" x="408" y="102"/>
                    <rect width="17" height="17" x="425" y="0"/>
                    <rect width="17" height="17" x="425" y="17" fill={this.props.color}>
                        <title>1990-06-25: -0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="425" y="34" fill={this.props.color}>
                        <title>1990-06-26: -0.1%</title>
                    </rect>
                    <rect width="17" height="17" x="425" y="51" fill={this.props.color}>
                        <title>1990-06-27: 0.7%</title>
                    </rect>
                    <rect width="17" height="17" x="425" y="68" fill={this.props.color}>
                        <title>1990-06-28: 0.6%</title>
                    </rect>
                    <rect width="17" height="17" x="425" y="85" fill={this.props.color}>
                        <title>1990-06-29: 0.1%</title>
                    </rect>
                    <rect width="17" height="17" x="425" y="102"/>
                    <rect width="17" height="17" x="442" y="0"/>
                    <rect width="17" height="17" x="442" y="17" fill={this.props.color}>
                        <title>1990-07-02: 0.6%</title>
                    </rect>
                    <rect width="17" height="17" x="442" y="34" fill={this.props.color}>
                        <title>1990-07-03: 0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="442" y="51"/>
                    <rect width="17" height="17" x="442" y="68" fill={this.props.color}>
                        <title>1990-07-05: -0.9%</title>
                    </rect>
                    <rect width="17" height="17" x="442" y="85" fill={this.props.color}>
                        <title>1990-07-06: 0.9%</title>
                    </rect>
                    <rect width="17" height="17" x="442" y="102"/>
                    <rect width="17" height="17" x="459" y="0"/>
                    <rect width="17" height="17" x="459" y="17" fill={this.props.color}>
                        <title>1990-07-09: 0.3%</title>
                    </rect>
                    <rect width="17" height="17" x="459" y="34" fill={this.props.color}>
                        <title>1990-07-10: -0.8%</title>
                    </rect>
                    <rect width="17" height="17" x="459" y="51" fill={this.props.color}>
                        <title>1990-07-11: 1.4%</title>
                    </rect>
                    <rect width="17" height="17" x="459" y="68" fill={this.props.color}>
                        <title>1990-07-12: 1.3%</title>
                    </rect>
                    <rect width="17" height="17" x="459" y="85" fill={this.props.color}>
                        <title>1990-07-13: 0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="459" y="102"/>
                    <rect width="17" height="17" x="476" y="0"/>
                    <rect width="17" height="17" x="476" y="17" fill={this.props.color}>
                        <title>1990-07-16: 0.7%</title>
                    </rect>
                    <rect width="17" height="17" x="476" y="34" fill={this.props.color}>
                        <title>1990-07-17: 0.0%</title>
                    </rect>
                    <rect width="17" height="17" x="476" y="51" fill={this.props.color}>
                        <title>1990-07-18: -0.6%</title>
                    </rect>
                    <rect width="17" height="17" x="476" y="68" fill={this.props.color}>
                        <title>1990-07-19: 0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="476" y="85" fill={this.props.color}>
                        <title>1990-07-20: -1.1%</title>
                    </rect>
                    <rect width="17" height="17" x="476" y="102"/>
                    <rect width="17" height="17" x="493" y="0"/>
                    <rect width="17" height="17" x="493" y="17" fill={this.props.color}>
                        <title>1990-07-23: -1.9%</title>
                    </rect>
                    <rect width="17" height="17" x="493" y="34" fill={this.props.color}>
                        <title>1990-07-24: 0.6%</title>
                    </rect>
                    <rect width="17" height="17" x="493" y="51" fill={this.props.color}>
                        <title>1990-07-25: 0.3%</title>
                    </rect>
                    <rect width="17" height="17" x="493" y="68" fill={this.props.color}>
                        <title>1990-07-26: -0.3%</title>
                    </rect>
                    <rect width="17" height="17" x="493" y="85" fill={this.props.color}>
                        <title>1990-07-27: -0.8%</title>
                    </rect>
                    <rect width="17" height="17" x="493" y="102"/>
                    <rect width="17" height="17" x="510" y="0"/>
                    <rect width="17" height="17" x="510" y="17" fill={this.props.color}>
                        <title>1990-07-30: 0.6%</title>
                    </rect>
                    <rect width="17" height="17" x="510" y="34" fill={this.props.color}>
                        <title>1990-07-31: -0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="510" y="51" fill={this.props.color}>
                        <title>1990-08-01: -0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="510" y="68" fill={this.props.color}>
                        <title>1990-08-02: -1.2%</title>
                    </rect>
                    <rect width="17" height="17" x="510" y="85" fill={this.props.color}>
                        <title>1990-08-03: -1.9%</title>
                    </rect>
                    <rect width="17" height="17" x="510" y="102"/>
                    <rect width="17" height="17" x="527" y="0"/>
                    <rect width="17" height="17" x="527" y="17" fill={this.props.color}>
                        <title>1990-08-06: -1.5%</title>
                    </rect>
                    <rect width="17" height="17" x="527" y="34" fill={this.props.color}>
                        <title>1990-08-07: -0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="527" y="51" fill={this.props.color}>
                        <title>1990-08-08: 0.9%</title>
                    </rect>
                    <rect width="17" height="17" x="527" y="68" fill={this.props.color}>
                        <title>1990-08-09: 0.9%</title>
                    </rect>
                    <rect width="17" height="17" x="527" y="85" fill={this.props.color}>
                        <title>1990-08-10: -1.5%</title>
                    </rect>
                    <rect width="17" height="17" x="527" y="102"/>
                    <rect width="17" height="17" x="544" y="0"/>
                    <rect width="17" height="17" x="544" y="17" fill={this.props.color}>
                        <title>1990-08-13: 1.1%</title>
                    </rect>
                    <rect width="17" height="17" x="544" y="34" fill={this.props.color}>
                        <title>1990-08-14: 0.0%</title>
                    </rect>
                    <rect width="17" height="17" x="544" y="51" fill={this.props.color}>
                        <title>1990-08-15: 0.0%</title>
                    </rect>
                    <rect width="17" height="17" x="544" y="68" fill={this.props.color}>
                        <title>1990-08-16: -2.4%</title>
                    </rect>
                    <rect width="17" height="17" x="544" y="85" fill={this.props.color}>
                        <title>1990-08-17: -1.3%</title>
                    </rect>
                    <rect width="17" height="17" x="544" y="102"/>
                    <rect width="17" height="17" x="561" y="0"/>
                    <rect width="17" height="17" x="561" y="17" fill={this.props.color}>
                        <title>1990-08-20: 0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="561" y="34" fill={this.props.color}>
                        <title>1990-08-21: -1.6%</title>
                    </rect>
                    <rect width="17" height="17" x="561" y="51" fill={this.props.color}>
                        <title>1990-08-22: -1.7%</title>
                    </rect>
                    <rect width="17" height="17" x="561" y="68" fill={this.props.color}>
                        <title>1990-08-23: -2.2%</title>
                    </rect>
                    <rect width="17" height="17" x="561" y="85" fill={this.props.color}>
                        <title>1990-08-24: 2.0%</title>
                    </rect>
                    <rect width="17" height="17" x="561" y="102"/>
                    <rect width="17" height="17" x="578" y="0"/>
                    <rect width="17" height="17" x="578" y="17" fill={this.props.color}>
                        <title>1990-08-27: 0.8%</title>
                    </rect>
                    <rect width="17" height="17" x="578" y="34" fill={this.props.color}>
                        <title>1990-08-28: 0.1%</title>
                    </rect>
                    <rect width="17" height="17" x="578" y="51" fill={this.props.color}>
                        <title>1990-08-29: 0.7%</title>
                    </rect>
                    <rect width="17" height="17" x="578" y="68" fill={this.props.color}>
                        <title>1990-08-30: -1.5%</title>
                    </rect>
                    <rect width="17" height="17" x="578" y="85" fill={this.props.color}>
                        <title>1990-08-31: 0.8%</title>
                    </rect>
                    <rect width="17" height="17" x="578" y="102"/>
                    <rect width="17" height="17" x="595" y="0"/>
                    <rect width="17" height="17" x="595" y="17"/>
                    <rect width="17" height="17" x="595" y="34" fill={this.props.color}>
                        <title>1990-09-04: 0.0%</title>
                    </rect>
                    <rect width="17" height="17" x="595" y="51" fill={this.props.color}>
                        <title>1990-09-05: 0.6%</title>
                    </rect>
                    <rect width="17" height="17" x="595" y="68" fill={this.props.color}>
                        <title>1990-09-06: -1.2%</title>
                    </rect>
                    <rect width="17" height="17" x="595" y="85" fill={this.props.color}>
                        <title>1990-09-07: 0.9%</title>
                    </rect>
                    <rect width="17" height="17" x="595" y="102"/>
                    <rect width="17" height="17" x="612" y="0"/>
                    <rect width="17" height="17" x="612" y="17" fill={this.props.color}>
                        <title>1990-09-10: -0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="612" y="34" fill={this.props.color}>
                        <title>1990-09-11: -0.1%</title>
                    </rect>
                    <rect width="17" height="17" x="612" y="51" fill={this.props.color}>
                        <title>1990-09-12: 0.5%</title>
                    </rect>
                    <rect width="17" height="17" x="612" y="68" fill={this.props.color}>
                        <title>1990-09-13: -1.6%</title>
                    </rect>
                    <rect width="17" height="17" x="612" y="85" fill={this.props.color}>
                        <title>1990-09-14: -0.7%</title>
                    </rect>
                    <rect width="17" height="17" x="612" y="102"/>
                    <rect width="17" height="17" x="629" y="0"/>
                    <rect width="17" height="17" x="629" y="17" fill={this.props.color}>
                        <title>1990-09-17: 0.1%</title>
                    </rect>
                    <rect width="17" height="17" x="629" y="34" fill={this.props.color}>
                        <title>1990-09-18: 0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="629" y="51" fill={this.props.color}>
                        <title>1990-09-19: -0.5%</title>
                    </rect>
                    <rect width="17" height="17" x="629" y="68" fill={this.props.color}>
                        <title>1990-09-20: -1.2%</title>
                    </rect>
                    <rect width="17" height="17" x="629" y="85" fill={this.props.color}>
                        <title>1990-09-21: -0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="629" y="102"/>
                    <rect width="17" height="17" x="646" y="0"/>
                    <rect width="17" height="17" x="646" y="17" fill={this.props.color}>
                        <title>1990-09-24: -1.8%</title>
                    </rect>
                    <rect width="17" height="17" x="646" y="34" fill={this.props.color}>
                        <title>1990-09-25: 1.3%</title>
                    </rect>
                    <rect width="17" height="17" x="646" y="51" fill={this.props.color}>
                        <title>1990-09-26: -1.0%</title>
                    </rect>
                    <rect width="17" height="17" x="646" y="68" fill={this.props.color}>
                        <title>1990-09-27: -1.3%</title>
                    </rect>
                    <rect width="17" height="17" x="646" y="85" fill={this.props.color}>
                        <title>1990-09-28: 1.0%</title>
                    </rect>
                    <rect width="17" height="17" x="646" y="102"/>
                    <rect width="17" height="17" x="663" y="0"/>
                    <rect width="17" height="17" x="663" y="17" fill={this.props.color}>
                        <title>1990-10-01: 2.6%</title>
                    </rect>
                    <rect width="17" height="17" x="663" y="34" fill={this.props.color}>
                        <title>1990-10-02: -0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="663" y="51" fill={this.props.color}>
                        <title>1990-10-03: -0.6%</title>
                    </rect>
                    <rect width="17" height="17" x="663" y="68" fill={this.props.color}>
                        <title>1990-10-04: 1.1%</title>
                    </rect>
                    <rect width="17" height="17" x="663" y="85" fill={this.props.color}>
                        <title>1990-10-05: -0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="663" y="102"/>
                    <rect width="17" height="17" x="680" y="0"/>
                    <rect width="17" height="17" x="680" y="17" fill={this.props.color}>
                        <title>1990-10-08: 0.5%</title>
                    </rect>
                    <rect width="17" height="17" x="680" y="34" fill={this.props.color}>
                        <title>1990-10-09: -2.7%</title>
                    </rect>
                    <rect width="17" height="17" x="680" y="51" fill={this.props.color}>
                        <title>1990-10-10: -1.5%</title>
                    </rect>
                    <rect width="17" height="17" x="680" y="68" fill={this.props.color}>
                        <title>1990-10-11: -1.8%</title>
                    </rect>
                    <rect width="17" height="17" x="680" y="85" fill={this.props.color}>
                        <title>1990-10-12: 1.4%</title>
                    </rect>
                    <rect width="17" height="17" x="680" y="102"/>
                    <rect width="17" height="17" x="697" y="0"/>
                    <rect width="17" height="17" x="697" y="17" fill={this.props.color}>
                        <title>1990-10-15: 0.8%</title>
                    </rect>
                    <rect width="17" height="17" x="697" y="34" fill={this.props.color}>
                        <title>1990-10-16: -1.5%</title>
                    </rect>
                    <rect width="17" height="17" x="697" y="51" fill={this.props.color}>
                        <title>1990-10-17: 0.3%</title>
                    </rect>
                    <rect width="17" height="17" x="697" y="68" fill={this.props.color}>
                        <title>1990-10-18: 2.5%</title>
                    </rect>
                    <rect width="17" height="17" x="697" y="85" fill={this.props.color}>
                        <title>1990-10-19: 2.7%</title>
                    </rect>
                    <rect width="17" height="17" x="697" y="102"/>
                    <rect width="17" height="17" x="714" y="0"/>
                    <rect width="17" height="17" x="714" y="17" fill={this.props.color}>
                        <title>1990-10-22: -0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="714" y="34" fill={this.props.color}>
                        <title>1990-10-23: -0.9%</title>
                    </rect>
                    <rect width="17" height="17" x="714" y="51" fill={this.props.color}>
                        <title>1990-10-24: 0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="714" y="68" fill={this.props.color}>
                        <title>1990-10-25: -0.8%</title>
                    </rect>
                    <rect width="17" height="17" x="714" y="85" fill={this.props.color}>
                        <title>1990-10-26: -1.9%</title>
                    </rect>
                    <rect width="17" height="17" x="714" y="102"/>
                    <rect width="17" height="17" x="731" y="0"/>
                    <rect width="17" height="17" x="731" y="17" fill={this.props.color}>
                        <title>1990-10-29: -0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="731" y="34" fill={this.props.color}>
                        <title>1990-10-30: 0.7%</title>
                    </rect>
                    <rect width="17" height="17" x="731" y="51" fill={this.props.color}>
                        <title>1990-10-31: -0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="731" y="68" fill={this.props.color}>
                        <title>1990-11-01: 0.5%</title>
                    </rect>
                    <rect width="17" height="17" x="731" y="85" fill={this.props.color}>
                        <title>1990-11-02: 1.5%</title>
                    </rect>
                    <rect width="17" height="17" x="731" y="102"/>
                    <rect width="17" height="17" x="748" y="0"/>
                    <rect width="17" height="17" x="748" y="17" fill={this.props.color}>
                        <title>1990-11-05: 0.5%</title>
                    </rect>
                    <rect width="17" height="17" x="748" y="34" fill={this.props.color}>
                        <title>1990-11-06: -0.7%</title>
                    </rect>
                    <rect width="17" height="17" x="748" y="51" fill={this.props.color}>
                        <title>1990-11-07: -1.8%</title>
                    </rect>
                    <rect width="17" height="17" x="748" y="68" fill={this.props.color}>
                        <title>1990-11-08: 0.1%</title>
                    </rect>
                    <rect width="17" height="17" x="748" y="85" fill={this.props.color}>
                        <title>1990-11-09: 1.8%</title>
                    </rect>
                    <rect width="17" height="17" x="748" y="102"/>
                    <rect width="17" height="17" x="765" y="0"/>
                    <rect width="17" height="17" x="765" y="17" fill={this.props.color}>
                        <title>1990-11-12: 2.0%</title>
                    </rect>
                    <rect width="17" height="17" x="765" y="34" fill={this.props.color}>
                        <title>1990-11-13: -0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="765" y="51" fill={this.props.color}>
                        <title>1990-11-14: 1.0%</title>
                    </rect>
                    <rect width="17" height="17" x="765" y="68" fill={this.props.color}>
                        <title>1990-11-15: -0.6%</title>
                    </rect>
                    <rect width="17" height="17" x="765" y="85" fill={this.props.color}>
                        <title>1990-11-16: 0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="765" y="102"/>
                    <rect width="17" height="17" x="782" y="0"/>
                    <rect width="17" height="17" x="782" y="17" fill={this.props.color}>
                        <title>1990-11-19: 0.6%</title>
                    </rect>
                    <rect width="17" height="17" x="782" y="34" fill={this.props.color}>
                        <title>1990-11-20: -1.4%</title>
                    </rect>
                    <rect width="17" height="17" x="782" y="51" fill={this.props.color}>
                        <title>1990-11-21: 0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="782" y="68"/>
                    <rect width="17" height="17" x="782" y="85" fill={this.props.color}>
                        <title>1990-11-23: -0.5%</title>
                    </rect>
                    <rect width="17" height="17" x="782" y="102"/>
                    <rect width="17" height="17" x="799" y="0"/>
                    <rect width="17" height="17" x="799" y="17" fill={this.props.color}>
                        <title>1990-11-26: 0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="799" y="34" fill={this.props.color}>
                        <title>1990-11-27: 0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="799" y="51" fill={this.props.color}>
                        <title>1990-11-28: -0.3%</title>
                    </rect>
                    <rect width="17" height="17" x="799" y="68" fill={this.props.color}>
                        <title>1990-11-29: -0.6%</title>
                    </rect>
                    <rect width="17" height="17" x="799" y="85" fill={this.props.color}>
                        <title>1990-11-30: 1.6%</title>
                    </rect>
                    <rect width="17" height="17" x="799" y="102"/>
                    <rect width="17" height="17" x="816" y="0"/>
                    <rect width="17" height="17" x="816" y="17" fill={this.props.color}>
                        <title>1990-12-03: 0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="816" y="34" fill={this.props.color}>
                        <title>1990-12-04: 0.5%</title>
                    </rect>
                    <rect width="17" height="17" x="816" y="51" fill={this.props.color}>
                        <title>1990-12-05: 1.2%</title>
                    </rect>
                    <rect width="17" height="17" x="816" y="68" fill={this.props.color}>
                        <title>1990-12-06: -0.3%</title>
                    </rect>
                    <rect width="17" height="17" x="816" y="85" fill={this.props.color}>
                        <title>1990-12-07: -0.5%</title>
                    </rect>
                    <rect width="17" height="17" x="816" y="102"/>
                    <rect width="17" height="17" x="833" y="0"/>
                    <rect width="17" height="17" x="833" y="17" fill={this.props.color}>
                        <title>1990-12-10: 0.3%</title>
                    </rect>
                    <rect width="17" height="17" x="833" y="34" fill={this.props.color}>
                        <title>1990-12-11: -0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="833" y="51" fill={this.props.color}>
                        <title>1990-12-12: 1.4%</title>
                    </rect>
                    <rect width="17" height="17" x="833" y="68" fill={this.props.color}>
                        <title>1990-12-13: -0.3%</title>
                    </rect>
                    <rect width="17" height="17" x="833" y="85" fill={this.props.color}>
                        <title>1990-12-14: -0.8%</title>
                    </rect>
                    <rect width="17" height="17" x="833" y="102"/>
                    <rect width="17" height="17" x="850" y="0"/>
                    <rect width="17" height="17" x="850" y="17" fill={this.props.color}>
                        <title>1990-12-17: 0.0%</title>
                    </rect>
                    <rect width="17" height="17" x="850" y="34" fill={this.props.color}>
                        <title>1990-12-18: 1.3%</title>
                    </rect>
                    <rect width="17" height="17" x="850" y="51" fill={this.props.color}>
                        <title>1990-12-19: 0.0%</title>
                    </rect>
                    <rect width="17" height="17" x="850" y="68" fill={this.props.color}>
                        <title>1990-12-20: 0.1%</title>
                    </rect>
                    <rect width="17" height="17" x="850" y="85" fill={this.props.color}>
                        <title>1990-12-21: 0.2%</title>
                    </rect>
                    <rect width="17" height="17" x="850" y="102"/>
                    <rect width="17" height="17" x="867" y="0"/>
                    <rect width="17" height="17" x="867" y="17" fill={this.props.color}>
                        <title>1990-12-24: -0.5%</title>
                    </rect>
                    <rect width="17" height="17" x="867" y="34"/>
                    <rect width="17" height="17" x="867" y="51" fill={this.props.color}>
                        <title>1990-12-26: 0.6%</title>
                    </rect>
                    <rect width="17" height="17" x="867" y="68" fill={this.props.color}>
                        <title>1990-12-27: -0.4%</title>
                    </rect>
                    <rect width="17" height="17" x="867" y="85" fill={this.props.color}>
                        <title>1990-12-28: 0.1%</title>
                    </rect>
                    <rect width="17" height="17" x="867" y="102"/>
                    <rect width="17" height="17" x="884" y="0"/>
                    <rect width="17" height="17" x="884" y="17" fill={this.props.color}>
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
        </svg>
      </div>
    )
  }
}

export default CalendarGraph;