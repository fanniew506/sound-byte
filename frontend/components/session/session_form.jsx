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
    debugger
  }
  componentDidUpdate() {
    if (this.props.loggedIn) hashHistory.push("/");
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = { username: this.state.username, password: this.state.password };
    if (this.props.formType === 'login') {
      this.props.login(user);
      this.props.closeModal();
    } else if (this.state.formType === 'signup') {
      this.props.signup(user);
      this.props.closeModal();
    }
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


  renderFooter() {
    if (this.state.formType === 'login') {
      return (
        <div>
          Don't have an account?
          <button onClick={ this.updateToSignUp }><h2>Sign Up</h2></button>
        </div>
      );
    } else {
      return (
        <div>
          Already have an account?
          <button onClick={ this.updateToLogIn }><h2>Log In</h2></button>
        </div>
      );
    }
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
            <h2>{this.state.formType}</h2>
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
           <input type="submit" value="Submit"/>
           <br/>
         </form>
       </div>
    );
  }
}

export default SessionForm;
