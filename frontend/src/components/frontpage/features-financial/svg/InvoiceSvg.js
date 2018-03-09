import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollMagic from "../../../../../utils/jsfunctions/ScrollMagicGsapAdapter"; //Custom adapter that lets us use GSAP and ScrollMagic in React

const Svg = styled.svg`
  width: 35vw;
  position: fixed;
  top: 25vh; //Makes the invoice appear to the middle in fixed position
  max-width: 390px; 
  margin-left: 5px; 
  z-index: -5;
`;

class InvoiceSvg extends Component {

  componentDidMount() {
    const mainSVG = document.getElementById("InvoiceSvg");
    const mainDiv = document.getElementById("InvoiceActivateTrigger");
    const divEnd = document.getElementById("InvoiceEndTrigger");

    const layerId = [
      InvoicePage,
      InvoiceTitle,
      InvoiceHeader,
      InvoiceBox,
      InvoiceLine4A,
      InvoiceLine4B,
      InvoiceLine5A,
      InvoiceLine5B,
      InvoiceLine6A,
      InvoiceLine6B,
      InvoiceLine6C,
      InvoiceLine7A,
      InvoiceLine7B,
      InvoiceLine8A,
      InvoiceLine8B,
      InvoiceLine9A,
      InvoiceLine9B,
      InvoiceLine10,
      InvoiceFooter1,
      InvoiceFooter2,
      InvoiceStamp,
      InvoicePaid,
    ];

    const controller = new ScrollMagic.Controller();

    // To set each layer invisible before doing anything.
    TweenLite.set([layerId], {autoAlpha: 0});

    // Gsap's animations
    const tweenInvoicePage = TweenLite.to(InvoicePage, 0.01, {autoAlpha: 1});
    const tweenInvoiceTitle = TweenLite.to(InvoiceTitle, 0.01, {autoAlpha: 1});
    const tweenInvoiceHeader = TweenLite.to(InvoiceHeader, 0.01, {autoAlpha: 1});
    const tweenInvoiceBox = TweenLite.to(InvoiceBox, 0.01, {autoAlpha: 1});
    const tweenInvoiceLine4A = TweenLite.to(InvoiceLine4A, 0.01, {autoAlpha: 1});
    const tweenInvoiceLine4B = TweenLite.to(InvoiceLine4B, 0.01, {autoAlpha: 1});
    const tweenInvoiceLine5A = TweenLite.to(InvoiceLine5A, 0.01, {autoAlpha: 1});
    const tweenInvoiceLine5B = TweenLite.to(InvoiceLine5B, 0.01, {autoAlpha: 1});
    const tweenInvoiceLine6A = TweenLite.to(InvoiceLine6A, 0.01, {autoAlpha: 1});
    const tweenInvoiceLine6B = TweenLite.to(InvoiceLine6B, 0.01, {autoAlpha: 1});
    const tweenInvoiceLine6C = TweenLite.to(InvoiceLine6C, 0.01, {autoAlpha: 1});
    const tweenInvoiceLine7A = TweenLite.to(InvoiceLine7A, 0.01, {autoAlpha: 1});
    const tweenInvoiceLine7B = TweenLite.to(InvoiceLine7B, 0.01, {autoAlpha: 1});
    const tweenInvoiceLine8A = TweenLite.to(InvoiceLine8A, 0.01, {autoAlpha: 1});
    const tweenInvoiceLine8B = TweenLite.to(InvoiceLine8B, 0.01, {autoAlpha: 1});
    const tweenInvoiceLine9A = TweenLite.to(InvoiceLine9A, 0.01, {autoAlpha: 1});
    const tweenInvoiceLine9B = TweenLite.to(InvoiceLine9B, 0.01, {autoAlpha: 1});
    const tweenInvoiceLine10 = TweenLite.to(InvoiceLine10, 0.01, {autoAlpha: 1});
    const tweenInvoiceFooter1 = TweenLite.to(InvoiceFooter1, 0.01, {autoAlpha: 1});
    const tweenInvoiceFooter2 = TweenLite.to(InvoiceFooter2, 0.01, {autoAlpha: 1});
    const tweenInvoiceStamp = TweenLite.to(InvoiceStamp, 0.01, {autoAlpha: 1});
    const tweenInvoicePaid = TweenLite.to(InvoicePaid, 0.01, {autoAlpha: 1});

    // This is to hide all the svg layers.
    const tweenEnd = TweenLite.to(mainSVG, 0.01, {autoAlpha:0}); // Require this to fade out super fast to stop flashing below.


    // ScrollMagic Scenes.
    const sceneMain = new ScrollMagic.Scene({
      triggerElement: mainDiv,
      offset: 300
      })
      .setTween(tweenInvoicePage)
      .setPin(mainSVG)
      .addTo(controller);

    const scene = new ScrollMagic.Scene({
      triggerElement: InvoiceTitleTrigger,
      })
      .setTween(tweenInvoiceTitle)
      .setPin(mainSVG)
      .addTo(controller);

    const scene2 = new ScrollMagic.Scene({
      triggerElement: InvoiceHeaderTrigger,
      })
      .setTween(tweenInvoiceHeader)
      .setPin(mainSVG)
      .addTo(controller);

    const scene3 = new ScrollMagic.Scene({
      triggerElement: InvoiceBoxTrigger,
      })
      .setTween(tweenInvoiceBox)
      .setPin(mainSVG)
      .addTo(controller);

    const scene4 = new ScrollMagic.Scene({
      triggerElement: InvoiceLine4ATrigger,
      })
      .setTween(tweenInvoiceLine4A)
      .setPin(mainSVG)
      .addTo(controller);

    const scene6 = new ScrollMagic.Scene({
      triggerElement: InvoiceLine4BTrigger,
      })
      .setTween(tweenInvoiceLine4B)
      .setPin(mainSVG)
      .addTo(controller);

    const scene7 = new ScrollMagic.Scene({
      triggerElement: InvoiceLine5ATrigger,
      })
      .setTween(tweenInvoiceLine5A)
      .setPin(mainSVG)
      .addTo(controller);

    const scene8 = new ScrollMagic.Scene({
      triggerElement: InvoiceLine5BTrigger,
      })
      .setTween(tweenInvoiceLine5B)
      .setPin(mainSVG)
      .addTo(controller);

    const scene9 = new ScrollMagic.Scene({
      triggerElement: InvoiceLine6ATrigger,
      })
      .setTween(tweenInvoiceLine6A)
      .setPin(mainSVG)
      .addTo(controller);

    const scene10 = new ScrollMagic.Scene({
      triggerElement: InvoiceLine6BTrigger,
      })
      .setTween(tweenInvoiceLine6B)
      .setPin(mainSVG)
      .addTo(controller);

    const scene11 = new ScrollMagic.Scene({
      triggerElement: InvoiceLine6CTrigger,
      })
      .setTween(tweenInvoiceLine6C)
      .setPin(mainSVG)
      .addTo(controller);

    const scene12 = new ScrollMagic.Scene({
      triggerElement: InvoiceLine7ATrigger,
      })
      .setTween(tweenInvoiceLine7A)
      .setPin(mainSVG)
      .addTo(controller);

    const scene13 = new ScrollMagic.Scene({
      triggerElement: InvoiceLine7BTrigger,
      })
      .setTween(tweenInvoiceLine7B)
      .setPin(mainSVG)
      .addTo(controller);

    const scene14 = new ScrollMagic.Scene({
      triggerElement: InvoiceLine8ATrigger,
      })
      .setTween(tweenInvoiceLine8A)
      .setPin(mainSVG)
      .addTo(controller);

    const scene15 = new ScrollMagic.Scene({
      triggerElement: InvoiceLine8BTrigger,
      })
      .setTween(tweenInvoiceLine8B)
      .setPin(mainSVG)
      .addTo(controller);

    const scene16 = new ScrollMagic.Scene({
      triggerElement: InvoiceLine9ATrigger,
      })
      .setTween(tweenInvoiceLine9A)
      .setPin(mainSVG)
      .addTo(controller);

    const scene17 = new ScrollMagic.Scene({
      triggerElement: InvoiceLine9BTrigger,
      })
      .setTween(tweenInvoiceLine9B)
      .setPin(mainSVG)
      .addTo(controller);

    const scene18 = new ScrollMagic.Scene({
      triggerElement: InvoiceLine10Trigger,
      })
      .setTween(tweenInvoiceLine10)
      .setPin(mainSVG)
      .addTo(controller);

    const scene19 = new ScrollMagic.Scene({
      triggerElement: InvoiceFooter1Trigger,
      })
      .setTween(tweenInvoiceFooter1)
      .setPin(mainSVG)
      .addTo(controller);

    const scene20 = new ScrollMagic.Scene({
      triggerElement: InvoiceFooter2Trigger,
      })
      .setTween(tweenInvoiceFooter2)
      .setPin(mainSVG)
      .addTo(controller);

    const scene21 = new ScrollMagic.Scene({
      triggerElement: InvoiceStampTrigger,
      })
      .setTween(tweenInvoiceStamp)
      .setPin(mainSVG)
      .addTo(controller);

    const scene22 = new ScrollMagic.Scene({
      triggerElement: InvoicePaidTrigger,
      })
      .setTween(tweenInvoicePaid)
      .setPin(mainSVG)
      .addTo(controller);

    const END = new ScrollMagic.Scene({
      triggerElement: divEnd,
      })
      .setTween(tweenEnd)
      .setPin(mainSVG)
      .offset(700)
      .addTo(controller);
  }

