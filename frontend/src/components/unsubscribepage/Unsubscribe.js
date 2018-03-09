import React, { Component } from 'react';
import validator from "validator";
import axios from "axios/index";
import styled from "styled-components";

const FormElements = styled.div`
  border-top: solid ${props => props.theme.logoblue};
  background-color: ${props => props.theme.logoblue};
  width: 100%;
  text-align: center;
  font-family: ${props => props.theme.Robotofont};
`;

const Title = styled.p`
  color: white;
  font-weight: bold;
  font-size: 2em;
  margin: auto;
  padding-top: 10vh;
`;

const Subtitle = styled.p`
  color: white;
  @media (min-width: ${props => props.theme.tabletscreen}) {
  font-size: 1.5em;
  }
`;


const Email = styled.input`
  border-radius: 6px;
  font-size: 1.6em;
  border-color: rgba(45,140,245,1);
  border-width: 4px;
  outline: none;
`;

const Subscribe = styled.input`
  border-radius: 20px;
  background-color: white;
  border-color: rgba(45,140,245,1);
  font-size: 1.6em;
  border-width: 4px;
  outline: none;
`;

class Unsubscribe extends Component {
    constructor(props) {
    super(props);
    this.state = {
      name: {value: '', isValid: false, message: ''},
      email: {value: '', isValid: false, message: ''},

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




      //   // Sends the data to the backend.
      //   axios.post('http://127.0.0.1:8000/subscriber/create/', subscriber)
      //     .then(response => {
      //       console.log('You are now subscribed. Thank you!');
      //     })
      }

    }
  };

  render() {
    return (

        <FormElements onSubmit={this.handleSubmit}>

          <Title>
            We are sorry to have you go.
          </Title>
          <Subtitle>
            Please enter the email you would like to unsubscribe
          </Subtitle>
          <Email
            placeholder='Email'
            name='email'
            value={this.state.email.value}
            onChange={this.handleChange}
            type="email"
            // required
          />
          <span>{this.state.email.message}</span>
          <br />
          <br />
          <Subscribe type="submit" value="Unsubscribe"/>
        </FormElements>

    );
  }
}

export default Unsubscribe;
