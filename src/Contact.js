import React, {Component} from 'react';
import './ContactForm.css';

class Contact extends Component {
    state = { userName: '',
              email: '',
              telNo1: '',
              telNo2: '',
              telNo3: '',
              message: '',
        }

    setUserName = (event)=> this.setState({userName: event.target.value});
    setEmail = ({ target: {value} })=>
        this.setState({
        email: value,
        isEmailValid: value.includes('@' && '.co')
              })
    setTelNo1 = (event)=> this.setState({ telNo1: event.target.value });
    setTelNo2 = (event)=> this.setState({ telNo2: event.target.value });
    setTelNo3 = (event)=> this.setState({ telNo3: event.target.value });
    setMessage = (event)=> this.setState({ message: event.target.value  });

  render() {
     const { userName, email, telNo1, telNo2, telNo3, message } = this.state;

    return(
      <div className='page'>
        <div className="form-container">

          <h1 className="form-header">Send us your message here</h1>

          <div className='emailInvalid'>
            {
                !this.state.isEmailValid ? (

                    <div className='emailRetry'>
                      Please enter your email address
                    </div>

                ) :null
              }
            </div>
            
            <form id="form" class="topBefore">
              <input id="name" type="text" placeholder="NAME" onChange={this.setUserName} value={userName}/>

              <input id="email" type="text" placeholder="E-MAIL" onChange={this.setEmail} value={email}/>



              <textarea id="message" type="text" placeholder="MESSAGE" onChange={this.setMessage} value={message}/>
              <input id="submit" type="submit" value="SUBMIT" />

              </form>

        </div>
      </div>
    );
  }
}
export default Contact;
