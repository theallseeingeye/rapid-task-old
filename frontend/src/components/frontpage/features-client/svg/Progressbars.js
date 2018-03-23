import React, { Component } from 'react';
import styled from 'styled-components';
import theme from "../../../../global-styles/DefaultTheme";

const Svg = styled.svg`
  width: 100%;
`;

const TextStatus = styled.text`
  font-size: 0.3em;
  font-family: ${props => props.theme.Robotofont};
`;

const TextButton = styled.text`
  fill: white;
  font-size: 0.3em;
  font-family: ${props => props.theme.Robotofont};
`;

class ProgressBars extends Component {
    constructor(props) {
    super(props);

    this.color = theme.logoblue;
  }

  componentDidMount() {
    // Settings
    const logoBlue = this.color;
    const buttonSecondary = "green";
    const buttonClickTime = 1;
    const progressBarSpeed = 5;
    const buttonHoldTime = 3;
    const randomStart = Math.random()*20;

    const t1 = new TimelineLite({onComplete:function(){this.restart()}, delay: randomStart});

    // Preset the following before playing animation
    t1.set(this.blueBar, {attr:{width: 0}})
      .set([
        this.statusQuotePending,
        this.buttonProgress,
        this.buttonProgress2,
        this.statusQuoteApproved,
        this.statusJobScheduled,
        this.statusJobCompleted,
        this.statusJobBilled,
        this.statusJobPaid,
        this.approveQuote,
        this.scheduleJob,
        this.viewJobProgress,
        this.inspectionApproved,
        this.closeJob
      ], {autoAlpha:0})

      // Play animation
      .set(this.statusQuotePending, {autoAlpha:1}) //text appears
      .to(this.blueBar, progressBarSpeed, {attr:{width: 20}, transformOrigin:"50% 50%"}) // bar moves
      .set(this.buttonProgress, {autoAlpha:1})
      .set(this.approveQuote, {autoAlpha:1, width: 37})
      .set(this.buttonProgress, {fill:buttonSecondary, delay: buttonHoldTime}) // Button turns red
      .set(this.buttonProgress, {fill:logoBlue, delay: buttonClickTime}) // Button turns back to blue
      .set(this.approveQuote, {autoAlpha:0})
      .set(this.buttonProgress, {autoAlpha:0})
      .set(this.statusQuotePending, {autoAlpha:0})
      .set(this.statusQuoteApproved, {autoAlpha:1})
      .set(this.blueBar, {attr:{width: 20}, delay: 0.5})

      // Move to next task
      .to(this.blueBar, progressBarSpeed, {attr:{width: 40}, transformOrigin:"50% 50%"})
      .set(this.buttonProgress, {autoAlpha:1})
      .set(this.scheduleJob, {autoAlpha:1})
      .set(this.buttonProgress, {fill:buttonSecondary, delay: buttonHoldTime}) // Button turns red
      .set(this.buttonProgress, {fill:logoBlue, delay: buttonClickTime}) // Button turns back to blue
      .set(this.buttonProgress, {autoAlpha:0})
      .set(this.scheduleJob, {autoAlpha:0})
      .set(this.statusQuoteApproved, {autoAlpha:0})
      .set(this.statusJobScheduled, {autoAlpha:1})
      .set(this.blueBar, {attr:{width: 40}, delay: 0.5})

      // Move to next task
      .to(this.blueBar, progressBarSpeed, {attr:{width: 60}, transformOrigin:"50% 50%"})
      .set(this.buttonProgress2, {autoAlpha:1})
      .set(this.viewJobProgress, {autoAlpha:1})
      .set(this.buttonProgress2, {fill:buttonSecondary, delay: buttonHoldTime}) // Button turns red
      .set(this.buttonProgress2, {fill:logoBlue, delay: buttonClickTime}) // Button turns back to blue
      .set(this.buttonProgress2, {autoAlpha:0})
      .set(this.viewJobProgress, {autoAlpha:0})
      .set(this.statusJobScheduled, {autoAlpha:0})
      .set(this.statusJobCompleted, {autoAlpha:1})
      .set(this.blueBar, {attr:{width: 60}, delay: 0.5})

      // Move to next task
      .to(this.blueBar, progressBarSpeed, {attr:{width: 80}, transformOrigin:"50% 50%"})
      .set(this.buttonProgress, {autoAlpha:1})
      .set(this.inspectionApproved, {autoAlpha:1})
      .set(this.buttonProgress, {fill:buttonSecondary, delay: buttonHoldTime}) // Button turns red
      .set(this.buttonProgress, {fill:logoBlue, delay: buttonClickTime}) // Button turns back to blue
      .set(this.buttonProgress, {autoAlpha:0})
      .set(this.inspectionApproved, {autoAlpha:0})
      .set(this.statusJobCompleted, {autoAlpha:0})
      .set(this.statusJobBilled, {autoAlpha:1})
      .set(this.blueBar, {attr:{width: 80}})

      // Move to next task
      .to(this.blueBar, progressBarSpeed, {attr:{width: 100}, transformOrigin:"50% 50%"})
      .set(this.buttonProgress, {autoAlpha:1})
      .set(this.closeJob, {autoAlpha:1})
      .set(this.buttonProgress, {fill:buttonSecondary, delay: buttonHoldTime}) // Button turns red
      .set(this.buttonProgress, {fill:logoBlue, delay: buttonClickTime}) // Button turns back to blue
      .set(this.buttonProgress, {autoAlpha:0})
      .set(this.closeJob, {autoAlpha:0})
      .set(this.statusJobBilled, {autoAlpha:0})
      .set(this.statusJobPaid, {autoAlpha:1})
      .set(this.blueBar, {attr:{width: 100}, fill:buttonSecondary, delay: 3});
  }

