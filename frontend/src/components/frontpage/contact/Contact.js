import React, { Component } from 'react';
import Image from './../images/OfficeToBeach.svg';
import styled from 'styled-components';

const Svg = styled.img`
  width: 100%;
  margin: auto;
`;
// function stringifyFormData(fd) {
//   const data = {};
// 	for (let key of fd.keys()) {
//   	data[key] = fd.get(key);
//   }
//   return JSON.stringify(data, null, 2);
// }
//
// class ShakingError extends React.Component {
// 	constructor() { super(); this.state = { key: 0 }; }
//
// 	componentWillReceiveProps() {
//     // update key to remount the component to rerun the animation
//   	this.setState({ key: ++this.state.key });
//   }
//
//   render() {
//   	return <div key={this.state.key} className="bounce">{this.props.text}</div>;
//   }
// }

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
          <Svg src={Image}/>
          <form onSubmit={this.handleSubmit}>

            <input placeholder='Name' name='name' value={this.state.fields.name} onChange={this.handleChange} required/>
            <br />
            <input placeholder='Email' name='email' value={this.state.fields.email} onChange={this.handleChange} type="email" required />
            <br />
            <input type="submit" value="Subscribe"/>
          </form>
            <div>
                <h3>Names</h3>
                <ul>
                    { this.state.people.map(({name, email}, i) => <li key={i}>{name}({email})</li>)}
                </ul>
            </div>
        </div>
    );
  }

}

//   constructor() {
//     super();
//     this.state = {};
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleSubmit(event) {
//     event.preventDefault();
//     if (!event.target.checkValidity()) {
//     	this.setState({
//         invalid: true,
//         displayErrors: true,
//       });
//       return;
//     }
//     const form = event.target;
//     const data = new FormData(form);
//
//
//     this.setState({
//     	res: stringifyFormData(data),
//       invalid: false,
//       displayErrors: false,
//     });
//
//     // fetch('/api/form-submit-url', {
//     //   method: 'POST',
//     //   body: data,
//     // });
//   }
//
//   render() {
//   	const { res, invalid, displayErrors } = this.state;
//     return (
//     	<div>
//         <form
//           onSubmit={this.handleSubmit}
//           noValidate
//           className={displayErrors ? 'displayErrors' : ''}
//          >
//           <label htmlFor="username">Username:</label>
//           <input
//             id="username"
//             name="username"
//             type="text"
//             data-parse="uppercase"
//           />
//
//           <label htmlFor="email">Email:</label>
//           <input id="email" name="email" type="email" required />
//
//           <button>Send data!</button>
//         </form>
//
//
//
//         <div className="res-block">
//           {invalid && (
//             <ShakingError text="Form is not valid" />
//           )}
//           {!invalid && res && (
//           	<div>
//               <h3>Transformed data to be sent:</h3>
//               <pre>FormData {res}</pre>
//           	</div>
//           )}
//         </div>
//     	</div>
//     );
//   }
// }



export default Contact;
