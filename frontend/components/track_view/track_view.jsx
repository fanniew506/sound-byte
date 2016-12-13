import React from 'react';
import TrackPlayerControlsContainer from'./track_player_controls_container';
import { Link, hashHistory } from 'react-router';

class TrackView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comment: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const data = { id: this.props.currentTrackView.id, comment: this.state.comment };
    this.props.createComment(data);
    this.props.fetchCurrentTrackView(this.props.currentTrackView.id);
    this.setState({comment: ""});
  }

  updateComment(e){
    this.setState({
      comment: e.currentTarget.value
    });
  }

  renderComments() {
    const comments = this.props.comments;
    if (comments.length > 0) {
      let commentsList = comments.map((comment) => {
        return (
          <li key={ comment.id }>
            <div className="thumb">
              <Link to={`/profile/${comment.author_id}`}>
                <img src={ comment.author_image_url }></img>
              </Link>
            </div>
            <h3 className="comment-author-name">{ comment.author_name }</h3>
            <p className="comment-body">{ comment.body }</p>
            <br></br>
          </li>
        );
      });
      return (
        <content className="comments-container">
          <h2 className="comments-header">
            <i className="fa fa-comments" aria-hidden="false"></i>
            <div className="comment-list-title">comments</div>
          </h2>
          <ul className="comments-list group">
            {commentsList}
          </ul>
        </content>
      );
    } else {
      return (
        <div className="empty-comment">
          <div className="empty-comment-pic"></div>
          <h1>Seems a little quiet over here</h1>
          <h2>Be the first to comment on this track</h2>
        </div>
      );
    }
  }


  render() {
    if (this.props.currentTrackView) {
      const currentTrack = this.props.currentTrackView;

      return(
        <div className='track-view'>
          <header className="track-header-background">
            <div className="track-info">
              <div className="track-play-toggle">
                <TrackPlayerControlsContainer currentTrackView={this.props.currentTrackView}/>
              </div>
              <div>
                <h3 className="name">{ currentTrack.author_name }</h3>
                <br></br>
                <h2 className="title">{ currentTrack.title }</h2>
              </div>
            </div>
            <div><img src={ currentTrack.album_image_url } className="track-profile-picture"></img></div>
          </header>
          <div className="comment-content">
            <form onSubmit={ this.handleSubmit } className="new-comment-form">
              <img src={this.props.currentUser.image_url}></img>
              <input className="comment-input"
                type="text"
                placeholder="Write A Comment"
                value={ this.state.comment }
                onChange={ this.updateComment }
              />
              <input className="submit-button" type="submit" value=""/>
            </form>
            <div className="author-info">
              <div className="author-display">
                <Link to={`/profile/${currentTrack.author_id}`}>
                  <img src={currentTrack.author_image_url}></img>
                </Link>
                <h3 className="author-display-name">{currentTrack.author_name}</h3>
              </div>
              <div className="track-description">
                <p>
                  {currentTrack.description}
                </p>
              </div>
            </div>
                  { this.renderComments() }
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default TrackView;
