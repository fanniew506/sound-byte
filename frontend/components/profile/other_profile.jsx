import React from 'react';
import { Link, hashHistory } from 'react-router';
import TrackPlayerControlsContainer from '../track_view/track_player_controls_container';
import Modal from 'react-modal';

class OtherProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.showUsersTracks =  this.showUsersTracks.bind(this);
    this.playCurrentTrack =  this.playCurrentTrack.bind(this);
    this.displayEditProfile = this.displayEditProfile.bind(this);
    this.updateImageFile = this.updateImageFile.bind(this);
    this.handleProfileSubmit = this.handleProfileSubmit.bind(this);
    this.state = {imageFile: null, imageUrl: "", modalIsOpen: false};
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
    this.props.updateUser(formData);
    this.setState({ modalIsOpen: false });
  }

  updateImageFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({
        imageFile: file, imageUrl: reader.result, modalIsOpen: true
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  displayEditProfile() {
    Modal.setAppElement('html');
    if (this.props.currentUser.id === this.props.user.id) {
      return (
        <form className="update-profile-pic">
          <input type="file" onChange={ this.updateImageFile }></input>
          <h1>EDIT PROFILE PICTURE</h1>
          <Modal
            className="update-image-modal"
            isOpen={this.state.modalIsOpen}>
            <img className="image-preview" src={this.state.imageUrl}></img>
            <h2 onClick={this.handleProfileSubmit}>SUBMIT</h2>
          </Modal>
        </form>
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

  render() {
    if (this.props.user) {
      return (
        <div className='profile-view group'>
          <header>
            <div className="header-background">
            </div>
            <div className="default-profile-picture">
              <img src={this.props.user.image_url} className="user-profile-picture"></img>
            </div>
            <div className="username-profile">
              <h4>{ this.props.user.username }</h4>
            </div>
          </header>
          <content className="profile-tracks-content">
            {this.displayEditProfile()}
            <h2 className="profile-tracks-header">Uploads</h2>
            <ul className="profile-tracks-list group">
              {this.showUsersTracks()}
            </ul>
          </content>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default OtherProfileView;