  render() {
    return (
      <Svg id="InvoiceSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 498.54 669.62">
        <title>Rapid Task Invoice</title>
        <g id="InvoicePage">
          <rect x="6.26" y="6.26" width="492.28" height="663.36" rx="17.28" ry="17.28" fill="#231f20" opacity="0.5"/>
          <rect x="0.5" y="0.5" width="492.28" height="663.36" rx="13.83" ry="13.83" fill="#fff" stroke="#000" strokeMiterlimit="10"/>
        </g>
        <g id="InvoiceTitle">
          <path d="M536.52,224.56h6.74v30.18h-6.74Z" transform="translate(-374.46 -171.83)" fill="#2282a8"/>
          <path d="M571.79,224.56h6.74v30.18h-6.74l-14.38-18.91v18.91h-6.74V224.56H557L571.79,244Z" transform="translate(-374.46 -171.83)" fill="#2282a8"/>
          <path d="M597.09,243.77l7.69-19.21h7.3l-12.13,30.18h-5.7l-12.13-30.18h7.3Z" transform="translate(-374.46 -171.83)" fill="#2282a8"/>
          <path d="M640.36,250.57a16.44,16.44,0,0,1-22.54,0,15.79,15.79,0,0,1,0-22.24,16.44,16.44,0,0,1,22.54,0,15.79,15.79,0,0,1,0,22.24Zm-2.29-11.1a9.88,9.88,0,0,0-2.59-6.89,8.54,8.54,0,0,0-12.74,0,10.42,10.42,0,0,0,0,13.75,8.59,8.59,0,0,0,12.74,0A9.8,9.8,0,0,0,638.07,239.48Z" transform="translate(-374.46 -171.83)" fill="#2282a8"/>
          <path d="M650.63,224.56h6.74v30.18h-6.74Z" transform="translate(-374.46 -171.83)" fill="#2282a8"/>
          <path d="M678.66,248.78a9.94,9.94,0,0,0,8.12-3.93l4.32,4.45Q686,255.09,679,255.09a15.76,15.76,0,0,1-11.49-4.4,16,16,0,0,1,.09-22.32,15.49,15.49,0,0,1,11.25-4.49,16,16,0,0,1,12.44,5.66l-4.19,4.75a9.81,9.81,0,0,0-7.94-4,9.26,9.26,0,0,0-6.5,2.48,8.65,8.65,0,0,0-2.7,6.69,9.13,9.13,0,0,0,2.55,6.76A8.41,8.41,0,0,0,678.66,248.78Z" transform="translate(-374.46 -171.83)" fill="#2282a8"/>
          <path d="M718.16,224.56v6h-15v6.22h13.52v5.74H703.14v6.26h15.5v6H696.4V224.56Z" transform="translate(-374.46 -171.83)" fill="#2282a8"/>
        </g>
        <g id="InvoiceBox">
        <rect x="36.64" y="195.86" width="419.49" height="263.76" fill="#aad8e8"/>
        <rect x="508.81" y="309.68" width="224.07" height="407.97" transform="translate(760.04 -279.01) rotate(90)" fill="#fff"/>
        </g>
        <path id="InvoiceFooter2" d="M529.28,788.3H416.58a5.48,5.48,0,0,1-5.48-5.48h0a5.48,5.48,0,0,1,5.48-5.48h112.7a5.48,5.48,0,0,1,5.48,5.48h0A5.48,5.48,0,0,1,529.28,788.3Z" transform="translate(-374.46 -171.83)" fill="#aad8e8"/>
        <path id="InvoiceFooter1" d="M493.76,764.23H416.58a5.48,5.48,0,0,1-5.48-5.48h0a5.48,5.48,0,0,1,5.48-5.48h77.18a5.48,5.48,0,0,1,5.48,5.48h0A5.48,5.48,0,0,1,493.76,764.23Z" transform="translate(-374.46 -171.83)" fill="#aad8e8"/>
        <path id="InvoiceLine10" d="M790.75,687.54H678a5.48,5.48,0,0,1-5.48-5.48h0a5.48,5.48,0,0,1,5.48-5.48h112.7a5.48,5.48,0,0,1,5.48,5.48h0A5.48,5.48,0,0,1,790.75,687.54Z" transform="translate(-374.46 -171.83)" fill="#aad8e8"/>
        <path id="InvoiceLine9B" d="M790.75,664.5H713.57a5.48,5.48,0,0,1-5.48-5.48h0a5.48,5.48,0,0,1,5.48-5.48h77.18a5.48,5.48,0,0,1,5.48,5.48h0A5.48,5.48,0,0,1,790.75,664.5Z" transform="translate(-374.46 -171.83)" fill="#aad8e8"/>
        <path id="InvoiceLine9A" d="M691.67,664.5H653.48A5.48,5.48,0,0,1,648,659h0a5.48,5.48,0,0,1,5.48-5.48h38.19a5.48,5.48,0,0,1,5.48,5.48h0A5.48,5.48,0,0,1,691.67,664.5Z" transform="translate(-374.46 -171.83)" fill="#aad8e8"/>
        <path id="InvoiceLine8B" d="M790.75,577.88H749.52a5.48,5.48,0,0,1-5.48-5.48h0a5.48,5.48,0,0,1,5.48-5.48h41.23a5.48,5.48,0,0,1,5.48,5.48h0A5.48,5.48,0,0,1,790.75,577.88Z" transform="translate(-374.46 -171.83)" fill="#aad8e8"/>
        <path id="InvoiceLine8A" d="M586.15,577.88H447.27a5.48,5.48,0,0,1-5.48-5.48h0a5.48,5.48,0,0,1,5.48-5.48H586.15a5.48,5.48,0,0,1,5.48,5.48h0A5.48,5.48,0,0,1,586.15,577.88Z" transform="translate(-374.46 -171.83)" fill="#aad8e8"/>
        <path id="InvoiceLine7B" d="M790.75,543.32H749.52a5.48,5.48,0,0,1-5.48-5.48h0a5.48,5.48,0,0,1,5.48-5.48h41.23a5.48,5.48,0,0,1,5.48,5.48h0A5.48,5.48,0,0,1,790.75,543.32Z" transform="translate(-374.46 -171.83)" fill="#aad8e8"/>
        <path id="InvoiceLine7A" d="M515.22,543.32H447.27a5.48,5.48,0,0,1-5.48-5.48h0a5.48,5.48,0,0,1,5.48-5.48h67.95a5.48,5.48,0,0,1,5.48,5.48h0A5.48,5.48,0,0,1,515.22,543.32Z" transform="translate(-374.46 -171.83)" fill="#aad8e8"/>
        <path id="InvoiceLine6C" d="M790.75,508.75H749.52a5.48,5.48,0,0,1-5.48-5.48h0a5.48,5.48,0,0,1,5.48-5.48h41.23a5.48,5.48,0,0,1,5.48,5.48h0A5.48,5.48,0,0,1,790.75,508.75Z" transform="translate(-374.46 -171.83)" fill="#aad8e8"/>
        <path id="InvoiceLine6B" d="M648.46,508.75H571.27a5.48,5.48,0,0,1-5.48-5.48h0a5.48,5.48,0,0,1,5.48-5.48h77.18a5.48,5.48,0,0,1,5.48,5.48h0A5.48,5.48,0,0,1,648.46,508.75Z" transform="translate(-374.46 -171.83)" fill="#aad8e8"/>
        <path id="InvoiceLine6A" d="M548.2,508.75H447.27a5.48,5.48,0,0,1-5.48-5.48h0a5.48,5.48,0,0,1,5.48-5.48H548.2a5.48,5.48,0,0,1,5.48,5.48h0A5.48,5.48,0,0,1,548.2,508.75Z" transform="translate(-374.46 -171.83)" fill="#aad8e8"/>
        <path id="InvoiceLine5B" d="M790.75,474.19H749.52a5.48,5.48,0,0,1-5.48-5.48h0a5.48,5.48,0,0,1,5.48-5.48h41.23a5.48,5.48,0,0,1,5.48,5.48h0A5.48,5.48,0,0,1,790.75,474.19Z" transform="translate(-374.46 -171.83)" fill="#aad8e8"/>
        <path id="InvoiceLine5A" d="M581.37,474.19H447.27a5.48,5.48,0,0,1-5.48-5.48h0a5.48,5.48,0,0,1,5.48-5.48H581.37a5.48,5.48,0,0,1,5.48,5.48h0A5.48,5.48,0,0,1,581.37,474.19Z" transform="translate(-374.46 -171.83)" fill="#aad8e8"/>
        <path id="InvoiceLine4B" d="M790.75,439.62H749.52a5.48,5.48,0,0,1-5.48-5.48h0a5.48,5.48,0,0,1,5.48-5.48h41.23a5.48,5.48,0,0,1,5.48,5.48h0A5.48,5.48,0,0,1,790.75,439.62Z" transform="translate(-374.46 -171.83)" fill="#aad8e8"/>
        <path id="InvoiceLine4A" d="M560.32,439.62H447.27a5.48,5.48,0,0,1-5.48-5.48h0a5.48,5.48,0,0,1,5.48-5.48H560.32a5.48,5.48,0,0,1,5.48,5.48h0A5.48,5.48,0,0,1,560.32,439.62Z" transform="translate(-374.46 -171.83)" fill="#aad8e8"/>
        <g id="InvoiceHeader">
          <path id="InvoiceLine3" d="M683.39,337.26H570.34a5.48,5.48,0,0,1-5.48-5.48h0a5.48,5.48,0,0,1,5.48-5.48H683.39a5.48,5.48,0,0,1,5.48,5.48h0A5.48,5.48,0,0,1,683.39,337.26Z" transform="translate(-374.46 -171.83)" fill="#aad8e8"/>
          <path id="InvoiceLine2" d="M677.33,314.21H576.4a5.48,5.48,0,0,1-5.48-5.48h0a5.48,5.48,0,0,1,5.48-5.48H677.33a5.48,5.48,0,0,1,5.48,5.48h0A5.48,5.48,0,0,1,677.33,314.21Z" transform="translate(-374.46 -171.83)" fill="#aad8e8"/>
          <path id="InvoiceLine1" d="M697.62,291.17H556.11a5.48,5.48,0,0,1-5.48-5.48h0a5.48,5.48,0,0,1,5.48-5.48H697.62a5.48,5.48,0,0,1,5.48,5.48h0A5.48,5.48,0,0,1,697.62,291.17Z" transform="translate(-374.46 -171.83)" fill="#aad8e8"/>
         </g>
        <g id="InvoiceStamp">
          <path d="M767.64,684a44.68,44.68,0,1,0,44.68,44.68A44.73,44.73,0,0,0,767.64,684Zm0,85.58a40.9,40.9,0,1,1,40.9-40.9A41,41,0,0,1,767.64,769.57Z" transform="translate(-374.46 -171.83)" fill="#85cce8"/>
          <path d="M767.64,678.64a50,50,0,1,0,50,50A50.09,50.09,0,0,0,767.64,678.64Zm0,97.31a47.28,47.28,0,1,1,47.28-47.28A47.34,47.34,0,0,1,767.64,775.95Z" transform="translate(-374.46 -171.83)" fill="#85cce8"/>
          <circle cx="393.17" cy="556.83" r="36.18" fill="#85cce8"/>
          <polygon points="386.43 508.34 393.17 499.78 399.92 508.34 386.43 508.34" fill="#85cce8"/>
          <polygon points="374.11 511.74 378.41 501.72 387.14 508.25 374.11 511.74" fill="#85cce8"/>
          <polygon points="363.09 518.21 364.64 507.42 374.77 511.47 363.09 518.21" fill="#85cce8"/>
          <polygon points="354.12 527.32 352.83 516.49 363.66 517.78 354.12 527.32" fill="#85cce8"/>
          <polygon points="347.81 538.43 343.76 528.3 354.55 526.75 347.81 538.43" fill="#85cce8"/>
          <polygon points="344.59 550.8 338.06 542.07 348.08 537.77 344.59 550.8" fill="#85cce8"/>
          <polygon points="344.69 563.58 336.12 556.83 344.69 550.09 344.69 563.58" fill="#85cce8"/>
          <polygon points="348.08 575.9 338.06 571.6 344.59 562.87 348.08 575.9" fill="#85cce8"/>
          <polygon points="354.55 586.92 343.76 585.36 347.81 575.24 354.55 586.92" fill="#85cce8"/>
          <polygon points="363.66 595.89 352.83 597.18 354.12 586.35 363.66 595.89" fill="#85cce8"/>
          <polygon points="374.77 602.2 364.64 606.25 363.09 595.45 374.77 602.2" fill="#85cce8"/>
          <polygon points="387.14 605.41 378.41 611.95 374.11 601.92 387.14 605.41" fill="#85cce8"/>
          <polygon points="399.92 605.32 393.17 613.89 386.43 605.32 399.92 605.32" fill="#85cce8"/>
          <polygon points="412.24 601.92 407.94 611.95 399.21 605.41 412.24 601.92" fill="#85cce8"/>
          <polygon points="423.26 595.45 421.7 606.25 411.58 602.2 423.26 595.45" fill="#85cce8"/>
          <polygon points="432.23 586.35 433.52 597.18 422.69 595.89 432.23 586.35" fill="#85cce8"/>
          <polygon points="438.54 575.24 442.59 585.36 431.79 586.92 438.54 575.24" fill="#85cce8"/>
          <polygon points="441.76 562.87 448.29 571.6 438.26 575.9 441.76 562.87" fill="#85cce8"/>
          <polygon points="441.66 550.09 450.23 556.83 441.66 563.58 441.66 550.09" fill="#85cce8"/>
          <polygon points="438.26 537.77 448.29 542.07 441.76 550.8 438.26 537.77" fill="#85cce8"/>
          <polygon points="431.79 526.75 442.59 528.3 438.54 538.43 431.79 526.75" fill="#85cce8"/>
          <polygon points="422.69 517.78 433.52 516.49 432.23 527.32 422.69 517.78" fill="#85cce8"/>
          <polygon points="411.58 511.47 421.7 507.42 423.26 518.21 411.58 511.47" fill="#85cce8"/>
          <polygon points="399.21 508.25 407.94 501.72 412.24 511.74 399.21 508.25" fill="#85cce8"/>
        </g>
        <g id="InvoicePaid">
          <path id="PAIDOUTLINE" d="M590.9,640.87,445.17,617.78a15.4,15.4,0,0,0-17.6,12.79L420.69,674a15.4,15.4,0,0,0,12.79,17.6L579.2,714.68a15.4,15.4,0,0,0,17.6-12.79l6.88-43.41A15.4,15.4,0,0,0,590.9,640.87Zm2.24,60.44a11.7,11.7,0,0,1-13.35,9.7L434.06,687.92a11.7,11.7,0,0,1-9.7-13.35l6.88-43.41a11.7,11.7,0,0,1,13.35-9.7l145.72,23.09A11.7,11.7,0,0,1,600,657.9Z" transform="translate(-374.46 -171.83)" fill="#ff8e39"/>
          <path id="P" d="M482.89,645.42q3.25,3.78,2.2,10.38t-5.38,9.05q-4.33,2.45-12.24,1.2l-4.74-.75-1.58,9.94-8-1.26,5.65-35.64,12.59,2Q479.65,641.64,482.89,645.42Zm-8.06,13.1a6.94,6.94,0,0,0,2.17-4.46q.49-3.09-1.16-4.68t-5.58-2.22l-4.54-.72-1.9,12,5.35.85Q473.15,659.89,474.83,658.52Z" transform="translate(-374.46 -171.83)" fill="#ff8e39"/>
          <path id="A" d="M511,683.15l-2.09-8.22L494,672.55l-4.54,7.17L481,678.39l21-33.2,7.7,1.22,9.75,38.08Zm-6.79-26.74L498.1,666l8.92,1.41Z" transform="translate(-374.46 -171.83)" fill="#ff8e39"/>
          <path id="I" d="M529.27,649.5l8,1.26-5.65,35.64-8-1.26Z" transform="translate(-374.46 -171.83)" fill="#ff8e39"/>
          <path id="D" d="M572.48,661.13q4.36,5.47,3,13.79t-7.06,12.37q-5.74,4.06-15.94,2.44l-12.19-1.93L546,652.15l12.59,2Q568.12,655.66,572.48,661.13Zm-9.2,20.26q3.37-2.29,4.2-7.54t-1.65-8.55q-2.48-3.3-8.55-4.26l-4.44-.7L549.41,682l5,.8Q559.91,683.68,563.28,681.39Z" transform="translate(-374.46 -171.83)" fill="#ff8e39"/>
        </g>
      </Svg>
    );
  }
}
export default InvoiceSvg;