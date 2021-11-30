import React from 'react';

class User extends React.Component {

    render() {
    //   const userInfo = this.props.userInfo;
        return(
        <div className="user-container">
            <img src={this.props.userInfo.avatar_url}/>
            <div className="user-content">
            <h1>{this.props.userInfo.login}</h1>
            <h2>Total Repos: {this.props.userInfo.public_repos}</h2>
            <h2>Total Followers: {this.props.userInfo.followers}</h2>
            </div>
        </div>);
  }
}

export default User;