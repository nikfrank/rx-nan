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
      <div>
        <div className="form-container">
          <div className="form-style-2">
            <div className="form-style-2-heading">One huge step towards building your brand...</div>
            <form action="" method="post">
              <label htmlFor="field1">
                <span>Name
                  <span className="required">*</span>
                </span>
                <input type="text" className="input-field wider" name="field1" onChange={this.setUserName} value={userName} />
              </label>

              <label htmlFor="field2">
                <span>Email
                  <span className="required">*</span>
                </span>
                <input type="text" className="input-field wider" name="field2" onChange={this.setEmail} value={email} />
              </label>

              {
                !this.state.isEmailValid ? (
                  <div className='emailInvalid'>
                    <div className='emailRetry'>
                      Please enter your email address
                    </div>
                  </div>
                ) :null
              }

              <label>
                <span>Telephone</span>
                <input type="text" className="tel-number-field" name="tel_no_1" onChange={this.setTelNo1} value={telNo1} maxLength="3" />-
                <input type="text" className="tel-number-field" name="tel_no_2" onChange={this.setTelNo2} value={telNo2} maxLength="3"  />-
                <input type="text" className="tel-number-field" name="tel_no_3" onChange={this.setTelNo3} value={telNo3} maxLength="4"  />
              </label>

              <label htmlFor="field4">
                <span>Regarding</span>
                <select name="field4" className="select-field">
                  <option value="General Question">General</option>
                  <option value="Quote">Quote</option>
                  <option value="Careers">Careers</option>
                </select>
              </label>

            <label htmlFor="field5">
              <span>Message
                <span className="required">*</span>
              </span>
              <textarea name="field5" className="textarea-field wider" onChange={this.setMessage} value={message} />
            </label>

            <label><span>&nbsp;</span><input type="submit" value="Submit" /></label>
          </form>
         </div>
        </div>

      </div>
    );
  }
}
export default Contact;
