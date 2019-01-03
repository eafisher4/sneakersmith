import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login';
import Signup from './components/Signup';
import Navigation from './components/Navigation';
import MainContainer from './containers/MainContainer';
import * as actions from './actions/actions';

// import MoreInfo from "./components/MoreInfo";
const mapStateToProps = store => ({
  formToggleState: store.posts.formToggleState,
  username: store.posts.username,
  password: store.posts.password,
  isLoggedIn: store.posts.isLoggedIn,
  userProfile: store.posts.userProfile,
});

const mapDispatchToProps = dispatch => ({
  updateUsername: (event) => {
    dispatch(actions.updateUsername(event));
  },
  updatePassword: (event) => {
    dispatch(actions.updatePassword(event));
  },
  validateUser: (userInfo) => {
    dispatch(actions.validateUser(userInfo));
  },
});
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoggedIn: false,
  //     userProfile: { username: "", email: "" }
  //   };

  //   this.updateLoggedInStatus = this.updateLoggedInStatus.bind(this);
  //   this.logoutUser = this.logoutUser.bind(this);
  // }

  // logoutUser(username) {
  //   this.setState({ isLoggedIn: false, userProfile: { username: "", email: ""} });
  //   alert("User logout.");
  // }

  // updateLoggedInStatus(username, email) {
  //   this.setState({ isLoggedIn: true, userProfile: { username, email} });
  //   //const { isLoggedIn } = this.state;
  // }

  render() {
    // const { isLoggedIn, userProfile } = this.state;
    const { updateUsername, updatePassword, validateUser, username, password, userProfile, isLoggedIn } = this.props;

    return (
      <BrowserRouter>
        <div>
          <Navigation isLoggedIn={isLoggedIn} logoutUser={this.logoutUser} username={userProfile.username} />
          <Switch>
            <Route path="/login" render={(props) =>
              <Login username={username} password={password} validateUser={validateUser} updateUsername={updateUsername} updatePassword={updatePassword} isLoggedIn={isLoggedIn} updateLoggedInStatus={this.updateLoggedInStatus} />} />
            <Route path="/signup" component={Signup} />
            <Route path="/" component={MainContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
