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
    hashHistory.push(`/profile/${this.props.currentUser.id}`);
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
       <div className="new-track-form">
         <form onSubmit={this.handleSubmit} className="new-track-form">
             <h2 className="new-track title">Upload to SoundByte</h2>
           {this.renderErrors()}
           <br/>
             <input type="text"
               placeholder="Track Title" value={this.state.title} onChange={this.updateTitle}/>
           <br/>
             <textarea placeholder="Enter Track Description" value={this.state.description} onChange={this.updateDescription}></textarea>
           <br/>
           <label> Upload Image:
             <input type="file" onChange={this.updateImageFile}/>
           </label>
           <br/>
           <label> Upload Audio File:
             <input type="file" onChange={this.updateAudioFile}/>
           </label>

           <br/>
           <input className="submit new-track" type="submit" value="Upload"/>
           <br/>
         </form>
       </div>
       </div>
    );
  }
}

export default NewTrackForm;
