import React, { Component } from 'react';
import styled from 'styled-components';
import axios from "axios/index";
import validator from 'validator';

const FormElements = styled.form`
  width: 100%;
  text-align: center;
  font-family: ${props => props.theme.Robotofont};
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

const Name = styled.input`
  border-radius: 6px;
  font-size: 1.6em;
  border-color: ${props => props.theme.logoblue};
  border-width: 4px;
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


class SubscriptionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {value: '', isValid: true, message: ''},
      email: {value: '', isValid: true, message: ''},
      existingEmail: 'no change',
      subscribed: '',
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
          name: this.state.name,
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

  formIsValid = () => {
    const input = this.state.email;

    if (!validator.isEmail(input)){
      this.state.email.isValid = false; // Triggers the error
      this.state.email.message = 'Not a valid email address';
      // this.state.email.isSubscribed = false; // Checks to see if they have already subscribed

      this.setState(state);
      return false;
      // Else if they already subscribed
    }
    return true;
  };

  // emailCompare = () => {
  //   if (this.state.email === this.state.existingEmail) {
  //     console.log("The Email Already Exists");
  //     return false;
  //   } else {
  //     console.log("This email is new!");
  //     console.log(DatabaseEmail);
  //     return true;
  //   }
  // };

  checkEmailExisting = () => {
    const input = this.state.email;

    axios.get('http://127.0.0.1:8000/subscriber/list/?email=' + input)
    .then(response =>
         // console.log(response.data[0].email)
      this.setState({
        existingEmail: response.data[0].email,
        subscribed: response.data[0].subscribed
      }));
  };

  render() {
    return (
      <FormElements onSubmit={this.handleSubmit}>
        <Title>
          Stay in the Loop
        </Title>
        <Subtitle>
          Don't miss any of the exciting new developments and contests as we get closer to release!
        </Subtitle>
        <Name
          placeholder='Name'
          name='name'
          value={this.state.name.value}
          onChange={this.handleChange}
          required
        />
        <span>{this.state.name.message}</span>

        <br />
        <br />
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
        <Subscribe type="submit" value="Subscribe"/>
    </FormElements>
    );
  }
}

export default SubscriptionForm;



