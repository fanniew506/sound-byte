import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: [],
      formType: this.props.formType,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }


  handleResize(e) {
    this.setState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
    });
  }

  componentDidUpdate() {
    if (this.props.loggedIn) hashHistory.push("/home");
  }

  componentDidMount() {
    if (this.props.loggedIn) hashHistory.push("/home");
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = { username: this.state.username, password: this.state.password };
      this.props.login(user);
  }

  demoLogin(){
    const user = { username: "Jennifer", password: "starwars" };
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

  modalStyle() {
    return { width: this.state.windowWidth, height: this.state.windowHeight };
  }

  handleModalClick() {
    hashHistory.push("/");
  }

  render() {
    return (
      <div>
         <div onClick={this.handleModalClick} className="session-modal" style={ this.modalStyle() }></div>
           <div className="session-form-container">
             <form onSubmit={this.handleSubmit} className="session-form">
               <header className="session-form-header">
                 <Link to='/'><h2 className="form-cancel">X</h2></Link>
                <h2>Log In!</h2>
               </header>
               { this.renderErrors() }
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
                 <br/>
                 <h2 onClick={this.demoLogin} className="demo-login">Demo Login</h2>
             </form>
         </div>
       </div>
    );
  }
}

export default SessionForm;
