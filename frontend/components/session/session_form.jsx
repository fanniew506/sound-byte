import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", errors: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);

  }
  componentDidUpdate() {
    if (this.props.loggedIn) hashHistory.push("/");
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = { username: this.state.username, password: this.state.password };
    if (this.props.formType === 'login') {
      this.props.login(user);
    } else if (this.props.formType === 'signup') {
      this.props.signup(user);
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
    if (this.props.formType === 'login') {
      return (
        <div>
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </div>
      );
    } else {
      return (
        <div>
          Already have an account?
          <Link to="/login"> Log In</Link>
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
            <h2>{this.props.formType}</h2>
           </header>
           {this.renderErrors()}
           <br/>
           <label> Username:
             <input type="text" value={this.state.username} onChange={this.updateUsername}/>
           </label>
           <br/>
           <label> Password:
             <input type="password" value={this.state.password} onChange={this.updatePassword}/>
           </label>
           <br/>
           <input type="submit" value="Submit"/>
           <br/>
           <footer className="session-form-footer">
             { this.renderFooter() }
             <br/>
           </footer>
         </form>
       </div>
    );
  }
}

export default SessionForm;