  // Styled-Components require innerRef to be used in place of react "ref". Styled-Components clashes with ref.
  render() {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 12">
        <defs>
          <clipPath id="maskPath">
             <rect width="100" height="5" rx="2" ry="2" fill={this.color}/>
          </clipPath>
        </defs>

        <rect data-name="grayBar" width="100" height="5" rx="2" ry="2" fill="gray"/>
        <rect ref={x => {this.blueBar = x}} width="100" height="5" fill={this.color} clipPath="url(#maskPath)"/>
        <rect ref={x => {this.buttonProgress = x}} x="67" y="6" width="36" height="7" fill={this.color}/>
        <rect ref={x => {this.buttonProgress2 = x}} x="64" y="6" width="40" height="7" fill={this.color}/>

        {/*Status Text*/}
        <TextStatus innerRef={e => {this.statusQuotePending = e}} x="1" y="10" dy="0.1">
          Quote Pending
        </TextStatus>
        <TextStatus innerRef={e => {this.statusQuoteApproved = e}}  x="1" y="10" dy="0.1">
          Quote Approved
        </TextStatus>
        <TextStatus innerRef={e => {this.statusJobScheduled = e}} x="1" y="10" dy="0.1">
          Job Scheduled
        </TextStatus>
        <TextStatus innerRef={e => {this.statusJobCompleted = e}} x="1" y="10" dy="0.1">
          Job Completed
        </TextStatus>
        <TextStatus innerRef={e => {this.statusJobBilled = e}} x="1" y="10" dy="0.1">
          Job Paid
        </TextStatus>
        <TextStatus innerRef={e => {this.statusJobPaid = e}} x="1" y="10" dy="0.1">
          Job Closed
        </TextStatus>

        {/*Button Text*/}
        <TextButton innerRef={e => {this.approveQuote = e}} x="68" y="11" dy="0.1">
          Approve Quote
        </TextButton>
        <TextButton innerRef={e => {this.scheduleJob = e}} x="69" y="11" dy="0.1">
          Schedule Job
        </TextButton>
        <TextButton innerRef={e => {this.viewJobProgress = e}} x="65" y="11" dy="0.1">
          Pass Inspection
        </TextButton>
        <TextButton innerRef={e => {this.inspectionApproved = e}} x="75" y="11" dy="0.1">
          Pay Bill
        </TextButton>
        <TextButton innerRef={e => {this.closeJob = e}} x="73" y="11" dy="0.1">
          Close Job
        </TextButton>
      </Svg>
    );
  }
}

export default ProgressBars;

