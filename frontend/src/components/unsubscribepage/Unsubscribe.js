import React, { Component } from 'react';
import validator from "validator";
import axios from "axios/index";
import styled from "styled-components";


const FormElements = styled.form`
  width: 100%;
  text-align: center;
  font-family: ${props => props.theme.Robotofont};
  height: 48vh;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 2em;
  opacity: 1;
`;

const Subtitle = styled.p`
  @media (min-width: ${props => props.theme.tabletscreen}) {
  font-size: 1.5em;
  }
`;


const Email = styled.input`
  border-radius: 6px;
  font-size: 1.6em;
  border-color: ${props => props.theme.logoblue};
  border-width: 4px;
`;

const Subscribe = styled.input`
  border-radius: 20px;
  background-color: transparent;
  border-color: ${props => props.theme.logoblue};
  font-size: 1.6em;
  border-width: 4px;
`;

class Unsubscribe extends Component {
    constructor(props) {
    super(props);
    this.state = {
      name: {value: '', isValid: true, message: ''},
      email: {value: '', isValid: true, message: ''},
      // existingEmail: 'no change',
      // subscribed: '',
    };
  };


  handleChange = (event) => {
    const fields = this.state;
    fields[event.target.name] = event.target.value;
    this.setState({fields});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const emailInput = this.state.email;
    const emailNormalizer = validator.normalizeEmail(emailInput);

    if (this.checkEmailExisting()) {

      if (this.formIsValid()) {
        const subscriber = {
          // name: this.state.name,
          email: emailNormalizer,
        };




        // Sends the data to the backend.
        axios.post('http://127.0.0.1:8000/subscriber/create/', subscriber)
          .then(response => {
            console.log('You are now subscribed. Thank you!');
          })
      }

    }
  };

  render() {
    return (
      <div>
        <FormElements onSubmit={this.handleSubmit}>
          <Title>
            We are sorry to hear you go.
          </Title>
          <Subtitle>
            Please enter the email you want to unsubscribe
          </Subtitle>
          <Email
            placeholder='Email'
            name='email'
            value={this.state.email.value}
            onChange={this.handleChange}
            type="email"
            required
          />
          <span>{this.state.email.message}</span>
          <br />
          <br />
          <Subscribe type="submit" value="Unsubscribe"/>
        </FormElements>
      </div>
    );
  }
}

export default Unsubscribe;
