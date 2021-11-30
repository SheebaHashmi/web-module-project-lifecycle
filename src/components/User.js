import React from 'react';

class User extends React.Component {
    state = {
        user:'Sheeba hashmi'
    }
    
  render() {
    return(
    <div className="user-container">
        <img src="https://avatars.githubusercontent.com/u/64197466?v=4"/>
        <div className="user-content">
        <h1>{this.state.user}</h1>
        <h2>Total Repos:34</h2>
        <h2>Total Followers:18</h2>
        </div>
    </div>);
  }
}

export default User;