import { connect } from 'react-redux';
import LatestTracks from './latest_track';
import { fetchAllTracksForUser, fetchLatestTracks } from '../../actions/track_actions';

const mapStateToProps = ({ latestTracks }) => ({
  tracks: latestTracks.tracks
});

const mapDispatchToProps = (dispatch) => ({
    fetchAllTracksForUser: () => dispatch(fetchAllTracksForUser()),
    fetchLatestTracks: () => dispatch(fetchLatestTracks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestTracks);
