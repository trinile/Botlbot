import React from 'react';
import {connect} from 'react-redux';
import TweetListContainer from '../containers/TweetListContainer';
import { receiveLogin, loginError, authUser } from '../actions/Login';
// import { authUser } from '../actions/Login';

class Dashboard extends React.Component {

  // authUser() {
  //   const { dispatch, isAuthenticated } = this.props;
  //   if (!isAuthenticated) {
  //     fetch('/authUser', { method: 'GET', credentials: 'same-origin'})
  //       .then(res => {
  //         return res.json();
  //       })
  //       .then(json => {
  //         localStorage.setItem('authID', json.authID);
  //         dispatch(receiveLogin());
  //       })
  //       .catch(err => {
  //         console.log(err)
  //         dispatch(loginError(err));
  //       });  
  //   }
  // }

  componentWillMount() {
    const { dispatch, isAuthenticated } = this.props;
    if (!isAuthenticated) {
      dispatch(authUser());
    }
    // this.authUser();
  }

  render() {
    return (
      <main>
        <TweetListContainer />
      </main>

    );
  }
}

function mapStatetoProps(state) {
  return {
    isAuthenticated: state.authStatus
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     authUser: () => dispatch(authUser())
//   }
// }
export default connect(mapStatetoProps)(Dashboard);
