import { connect } from 'react-redux';
import Navigation from './navigation';

const mapStateToProps = ({ session }) => ({
  currentUser : session.currentUser
});

export default connect(
  mapStateToProps
)(Navigation);
