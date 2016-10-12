import React from 'react';

class TrackView extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const currentTrack = this.props.currentTrackView
  
    this.props.fetchAllComments(currentTrack.id)
    return(
      <div className='track-view'>
        <header>
          <div className="track-header-background">
          </div>
          <div>
            <img src={ currentTrack.album_image_url } className="track-profile-picture"></img>
          </div>
          <div className="track-info">
            <h2>{ currentTrack.title }</h2>
            <h3>{ currentTrack.author_name }</h3>
          </div>
        </header>
        <content className="comments-container">
          <h2> COMMENTS </h2>
            <ul>
              <li>{this.props.comments}</li>
            </ul>
        </content>
      </div>
    );
  }

}

export default TrackView;
