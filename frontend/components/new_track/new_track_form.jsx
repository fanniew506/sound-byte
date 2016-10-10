import React from 'react';
import { Link, hashHistory } from 'react-router';

class NewTrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      errors: [],
      imageUrl: "",
      imageFile: null,
      audioFile: null };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateAudioFile = this.updateAudioFile.bind(this);
    this.updateImageFile = this.updateImageFile.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("track[title]", this.state.title);
    formData.append("track[description]", this.state.description);
    if (this.state.imageFile) {
      formData.append("track[album_image]", this.state.imageFile);
    }
    if (this.state.audioFile) {
      formData.append("track[audio]", this.state.audioFile);
    }

    this.props.createTrack(formData);
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

  updateImageFile (e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({
        imageFile: file, imageUrl: reader.result
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  updateAudioFile (e) {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        audioFile: file
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ audioFile: null });
    }
  }

  renderErrors() {
    if (this.props.errors !== undefined) {
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
           <label> Upload Image:
             <input type="file" onChange={this.updateImageFile}/>
           </label>
           <br/>
           <label> Upload Audio File:
             <input type="file" onChange={this.updateAudioFile}/>
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
