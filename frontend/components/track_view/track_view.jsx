import React from 'react';

class TrackView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comment: "" }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateComment = this.updateComment.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    const data = { id: this.props.currentTrackView.id, comment: this.state.comment }
    this.props.createComment(data)
  }

  updateComment(e){
    this.setState({
      comment: e.currentTarget.value
    });
  }

  renderComments(){
    const comments = this.props.comments
    if ( comments ) {

    }
  }

  render() {
    if (this.props.currentTrackView) {
      const comments = this.props.comments
      const currentTrack = this.props.currentTrackView;
      const commentList = comments.map((comment) => {
        return (
          <li key={ comment.id }>
            <img src={ comment.author_image_url }></img>
            <h3>{ comment.author_name }</h3>
            <p>{ comment.body }</p>
          </li>
        );
      })
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
          <form onSubmit={ this.handleSubmit } className="new-comment-form">
            <img src={this.props.currentUser.image_url}></img>
              <input className="comment-input"
                type="text"
                value={ this.state.comment }
                onChange={ this.updateComment }
                />
            <input type="submit" value="Submit"/>
          </form>
          <div className="author-info group">
            <div className="author-display">
              <img src={currentTrack.author_image_url}></img>
              <h3>{currentTrack.author_name}</h3>
            </div>
            <div className="track-description">
              <p>
                {currentTrack.description}
              </p>
            </div>
          </div>
          <content className="comments-container">
            <h2> COMMENTS </h2>
              <ul className="comments-list">
                { commentList }
              </ul>
          </content>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default TrackView;
