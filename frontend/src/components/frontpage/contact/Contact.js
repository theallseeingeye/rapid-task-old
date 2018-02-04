import React, { Component } from 'react';
import Image from './../images/OfficeToBeach.svg';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  // To fade the background
  opacity: 1;
  // To place behind all divs
  z-index: -1;
  // To hid the sides that are stretching beyond the div
  overflow: hidden;
`;

const BackgroundBox = styled.div`
  align-self: flex-start;
  margin: auto;
  @media (min-width: ${props => props.theme.giantscreen}) {
  width: 100%;
  }
`;

const Svg = styled.img`
  height: 100vh;
  @media (min-width: ${props => props.theme.giantscreen}) {
  height: unset;
  width: 100%;
  }
`;

const FormElements = styled.form`
  transform: translate(10%, -7%);
  position: absolute;
  font-size: 1.6em;
  opacity: 0.7;
  @media (min-width: ${props => props.theme.desktopscreen}) {
  font-size: 2.4em;
  transform: translate(10%, 20%);
  }
`;

const Title = styled.p`
  font-size: 1.2em;
  transform: translate(5%, 50%);
  opacity: 1;
`;

const Name = styled.input`
  border-radius: 6px;
`;

const Email = styled.input`
  border-radius: 6px;
`;

const Subscribe = styled.input`
  border-radius: 20px;
  background-color: ${props => props.theme.logoblue};
  border-color: darkcyan;
  font-size: 1.1em;
`;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: '',
        email: ''
      },
      people: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    const fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({ fields});
    console.log(event.target.name)
  };

  handleSubmit(event)  {
    const people = [
      ...this.state.people,
      this.state.fields,
    ];
    this.setState({
      people,
      fields: {
        name: '',
        email: ''
      }
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <BackgroundContainer>
          <BackgroundBox>
            <Svg src={Image}/>
          </BackgroundBox>
        </BackgroundContainer>
          <FormElements onSubmit={this.handleSubmit}>
            <Title>Stay in the loop!</Title>
            <Name placeholder='Name' name='name' value={this.state.fields.name} onChange={this.handleChange} required/>
            <br />
            <br />
            <Email placeholder='Email' name='email' value={this.state.fields.email} onChange={this.handleChange} type="email" required />
            <br />
            <br />
            <Subscribe type="submit" value="Subscribe"/>
          </FormElements>
      </div>
    );
  }
}

export default Contact;
