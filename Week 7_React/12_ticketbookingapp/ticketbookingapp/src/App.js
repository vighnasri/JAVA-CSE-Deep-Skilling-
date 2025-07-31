import React, { Component } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  login = () => {
    this.setState({ isLoggedIn: true });
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let content;

    if (this.state.isLoggedIn) {
      content = <UserPage />;
    } else {
      content = <GuestPage />;
    }

    return (
      <div>
        <h1>Ticket Booking App</h1>
        <button onClick={this.login}>Login</button><br/>
        <br/>
        <button onClick={this.logout}>Logout</button>
        <hr />
        {content}
      </div>
    );
  }
}

export default App;
