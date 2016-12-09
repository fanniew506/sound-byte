import React from 'react';
import { Link, hashHistory } from 'react-router';
import TrackPlayerControlsContainer from '../track_view/track_player_controls_container';
import Modal from '../modal/modal';

class OtherProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.showUsersTracks =  this.showUsersTracks.bind(this);
    this.playCurrentTrack =  this.playCurrentTrack.bind(this);
    this.updateImageFile = this.updateImageFile.bind(this);
    this.handleProfileSubmit = this.handleProfileSubmit.bind(this);
    this.displayProfilePreview = this.displayProfilePreview.bind(this);
    this.handleProfileCancel = this.handleProfileCancel.bind(this);
    this.displayProfilePicture = this.displayProfilePicture.bind(this);
    this.state = {imageFile: null, imageUrl: null};
    window.this = this;
  }

  playCurrentTrack(track){
    this.props.selectSong(track);
  }

  displayEditTrack() {

  }

  handleProfileSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("user[id]", this.props.currentUser.id);
    formData.append("user[image]", this.state.imageFile);
    this.setState({
      imageFile: null, imageUrl: null
    });
    this.props.updateUser(formData);
  }

  handleProfileCancel() {
    this.setState({
      imageFile: null, imageUrl: null
    });
    document.getElementById("picture-file").value = "";
  }

  updateImageFile(e) {
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
      this.setState({ imageUrl: null, imageFile: null });
    }
  }

  displayProfilePreview(){
    if (this.state.imageUrl === null) {
      return (
        <div></div>
      );
    } else {
      return (
        <div>
          <div className="update-image-modal modal-enter">
            <img className="image-preview" src={this.state.imageUrl}></img>
            <div className="update-image-nav">
              <h2 className="cancel-btn" onClick={this.handleProfileCancel}>Cancel</h2>
              <h2 className="save-btn" onClick={this.handleProfileSubmit}>Save</h2>
            </div>
          </div>
          <Modal/>
        </div>
      );
    }

  }

  showUsersTracks() {
    const tracks = this.props.tracks;
    const tracksArr = [];
    for (let idx in tracks) { tracksArr.push(tracks[idx]); }
    tracksArr.reverse();
    let trackList = tracksArr.map((track) => {
      return (
        <li className="user-tracks group" key={ track.id }>
          <Link to={`/track-view/${track.id}`}>
            <img className="album-cover" src={ track.album_image_url }></img>
            <h3 className="user-profile-track-title">{ track.title }</h3>
          </Link>
          <TrackPlayerControlsContainer currentTrackView={track}/>
        </li>
      );
    });
    return trackList;
  }

  displayProfilePicture(){
    if (this.props.currentUser.id === this.props.user.id) {
      return(
        <div className="default-profile-picture">
          <form>
            <label id="label" for="picture-file">
              <img src={this.props.user.image_url} className="currentuser-profile-picture"></img>
              <div className="update-profile-pic">
                <i className="fa fa-camera" aria-hidden="true"></i>
                <h2>Update Image</h2>
                <input id="picture-file" type="file" onChange={ this.updateImageFile }></input>
              </div>
            </label>
          </form>
        </div>
      )
    } else {
      return (
        <div className="default-profile-picture">
          <img src={this.props.user.image_url} className="user-profile-picture"></img>
        </div>
      )
    }
  }


  render() {
    if (this.props.user) {
      return (
        <div>
          <div className='profile-view group'>
            <header>
              <div className="header-background">
              </div>
              { this.displayProfilePicture() }
              <div className="username-profile">
                <h4>{ this.props.user.username }</h4>
              </div>
            </header>
            <content className="profile-tracks-content">
              <h2 className="profile-tracks-header">Uploads</h2>
              <ul className="profile-tracks-list group">
              { this.showUsersTracks() }
              </ul>
            </content>
          </div>
          { this.displayProfilePreview() }
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default OtherProfileView;
