import React, { Component } from 'react';
import styled from 'styled-components';
import axios from "axios/index";
import validator from 'validator';
import { Link } from 'react-router-dom';

const FormElements = styled.form`
  background-color: white; //this is to hide the fixed position animations to prevent them from showing up on slower devices
  width: 100%;
  text-align: center;
  font-family: ${props => props.theme.Robotofont};
  margin: 5vh 0 5vh 0;
  height: auto;
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

const NoSpam = styled.p`
  font-size: 0.5em;
  font-style: italic;
`;


class SubscriptionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {value: '', isValid: true, message: ''},
      email: {value: '', isValid: true, message: ''},
      // existingEmail: 'no change',
      // subscribed: '',
      isSubmitted: false,
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


    if (this.formIsValid()) {
      const subscriber = {
        name: this.state.name,
        email: emailNormalizer,
      };

      // Sends the data to the backend.
      axios.post('http://127.0.0.1:8000/subscriber/create/', subscriber)
        .then(response => {
          console.log('You are now subscribed. Thank you!');
          return this.setState.isSubmitted = true;
        });
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

    const submitted = this.state.isSubmitted;

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
        <NoSpam>
          No spam ever and easy to <Link to="/unsubscribe"> unsubscribe </Link>
        </NoSpam>
        {/*{submitted = true && }*/}
      </FormElements>
    );
  }
}

export default SubscriptionForm;



