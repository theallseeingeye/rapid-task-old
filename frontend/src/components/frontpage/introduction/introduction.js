import React, { Component } from 'react';
import styled from 'styled-components';

const Text = styled.p`
  font-family: ${props => props.theme.Robotofont};
  font-size: 1.2em;
  text-align: center;
  margin: auto;
`;

const Text2 = styled.p`
  font-size: 1em;
`;

class Introduction extends Component {
  render() {
    return (
      <div>
        <Text>
          Let us show you how you can perfect your business!
        </Text>
        <Text2>
          Yay! Second section that directs people to the next section!
          -Brief description of what Rapid Task is and technologies it works on.
        </Text2>
        <br/>
        Two characters holding an iphone and tablet waving- The screens have arrows.
        <br/>
        <Text>
          Control Your Business at Your Finger Tips
        </Text>
        <Text2>
          With Rapid Task you can automate you daily business processes by: <br/>
          Automating Invoicing <br/>
          Streamline Your Schedule

        </Text2>
      </div>
    );
  }
}

export default Introduction;
