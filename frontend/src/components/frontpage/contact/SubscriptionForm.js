import React, { Component } from 'react';
import styled from 'styled-components';
import axios from "axios/index";
import validator from 'validator';
import { Link } from 'react-router-dom';

const Div = styled.div`
  margin: auto;
  height: 35vh;
  min-height: 400px;
  text-align: center;
  font-family: ${props => props.theme.Robotofont};
`;

const FormElements = styled.form`
  background-color: white; //this is to hide the fixed position animations to prevent them from showing up on slower devices
  width: 100%;
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
  font-size: 1.4em;
  border-color: ${props => props.theme.logoblue};
  border-width: 4px;
  outline: none;
  box-shadow: none;
`;

const Email = styled.input`
  border-radius: 6px;
  font-size: 1.4em;
  border-color: ${props => props.theme.logoblue};
  border-width: 4px;
  outline: none;
  box-shadow: none;
`;

const Subscribe = styled.input`
  border-radius: 20px;
  background-color: transparent;
  border-color: ${props => props.theme.logoblue};
  font-size: 1.4em;
  border-width: 4px;
  outline: none;
`;

const NoSpam = styled.p`
  font-size: 0.5em;
  font-style: italic;
`;

const Error = styled.div`
  color: red;
`;

const Label = styled.label`
  font-size: 1.2em;
`;

const SubmittedText = styled.p`
  font-size: 1.2em;
  margin-top: 7vh;
`;

class SubscriptionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      emailValid: false,
      nameValid: false,
      isSubmitted: false,
      emailErrorMessage: '',
      nameErrorMessage: '',
    };
  };


  handleChange = (event) => {
    const fields = this.state;
    fields[event.target.name] = event.target.value; // Looks up the name of form and pulls value
    this.setState({fields});
  };


  handleSubmit = (event) => {
    event.preventDefault(); // Prevents the browser's default action on form

    if (this.formIsValid()) {
      const emailNormalized = validator.normalizeEmail(this.state.email);
      const apiUrl = process.env.API_URL; // Created the API_URL in webpack. Changes based on local or production env
      const subscriber = {
          name: this.state.name, // Is this escaped? Need to double check.
          email: emailNormalized,
        };

      // Temp no server, set state anyways.
      this.setState({
				isSubmitted: true
			});

      // axios.post((apiUrl + 'v0.1/subscriber/create/'), subscriber)
      //   .then(response => {
      //       console.log('You are now subscribed. Thank you!');
      //       this.setState({
      //         isSubmitted: true
      //       });
      //   })
      //   .catch(error => {
      //     // If server throws 400 error, this retries the email by a PUT method to make updates to existing.
      //     if (error.response.status = 400) {
      //       const existingSubscriber = {
      //         email: emailNormalized,
      //         name: this.state.name, // Is this escaped? Need to double check.
      //         subscribed: true
      //       };
			//
      //       // console.log(existingSubscriber);
      //       axios.put((apiUrl + 'v0.1/subscriber/update/' + emailNormalized + '/'), existingSubscriber)
      //         .then(response => {
      //           console.log('You are now subscribed. Thank you!');
      //           this.setState({
      //             isSubmitted: true
      //           });
      //         });
      //         console.log("Resolving the 400 Error...");
      //     } else {
      //       console.log("Uh oh! Something went wrong with the submission of the form.")
      //     }
      //   });
    } else {
      console.log("Form is not valid");
    }
  };


  formIsValid = () => {
    const email = this.state.email;

    if (this.state.name.length <= 0 && this.state.email.length <= 0) {
      this.setState({
        nameErrorMessage: "Please enter your name",
        emailErrorMessage: "Please enter your email"
      });
      return false;
    } else if (this.state.name.length >= 0 && this.state.email.length <= 0) {
      this.setState({
        nameErrorMessage: "",
        emailErrorMessage: "Please enter your email"
      });
      return false;
    } else if (this.state.name.length <= 0 && !validator.isEmail(email)) {
      this.setState({
        nameErrorMessage: "Please enter your name",
        emailErrorMessage: "This email is not valid, please correct your email"
      });
      return false;
    } else if (this.state.name.length >= 0 && !validator.isEmail(email)) {
      this.setState({
        nameErrorMessage: "",
        emailErrorMessage: "This email is not valid, please correct your email"
      });
      return false;
    } else if (this.state.name.length <= 0 && validator.isEmail(email)) {
      this.setState({
        nameErrorMessage: "Please enter your name",
        emailErrorMessage: ""
      });
      return false;
    } else {
      this.setState({
        nameErrorMessage: '',
        emailErrorMessage: ''
      });
      return true;
    }
  };

  render() {
    const submittedForm = this.state.isSubmitted;

    const form = submittedForm ? (
      <SubmittedText>You are subscribed! Thank you!</SubmittedText>
      ) : (
      <FormElements onSubmit={this.handleSubmit}>
        <Label>Name<br/>
          <Name
            placeholder='Name'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Label>
        <Error>{this.state.nameErrorMessage}</Error>
        <br />
        <Label>Email<br/>
          <Email
            placeholder='Email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
        </Label>
        <Error>{this.state.emailErrorMessage}</Error>
        <br />
        <Subscribe type="submit" value="Subscribe"/>
      </FormElements>
    );

    return (
      <Div>
        <Title>
          Stay in the Loop
        </Title>
        <Subtitle>
          Don't miss any of the exciting new developments and contests as we get closer to release!
        </Subtitle>
        {form}
        <NoSpam>
          No spam ever and easy to <Link to="/unsubscribe"> unsubscribe </Link>
        </NoSpam>
      </Div>
    );
  }
}

export default SubscriptionForm;



