import React from 'react';
import { Link, hashHistory } from 'react-router';
import { Modal } from 'react-modal';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    debugger
    this.props.actionType(user);

  }

  update (fieldName) {
    return (e) => {
      this.setState({
        [fieldName]: e.currentTarget.value
      });
    };
  }

  componentDidMount() {
    if (this.props.loggedIn) hashHistory.push("/");
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
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>error</li>
        ))};
      </ul>
    );
  }

  render() {
    return(
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form">
          <h2>Please {this.props.formType}!</h2>
          {this.renderErrors()}
          <br/>
          <label> Username:
            <input type="text" value={this.state.username} onChange={this.update("username")}/>
          </label>
          <br/>
          <label> Password:
            <input type="password" value={this.state.password} onChange={this.update("password")}/>
          </label>
          <br/>
          <input type="submit" value="Submit"/>
          <br/>
          <footer className="session-form-footer">
            {this.renderFooter()}
          </footer>
        </form>
      </div>
    );
  }


}

export default SessionForm;
