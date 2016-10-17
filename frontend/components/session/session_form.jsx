import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", errors: [], formType: this.props.formType };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  componentDidUpdate() {
    if (this.props.loggedIn) hashHistory.push("/home");
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = { username: this.state.username, password: this.state.password };
      this.props.login(user);
  }

  updateUsername (e) {
    this.setState({
      username: e.currentTarget.value
    });
  }

  updatePassword (e) {
    this.setState({
      password: e.currentTarget.value
    });
  }


  renderErrors() {
    const errors = this.props.errors;
    if (errors) {
      return(
        <ul>
          {this.props.errors.map((error, idx) => (
            <li key={`error-${idx}`}>{error}</li>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
       <div className="session-form-container">
         <form onSubmit={this.handleSubmit} className="session-form">
           <header className="session-form-header">
             <Link to='/'><h2 className="form-cancel">X</h2></Link>
            <h2>Log In!</h2>
           </header>
           {this.renderErrors()}
           <br/>
             <input
               type="text"
               placeholder="Username"

               value={ this.state.username }
               onChange={ this.updateUsername }/>
           <br/>
             <input
               type="password"
               placeholder="Password"
               value={ this.state.password }
               onChange={ this.updatePassword }/>
           <br/>
           <input className="session-submit" type="submit" value="Submit"/>
           <br/>
             <div>
               Don't Have an Account?
               <Link to="signup"> Signup</Link>
             </div>
         </form>
       </div>
    );
  }
}

export default SessionForm;
