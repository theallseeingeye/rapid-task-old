import React, { Component } from 'react';
import validator from "validator";
import axios from "axios/index";
import styled from "styled-components";

const FormElements = styled.form`
  background-color: ${props => props.theme.logoblue};
  width: 100%;
  height: 100%;
  text-align: center;
  font-family: ${props => props.theme.Robotofont};
`;

const Logo = styled.svg`
  padding-top: 5vh;
  width: 200px;
  height: 200px;
   @media (min-width: ${props => props.theme.tabletscreen}) {
    width: unset;
    height: unset;
  }
`;

const Title = styled.p`
  color: white;
  font-weight: bold;
  font-size: 2em;
  margin: auto;
  padding-top: 10vh;
  width: 100%;
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

const UnsubscribeButton = styled.input`
  border-radius: 20px;
  background-color: white;
  border-color: rgba(45,140,245,1);
  font-size: 1.6em;
  border-width: 4px;
  outline: none;
`;

const Error = styled.p`
  color: red;
`;

const SubmittedText = styled.p`
  font-size: 1.5em;
  color: white;
`;

const Form = styled.div`
  height: 20vh;
  min-height: 15vw;
  width: 100%;
`;

class Unsubscribe extends Component {
    constructor(props) {
    super(props);

    this.state = {
      email: '',
      isSubmitted: '',
      emailErrorMessage: '',
    };
  };


  handleChange = (event) => {
    const fields = this.state;
    fields[event.target.name] = event.target.value;
    this.setState({fields});

    console.log(fields);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const emailNormalized = validator.normalizeEmail(this.state.email);

    if (this.formIsValid()) {
      const existingSubscriber = {
        email: emailNormalized,
        // name: this.state.name, // Is this escaped? Need to double check.
        subscribed: false
      };
      const apiUrl = process.env.API_URL; // Created the API_URL in webpack. Changes based on local or production env


      console.log(existingSubscriber);
      axios.patch((apiUrl + 'v0.1/subscriber/update/' + emailNormalized + '/'), existingSubscriber)
        .then(response => {
          console.log('You are now unsubscribed.');
          this.setState({
            isSubmitted: true
          });
        })
        .catch(error => {

          // If server throws 400 error, this retries the email by a PUT method to make updates to existing.
          if (error.response.status = 400) {
            this.setState({
              emailErrorMessage: "That email is currently not subscribed"
            });
            console.log("That email is currently not subscribed");
          } else {
            console.log("Uh oh! Something went wrong and we cannot unsubscribe your email. Please send us an email at" +
              "inquiries@rapidtask.com");
          }
        });
    } else {
      console.log("The form field is not valid");
    }

  };

  formIsValid = () => {
    const email = this.state.email;

    if (this.state.email.length <= 0) {
      this.setState({
        emailErrorMessage: "Please enter your email"
      });
      console.log('This email is not long enough');
      return false;
    } else if (!validator.isEmail(email)) {
      this.setState({
        emailErrorMessage: "This email is not valid. Please correct your email"
      });
      console.log('This email is not valid');
      return false;
    } else {
      this.setState({
        emailErrorMessage: ''
      });
      console.log('This email is valid');
      return true;
    }
  };

  render() {
    const submittedForm = this.state.isSubmitted;

    const form = submittedForm ? (
      <SubmittedText>The email {this.state.email} is now unsubscribed from our mailing list</SubmittedText>
      ) : (
      <Form>
        <Subtitle>
            Please enter the email you would like to unsubscribe
        </Subtitle>
        {/*<Label>Email<br/>*/}
          <Email
            placeholder='Email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
        {/*</Label>*/}
        <Error>{this.state.emailErrorMessage}</Error>
        <UnsubscribeButton type="submit" value="Unsubscribe"/>
      </Form>
    );

    return (
      <FormElements onSubmit={this.handleSubmit}>
        <Title>
          We are sorry to have you go.
        </Title>
        {form}
        <br />
        <Logo data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 344.33 344.33" width="400" height="400">
          <circle cx="172.16" cy="172.16" r="172.16" fill="#fff"/>
          <g>
            <path d="M269,100.38,248.06,69l-52.28,31.37-17.53,27.71c-12.55,20.91-13.68,19.34-19.07,19.34H76.82L49.73,189.25H162.15c30.68,0,49.57,0,70.48-31.89" fill="#3FA9F5"/>
            <path d="M319.16,146.06,298.25,114.7,246,146.06l-17.53,27.71c-12.55,20.91-13.68,19.34-19.07,19.34l-162-.06L20.56,234.94H212.33c30.68,0,49.57,0,70.48-31.89" fill="#3FA9F5"/>
          </g>
        </Logo>
      </FormElements>
    );
  }
}

export default Unsubscribe;
