import React from 'react';
import { Link, hashHistory } from 'react-router';

class NewTrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      imageUrl: "",
      imageFile: null,
      audioFile: null,
      submitted: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateAudioFile = this.updateAudioFile.bind(this);
    this.updateImageFile = this.updateImageFile.bind(this);
    this.renderUploadStatus = this.renderUploadStatus.bind(this);
    this.handleCorrectErrors = this.handleCorrectErrors.bind(this);
    this.handleSuccessRedirect = this.handleSuccessRedirect.bind(this);
}

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.errors.length > 1) { this.props.clearErrors(); }
    let formData = new FormData();
    formData.append("track[title]", this.state.title);
    formData.append("track[description]", this.state.description);
    if (this.state.imageFile) {
      formData.append("track[album_image]", this.state.imageFile);
    }
    if (this.state.audioFile) {
      formData.append("track[audio]", this.state.audioFile);
    }
    this.setState({ submitted: true });
    this.props.createTrack(formData);
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

  componentWillUnmount () {
    this.props.clearErrors();
  }


  handleSuccessRedirect() {
    hashHistory.push(`/profile/${this.props.currentUser.id}`);
  }

  handleCorrectErrors() {
    this.props.clearErrors();
    this.setState({submitted: false});
  }

  renderUploadStatus () {
    const errors = this.props.errors;
    let innerContent;
    if (this.state.submitted) {
      if (this.props.errors.length > 0) {
        if (this.props.errors[0] === "success") {
          innerContent = (
            <div className="modal-enter">
              <i className="fa fa-check-square" aria-hidden="true"><h1>Success!</h1></i>
              <br/>
              <h2 className="cancel-btn exit" onClick={this.handleSuccessRedirect}>Go to Profile</h2>
            </div>
          );
        } else {
          innerContent = (
            <div className="modal-enter">
              <h1>The following error(s) occurred while saving:</h1>
              <br/>
              <ul>
                { this.props.errors.map((error, idx) => (
                  <li key={`error-${idx}`}>{error}</li>
                ))}
              </ul>
              <br/>
              <h2 className="cancel-btn exit" onClick={this.handleCorrectErrors}>Exit</h2>
            </div>
          );
        }
      } else {
        innerContent = (
          <div>
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
            <h1>Saving...</h1>
          </div>
        );
      }
      return (
        <div>
          <div className="upload-modal-content">
            { innerContent }
          </div>
          <div className="upload-modal"></div>
        </div>
      );
    }
  }


  render() {
    return (
      <div className="new-track-form-container">
       <div className="new-track-form">
         <form onSubmit={this.handleSubmit} className="new-track-form">
             <h2 className="new-track title">Upload to SoundByte</h2>
           <br/>
             <input type="text"
               placeholder="Track Title" value={this.state.title} onChange={this.updateTitle}/>
           <br/>
             <textarea placeholder="Enter Track Description (Optional)" value={this.state.description} onChange={this.updateDescription}></textarea>
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
        { this.renderUploadStatus() }
       </div>
    );
  }
}

export default NewTrackForm;
