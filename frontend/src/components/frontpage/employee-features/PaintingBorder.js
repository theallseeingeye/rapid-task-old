import React, { Component } from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  width: 100%;
  margin-top: -10vh; // Makes the paint on above element
  position: absolute; // Won't conflict position of other divs it needs to overlay on.
  fill: ${props => props.theme.logoblue};

`;

class PaintingBorder extends Component {
  render() {
    return (
      <Svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 596.97 122.43" width="100%" height="15%" preserveAspectRatio="none">
        <title>Untitled-1</title>
        <path d="M145.21,96.93l.93,0a10.3,10.3,0,0,1-1.92.9,10.12,10.12,0,0,1-1,.3l-2.79,1.22c-3.89,1.68-8.2,3.45-12.68,5.28,5.34.07,10.63.09,15.35,0l3.41-.06h.2c.07,0,.14,0,.15,0l.14.14c.1.09.17.18.28.26l.56.48c.7.62,1.23,1.16,1.63,1.53.81.75,1.08.79,1.46-.39s.91-3.37,2.38-7.08c1.06-2.19,2.45-4.92,4.31-8.24a9,9,0,0,0-.18,2.73,16.16,16.16,0,0,0,.38,2.67,19.42,19.42,0,0,0,1.95,5A26.55,26.55,0,0,0,167.1,110a28,28,0,0,0,4.54,2.84,27.32,27.32,0,0,0,4.23,1.8c2.7.78,4.61.8,4.88-.09,3-.89,6.34-1.86,9.45-2.68,1.54-.39,3.19-.88,4.79-1.3l4.77-1.25-13.07,2.81,13.07-2.81c2.9-.84,5.78-1.56,8.62-2.36l4.24-1.21c1.41-.39,2.82-.76,4.17-1.2l4.1-1.22c.68-.2,1.37-.38,2-.59l2-.64c2.61-.84,5.3-1.59,7.76-2.43,10.11-3.22,19.48-6.21,28.58-8.76.93-.06,2.27-.09,4.08-.08,1,0,1.9,0,3.06.12l1.66.11,1.78.16c4.78.44,10.31,1.34,16,2.4,3.71.61,9.13,1.29,15.61,2.15s14,1.88,21.71,3,15.7,2.37,23.07,3.56,14.26,2.33,19.64,3.36c1.49.27,3.21.49,4.82.7.81.11,1.74.18,2.61.27l1.33.12.65.06.39.06a10,10,0,0,0-1.67-.38l-1.55-.29-1.27-.24-1.05-.23c-1.35-.31-2.79-.6-5.31-1.26l10-3.16c2.21-1.06,4.1-2.07,6-3A83,83,0,0,1,393.25,94c-1-2.2-1-4.29-3.88-7.34,1.19.53,2.4,1,3.5,1.58a10.84,10.84,0,0,1,7.21-4.88c2.68-.67,5.18-.74,7-1.6a3.07,3.07,0,0,0,0,3.32,5,5,0,0,0,1,1c.39.3.82.56,1.18.83,0-.75,0-1.52,0-2.27.79.47,1.65.82,2.42,1.23l.6.27.88.38,2.31,1c3.11,1.25,6.3,2.4,9.47,3.49,6.38,2.15,12.63,4.12,17.88,6.4a4.46,4.46,0,0,1,2.41,3.46l11.16,1.64c-2.36,3.76,7.26,6.78,1.35,7.47,4.79-.94,8.87.05,13,.95s8.16,1.75,12.78.53c3.39,1.08,6.88,2,10.38,3l5.34,1.35,2.69.65,3.13.72,3.15.69,3.24.67L519,120c2.53.52,5.08.78,7.6,1.15l3.77.5,3.74.32a107.42,107.42,0,0,0,28.15-.9c1.08-.2,2.16-.38,3.21-.62l3.11-.8c.51-.14,1-.26,1.53-.41l1.49-.5c1-.34,2-.64,2.94-1a51.8,51.8,0,0,0,10.8-5.59l-1.74-1a22.56,22.56,0,0,0,5.66-6A34.29,34.29,0,0,0,593,97.16a65.59,65.59,0,0,0,2.1-8.84A72.69,72.69,0,0,1,597,79.68a91.19,91.19,0,0,0-8.5-18.08c-3.63-5.55-7.58-9.92-12.53-12.38a38.6,38.6,0,0,0-5.26-9.54c-.47-.65-.89-1.28-1.32-1.91-.2-.62-.39-1.29-.58-2,0-.18-.1-.33-.14-.53l-.1-.66-.17-1.37A19.54,19.54,0,0,1,568.3,30l0-.88c0-.31.09-.68.14-1q.17-1,.4-2.13l.12-.54.19-.62q.2-.63.44-1.26t.5-1.27a11.13,11.13,0,0,1,.63-1.32,31.72,31.72,0,0,1,1.71-2.78,21.62,21.62,0,0,1,2.27-2.71c-1.3.45-1.92.39-2-.17s.36-1.6,1.29-2.9a20.9,20.9,0,0,1,4.1-4c.46-.36.85-.63,1.27-.9s.86-.55,1.3-.82c.88-.53,1.85-1,2.75-1.48C585,4.48,586.6,3.83,588,3.3c.11,0,.13-.06.15-.08l.07-.07.13-.13.23-.27a2.5,2.5,0,0,0,.33-.52c.31-.7.06-1.37-1.24-2.06a36.69,36.69,0,0,0-4.4-.15,13.78,13.78,0,0,0-2.16.17q-1.19.19-2.31.44t-2.17.56l-1,.32c-.33.11-.74.28-1.09.43a35.66,35.66,0,0,0-4.07,2,24.9,24.9,0,0,0-3.49,2.44,36.32,36.32,0,0,0-3,2.7,36.89,36.89,0,0,0-4.26,5.53A48.87,48.87,0,0,0,557,19.87l-.31.68-.24.58-.47,1.19-1,2.53-1.76,5L552.77,31l-.45,1.21-.49,1.3-.26.69c0,.11-.09.25-.13.34l-.12.25c.5-.09,1-.16,1.51-.27l-.35,2.35-.08.59,0,.29a.3.3,0,0,1,0,.07l-.14.24-.53.94c-.33.61-.63,1.18-.9,1.72-.55,1.08-1,2-1.52,2.88a19.3,19.3,0,0,1-2.93,4.11,7.89,7.89,0,0,1-4.09,2.36,11.65,11.65,0,0,1-5.26-.41,2.18,2.18,0,0,1-1.73,1.93,6.37,6.37,0,0,1-3-.17c-1-.27-2-.64-3-.95a14.07,14.07,0,0,0-1.46-.38c-.24,0-.49-.08-.74-.11l-.39,0-1-.22q-1.13-.18-2.3-.33l-1.17-.15c-.16,0-.47-.08-.74-.13l-.82-.16L514,47.79l-13.5-2.52c-9-1.69-17.94-3.19-26-4.36-4-.16-5.19-4.65-7.41-7.8-1.79-.44-3.61-1-5.47-1.53s-3.75-1.25-5.67-1.94c-3.84-1.37-7.78-2.94-11.78-4.54l-3-1.19-3.86-1.5-2.44-.91-2.43-.79c-1.63-.54-3.24-1-4.85-1.39a85.32,85.32,0,0,0-18.45-2.71,6.87,6.87,0,0,1,1.1.32,102.19,102.19,0,0,1-16.06-3c-4.91-1.17-9.74-2.14-14.94-1.63.08,1.27-1.51,1.4-2.26,2.08-.26-.74-1.36-1.05-3.12-1.05l-.69,0-.64,0q-.5,0-1.06.14c-.72.13-1.66.3-2.66.53-4,.91-10.16,2.42-16.58,3.92-12.88,3-26.82,6.1-28.32,4.38a22.5,22.5,0,0,1-2.93.59c-9.53-1.63-19.33-5.4-29.38-8.37a101.76,101.76,0,0,0-15.24-3.46,59.21,59.21,0,0,0-7.69-.56,45.16,45.16,0,0,0-7.71.66c-1,.82-2.07,1.64-3.18,2.49s-2.15,1.66-3.23,2.54-2.14,1.78-3.11,2.69a33.42,33.42,0,0,0-2.78,2.89c-2.2-.83-3.37.11-4.47,1.27a15.41,15.41,0,0,1-1.86,1.78,7,7,0,0,1-3,1.34l-1.45-.58a23,23,0,0,0-6.28-3.44,6.32,6.32,0,0,0-2-.32,2.13,2.13,0,0,0-1.22.29c-1.17.77-.59,2.92,1.79,4.31-5.4,3.47-11.19,3.85-15.6,5.1l-5.8,3.7c-1.66,1.13-2.79-.59-3.73-3.33-2.06.9-2.83.56-3.58-.08a8.25,8.25,0,0,0-3.64-2.47c-.43-2.18-3.17-.67-6.71.78l-1.3.59-1.35.52c-.89.34-1.75.65-2.51.9-1.5.52-2.75.66-3.08.27l1.06-.39a11.3,11.3,0,0,1-3.9-2.38A32.92,32.92,0,0,1,176.63,26l-1.56-1.9c-.93-.75-2.06-1.54-3.14-2.27a40.1,40.1,0,0,0-7.23-3.91,25.86,25.86,0,0,0-2.88-.76q-3.28-.88-6.64-1.69c-1.12-.26-2.24-.57-3.37-.78s-2.26-.28-3.42-.3a54.33,54.33,0,0,0-13.87,1.32c-9.15,2.05-18,6-26.32,10.64-4.84,2.67-6.75,3.9-9.48,5.55l-7.33,4.55c-4.68,2.9-9,5.5-13.08,7.52,2.08,3.83,3-2.91,6.17,1.87a43.6,43.6,0,0,1-7.59,3c-1.24.36-2.53.71-3.73,1-.6.12-1.24.28-1.8.36-.28,0-.59.1-.84.13l-.41-.1c-2.16-.62-3.8-1.51-5.09-1.72a15.46,15.46,0,0,1-1.5-4.76,2.67,2.67,0,0,0-.14-.35c-.62-.29-.78.3-1,.9a2.62,2.62,0,0,1-.32.79c-.19.2-.17.28-1.09.17l-.51-3.92c-2.56,1.65-4.43.59-6.28-.61s-3.73-2.63-6-1.67C48,40.68,46.34,41,44.72,41c-.19-2.07-1.45-1.91-2.64-1.7s-2.29.48-2.34-1.43l0,.32c-1,0-1.63.34-2.82-.26-.81.81-5.1,4.47-8.73,8.17a68.58,68.58,0,0,0-7.29,8.26l-.68-.62c-1.6.26-2.06,3.41-1,4.07-.73,0-1.3-.06-1.88-.1l.18-.3-.87-.06-.68-.1a8.15,8.15,0,0,1-.27-4.13c-.39.75-.55,1.3-.77,1.59s-.26.28-.25-.08a4.68,4.68,0,0,0,0,1l.5,1.1A5.09,5.09,0,0,0,16,57.91,10.06,10.06,0,0,0,17,59.15l1.29,1.27c.42.44,1,.86,1.46,1.31,1,.9,2.08,1.81,3.14,2.76-1.51,1.6-4.36-.39-5.62.13-.85-1.33-2-2.57-2.65-3.74-.36-.6-.22-1.14-.52-1.69s-.57-1.09-.8-1.63a18,18,0,0,0-.73,2.16c-.3.87-.66,1.46-.79.32.15-1.63,0-1.65-.21-1.63s-.48.15-.39-1.12c.85-1.24,1.13-.31,1.67,0,.25-1.87.08-2.59-.15-3s-.52-.61-.52-1.23c-.2.49-.42.31-.57,0s-.29-.66-.53-.5c1.18-2.83.6-2.36,1.21-4.15.12-.6-.37.31-.78,1.39a10.89,10.89,0,0,0-1,3.11,8.76,8.76,0,0,1-1,3.11,4.54,4.54,0,0,0,.3-1.76,4.34,4.34,0,0,0-.14-.75,20.33,20.33,0,0,1-1.2,2.73c.08-.51-.11-.48-.18-.59s-.09-.35.28-1.28c.18-.26,0,.26,0,.5.06-.52,1.11-1.62,2.27-3.44a17.79,17.79,0,0,0,2-3.8A18.16,18.16,0,0,1,10.49,52c-1,1.33-1.75,1.84-1.81,2.18a7.82,7.82,0,0,1-.79,1.66l-.44.75a6.4,6.4,0,0,0-.28.79q.4-.48.8-1a26.21,26.21,0,0,1-2,5.22c.08-1,1.2-2.25,2.39-3.92s2.35-3.58,1.89-3.06L10,55.78c-.59.87-1.16.6-.43-1.53-.7,1.61-1,1.57-1.2,1.58l.12-.44c-.32.21-.1-.94-1,1.26-.06,1.63-1.79,5-3.55,7.92s-3.54,5.28-4,9.1c.85-3,1.22-3.52,1.39-3.14s.22,1.78.46,2.87a18.42,18.42,0,0,0-.74,3.21C1,77.27.93,78,.87,78.74A16.42,16.42,0,0,0,.91,81c.14.37.33.5.47.5s.25-.13.34-.33a13.88,13.88,0,0,1,.59-1.41c0,.92.27,1.93.4,3A6.13,6.13,0,0,1,2.52,86c.85-.79,1.18,0,1.51,1a6.57,6.57,0,0,0,.6,1.52c.26.42.56.77,1,.67,1.71-.74.16-1.28,1.43-2.26C9.14,88,12.34,88.68,14,89.28c.33,1.16,1.06,2.77,1.56,4.55a7.43,7.43,0,0,1-.19,5.51c-2.11-.25-1.65-1.72-1.28-3s.7-2.42-1.29-2.12c.77,2.7-.14,3-1.45,3.16a7.24,7.24,0,0,0-2,.24,2.24,2.24,0,0,0-1.52,1.57A4.1,4.1,0,0,0,9,100.75a4.66,4.66,0,0,0,1.63.83,6.13,6.13,0,0,0,1.95.19,7.61,7.61,0,0,0,1.94-.3l-.48-.7c2.21-.63,6.13-2,8.54.68-.37,1.9.72,3.22-.77,3.8l2.88.11c.31-.62.61-1.26-.23-1.61,1.18-1.56,2.54-.89,3.65.11.61,1.93,13.31-9.82,13-8.5,1.92-.25,2.64,2.66,4.32.51,0-.81-4.39,1.26-8.45,3.54s-7.92,4.64-6.67,4.18c1,1,6.14-2.09,11.22-4.88s10.29-5.2,11-3.35c1.4-.24,3.09-.71,2.67-2.7,2.44.88-.55,3.85,1.21,5.66,0-.32-.17-1,.36-.94l1.68,2.48a5.39,5.39,0,0,1,3.21-1.31,34.78,34.78,0,0,1,4,.09,13.93,13.93,0,0,0,3.54-.19,6.23,6.23,0,0,0,1.6-.58,5.34,5.34,0,0,0,1.39-1.17c-.9,2.24-1.89,6-4.89,7.92l-.6-1.06a2.72,2.72,0,0,1-.81.6c-.79.53-1.92,1.28-1.85,2.68a8.45,8.45,0,0,0,2,.69,8.22,8.22,0,0,0,6.54-1.67c.65.49,1.42,1,2,1.49a7.34,7.34,0,0,1-.17-.77c1.24,1.07,1.18,1.28.92,2.11a1.54,1.54,0,0,1-.15.48c1.45,2.77,4.55,1.31,7.62-1.08s6.07-5.49,9.23-5.32c1.16-1.5-.25-1,1.11-2.92,1.5-.1,3-.27,4.26-.38s2.36-.15,3.49-.26,2.26-.26,3.39-.47,2.33-.47,3.55-.8c.07-3-.36-3.9-3.32-5.21L108,91.56c.63,7.49,9.15,2,9.51,9.6,1.72.76,3.75-.11,4.87-2.08-.72-1.55-1.86-4,.26-5.32,4.1.13,3-.14,6.47.26,1.69,1.55,1.28,2.81,2.29,4.26,2.13-4.58,5.6,2.21,8.58,0,2.48-2.19,3.14-2.82,1.78-6.48C143.2,91.24,144.17,93.93,145.21,96.93Z"/>
      </Svg>
    );
  }
}

export default PaintingBorder;