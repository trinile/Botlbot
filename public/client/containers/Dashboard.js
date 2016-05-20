import React from 'react';
import {connect} from 'react-redux';
import TweetListContainer from '../containers/TweetListContainer';
import { authUser } from '../actions/Login';
import { getTweetsAsync } from '../actions/tweets';
import { getTemplateNamesAsync } from '../actions/template';
import { resetPage } from '../actions/page';
import SideMenu from '../components/SideMenu';
import DashboardControlsContainer from '../containers/DashboardControlsContainer';

class Dashboard extends React.Component {

  componentWillMount() {
    const { dispatch, isAuthenticated } = this.props;
    console.log('is user authenticated ----->', isAuthenticated);
    if (!isAuthenticated) {
      dispatch(authUser());
    }
    dispatch(resetPage());
    dispatch(getTweetsAsync());
    dispatch(getTemplateNamesAsync());
  }
  
  render() {
    return (
      <div>
        <DashboardControlsContainer />
        <TweetListContainer filter="SHOW_AVAILABLE" />
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    isAuthenticated: state.authStatus
  };
}

export default connect(mapStatetoProps)(Dashboard);
