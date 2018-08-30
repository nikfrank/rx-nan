import React, { Component } from "react";
import "./ContactForm.css";
import Textarea from "./Textarea";
import Correct from "./imgs/correct.svg";
import X from "./imgs/delete-button.svg";

class Contact extends Component {
  state = {
    userName: "",
    email: "",
    telNo1: "",
    telNo2: "",
    telNo3: "",
    message: "",
  };

  setUserName = event => this.setState({ userName: event.target.value });
  setEmail = ({ target: { value } }) =>
    this.setState({
      email: value,
      isEmailValid: value.includes("@" && ".")
    });
  setTelNo1 = event => this.setState({ telNo1: event.target.value });
  setTelNo2 = event => this.setState({ telNo2: event.target.value });
  setTelNo3 = event => this.setState({ telNo3: event.target.value });
  setMessage = value => this.setState({ message: value });

  submit = ()=> {
    fetch('https://55a1ixk7t8.execute-api.eu-west-1.amazonaws.com/default/test-api-gateway', {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: 'name: '+this.state.userName+
            ' email: '+this.state.email+
            ' message: '+this.state.message,
    }).then(pon => console.log(pon, 'response from emailer'));
  }
  
  render() {
    const { userName, email, telNo1, telNo2, telNo3, message } = this.state;

    return (
      <div className="page">
        <div className="form-container">
          <h1 className="form-header">Send Us Your Message</h1>

          <div className="emailInvalid" />

          <div id='form' className="topBefore">
            <input
              id="name"
              type="text"
              placeholder="NAME"
              onChange={this.setUserName}
              value={userName}
            />

            <div className="contact-email-div">
              <input
                id="email"
                type="text"
                placeholder="E-MAIL"
                onChange={this.setEmail}
                value={email}
              />
              {!!this.state.email.length ? (
                !!this.state.isEmailValid ? (
                  <img src={Correct} />
                ) : (
                  <img src={X} />
                )
              ) : null}
            </div>

            <div>
              <Textarea
                id="message"
                type="text"
                onChange={this.setMessage}
                value={message}
              />
            </div>
            <button className='submit' onClick={this.submit}>SUBMIT</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
