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
  outline: none;
  box-shadow: none;
`;

const Email = styled.input`
  border-radius: 6px;
  font-size: 1.6em;
  border-color: ${props => props.theme.logoblue};
  border-width: 4px;
  outline: none;
  box-shadow: none;
`;

const Subscribe = styled.input`
  border-radius: 20px;
  background-color: transparent;
  border-color: ${props => props.theme.logoblue};
  font-size: 1.6em;
  border-width: 4px;
  outline: none;
`;

const NoSpam = styled.p`
  font-size: 0.5em;
  font-style: italic;
`;

const Error = styled.span`
  color: red;
`;


class SubscriptionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {value: '', isValid: true, message: ''},
      email: {value: '', isValid: true, message: ''},
      existingEmail: '',
      subscribed: '',
      isSubmitted: false,
    };
  };

  // componentDidMount(){
  //
  //   // Loads the database list of subscribers
  //   axios.get('http://127.0.0.1:8000/subscriber/list')
  //     .then(response => {
  //       console.log(response);
  //
  //       this.setState(() => {
  //         return {
  //           existingSubscribers: response.data[0].email,
  //         }
  //       });
  //
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  //     console.log("data downloaded " + this.state.existingSubscribers);
  // }



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
      const apiUrl = process.env.API_URL; // Created the API_URL in webpack.
      const subscriber = {
          name: this.state.name,
          email: emailNormalizer,
        };
      axios.post((apiUrl + 'v0.1/subscriber/create/'), subscriber)
        .then(response => {
          console.log('You are now subscribed. Thank you!');
          return this.setState({
            name: "",
            email: "",
            isSubmitted: true
          })
        });
      } else {
        console.log("Form is not valid");
    }
  };
  formIsValid = () => {
    const email = this.state.email;
    const name = this.state.name;
    const fields = this.state;

    if (!validator.isEmail(email)) {
      email.isValid = false; // Triggers the error
      email.message = 'Not a valid email address';
      this.setState(state);
      console.log(email.message);
      return false;
    } else if (!validator.isAlpha(name)) {
      state.name.isValid = false;
      email.message = 'Please enter your name correctly';
      this.setState(state);
      console.log(name.message);
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
  //
  //     return true;
  //   }
  // };

  // checkEmailExisting = () => {
  //   const input = this.state.email;
  //
  //   axios.get('http://127.0.0.1:8000/subscriber/list/?email=' + input)
  //   .then(response =>
  //        // console.log(response.data[0].email),
  //     this.setState({
  //       existingEmail:response.data[0].email,
  //       // subscribed: response.data[0].subscribed
  //
  //     })
  //
  //
  //     //
  //     // if (this.state.existingEmail = input) {
  //     //   if (this.state.subscribed = false) {
  //     //     console.log("we need to re-subscribe them");
  //     //   } else {
  //     //     console.log("We don't do any updates here as they are already subscribed");
  //     //   }
  //     // } else {
  //     //   console.log("They haven't subscribed");
  //     //   return true;
  //     // }
  //
  //   )
  // };

  render() {

    // const submitted = this.state.isSubmitted;

    return (
      <FormElements onSubmit={this.handleSubmit}>
        <Title>
          Stay in the Loop
        </Title>
        <Subtitle>
          Don't miss any of the exciting new developments and contests as we get closer to release!
        </Subtitle>
        <label>Name
        <Name
          placeholder='Name'
          name='name'
          value={this.state.name.value}
          onChange={this.handleChange}
          required
        />
        <Error>{this.state.name.message}</Error>
        </label>
        <span>{this.state.name.message}</span>
        <br />
        <br />
        <label>Email
        <Email
          placeholder='Email'
          name='email'
          value={this.state.email.value}
          onChange={this.handleChange}
          type="email"
          required
        />
        </label>
        <span>{this.state.email.message}</span>
        <Error>{this.state.email.message}</Error>
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



