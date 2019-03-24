import React, { Component } from 'react';

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '498573825408-dcgc372mijvpi8utbsm39vcvid9c0aua.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return (
        <div>
          I dont know if I am signed in
        </div>
      );
    }
    else if (this.state.isSignedIn){
      return (
        <div>
          I am signed in
        </div>
      );
    }
    else {
      return (
        <div>
          I am not signed in
        </div>
      );
    }
  }

  render(){
    return(
      <div className="item">
        {this.renderAuthButton()}
      </div>
    );
  }
}

export default GoogleAuth;
