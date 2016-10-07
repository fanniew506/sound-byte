import React from 'react';
import { Link, hashHistory } from 'react-router';

class NewTrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "", errors: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateDescription = this.updateDescription.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const track = {
      title: this.state.title,
      description: this.state.description,
      };
    this.props.createTrack(track);
    hashHistory.push('/profile');
  }

  updateTitle(e) {
    this.setState({
      title: e.currentTarget.value
    });
  }

  updateDescription (e) {
    this.setState({
      description: e.currentTarget.value
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
       <div className="new-track-form-container">
         <form onSubmit={this.handleSubmit} className="new-track-form">
             <h2 className="session-form-cancel"><Link to='/profile'>X</Link></h2>
             <h2>Upload to SoundByte</h2>
           {this.renderErrors()}
           <br/>
           <label> Title:
             <input type="text" value={this.state.title} onChange={this.updateTitle}/>
           </label>
           <br/>
           <label> Description:
             <input type="textarea" value={this.state.description} onChange={this.updateDescription}/>
           </label>
           <br/>
           <input type="submit" value="Submit"/>
           <br/>
         </form>
       </div>
    );
  }
}

export default NewTrackForm;
